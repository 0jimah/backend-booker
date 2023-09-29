import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteExpenseInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: string;
}
