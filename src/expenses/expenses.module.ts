import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesResolver } from './expenses.resolver';
import { ExpenseRepository } from './expense.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense } from './models/expense.model';
import { ExpenseSchema } from './models/expense.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Expense.name,
        schema: ExpenseSchema,
      },
    ]),
  ],
  providers: [ExpensesService, ExpensesResolver, ExpenseRepository],
})
export class ExpensesModule {}
