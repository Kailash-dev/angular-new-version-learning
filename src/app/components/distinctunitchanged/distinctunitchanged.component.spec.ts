import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctunitchangedComponent } from './distinctunitchanged.component';

describe('DistinctunitchangedComponent', () => {
  let component: DistinctunitchangedComponent;
  let fixture: ComponentFixture<DistinctunitchangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctunitchangedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctunitchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
