import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplinelistComponent } from './helplinelist.component';

describe('HelplinelistComponent', () => {
  let component: HelplinelistComponent;
  let fixture: ComponentFixture<HelplinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelplinelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
