import { Component, OnInit } from '@angular/core';
import { StudentDetails } from './student-details';

@Component({
  selector: 'app-student-details-list',
  templateUrl: './student-details-list-bootstrap.component.html',
  styleUrls: ['./student-details-list.component.css']
})
export class StudentDetailsListComponent implements OnInit {

  constructor() { }
  studentDetailsList: StudentDetails[] = [
    new StudentDetails("Ash","Singh","ash@gmail.com",83),
    new StudentDetails("Harsh","Singh","harsh@gmail.com",93),
    new StudentDetails("Sumit","Singh","ss@gmail.com",81),
    new StudentDetails("Yash","Singh","yash@gmail.com",91)
  ];
  ngOnInit(): void {
  }

}
