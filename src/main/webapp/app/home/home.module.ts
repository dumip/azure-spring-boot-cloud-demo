import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AzureSpringBootCloudDemoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AzureSpringBootCloudDemoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class AzureSpringBootCloudDemoHomeModule {}
