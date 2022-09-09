import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { of } from 'rxjs';

export class ApiClass {
  url = environment.url;
  isProduction = environment.production;

  constructor(protected http: HttpClient) {}

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage:_${error.message}`;
    }
    return of({ error: true, msg: errorMessage, data: null });
  }
}
