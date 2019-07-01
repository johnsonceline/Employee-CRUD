import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { SearchEmployeesPipe } from './search-employees.pipe';
import { AddComponent } from './employees/add/add.component';
import { UpdateComponent } from './employees/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    SearchEmployeesPipe,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
