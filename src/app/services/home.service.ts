import { Injectable } from '@angular/core';
import { ModificaRecente } from '../models/modifica-recente.model';
import { UltimoAggiornamento } from '../models/ultimi-aggionamenti.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  modificheRecenti: ModificaRecente[] = [];
  ultimiAggiornamenti: UltimoAggiornamento[] = [];
  constructor() { }

  getModificheRecenti() {
    return this.modificheRecenti = [
      {
        data: '02 Jan 2021',
        responsabile: 'Alex Doe',
        variazione: 'Delivered',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Roe Parter',
        variazione: 'Returned',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'David Mart',
        variazione: 'Pending',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Diana Penty',
        variazione: 'Delivered',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Martin Paw',
        variazione: 'Pending',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Doe Alex',
        variazione: 'Returned',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Aiana Lexa',
        variazione: 'Delivered',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Rexel Mags',
        variazione: 'Pending',
        totale: 1
      },
      {
        data: '02 Jan 2021',
        responsabile: 'Tiana Loths',
        variazione: 'Delivered',
        totale: 1
      },
    ];
  }

  getUltimiAggiornamenti() {
    return this.ultimiAggiornamenti = [
      {
        caso: 'n.34',
        stato: 'Aperta'
      },
      {
        caso: 'n.26',
        stato: 'Aperta'
      },
      {
        caso: 'n.5',
        stato: 'Modifica'
      },
      {
        caso: 'n.43',
        stato: 'Aperta'
      },
      {
        caso: 'n.7',
        stato: 'Chiusa'
      },
      {
        caso: 'n.11',
        stato: 'Aperta'
      },
      {
        caso: 'n.19',
        stato: 'Modifica'
      },
    ];
  }
}
