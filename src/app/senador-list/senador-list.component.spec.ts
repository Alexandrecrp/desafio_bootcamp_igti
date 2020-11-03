import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenadorListComponent } from './senador-list.component';

describe('SenadorListComponent', () => {
  let component: SenadorListComponent;
  let fixture: ComponentFixture<SenadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
