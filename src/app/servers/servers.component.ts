import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = '';
  servers = ['server1'];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  handleChange(e){
    this.serverName = e.target.value;
  }

}
