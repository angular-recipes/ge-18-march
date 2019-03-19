import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookFormPageComponent } from './add-book-form-page.component';

describe('AddBookFormPageComponent', () => {
  let component: AddBookFormPageComponent;
  let fixture: ComponentFixture<AddBookFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
