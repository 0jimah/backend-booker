import { Injectable } from '@nestjs/common';
import { CreateBudgetInput } from './dto/input/create-budget-input.dto';
import { BudgetsRepository } from './budget.repository';
import { BudgetDocument } from './models/budget.schema';
import { GetBudgetArgs } from './dto/args/get-budgets-args.dto';

@Injectable()
export class BudgetsService {
  constructor(private readonly budgetRepository: BudgetsRepository) {}
  async createBudget(createBudgetData: CreateBudgetInput, userId: string) {
    const budgetDocument = await this.budgetRepository.create({
      ...createBudgetData,
      userId,
    });
    return this.toModel(budgetDocument);
  }

  async getBudgets(userId: string) {
    const budgetsDocuments = await this.budgetRepository.find({ userId });
    return budgetsDocuments.map((budget) => this.toModel(budget));
  }

  async getBudget(getBudgetArgs: GetBudgetArgs, userId: string) {
    const bookmarkDocument = await this.budgetRepository.findOne({
      ...getBudgetArgs,
      userId,
    });
    return this.toModel(bookmarkDocument);
  }

  private toModel(budgetDocument: BudgetDocument) {
    return {
      _id: budgetDocument._id.toHexString(),
      ...budgetDocument,
    };
  }
}
