import { Course } from '../course/course.model';

export class Student {
    constructor(public id?:number,public name?: String,public mobileNo?: string,public email ?: string,public course ?: string ){}
}