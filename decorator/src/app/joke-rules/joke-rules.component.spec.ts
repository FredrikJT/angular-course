import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeRulesComponent } from './joke-rules.component';

describe('JokeRulesComponent', () => {
  let component: JokeRulesComponent;
  let fixture: ComponentFixture<JokeRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
