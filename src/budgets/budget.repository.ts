import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../database/abstract.repository';
import { Budget } from './models/budget.model';
import { BudgetDocument } from './models/budget.schema';

@Injectable()
export class BudgetsRepository extends AbstractRepository<BudgetDocument> {
  protected readonly logger = new Logger(BudgetsRepository.name);

  constructor(@InjectModel(Budget.name) budgetModel: Model<BudgetDocument>) {
    super(budgetModel);
  }
}
