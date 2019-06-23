import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatProgressSpinnerModule, MatPaginatorModule, MatSelectModule, MatListModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [
    NavigationComponent,
    EllipsisPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NavigationComponent,
    EllipsisPipe
  ],
  providers:[
    EllipsisPipe
  ]
})
export class SharedModule { }
