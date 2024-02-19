import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: ``
})
export class IncrementerComponent implements OnInit {

  @Input('myValue')
  public progress: number = 50;
  @Input()
  public btnClass: string = 'btn-primary';

  @Output('myValue') 
  valorOut: EventEmitter<number> = new EventEmitter();

  
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }
  
  changePercentage( value: number ) {
    
    this.progress = this.progress + value;
    this.valorOut.emit( this.progress );
  }

  onChange( newValue: number ) {
    if ( newValue >= 100 ) this.progress = 100;
    else if ( newValue <= 0) this.progress = 0;
    else this.progress = newValue;
    
    this.valorOut.emit( this.progress );
  }
}
