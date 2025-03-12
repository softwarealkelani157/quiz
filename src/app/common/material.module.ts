import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

export const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatTooltipModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
