import { IQuestion } from './IQuestion';
import { Injectable } from '@angular/core';

@Injectable()
export class AngularQuestion extends IQuestion{
    askQuestion(): string {
       return "What is Angular?";
    }
}