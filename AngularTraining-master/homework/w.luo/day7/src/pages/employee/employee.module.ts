import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { HomeService } from '../../service/home.service';
import { RoundupPipe } from '../../pipes/roundup.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeePageComponent, RoundupPipe],
  providers:[HomeService],
})
export class EmployeeModule { }
