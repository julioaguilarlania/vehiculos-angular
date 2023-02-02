import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaMaterialVehiculosComponent } from './forma-material-vehiculos.component';

describe('FormaMaterialVehiculosComponent', () => {
  let component: FormaMaterialVehiculosComponent;
  let fixture: ComponentFixture<FormaMaterialVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaMaterialVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaMaterialVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
