
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**
 * module imports
 */
import { MaterialModule } from "./material.module";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


const modules: any[] = [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
];

@NgModule({
    imports: [
        CommonModule,
        ...modules
    ],
    exports: [
        ...modules
    ],
})
export class SharedModule { }