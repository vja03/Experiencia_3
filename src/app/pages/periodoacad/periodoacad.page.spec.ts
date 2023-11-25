import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodoacadPage } from './periodoacad.page';

describe('PeriodoacadPage', () => {
  let component: PeriodoacadPage;
  let fixture: ComponentFixture<PeriodoacadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeriodoacadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
