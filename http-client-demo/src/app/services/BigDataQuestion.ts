import { IQuestion } from './IQuestion';
import { Injectable } from '@angular/core';

@Injectable()
export class BigDataQuestion extends IQuestion{
    askQuestion(): string {
        return "What is Big Data?";
    }    
}