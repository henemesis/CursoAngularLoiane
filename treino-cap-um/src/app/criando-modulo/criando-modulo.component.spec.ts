import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoModuloComponent } from './criando-modulo.component';

describe('CriandoModuloComponent', () => {
  let component: CriandoModuloComponent;
  let fixture: ComponentFixture<CriandoModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriandoModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriandoModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
