import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 customers : Customer[];
 constructor(private customerService: CustomerService ) {
  this.customers = customerService.listeCustomers();
  }

  ngOnInit() {
  }
  supprimerCustomer(cust: Customer)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.customerService.supprimerCustomer(cust);}

}
