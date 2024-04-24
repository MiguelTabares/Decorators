import { Injectable, Body, NotFoundException, Scope, OnModuleInit } from '@nestjs/common';
import { Student } from '../student/student.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable({ scope: Scope.DEFAULT})
export class StudentService implements OnModuleInit{
    onModuleInit() {
        console.log(`El servicio se ha inicializado`);
      }
    constructor(@InjectModel(Student.name) private studentModel: Model<Student>,)  {}  
    
    //CHECK!
    async create(@Body() body): Promise<Student> {
        const studentData = {
            name: body.name,
            lastName: body.lastName,
            email: body.email,
            gender: body.gender,
            age: body.age,
        }
        const student = new this.studentModel(studentData);
        return await student.save();
    }

    //CHECK!
    findAll() {
        return this.studentModel.find().exec();
    }
    
    //CHECK!
    async findOne(id: string) {
        const student = this.studentModel.findOne({_id: id});
        if (!student) {
            throw new NotFoundException(`Student #${id} not found`)
        }
        return student;
    }

    //CHECK!
    async updateStudent(id){
        return this.studentModel.findByIdAndUpdate({_id: id}, { $set: {name: "Miguel Ángel"}});
    }

    //CHECK!
    async deleteStudent(id){
        return await this.studentModel.findByIdAndDelete({_id: id});
    }



};

