import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, MinLength } from 'class-validator';

import { CreateUserDto } from './create-user.dto';
// import { FileDto } from '../../files/dto/file.dto';
import { lowerCaseTransformer } from '../../utils/transformers/string.transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ example: 'test1@example.com', type: String })
    @Transform(lowerCaseTransformer)
    @IsOptional()
    @IsEmail()
    email?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @MinLength(6)
    password?: string;

    provider?: string;

    socialId?: string | null;

    @ApiPropertyOptional({ example: 'John', type: String })
    @IsOptional()
    firstName?: string | null;

    @ApiPropertyOptional({ example: 'Doe', type: String })
    @IsOptional()
    lastName?: string | null;

    @ApiPropertyOptional({ example: '0989123456', type: String })
    @IsOptional()
    phoneNumber: string | null;

    @ApiPropertyOptional({
        type: String,
        example: '22/07/1998',
    })
    @IsOptional()
    dateOfBirth: Date;

    @ApiPropertyOptional({
        type: Number,
        example: '0',
    })
    @IsOptional()
    gender: number | null;

    @ApiPropertyOptional({ type: () => String })
    @IsOptional()
    photo?: String | null;
}
