import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTopicsComponent } from './feature-topics.component';

describe('FeatureTopicsComponent', () => {
  let component: FeatureTopicsComponent;
  let fixture: ComponentFixture<FeatureTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
