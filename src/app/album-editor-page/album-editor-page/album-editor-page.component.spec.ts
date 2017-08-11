import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumEditorPageComponent } from './album-editor-page.component';

describe('AlbumEditorPageComponent', () => {
  let component: AlbumEditorPageComponent;
  let fixture: ComponentFixture<AlbumEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
