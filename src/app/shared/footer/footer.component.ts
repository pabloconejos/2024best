import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LenguageSelectorComponent } from "../lenguage-selector/lenguage-selector.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule, LenguageSelectorComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
