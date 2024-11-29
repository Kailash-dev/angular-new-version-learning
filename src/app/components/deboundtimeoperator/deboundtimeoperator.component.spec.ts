import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeboundtimeoperatorComponent } from './deboundtimeoperator.component';

describe('DeboundtimeoperatorComponent', () => {
  let component: DeboundtimeoperatorComponent;
  let fixture: ComponentFixture<DeboundtimeoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeboundtimeoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeboundtimeoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
