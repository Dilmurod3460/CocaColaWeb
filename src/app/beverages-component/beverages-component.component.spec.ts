import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesComponentComponent } from './beverages-component.component';

describe('BeveragesComponentComponent', () => {
  let component: BeveragesComponentComponent;
  let fixture: ComponentFixture<BeveragesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeveragesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeveragesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
