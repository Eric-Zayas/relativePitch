import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyTableComponent } from './proficiency-table.component';

describe('ProficiencyTableComponent', () => {
  let component: ProficiencyTableComponent;
  let fixture: ComponentFixture<ProficiencyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
