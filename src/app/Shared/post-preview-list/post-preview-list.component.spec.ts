import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreviewListComponent } from './post-preview-list.component';

describe('PostPreviewListComponent', () => {
  let component: PostPreviewListComponent;
  let fixture: ComponentFixture<PostPreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
