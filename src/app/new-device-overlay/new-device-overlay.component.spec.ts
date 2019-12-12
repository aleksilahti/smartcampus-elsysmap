import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceOverlayComponent } from './new-device-overlay.component';

describe('NewDeviceOverlayComponent', () => {
  let component: NewDeviceOverlayComponent;
  let fixture: ComponentFixture<NewDeviceOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeviceOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
