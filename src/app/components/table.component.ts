import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.html'
})
export class TableComponent {
  @Input() displayColumn = [];
  @Input() dataUser = null;

  constructor() {

  }
}
