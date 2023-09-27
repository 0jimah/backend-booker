import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/abstract.model';

@ObjectType()
export class Expense extends AbstractModel {
  @Field()
  readonly name: string;

  @Field()
  readonly budgetId: string;

  @Field()
  readonly userId: string;

  @Field()
  readonly amount: number;

  @Field()
  readonly createdAt: Date;
}
