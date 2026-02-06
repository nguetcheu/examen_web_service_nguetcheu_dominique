import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controller/tasks.controller';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
})
export class TaskModule {}
