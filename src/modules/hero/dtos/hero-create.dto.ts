import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class HeroCreateDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
