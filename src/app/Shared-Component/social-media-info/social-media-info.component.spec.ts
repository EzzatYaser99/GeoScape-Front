import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaInfoComponent } from './social-media-info.component';

describe('SocialMediaInfoComponent', () => {
  let component: SocialMediaInfoComponent;
  let fixture: ComponentFixture<SocialMediaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
