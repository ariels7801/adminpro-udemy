import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') public chartLabels: string[] = [];
  @Input('chartData') public chartData: number[] = [];
  @Input('chartType') public chartType: string = '';
  @Input() leyenda: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

}
