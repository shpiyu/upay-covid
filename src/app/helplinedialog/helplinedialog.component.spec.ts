import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplinedialogComponent } from './helplinedialog.component';

describe('HelplinedialogComponent', () => {
  let component: HelplinedialogComponent;
  let fixture: ComponentFixture<HelplinedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelplinedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplinedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
