import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPortfolioComponent } from './detailed-portfolio.component';

describe('DetailedPortfolioComponent', () => {
  let component: DetailedPortfolioComponent;
  let fixture: ComponentFixture<DetailedPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
