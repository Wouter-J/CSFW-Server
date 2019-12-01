import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { tap, delay } from 'rxjs/operators'

/**
 * This is a dummy service to illustrate service testing.
 * Have a look at the corresponding spec file.
 */
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  /**
   *
   */
  constructor() {}

  /**
   *
   */
  getValue(): string {
    return 'real value'
  }

  /**
   *
   */
  getObservableValue(): Observable<string> {
    return of('observable value')
  }

  /**
   *
   */
  getPromiseValue(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = 'promise value'
        resolve(result)
      }, 0)
    })
  }
}
