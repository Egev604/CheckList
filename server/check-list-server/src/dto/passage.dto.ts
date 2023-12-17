import { IsString, IsInt } from 'class-validator';

export class PassageDto {
    @IsInt()
    userId: number;
    @IsString()
    modelDevice?: string;
    @IsString()
    versionOs?: string;
}