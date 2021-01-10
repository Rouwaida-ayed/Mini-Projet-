import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styles: []
})
export class UpdateCustomerComponent implements OnInit {
  currentCustomer = new Customer();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private customerService: CustomerService) { }

  ngOnInit() {
    this.currentCustomer = this.customerService.consulterCustomer(this.activatedRoute.snapshot.params.id);
console.log(this.currentCustomer);
  }
  updateCustomer()
  { //console.log(this.currentProduit);
  this.customerService.updateProduit(this.currentCustomer);
  this.router.navigate(['customers']);

  }
}
