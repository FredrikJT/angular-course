import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJokeComponent } from './add-new-joke.component';

describe('AddNewJokeComponent', () => {
  let component: AddNewJokeComponent;
  let fixture: ComponentFixture<AddNewJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
