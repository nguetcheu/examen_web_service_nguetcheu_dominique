import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { CreateTaskDto } from '../model/CreateTaskDto';
import { UpdateTaskDto } from '../model/UpdateTaskDto';
import type { Task } from '../interface/task.interface';

@ApiTags('tasks')
@ApiSecurity('api-auth-token')
@Controller('tasks')
export class TasksController {
  private tasks: Task[] = [];
  private idCounter = 1;

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Récupérer toutes les tâches' })
  @ApiOkResponse({ description: 'Liste des tâches récupérée avec succès' })
  findAll(): Task[] {
    return this.tasks;
  }

  @Get(':title')
  @HttpCode(200)
  @ApiOperation({ summary: 'Récupérer une tâche par son titre' })
  @ApiParam({
    name: 'title',
    description: 'Titre de la tâche',
    example: 'Apprendre NestJS',
  })
  @ApiOkResponse({ description: 'Tâche trouvée' })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée' })
  findByTitle(@Param('title') title: string): Task {
    const task = this.tasks.find((t) => t.title === title);
    if (!task) {
      throw new NotFoundException(`Tâche avec le title "${title}" non trouvée`);
    }
    return task;
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Créer une nouvelle tâche' })
  @ApiResponse({ status: 201, description: 'Tâche créée avec succès' })
  @ApiBadRequestResponse({ description: 'Données invalides' })
  create(@Body() createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.idCounter++,
      title: createTaskDto.title,
      startedAt: new Date(createTaskDto.startedAt),
      isCompleted: createTaskDto.isCompleted,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Modifier partiellement une tâche' })
  @ApiParam({ name: 'id', description: 'ID de la tâche', example: '1' })
  @ApiOkResponse({ description: 'Tâche modifiée avec succès' })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex((t) => t.id === Number(id));
    if (taskIndex === -1) {
      throw new NotFoundException(`Tâche avec l'id ${id} non trouvée`);
    }

    const updatedTask: Task = {
      ...this.tasks[taskIndex],
      ...(updateTaskDto.title && { title: updateTaskDto.title }),
      ...(updateTaskDto.isCompleted !== undefined && {
        isCompleted: updateTaskDto.isCompleted,
      }),
      ...(updateTaskDto.startedAt && {
        startedAt: new Date(updateTaskDto.startedAt),
      }),
    };

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Supprimer une tâche par son ID' })
  @ApiParam({ name: 'id', description: 'ID de la tâche', example: '1' })
  @ApiNoContentResponse({ description: 'Tâche supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'Tâche non trouvée' })
  delete(@Param('id') id: string): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === Number(id));
    if (taskIndex === -1) {
      throw new NotFoundException(`Tâche avec l'id ${id} non trouvée`);
    }
    this.tasks.splice(taskIndex, 1);
  }
}
