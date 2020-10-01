import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutPropertiesComponent } from './in-out-properties.component';

describe('InOutPropertiesComponent', () => {
  let component: InOutPropertiesComponent;
  let fixture: ComponentFixture<InOutPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
