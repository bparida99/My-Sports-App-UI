import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedinPlayerNavbarComponent } from './logedin-player-navbar.component';

describe('LogedinPlayerNavbarComponent', () => {
  let component: LogedinPlayerNavbarComponent;
  let fixture: ComponentFixture<LogedinPlayerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogedinPlayerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogedinPlayerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
