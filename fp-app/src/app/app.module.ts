import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductListItemComponent } from './products/product-list-item/product-list-item.component';
import { RandomProductsComponent } from './random-products/random-products.component';
import { ProductPaginationComponent } from './product-pagination/product-pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductListFilterComponent } from './product-list-filter/product-list-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ProductOverviewComponent,
    ProductListComponent,
    ProductListItemComponent,
    RandomProductsComponent,
    ProductPaginationComponent,
    ProductListFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase, 'fp-angular-fs'),
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
