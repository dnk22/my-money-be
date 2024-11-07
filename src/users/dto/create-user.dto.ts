import {
    Transform,
  } from 'class-transformer';
  import { ApiProperty } from '@nestjs/swagger';
  import {
    IsEmail,
    IsNotEmpty,
    MinLength,
  } from 'class-validator';
  import { lowerCaseTransformer } from '../../utils/transformers/string.transformer';
  
  export class CreateUserDto {
    @ApiProperty({ example: 'test1@example.com', type: String })
    @Transform(lowerCaseTransformer)
    @IsNotEmpty()
    @IsEmail()
    email: string | null;
  
    @ApiProperty()
    @MinLength(6)
    @IsNotEmpty()
    password?: string;
  
    provider?: string;
  
    socialId?: string | null;
  
    @ApiProperty({ example: 'John', type: String })
    @IsNotEmpty()
    firstName: string | null;
  
    @ApiProperty({ example: 'Doe', type: String })
    @IsNotEmpty()
    lastName: string | null;

    @ApiProperty({ example: '0989123456', type: String })
    @IsNotEmpty()
    phoneNumber: string | null;
  }
  