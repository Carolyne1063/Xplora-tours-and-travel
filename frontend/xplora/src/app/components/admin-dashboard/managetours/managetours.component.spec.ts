import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetoursComponent } from './managetours.component';

describe('ManagetoursComponent', () => {
  let component: ManagetoursComponent;
  let fixture: ComponentFixture<ManagetoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagetoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagetoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
