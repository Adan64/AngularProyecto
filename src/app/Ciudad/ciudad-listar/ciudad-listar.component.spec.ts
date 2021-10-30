import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadListarComponent } from './ciudad-listar.component';

describe('CiudadListarComponent', () => {
  let component: CiudadListarComponent;
  let fixture: ComponentFixture<CiudadListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
