import { IQuestion } from './IQuestion';
import { Injectable } from '@angular/core';

@Injectable()
export class JavaQuestion extends IQuestion{
    askQuestion(): string {
        return "What is JAVA?";
    }
}