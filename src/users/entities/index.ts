import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
// import { FileType } from '../../files/domain/file';
// import databaseConfig from '../../database/config/database.config';
// import { DatabaseConfig } from '../../database/config/database-config.type';

// <database-block>
// const idType = (databaseConfig() as DatabaseConfig).isDocumentDatabase
//   ? String
//   : Number;
// // </database-block>

export class User {
  @ApiProperty({
    type: String,
  })
  id: number | string;

  @ApiProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  @Expose({ groups: ['me', 'admin'] })
  email: string | null;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @ApiProperty({
    type: String,
    example: 'email',
  })
  @Expose({ groups: ['me', 'admin'] })
  provider: string;

  @ApiProperty({
    type: String,
    example: '1234567890',
  })
  @Expose({ groups: ['me', 'admin'] })
  socialId?: string | null;

  @ApiProperty({
    type: String,
    example: 'John',
  })
  firstName: string | null;

  @ApiProperty({
    type: String,
    example: 'Doe',
  })
  lastName: string | null;

  @ApiProperty({
    type: String,
    example: '0988123456',
  })
  phoneNumber: string | null;

  @ApiProperty({
    type: String,
    example: '22/07/1998',
  })
  dateOfBirth: Date;

  @ApiProperty({
    type: Number,
    example: '0',
  })
  gender: number | null;

  @ApiProperty({
    type: () => String,
  })
  photo?: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
