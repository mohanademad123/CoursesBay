import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCouseDetailsComponent } from './post-couse-details.component';

describe('PostCouseDetailsComponent', () => {
  let component: PostCouseDetailsComponent;
  let fixture: ComponentFixture<PostCouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCouseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
