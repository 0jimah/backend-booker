import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Budget } from './models/budget.model';
import { BudgetsService } from './budgets.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CreateBudgetInput } from './dto/input/create-budget-input.dto';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/models/user.model';
import { GetBudgetArgs } from './dto/args/get-budgets-args.dto';

@Resolver(() => Budget)
export class BudgetsResolver {
  constructor(private readonly budgetService: BudgetsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Budget)
  async createBudget(
    @Args('createBudgetData') createBudgetData: CreateBudgetInput,
    @CurrentUser() user: User,
  ) {
    return this.budgetService.createBudget(createBudgetData, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Budget], { name: 'budgets' })
  async getBudgets(@CurrentUser() user: User) {
    return this.budgetService.getBudgets(user._id);
  }
  @UseGuards(GqlAuthGuard)
  @Query(() => Budget, { name: 'budget' })
  async getBudget(
    @Args() getBudgetArgs: GetBudgetArgs,
    @CurrentUser() user: User,
  ) {
    return this.budgetService.getBudget(getBudgetArgs, user._id);
  }
}
