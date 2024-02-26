import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: ``
})
export class PromisesComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers().then( users => {
      console.log( users );
    });
    //Code for reference
    //const myPromise = new Promise( ( resolve, reject ) => {
    //const boolVal =  Math.round( Math.random() );
//
    //  if ( boolVal ) {
    //    resolve('Hello Promise Resolved');
    //  }
    //  else {
    //    reject('Hello Promise Rejected');
    //  }
    //});
//
    //myPromise.then( ( message ) => {
    //  console.log( message );
    //}).catch( error => console.log( error ));
    //console.log('End Promised');
  }

  getUsers() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() ) 
      .then( body => resolve( body.data ));
    });
  }

}
