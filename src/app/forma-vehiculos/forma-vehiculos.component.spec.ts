import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaVehiculosComponent } from './forma-vehiculos.component';

describe('FormaVehiculosComponent', () => {
  let component: FormaVehiculosComponent;
  let fixture: ComponentFixture<FormaVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
