import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingComponent } from './setting/setting.component';
import { SubMenuComponent } from './sidenav/sub-menu.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { BarChartComponent } from './dashboard/graph/bar-chart/bar-chart.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { PieChartComponent } from './dashboard/graph/pie-chart/pie-chart.component';
import { TableComponent } from './dashboard/table/table.component';
import { PaginatePipe } from './share/pipes/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingComponent,
    SubMenuComponent,
    HeaderComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    NgChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
