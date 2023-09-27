import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Expense } from './models/expense.model';
import { CreateExpenseInput } from './dto/input/create-expense-input.dto';
import { User } from 'src/users/models/user.model';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Resolver()
export class ExpensesResolver {
  constructor(private readonly expenseService: ExpensesService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Expense)
  async createExpense(
    @Args('createExpenseData') createExpenseData: CreateExpenseInput,
    @CurrentUser() user: User,
  ) {
    return this.expenseService.createExpense(createExpenseData, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Expense], { name: 'expenses' })
  async getExpenses(@CurrentUser() user: User) {
    return this.expenseService.getExpenses(user._id);
  }
}
