import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly client: string;
  @IsNotEmpty()
  @IsString()
  readonly type: string;
  @IsNotEmpty()
  @IsString()
  readonly thumbnail: string;
  @IsNotEmpty()
  @IsString()
  readonly video: string;
  @IsOptional()
  @IsMongoId()
  readonly page: any;
}
