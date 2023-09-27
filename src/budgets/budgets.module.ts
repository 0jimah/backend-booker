import { Module } from '@nestjs/common';
import { BudgetsResolver } from './budgets.resolver';
import { BudgetsService } from './budgets.service';
import { BudgetsRepository } from './budget.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget } from './models/budget.model';
import { BudgetSchema } from './models/budget.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Budget.name,
        schema: BudgetSchema,
      },
    ]),
  ],
  providers: [BudgetsResolver, BudgetsService, BudgetsRepository],
})
export class BudgetsModule {}
