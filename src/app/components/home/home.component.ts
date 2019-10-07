import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  positions: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  positionFilter = new FormControl();
  nameFilter = new FormControl();

  filteredValues = {
    position: '', name: '', weight: '',
    symbol: ''
  };
  ngOnInit() {

    this.positionFilter.valueChanges.subscribe((positionFilterValue) => {
      this.dataSource.data = this.filterOptions(positionFilterValue, this.nameFilter.value);
    });

    this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
      this.dataSource.data = this.filterOptions(this.positionFilter.value, nameFilterValue);
    });
  }

  filterOptions(positionValue: string[], nameValue: string): PeriodicElement[] {
    if ((!positionValue || positionValue.length === 0) && !nameValue) {
      return ELEMENT_DATA;
    }
    const filtered = ELEMENT_DATA.filter((periodicElement) => {
      return (nameValue ? periodicElement.name.toLowerCase().includes(nameValue.toLowerCase()) : false) || (positionValue ? positionValue.indexOf(periodicElement.position + '') !== -1 : false)
    });
    return filtered;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  // numFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.dataSource.filterPredicate = (data: any, fitlerString: string) => {

  //       return data.position == filterValue;
  //   };
  //   this.dataSource.filter = filterValue;
  // }

  customFilterPredicate() {
    const myFilterPredicate = function (data: PeriodicElement, filter: string): boolean {
      let searchString = JSON.parse(filter);
      return data.position.toString().trim().indexOf(searchString.position) !== -1 &&
        data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }


 
}

