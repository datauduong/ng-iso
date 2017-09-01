import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  PortalModule,
  BidiModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  MdCommonModule
} from '@angular/material';

import { OverlayModule } from '@angular/cdk/overlay';

const MaterialModules = [
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  BidiModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  MdCommonModule
  ]

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class CustomMaterialModule { }