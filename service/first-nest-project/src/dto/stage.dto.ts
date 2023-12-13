import { IsString, IsInt } from 'class-validator';

export class StageDto {
    @IsInt()
    id: number;
    @IsString()
    name: string;
    @IsInt()
    child?: string;
}