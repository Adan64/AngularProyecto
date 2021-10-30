import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  Mensaje :any
  Titulo:any
  constructor(public MatDialog: MatDialog) {}

  openDialog() {
    this.MatDialog.open(DialogComponent);
  }
  ngOnInit(): void {
  }

}
