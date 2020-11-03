import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenadorSelectedComponent } from './senador-selected.component';

describe('SenadorSelectedComponent', () => {
  let component: SenadorSelectedComponent;
  let fixture: ComponentFixture<SenadorSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenadorSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenadorSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
