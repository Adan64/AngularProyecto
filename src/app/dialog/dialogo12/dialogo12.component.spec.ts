import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogo12Component } from './dialogo12.component';

describe('Dialogo12Component', () => {
  let component: Dialogo12Component;
  let fixture: ComponentFixture<Dialogo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogo12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
