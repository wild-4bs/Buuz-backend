import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { project } from 'src/project/schemas/project.schema';

@Schema({
  timestamps: true,
})
export class page {
  @Prop({ required: true })
  name: string;
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Project' }] })
  projects: project[];
}

export const pageSchema = SchemaFactory.createForClass(page);
