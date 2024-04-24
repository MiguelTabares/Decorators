import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { StudentService } from '../student/student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../student/student.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentSchema,
      }
    ])
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
