import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const createData = await this.prisma.tasks.create({
      data: createTaskDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const updateTask = await this.prisma.tasks.update({
      data: updateTaskDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }
  async remove(id: number) {
    const deleteTask = await this.prisma.tasks.delete({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: deleteTask,
      message: `Success delete ${id}`,
    };
  }
}
