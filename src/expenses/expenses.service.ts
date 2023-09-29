import { Injectable } from '@nestjs/common';
import { ExpenseRepository } from './expense.repository';
import { CreateExpenseInput } from './dto/input/create-expense-input.dto';
import { ExpenseDocument } from './models/expense.schema';

@Injectable()
export class ExpensesService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}
  async createExpense(createExpenseData: CreateExpenseInput, userId: string) {
    const expenseDocument = await this.expenseRepository.create({
      ...createExpenseData,
      userId,
      createdAt: new Date(),
    });
    return this.toModel(expenseDocument);
  }

  async getExpenses(userId: string) {
    const expensesDocuments = await this.expenseRepository.find({ userId });
    return expensesDocuments.map((expense) => this.toModel(expense));
  }
  async deleteExpense(expenseId: string) {
    const deleteddocumnet = await this.expenseRepository.findOneAndDelete({
      _id: expenseId,
    });
    return this.toModel(deleteddocumnet);
    // return expensesDocuments.map((expense) => this.toModel(expense));
  }

  private toModel(expenseDocument: ExpenseDocument) {
    return {
      _id: expenseDocument._id.toHexString(),
      ...expenseDocument,
    };
  }
}
