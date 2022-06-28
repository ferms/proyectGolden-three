import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

  numberRandom: number | undefined;
  minutes: any;
  seconds: any;




  constructor(private dataService: DataService) {
    this.getDataService();
  }

  ngOnInit(): void {

  }


  getDataService() {
    // setInterval(() => {
    this.numberRandom = this.dataService.getNumbers()
    console.log('%c⧭ this.dataService.getNumbers()', 'color: #00e600', this.dataService.getNumbers());
    // }, 1000);

    let date = new Date('2025-01-01 01:00');
    // Función para rellenar con ceros
    let padLeft = (n: string | any[]) => "00".substring(0, "00".length - n.length) + n;
    // Asignar el intervalo a una variable para poder eliminar el intervale cuando llegue al limite
    let interval = setInterval(() => {
      // Asignar el valor de minutos
      this.minutes = padLeft(date.getMinutes() + "");
      // Asignqr el valor de segundos
      this.seconds = padLeft(date.getSeconds() + "");
      // console.log(this.minutes, this.seconds);
      // Restarle a la fecha actual 1000 milisegundos
      date = new Date(date.getTime() - 1000);
      if (this.minutes == '00' && this.seconds == '01') {
        date = new Date('2025-01-01 01:00');
        this.numberRandom = this.dataService.getNumbers();
        console.log('%c⧭Una Hora ', 'color: #003de5',);
      }
    }, 1000);



  }



}
