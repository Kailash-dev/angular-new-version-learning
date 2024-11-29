import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoperatorComponent } from './mapoperator.component';

describe('MapoperatorComponent', () => {
  let component: MapoperatorComponent;
  let fixture: ComponentFixture<MapoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
