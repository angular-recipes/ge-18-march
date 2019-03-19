import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let componentDOM: HTMLElement;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    componentDOM = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 0 at start', () => {
    expect(component.count).toBe(0);
    
    let span = componentDOM.querySelector('span');
    expect(span.innerHTML).toBe('0');
  });

  it('should increment properly', () => {
    component.inc();
    expect(component.count).toBe(1);

    let incBtn = componentDOM.querySelectorAll('button')[0];
    incBtn.click();
    fixture.detectChanges();

    let span = componentDOM.querySelector('span');
    expect(span.innerHTML).toBe('2');

  });
});
