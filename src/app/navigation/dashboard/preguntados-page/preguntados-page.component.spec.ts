import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntadosPageComponent } from './preguntados-page.component';

describe('PreguntadosPageComponent', () => {
  let component: PreguntadosPageComponent;
  let fixture: ComponentFixture<PreguntadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntadosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
