import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoPageComponent } from './ahorcado-page.component';

describe('Juego1PageComponent', () => {
  let component: AhorcadoPageComponent;
  let fixture: ComponentFixture<AhorcadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
