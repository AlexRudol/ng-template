import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from "@angular/material";

import { AppComponent } from './app';
import { NotFound } from './no-content/not-found';
import { Test } from './test/test';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        FormsModule,

        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    declarations: [
        AppComponent,
        NotFound,
        Test
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue : '.' }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
