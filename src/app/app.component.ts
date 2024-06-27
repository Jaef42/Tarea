import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AHD1';
}
