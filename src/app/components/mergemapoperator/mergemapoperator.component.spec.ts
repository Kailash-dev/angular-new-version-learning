import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergemapoperatorComponent } from './mergemapoperator.component';

describe('MergemapoperatorComponent', () => {
  let component: MergemapoperatorComponent;
  let fixture: ComponentFixture<MergemapoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergemapoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergemapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
