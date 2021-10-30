import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadModificarComponent } from './ciudad-modificar.component';

describe('CiudadModificarComponent', () => {
  let component: CiudadModificarComponent;
  let fixture: ComponentFixture<CiudadModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
