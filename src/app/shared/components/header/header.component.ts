import { SearchInputComponent } from '../search-input/search-input.component';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavService } from '../../../services/sidenav.service';
import { MatMenuModule } from '@angular/material/menu';
import { openDialogService } from '../../../services/openDialog.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    SearchInputComponent,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public sidenavService: SidenavService,
    private openDialogService: openDialogService,
  ) {}

  handleClick(type: string) {
    switch (type) {
      case 'desk':
        return this.openDialogService.openDialog(type);
      case 'task':
        return this.openDialogService.openDialog(type);
      default:
        return null;
    }
  }
}
