import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoComponenteComponent } from './criando-componente.component';

describe('CriandoComponenteComponent', () => {
  let component: CriandoComponenteComponent;
  let fixture: ComponentFixture<CriandoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriandoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriandoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
