import { Component, HostBinding } from '@angular/core';
import { ON_OFF_ANIMATION } from './animations/on-off-animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anti-clock-triggger';
import { SIMPLE_ANIMATION } from './animations/simple-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    SIMPLE_ANIMATION,
    ON_OFF_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AppComponent {
  title = 'animation-demo';

  state : string = 'start';
  onOffState : string = 'on';

  friendNames = ["keyur","denish","vinit","hiren","ravi"];

  changeState() : void {    
    this.state = this.state == 'start' ? 'stop' : 'start';
    this.onOffState = this.onOffState == 'on' ? 'off' : 'on';
    console.log(this.state);
  }

  
  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 
  @HostBinding('style.display')   display = 'block';
 // @HostBinding('style.position')  position = 'absolute';

  
}
