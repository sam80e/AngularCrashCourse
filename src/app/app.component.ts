import { Component } from '@angular/core';
import { IdentityService } from './identity.service';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public identitySvc: IdentityService) { //services in angular are sigleton by default

  }

  ngOnInit() {
  }
}
