import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateScaleComponent } from './generate-scale.component';

describe('GenerateScaleComponent', () => {
  let component: GenerateScaleComponent;
  let fixture: ComponentFixture<GenerateScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
