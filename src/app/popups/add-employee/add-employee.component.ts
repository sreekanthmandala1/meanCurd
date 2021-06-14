import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { UxProductsService } from 'src/app/services/ux-products.service';

// interface Food {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  empForm : FormGroup;
  
  // selectedValue: string;
  // foods: Food[] = [
  //   {value: 'development', viewValue: 'development'},
  //   {value: 'design', viewValue: 'design'}
  // ];
  constructor(private fb : FormBuilder, private empService : UxProductsService) { }

  ngOnInit(): void {
    this.getEmployees()
    this.empForm = this.fb.group({
      _id : [''],
      name : ['sreekanth'],
      position: ['Full stack developer']
      // department : ['development']
    })
  }

  onCancel(){

  }
  onEmpSubmit(){
    if(this.empForm.valid){
      // console.log(this.empForm.value)
      this.empService.addEmployee(this.empForm.value).subscribe((res)=>{
        console.log(res)})
      }else{
        (err)=>{
          console.log(err)
        }
      }
    }

  getEmployees(){
    this.empService.getEmployeeList().subscribe((res)=>{
      console.log(res);
      
    })
  }
}
