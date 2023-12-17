import { IsString, IsInt } from 'class-validator';

export class StageDto {
    @IsString()
    name: string;
    @IsString()
    status?: string;
    @IsInt()
    child?: number;
    @IsInt()
    passageId: number;
}