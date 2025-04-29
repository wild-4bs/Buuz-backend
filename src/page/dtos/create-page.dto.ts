import { IsNotEmpty, IsString } from 'class-validator';
import { project } from 'src/project/schemas/project.schema';

export class CreatePageDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  projects: project[];
}
