import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilupdatePage } from './perfilupdate.page';

describe('PerfilupdatePage', () => {
  let component: PerfilupdatePage;
  let fixture: ComponentFixture<PerfilupdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
