import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const app_routes: Routes = [
    {path: 'inicio', component: PortafolioComponent},
    {path: 'articulos/:id', component: ArticulosComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'acerca-de', component: AcercaDeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'buscar/:termino', component: BuscarComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({

    imports: [
        RouterModule.forRoot(app_routes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }