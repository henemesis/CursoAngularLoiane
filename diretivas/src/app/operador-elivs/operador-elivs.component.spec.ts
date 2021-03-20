import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorElivsComponent } from './operador-elivs.component';

describe('OperadorElivsComponent', () => {
  let component: OperadorElivsComponent;
  let fixture: ComponentFixture<OperadorElivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorElivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorElivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
