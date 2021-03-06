import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { DemoService } from './service/demo.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private demoService : DemoService){}

  seqNo = 0;

  items : Item[] = [];
  itemNames : string[] = [];

  title = 'observable-demo';

  subscrition : Subscription;

  sequenceObservable : Observable<number> = interval(1000);

  observable : Observable<number> = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  ngOnInit(): void {
    console.log("Before Subsribe...!");
    this.observable.subscribe(
      (next)=>{
        console.log("Event : "+next);
      },
      (error)=>{
        console.log("Error : "+error);
      },
      ()=>{
        console.log("Observable Completed.");
      }
    )
    console.log("After Subsribe...!");
    this.getItems();
    this.getItemNames();
  }

  getItems() : void {
    this.demoService.getItems().subscribe(
      (data)=>{
        this.items = data;
      }
    )
  }

  getItemNames() : void{
    this.demoService.getItemNames().subscribe(
      (data)=>{
        this.itemNames=data;
      }
    )
  }

  start() : void{
    // this.subscrition = this.sequenceObservable.subscribe(
    //   (next)=>{
    //     this.seqNo = next;
    //   },
    //   (error)=>{

    //   }
    // )
    this.subscrition = this.sequenceObservable.pipe(
      take(7),
      filter(num=>num != 3),
      map(num=>num*num)
    ).subscribe(
      (data)=>{
        this.seqNo = data;
      },
      (error)=>{},
      ()=>{
        console.log("Done...!");
      }
    );
  }

  stop() : void{
    this.subscrition.unsubscribe();
  }
}
