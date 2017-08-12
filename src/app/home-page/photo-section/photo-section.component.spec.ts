import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSectionComponent } from './photo-section.component';

describe('PhotoSectionComponent', () => {
  let component: PhotoSectionComponent;
  let fixture: ComponentFixture<PhotoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
