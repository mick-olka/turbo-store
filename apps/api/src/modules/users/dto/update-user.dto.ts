import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsNotEmpty, IsString } from "class-validator";
import { UserRole } from "src/schemas/user.schema";

export class UpdateUserDto {
  @ApiProperty({
    required: false,
  })
  // @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly email?: string;

  @ApiProperty({
    required: false,
  })
  // @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly hash?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly hashedRt?: string;

  @ApiProperty({
    description: "User type (user or admin)",
  })
  @IsOptional()
  readonly role?: UserRole;

  @ApiProperty({
    description: "User's orders",
  })
  @IsOptional()
  readonly orders?: string[];
}
