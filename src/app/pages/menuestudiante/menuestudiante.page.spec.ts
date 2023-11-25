import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuestudiantePage } from './menuestudiante.page';

describe('MenuestudiantePage', () => {
  let component: MenuestudiantePage;
  let fixture: ComponentFixture<MenuestudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuestudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
