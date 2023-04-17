import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstactionsComponent } from './transtactions.component';

describe('TranstactionsComponent', () => {
  let component: TranstactionsComponent;
  let fixture: ComponentFixture<TranstactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranstactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranstactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
