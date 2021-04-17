import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaskPipe } from './mask.pipe';
import { WelcomePipe } from './welcome.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomePipe,
        MaskPipe,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pipes-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pipes Demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pipes Demo');
  });

  it('sum method test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let sum = app.sum(11,22);
    expect(sum).toEqual(33);
  });

  it('mul method test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let result = app.mul(11,3);
    expect(result).toEqual(33);
  });
});
