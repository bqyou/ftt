import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Include RouterOutlet
  template: `<router-outlet></router-outlet>`  // RouterOutlet for routing
})
export class AppComponent {}
