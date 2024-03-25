import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MarketsListComponent} from "../components/markets-list/markets-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarketsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tooltip-app';
}
