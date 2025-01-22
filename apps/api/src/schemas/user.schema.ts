import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, now } from "mongoose";
import { getMongoRef } from "./data";
import { Order } from "./order.schema";

export type UserDocument = HydratedDocument<User>;

export enum UserRole {
  admin = "admin",
  user = "user",
}

export type ReqWithUser = Request & { user: { sub: string } };

@Schema()
export class User {
  @Prop({ type: String, required: true })
  first_name: string;

  @Prop({ type: String, required: true })
  last_name: string;

  @Prop({ type: Date, default: now() })
  createdAt: string;

  @Prop({ type: Date, default: now() })
  updatedAt: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  hash: string;

  @Prop({ type: String, required: false })
  hashedRt: string;

  @Prop({ type: String, enum: UserRole, required: true })
  role: UserRole;

  @Prop(getMongoRef("Order", { isArray: true }))
  orders: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
