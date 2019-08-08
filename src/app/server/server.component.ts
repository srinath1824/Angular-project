import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  status: string = 'offline';
  value: string = "";

  getServerStatus() {
    return this.status;
  }

  handleChange(e) {
    this.value = e.target.value;
  }
}