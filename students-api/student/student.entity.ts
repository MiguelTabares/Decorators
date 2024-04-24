import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'


@Schema()
export class Student extends Document {
    @Prop()
    name: string;
    @Prop()
    lastName: string;
    @Prop()
    email: string;
    @Prop()
    gender: string;
    @Prop()
    age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
