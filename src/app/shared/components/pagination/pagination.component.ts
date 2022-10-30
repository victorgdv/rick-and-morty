import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() paginationEmitter = new EventEmitter;
  pagina:number=1

  constructor() { }

  ngOnInit(): void {
  }
siguiente(){
  if(this.pagina<40){
    this.pagina++
    this.paginationEmitter.emit(this.pagina)
  }
}
anterior(){
  if(this.pagina>1){
    this.pagina--
    this.paginationEmitter.emit(this.pagina)
  }
}
}
