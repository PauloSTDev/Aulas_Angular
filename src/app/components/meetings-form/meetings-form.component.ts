import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meetings-form',
  templateUrl: './meetings-form.component.html',
  styleUrls: ['./meetings-form.component.css']
})
export class MeetingsFormComponent implements OnInit {



  constructor(

    public dialogRef: MatDialogRef<MeetingsFormComponent>,
    //@Optional @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.dialogRef.close();
  }


}
