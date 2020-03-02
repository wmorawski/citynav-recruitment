import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'bike',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bike.svg')
    );
    iconRegistry.addSvgIcon(
      'back-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/back-arrow.svg')
    );
    iconRegistry.addSvgIcon(
      'unlock',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/unlock.svg')
    );
  }
}
