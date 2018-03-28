import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>Welcome {{name}}</h1>
            <h2>Site url is: {{siteUrl}}</h2>
            <input [id]="myid" type="text" value="roxanita"/>
            <input bind-disabled="isDisable" id="{{myid}}" type="text" value="roxanita"/>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'Aga Alexandru';
  public siteUrl = window.location.href;
  public myid = 'myfirstProjectId';
  public isDisable = false;

  constructor() { }

  ngOnInit() {
  }
  getUserFromComponent(){
    return 'tanduiciul';
  }

}
