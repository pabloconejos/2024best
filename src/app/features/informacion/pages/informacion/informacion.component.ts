import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

}
