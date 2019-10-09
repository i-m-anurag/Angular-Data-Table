import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections'
export interface PeriodicElement {
  payment_id: number;
  customer_id: number;
  staff_id: number;
  rental_id: number;
  amount:number;
  payment_date:string;
  last_update:string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // dataSource:DataTableData;
 // dataSource:DataSource;
  dataSource;
  showSpinner = false;
  title:string;
  status:string;
  id = new FormControl('');
  Query:{};
  f=false;
   

  displayedColumns: string[] = ['payment_id', 'customer_id', 'staff_id', 'rental_id','amount','payment_date','last_update'];
 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private employeeService:EmployeeService) { 
 
  }

  addFilter(event) {
    event.preventDefault();
    //console.log(this.title);
    var newTask = {
      title: this.title,
     // isDone: false,
      status:this.status
    }
    console.log(newTask);
  /* if(!newTask.status)
   {
     newTask.status='';
     //console.log(newTask);
     this.Query = { q: ''}
   }
   else{
     newTask.status = '1';
     this.Query = { q: "WHERE payment_id = " + newTask.status }
    // console.log(newTask);
   }
     
     console.log(this.Query);
 
    this.employeeService.addFilter(this.Query)
      .subscribe(emp => {
        // console.log(emp);
        const ELEMENT_DATA: PeriodicElement[] = emp;
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.showSpinner = false;
      }

      );*/
  }


 

  ngOnInit() {
    this.showSpinner=true;
   
     this.employeeService.getEmployee().subscribe(
       emp=>{
        // console.log(emp);
         const ELEMENT_DATA: PeriodicElement[] = emp;
         this.dataSource = new MatTableDataSource(ELEMENT_DATA) ;
        // console.log(this.dataSource);
         this.dataSource.paginator = this.paginator;
         this.showSpinner=false;
       }
     );
      
     

   //  this.dataSource.filterPredicate = function (data, filter: string): boolean {
    //   return data.name.toLowerCase().includes(filter) === filter;
    // };
    
  
 
  }

}
