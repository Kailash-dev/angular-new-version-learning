import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteroperatorComponent } from './filteroperator.component';

describe('FilteroperatorComponent', () => {
  let component: FilteroperatorComponent;
  let fixture: ComponentFixture<FilteroperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteroperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteroperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
