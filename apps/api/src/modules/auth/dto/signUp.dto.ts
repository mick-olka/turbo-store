import { IsNotEmpty, IsEmail, IsString, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/schemas/user.schema";

export class SignUpDto {
  @ApiProperty({
    description: "New email",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "New password",
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: "User type (user or admin)",
  })
  @IsNotEmpty()
  type: UserRole;

  @ApiProperty({
    description: "Admin Key (if you want to set role admin)",
  })
  @IsOptional()
  admin_key: string;
}
