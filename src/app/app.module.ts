import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { PopUpModalComponent } from './pop-up-modal/pop-up-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

// import * as echarts from 'echarts';
// import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    TableComponent,
    CardsListComponent,
    GraphComponent,
    HomeComponent,
    PopUpModalComponent,
    EmployeeFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    NgbModule,
    // NgxEchartsModule.forRoot({
    //   echarts
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
