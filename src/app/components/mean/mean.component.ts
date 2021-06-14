import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';
import { AddEmployeeComponent } from 'src/app/popups/add-employee/add-employee.component';
import { EditEmployeeComponent } from 'src/app/popups/edit-employee/edit-employee.component';


@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.scss'],
})
export class MeanComponent implements OnInit {
  showModal: boolean = false;
  employees: Employee[]
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onAddEmployee() {
    this.dialog.open(AddEmployeeComponent, {
      height: '400px',
      width: '600px',
    });
  }
  onCloseModal() {}

  openDialog() {
    this.dialog.open(EditEmployeeComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
