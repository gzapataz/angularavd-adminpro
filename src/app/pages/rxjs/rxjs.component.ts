import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {
  
  private intervalVar$: Subscription;

  constructor() {
    
    //this.returnObservable()
    //  .pipe(
    //    retry( 2 )
    //  )
    //  .subscribe({
    //    next: ( value ) => console.log( 'Subs:', value ),
    //    error: ( error ) => console.warn( 'Error:', error ),
    //    complete: () => console.info('Observable Ended'),
    //  });

    this.intervalVar$ = this.returnInterval().subscribe( console.log );
  }

  ngOnDestroy(): void {
    this.intervalVar$.unsubscribe();
  }

  returnInterval(): Observable<number> {
    const interval$ = interval( 100 )
      .pipe(
        take(500),
        map( value => (value + 1)),
        filter( value => ( value%2===0 )? true: false ),
      )
    return interval$
  }

  returnObservable(): Observable<number> {
    
    const obs$ = new Observable<number>( observer => {
      
      let i:number = 0;
      const interval = setInterval( () => {

        i++;
        observer.next(i);

        if ( i === 3 ) {
          observer.error('i equal to two');
        }

        if ( i === 5) {
          clearInterval( interval );
          observer.complete();
        }

        

      }, 1000);
    });
    return obs$;
  }
}
