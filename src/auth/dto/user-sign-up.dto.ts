import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VALIDATE_MSG } from 'src/utilities/constant';

enum Role {
  Super = 'super',
  Admin = 'admin',
  User = 'user',
}

export class UserSignUpDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  @ApiProperty()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  @MinLength(6)
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: VALIDATE_MSG.username,
  })
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  @MinLength(6)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message: VALIDATE_MSG.password,
    },
  )
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsString()
  @IsEnum(Role)
  @ApiProperty()
  role: Role;

  @IsOptional()
  @IsString()
  @MaxLength(36)
  @MinLength(0)
  @ApiProperty()
  organization_id: string;
}
