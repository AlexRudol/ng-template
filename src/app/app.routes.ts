import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound } from './no-content/not-found';
import { Test } from './test/test';

const routes:Routes = [
    { path: '', component: Test },
    { path: 'test', component: Test },
    { path: '**', component: NotFound }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
