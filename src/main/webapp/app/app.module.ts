import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AzureSpringBootCloudDemoSharedModule } from 'app/shared/shared.module';
import { AzureSpringBootCloudDemoCoreModule } from 'app/core/core.module';
import { AzureSpringBootCloudDemoAppRoutingModule } from './app-routing.module';
import { AzureSpringBootCloudDemoHomeModule } from './home/home.module';
import { AzureSpringBootCloudDemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AzureSpringBootCloudDemoSharedModule,
    AzureSpringBootCloudDemoCoreModule,
    AzureSpringBootCloudDemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AzureSpringBootCloudDemoEntityModule,
    AzureSpringBootCloudDemoAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class AzureSpringBootCloudDemoAppModule {}
