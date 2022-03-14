import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngLinkComponent } from './ang-link.component';

describe('AngLinkComponent', () => {
  let component: AngLinkComponent;
  let fixture: ComponentFixture<AngLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
