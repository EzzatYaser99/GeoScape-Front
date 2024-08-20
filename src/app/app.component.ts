import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {filter} from "rxjs";
import {FooterComponent} from "./Shared-Component/footer/footer.component";
import {HeaderComponent} from "./Shared-Component/header/header.component";
import {ScrollComponent} from "./Shared-Component/scrollTop/scroll.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FooterComponent, HeaderComponent, ScrollComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'GeoScape';

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }


}
