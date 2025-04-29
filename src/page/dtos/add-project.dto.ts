import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class AddProjectDto {
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  projects: string[];
}
