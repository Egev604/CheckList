import { IsString, IsInt } from 'class-validator';

export class UserDto {
    @IsString()
    login: string;
    @IsString()
    password: string;
}
