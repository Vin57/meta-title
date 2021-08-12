import { Component } from '@angular/core';
import { MetaTitleService } from './shared/services/meta-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private metaTitleService: MetaTitleService // Do not delete, this is used to add meta and title
  ) {}
}
