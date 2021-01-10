import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
newCustomer = new Customer();
message : String;
constructor(private customerService: CustomerService ) {
}
  ngOnInit() {
  }
  addCustomer(){
    //console.log(this.newCustomer);
    this.customerService.ajouterCustomer(this.newCustomer);
    this.message = "Client"+" "+this.newCustomer.nom+" "+this.newCustomer.prenom+"  ajouter avec succée";

    }
}
