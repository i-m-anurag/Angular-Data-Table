import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;
  ordersData = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];
  orders: any;
  // form: FormGroup;
  // ordersData = [];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }

  ngOnInit() {
  }

}
