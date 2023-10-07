import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HeroCreateDto } from './dtos/hero-create.dto';

@Controller('heros')
export class HerosController {
    constructor(private herosService: HerosService) { }

    @Post('create')
    async create(@Body() dto: HeroCreateDto) {
        return await this.herosService.create(dto);
    }

    @Get('list')
    @UsePipes(new ValidationPipe({ transform: true }))
    async list() {
        return await this.herosService.list();
    }
}
