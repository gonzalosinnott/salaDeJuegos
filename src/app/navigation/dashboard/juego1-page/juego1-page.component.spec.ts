import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego1PageComponent } from './juego1-page.component';

describe('Juego1PageComponent', () => {
  let component: Juego1PageComponent;
  let fixture: ComponentFixture<Juego1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
