import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
        color: white;
      }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  status: string = 'offline';
  value: string = "";

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.status;
  }

  handleChange(e) {
    this.value = e.target.value;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}