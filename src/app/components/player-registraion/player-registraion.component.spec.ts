import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRegistraionComponent } from './player-registraion.component';

describe('PlayerRegistraionComponent', () => {
  let component: PlayerRegistraionComponent;
  let fixture: ComponentFixture<PlayerRegistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRegistraionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRegistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
