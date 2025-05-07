import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'industry-overview', component: AboutUsComponent },
  { path: 'company-profile', component: AboutUsComponent },
  { path: 'bowls', component: ProductsComponent },
  { path: 'trays-and-pens', component: ProductsComponent },
  { path: 'storage', component: ProductsComponent },
  { path: 'pet-accessories', component: ProductsComponent },
  { path: 'cutlery', component: ProductsComponent },
  { path: 'serving-tools', component: ProductsComponent },
  { path: 'tongs', component: ProductsComponent },
  { path: 'cruets', component: ProductsComponent },
  { path: 'colanders-and-strainers', component: ProductsComponent },
  { path: 'fruit-and-bread-baskets', component: ProductsComponent },
  { path: 'bins-and-buckets', component: ProductsComponent },
  { path: 'bar-assortments', component: ProductsComponent },
  { path: 'kitchen-tool', component: ProductsComponent },
  { path: 'salad-servers', component: ProductsComponent },
  { path: 'utilities', component: ProductsComponent },
  { path: 'contact', component: ContactUsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
