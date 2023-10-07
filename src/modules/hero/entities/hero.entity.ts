import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroDocument = Hero & Document;

@Schema({ timestamps: true, collection: 'heros' })
export class Hero {
  @Prop({ required: true, unique: true, default: 'spider-man' })
  name: string;
}
export const HeroSchema = SchemaFactory.createForClass(Hero);
