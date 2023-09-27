import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../database/abstract.repository';
import { ExpenseDocument } from './models/expense.schema';
import { Expense } from './models/expense.model';

@Injectable()
export class ExpenseRepository extends AbstractRepository<ExpenseDocument> {
  protected readonly logger = new Logger(ExpenseRepository.name);

  constructor(@InjectModel(Expense.name) expenseModel: Model<ExpenseDocument>) {
    super(expenseModel);
  }
}
