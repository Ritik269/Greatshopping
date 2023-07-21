import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: any = {};
  errorMsg: string = "";
  constructor(private custService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  createCustomer() {
    console.log('Inside Component');
    console.log(this.customer);
    this.custService.createCustomer(this.customer).subscribe((data: Customer) => {
      this.router.navigate(['/']).then();
    },
      (error) => {
        this.errorMsg = error;
        this.router.navigate(['/createcustomer/']).then();
      });
  }


}
