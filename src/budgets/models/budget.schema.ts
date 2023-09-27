import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class BudgetDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  userId: string;

  @Prop()
  amount: number;
}

export const BudgetSchema = SchemaFactory.createForClass(BudgetDocument);
