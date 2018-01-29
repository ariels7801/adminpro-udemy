import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {

    this.subcription = this.regresaObservable()
      .subscribe(
        numero => console.log('Subs ', numero),
        error => console.log('Error en el obs ', error),
        () => console.log('El observador termino !')
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subcription.unsubscribe();
  }

  regresaObservable(): Observable<number> {

    return new Observable(observer => {

      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next(salida);

        /* if (contador === 2) {
           clearInterval(intervalo);
           observer.error('Auxilio');
         }*/

        /*if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }*/
      }, 500);
    }).retry(2)
      .map((resp: any) => {
        return resp.valor;
      })
      .filter((valor, index) => {

        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      });

  }

}
