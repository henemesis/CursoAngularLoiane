import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnventBindingAulaComponent } from './envent-binding-aula.component';

describe('EnventBindingAulaComponent', () => {
  let component: EnventBindingAulaComponent;
  let fixture: ComponentFixture<EnventBindingAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnventBindingAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnventBindingAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
