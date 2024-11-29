import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapoperatorComponent } from './switchmapoperator.component';

describe('SwitchmapoperatorComponent', () => {
  let component: SwitchmapoperatorComponent;
  let fixture: ComponentFixture<SwitchmapoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchmapoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchmapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
