import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections'
export interface PeriodicElement {
  id: number;
  name: string;
  dept: string;
  salary: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // dataSource:DataTableData;
 // dataSource:DataSource;
   

  displayedColumns: string[] = ['id', 'name', 'dept', 'salary'];
  // dataSource = ELEMENT_DATA;
  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   // this.dataSource.filter = filterValue;
   
  }

  constructor(private employeeService:EmployeeService) { 
 
  }

  ngOnInit() {
    // this.employeeService.getEmployee().subscribe(
    //   emp=>{
    //   //  console.log(emp);
    //     const ELEMENT_DATA: PeriodicElement[] = emp;
    //     this.dataSource = new MatTableDataSource(ELEMENT_DATA) ;
    //     console.log(this.dataSource);
    //   }
    // );

    // this.dataSource.filterPredicate = function (data, filter: string): boolean {
    //   return data.name.toLowerCase().includes(filter) === filter;
    // };
    
  
 
  }

}
