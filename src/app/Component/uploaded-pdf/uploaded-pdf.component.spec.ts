import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedPdfComponent } from './uploaded-pdf.component';

describe('UploadedPdfComponent', () => {
  let component: UploadedPdfComponent;
  let fixture: ComponentFixture<UploadedPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadedPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadedPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
