import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsListComponent } from './student-details-list.component';

describe('StudentDetailsListComponent', () => {
  let component: StudentDetailsListComponent;
  let fixture: ComponentFixture<StudentDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
