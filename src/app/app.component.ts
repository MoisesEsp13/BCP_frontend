import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AreasService} from './services/areas/areas.service';
import {EstadosService} from './services/estados/estados.service';
import {MigracionesService} from './services/migraciones/migraciones.service';
import {PedidosService} from './services/pedidos/pedidos.service';
import {PrioridadesService} from './services/prioridades/prioridades.service';
import {SquadsService} from './services/squads/squads.service';
import {TecnologiasService} from './services/tecnologias/tecnologias.service';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BCP';
  pedidoForm: FormGroup;
  areas: any;
  prioridades: any;
  estados: any;
  pedidos: any[] = [];

  constructor(
    private fb: FormBuilder,
    public areasService: AreasService,
    public prioridadesService: PrioridadesService,
    public estadosService: EstadosService,
    public migracionesService: MigracionesService,
    public pedidosService: PedidosService,
    public squadsService: SquadsService,
    public tecnologiasService: TecnologiasService
  ) {
  }

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      areaId: ['', Validators.required],
      prioridadId: ['', Validators.required],
      estadoId: ['', Validators.required],
      pedidoFecha: ['', Validators.required],
      pedidoFechaLimite: ['', Validators.required]
    });

    this.areasService.getAllAreas().subscribe(resp => {
      this.areas = resp;
      },
      error => {
        console.error(error)
      }
    );
    this.estadosService.getAllEstados().subscribe(resp => {
        this.estados = resp;
      },
      error => {
        console.error(error)
      }
    );
    this.prioridadesService.getAllPrioridades().subscribe(resp => {
        this.prioridades = resp;
      },
      error => {
        console.error(error)
      }
    );

    this.pedidosService.getTop3Pedidos().subscribe(data => {
        this.pedidos = data;
      }
    )
  }

  guardar(): void {
    this.pedidosService.savePedido(this.pedidoForm.value).subscribe(resp=>{
    },
    error=>{console.error(error)}
    )
  }
}


