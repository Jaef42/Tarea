import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  resultado: string = '';
  listaUsuarios: string[] = [];
  formulario = new FormGroup({
    nombre: new FormControl( '',[Validators.required,] ),
    edad: new FormControl('', [Validators.minLength(3), Validators.required]),
    dpi: new FormControl('', [Validators.minLength(12), Validators.required]),
  })
  
  constructor(@Inject(DOCUMENT) private document:Document){
    this.listaUsuarios = [];
    let datos = localStorage?.getItem("formulario");
    if(datos != null){
      let arreglo= JSON.parse(datos);
      if(arreglo != null){
        for(let formulario1 of arreglo){
          this.listaUsuarios.push(formulario1);
        }
      }
    }
    

  }
 
  agregarActividad(){
    const nombre = this.formulario.get('nombre')?.value;
  const edad = this.formulario.get('edad')?.value;
  const dpi = this.formulario.get('dpi')?.value;

  // Verifica si algún campo está vacío
  if (!nombre || !edad || !dpi) {
    alert('Por favor, complete todos los campos antes de agregar.')
    
    return;
  }
    const usuario = `${this.formulario.get('nombre')?.value} (${this.formulario.get('edad')?.value} años) ${this.formulario.get('dpi')?.value}`;
    this.listaUsuarios.push(usuario);
    localStorage?.setItem('formulario', JSON.stringify(this.listaUsuarios));
    this.formulario.reset();
    
  }
 
  borrarActividad(id: number){
    this.listaUsuarios.splice(id, 1);
    localStorage.clear();
    localStorage.setItem("actividades", JSON.stringify(this.listaUsuarios));
  }


}
