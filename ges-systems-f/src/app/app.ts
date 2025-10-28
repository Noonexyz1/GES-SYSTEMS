import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div class="bg-amber-400">Hola App Diego</div>
  <router-outlet />
  `
})
export class App implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }
}
