import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers : Customer[];
  customer: Customer;

  constructor(){
    this.customers =
    [ {id : 1, nom : "Ayed", prenom : "Rouwaida" , adresse : "Hammamet" , phone :52787227 },
     {id : 2, nom : "hajri", prenom : "wejden" , adresse : "sousse" , phone :55447788 }];


  }

  listeCustomers():Customer[] {
    return this.customers;}

  ajouterCustomer( cust: Customer){
  this.customers.push(cust);
  }
  supprimerCustomer( cust: Customer){
    const index = this.customers.indexOf(cust, 0);
    if (index > -1) {
    this.customers.splice(index, 1);
    }

}
consulterCustomer(id:number): Customer{
  this.customer = this.customers.find(p => p.id == id);
  return this.customer;
  }
  updateProduit(cust:Customer)
{
// console.log(p);
this.supprimerCustomer(cust);
this.ajouterCustomer(cust);
this.trierCustomers();

}
trierCustomers(){
  this.customers = this.customers.sort((n1,n2) => {
  if (n1.id > n2.id) {
  return 1;
  }
  if (n1.id < n2.id) {
  return -1;
  }
  return 0;
  });
  }

}

