import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcatmapoperatorComponent } from './contcatmapoperator.component';

describe('ContcatmapoperatorComponent', () => {
  let component: ContcatmapoperatorComponent;
  let fixture: ComponentFixture<ContcatmapoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContcatmapoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContcatmapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
