import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dec',
  templateUrl: './dec.component.html',
  styleUrls: ['./dec.component.css']
})
export class DecComponent implements OnInit {
  x:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  
  change():void{
    this.x+=1;
  }
}
