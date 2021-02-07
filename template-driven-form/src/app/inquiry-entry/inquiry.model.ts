import { Course } from './course.model';

export class Inquiry{
    constructor(public id ?: number,public name ?: string,public email ?: string,public mobileNo ?: string,public gender ?: string,public course ?: Course ){}
}