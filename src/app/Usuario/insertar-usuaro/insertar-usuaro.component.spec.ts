import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarUsuaroComponent } from './insertar-usuaro.component';

describe('InsertarUsuaroComponent', () => {
  let component: InsertarUsuaroComponent;
  let fixture: ComponentFixture<InsertarUsuaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarUsuaroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarUsuaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
