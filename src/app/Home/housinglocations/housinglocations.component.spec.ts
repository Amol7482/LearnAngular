import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousinglocationsComponent } from './housinglocations.component';

describe('HousinglocationsComponent', () => {
  let component: HousinglocationsComponent;
  let fixture: ComponentFixture<HousinglocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousinglocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousinglocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
