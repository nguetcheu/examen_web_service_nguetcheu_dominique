import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'Le titre de la tâche',
    example: 'Examen NestJS avancé',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Statut de complétion de la tâche',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @ApiPropertyOptional({
    description: 'Date de début de la tâche',
    example: '2025-02-06T10:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  startedAt?: string;
}
