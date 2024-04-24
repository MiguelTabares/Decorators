import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    //CHECK!
    @Post()
    createStudents(@Body() body) {
        return this.studentService.create(body);
    }

    //CHECK!
    @Get('all')
    obtainStudents () {
        return this.studentService.findAll();
    }

    //CHECK!
    @Get(':id') 
    findOne(@Param('id') id) {
        return this.studentService.findOne(id);
    }

    //CHECK!
    @Put(':id')
    updateStudent(@Param('id') id, @Body() body) {
        return this.studentService.updateStudent(id)
    }

    //CHECK!
    @Delete(':id')
    deleteStudent(@Param('id') id) {
        return this.studentService.deleteStudent(id)
    }
}
