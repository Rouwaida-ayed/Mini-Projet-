import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


const routes: Routes = [{path: "customers", component : CustomersComponent},
{path: "add-customer", component : AddCustomerComponent},
{path: "", redirectTo: "customers", pathMatch: "full"},
{path: "updateCustomer/:id", component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
