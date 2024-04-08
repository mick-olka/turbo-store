import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "../../schemas/user.schema";
import { OnEvent } from "@nestjs/event-emitter";
import { EVENTS } from "src/utils/constants";
import { OrderCreatedEvent } from "../orders/events";

type UserI = User & { _id: mongoose.Types.ObjectId };

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<UserDocument>
  ) {}

  async create(data: CreateUserDto): Promise<UserI> {
    const createdUser = await this.UserModel.create(data);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findById(id: string): Promise<UserI> {
    return this.UserModel.findOne({ _id: id }).exec();
  }

  async findOne(params: Partial<User>): Promise<UserI> {
    return this.UserModel.findOne(params).exec();
  }

  async updateOneById(id: string, data: UpdateUserDto): Promise<UserI> {
    return this.UserModel.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async updateOne(
    searchParams: mongoose.FilterQuery<
      mongoose.Document<unknown, any, User> &
        User & {
          _id: mongoose.Types.ObjectId;
        }
    >,
    data: UpdateUserDto
  ): Promise<UserI> {
    return this.UserModel.findOneAndUpdate(searchParams, data, { new: true });
  }

  async delete(id: string): Promise<UserI> {
    const deletedUser = await this.UserModel.findByIdAndRemove({
      _id: id,
    }).exec();
    return deletedUser;
  }

  @OnEvent(EVENTS.order_created)
  async handleOrderCreatedEvent(event: OrderCreatedEvent) {
    // add order to user's orders list
    await this.UserModel.findOneAndUpdate(
      { _id: event.user_id },
      { $push: { orders: event.order_id } },
      { new: true }
    );
  }
}
