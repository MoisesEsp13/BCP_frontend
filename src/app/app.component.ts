import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AreasService } from './services/areas/areas.service';
import { EstadosService } from './services/estados/estados.service';
import { MigracionesService } from './services/migraciones/migraciones.service';
import { PedidosService } from './services/pedidos/pedidos.service';
import { PrioridadesService } from './services/prioridades/prioridades.service';
import { SquadsService } from './services/squads/squads.service';
import { TecnologiasService } from './services/tecnologias/tecnologias.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BCP';
  pedidoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public areasService: AreasService,
    public estadosService: EstadosService,
    public migracionesService: MigracionesService,
    public pedidosService: PedidosService,
    public prioridadesService: PrioridadesService,
    public squadsService: SquadsService,
    public tecnologiasService: TecnologiasService
  ) {}

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      areaId: ['', Validators.required],
      prioridadId: ['', Validators.required],
      estadoId: ['', Validators.required],
      pedidoFecha: ['', Validators.required],
      pedidoFechaLimite: ['', Validators.required]
    });
  }

  guardar(): void {
    console.log(this.pedidoForm.value);
  }
}
