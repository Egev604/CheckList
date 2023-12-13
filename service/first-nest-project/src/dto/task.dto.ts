import { IsString, IsInt } from 'class-validator';

export class TaskDto {
  @IsInt()
  id: number;
  @IsString()
  name: string;
}
