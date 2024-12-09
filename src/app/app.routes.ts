import { Routes } from '@angular/router';
import { FormularioComponent } from './features/formulario/pages/formulario/formulario.component';
import { ResultadoComponent } from './features/resultados/pages/resultado/resultado.component';

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent }, // Ruta principal con el formulario
    { path: 'resultado', component: ResultadoComponent }, // Ruta para mostrar resultados por link
    { path: '', redirectTo: '/formulario', pathMatch: 'full' }
];
