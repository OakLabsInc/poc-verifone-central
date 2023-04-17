import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRebrandComponent } from './navbar-rebrand.component';

describe('NavbarRebrandComponent', () => {
  let component: NavbarRebrandComponent;
  let fixture: ComponentFixture<NavbarRebrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRebrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarRebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
