import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, Event, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {
  public title: string= '';
  private titleSubs$: Subscription;

  constructor( private router: Router, private route: ActivatedRoute ) {
    this.titleSubs$ =  this.getRouteArguments()
      .subscribe( ({ title }) => {
          this.title = title;
          document.title = `AdminPro - ${ title }`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }
  
  getRouteArguments() {
    return this.router.events
    .pipe(
      filter( (event:Event): event is ActivationEnd => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( event => event.snapshot.data )
    );
  }
}

  