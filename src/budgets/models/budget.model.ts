import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/abstract.model';

@ObjectType()
export class Budget extends AbstractModel {
  @Field()
  readonly name: string;

  @Field()
  readonly userId: string;

  @Field()
  readonly amount: number;
}
