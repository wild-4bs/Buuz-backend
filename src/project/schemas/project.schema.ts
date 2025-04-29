import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class project {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  client: string;
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  thumbnail: string;
  @Prop({ required: true })
  video: string;
}

export const projectSchema = SchemaFactory.createForClass(project);
