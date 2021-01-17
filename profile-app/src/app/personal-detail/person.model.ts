import { Skill } from '../skills/skill.model';

export class Person{    
    constructor(public description ?: String,public firstName ?: String,public lastName ?: String,public city ?: String,public age ?: number ,public mobileNo ?:  String,public email ?: String,public skills : Skill[] = []){}
}