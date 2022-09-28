import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaPageComponent } from './encuesta-page.component';

describe('EncuestaPageComponent', () => {
  let component: EncuestaPageComponent;
  let fixture: ComponentFixture<EncuestaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
