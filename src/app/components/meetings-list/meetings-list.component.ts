import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import * as moment from 'moment';
import { MeetingService } from 'src/app/service/meeting.service';
import { DeleteComponent } from '../delete/delete.component';
import { MeetingFormComponent } from '../meetings-form/meetings-form.component';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css']
})
export class MeetingsListComponent implements OnInit {

  displayedColumns: string[] = ['meetingName', 'meetingSubject', 'meetingResponsible', 'meetingTime', 'action'];
  meetings = [];
  lenght: number;
  pageSize: number = 5;
  totalRecordsPerPage: number = 5;
  meetingNameFind: string;
  meetingDateFind: string;

  constructor(
    private service : MeetingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll(0, 'meetingName', null)
  }

  findAll(pageNumber:number, sortField: string, filters: string) {
    console.log('Estamos requisitando a Lista');
    
    this.service.getAll(pageNumber, this.totalRecordsPerPage, sortField, filters).subscribe(meetingReturn =>{
      this.meetings = meetingReturn['meeting'];
      this.lenght = meetingReturn['page'].size;
    }, err =>{
      console.log('erro', err);
      console.log('erro status', err.status);
      console.log('erro error', err.error);
      console.log('erro headers', err.headers);
      
    });
  }


  getServerData(event?:PageEvent){
    this.findAll(event.pageIndex, "meetingDate", null);
  }

  edit(idEdit:string){
    const dialogRef = this.dialog.open(MeetingFormComponent, {
      width: '500px',
      data: idEdit
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The Dialog Was Closed");
      
    });
  }

  confirmDelete(id:string){
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The Dialog Was Closed");
      
    });
  }

  findByParameter() {
    let filters ="";

    if(this.meetingNameFind != null && this.meetingNameFind != ""){
      filters+="meetingName="+this.meetingNameFind;
    }

    if(this.meetingDateFind != null){
      if(filters != ""){
        filters+=";";
      }
      let newDate: moment.Moment = moment.utc(this.meetingDateFind).local();
      filters+= "meetingDate="+newDate.format("YYYY-MM-DDTHH:mm:ss")+".000Z";
    }
    this.findAll(0, "meetingDate", filters);
  }
}