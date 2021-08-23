import { DialogService } from './dialog.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() accountType;
  @Input() balance;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

}
