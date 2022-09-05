import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCardsComponent } from './pro-cards.component';

describe('ProCardsComponent', () => {
  let component: ProCardsComponent;
  let fixture: ComponentFixture<ProCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
