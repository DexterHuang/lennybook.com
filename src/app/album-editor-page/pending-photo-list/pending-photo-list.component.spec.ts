import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPhotoListComponent } from './pending-photo-list.component';

describe('PendingPhotoListComponent', () => {
  let component: PendingPhotoListComponent;
  let fixture: ComponentFixture<PendingPhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
