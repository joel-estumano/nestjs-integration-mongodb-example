import { Injectable } from '@nestjs/common';
import { HeroCreateDto } from './dtos/hero-create.dto';
import { Hero } from './entities/hero.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HerosService {

  constructor(
    @InjectModel(Hero.name) private readonly heroModel: Model<Hero>,
  ) { }

  async create(dto: HeroCreateDto): Promise<Hero> {
    return await new this.heroModel(dto).save();
  }

  async list(): Promise<Hero[]> {
    return await this.heroModel.find().exec();
  }
}
