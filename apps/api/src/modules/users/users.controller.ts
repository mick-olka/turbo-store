import {
  Controller,
  Get,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  Delete,
  Patch,
  UseGuards,
  Req,
} from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";
import { ReqWithUser, User } from "src/schemas/user.schema";
import { AuthGuard } from "@nestjs/passport";
import { IsAdminGuard } from "../auth/auth.guard";

@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully fetched users.",
  })
  @UseGuards(IsAdminGuard)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get("me")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully fetched my data.",
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  getMyData(@Req() req: ReqWithUser): Promise<User> {
    const id = req.user.sub;
    return this.usersService.findById(id);
  }

  @Patch("me")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully updated profile.",
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  async updateProfile(@Req() req: ReqWithUser, @Body() data: UpdateUserDto) {
    const id = req.user.sub;
    return this.usersService.updateOneById(id, data);
  }

  @Delete("me")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully deleted profile.",
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  async deleteProfile(@Req() req: ReqWithUser) {
    const id = req.user.sub;
    return this.usersService.delete(id);
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully fetched users.",
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @UseGuards(IsAdminGuard)
  findById(@Param("id") id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  // use register route from auth module
  // @Post()
  // @HttpCode(HttpStatus.CREATED)
  // @ApiResponse({
  //   status: HttpStatus.CREATED,
  //   description: "Successfully created user.",
  // })
  // @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  // async create(@Body() data: CreateUserDto) {
  //   return this.usersService.create(data);
  // }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully updated user.",
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @UseGuards(IsAdminGuard)
  async update(@Param("id") id: string, @Body() data: UpdateUserDto) {
    return this.usersService.updateOneById(id, data);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully deleted user.",
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: "Forbidden." })
  @UseGuards(IsAdminGuard)
  async delete(@Param("id") id: string) {
    return this.usersService.delete(id);
  }
}
