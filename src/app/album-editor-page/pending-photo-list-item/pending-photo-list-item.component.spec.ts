import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPhotoListItemComponent } from './pending-photo-list-item.component';

describe('PendingPhotoListItemComponent', () => {
  let component: PendingPhotoListItemComponent;
  let fixture: ComponentFixture<PendingPhotoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPhotoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPhotoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
