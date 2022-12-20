import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  description: String;

  @Prop()
  fileUrl: String;

  @Prop()
  status: String;

  @Prop()
  isPending: String;

  @Prop()
  supplierStatus: String;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
