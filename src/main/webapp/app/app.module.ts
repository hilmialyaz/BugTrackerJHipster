import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TbxSharedModule } from 'app/shared/shared.module';
import { TbxCoreModule } from 'app/core/core.module';
import { TbxAppRoutingModule } from './app-routing.module';
import { TbxHomeModule } from './home/home.module';
import { TbxEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TbxSharedModule,
    TbxCoreModule,
    TbxHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TbxEntityModule,
    TbxAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class TbxAppModule {}
