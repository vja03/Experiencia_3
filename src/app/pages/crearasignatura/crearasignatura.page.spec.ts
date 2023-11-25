import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearasignaturaPage } from './crearasignatura.page';

describe('CrearasignaturaPage', () => {
  let component: CrearasignaturaPage;
  let fixture: ComponentFixture<CrearasignaturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearasignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
