import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class ExpenseDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  budgetId: string;

  @Prop()
  userId: string;

  @Prop()
  amount: number;

  @Prop()
  createdAt: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(ExpenseDocument);
