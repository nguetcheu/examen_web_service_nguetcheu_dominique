import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Le titre de la tâche',
    example: 'Apprendre NestJS avancé',
  })
  @IsNotEmpty({ message: 'Le titre ne doit pas être vide' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Statut de complétion de la tâche',
    example: false,
  })
  @IsBoolean({ message: 'isCompleted doit être un boolean' })
  isCompleted: boolean;

  @ApiProperty({
    description: 'Date de début de la tâche',
    example: '2024-02-06T10:00:00Z',
  })
  @IsDateString({}, { message: 'startedAt doit être une Date valide' })
  startedAt: string;
}
