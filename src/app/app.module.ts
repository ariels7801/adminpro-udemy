import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas //
import {APP_ROUTES} from './app.routes';

// Modulos //
import {PagesModule} from './pages/pages.module';
import {FormsModule} from '@angular/forms';

// Servicios //
import { SettingsService } from './services/settings.service';

// Componentes //
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
