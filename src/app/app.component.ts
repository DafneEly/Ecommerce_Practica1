import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductoComponent} from './components/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HttpClientModule],
  standalone : true,
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'ecommerce';
}
