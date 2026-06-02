import { Routes } from '@angular/router';
import { SignalExampleComponent } from './components/signal-example/signal-example.component';
import { FormRendererExampleComponent } from './components/form-rederer-example/form-renderer-example.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dynamic-form-example', pathMatch: 'full'},
    { path: 'dynamic-form-example', component: FormRendererExampleComponent },
    { path: 'signal-example', component: SignalExampleComponent },
];
