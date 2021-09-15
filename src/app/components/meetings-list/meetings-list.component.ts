import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeetingService } from 'src/app/service/meeting.service';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css']
})
export class MeetingsListComponent implements OnInit {

  displayedColumns: string[] = ['meetingName', 'meetingSubject', 'meetingResponsible'];
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
    this.findAll(0, 'meetingDate', null)
  }

  findAll(pageNumber:number, sortField: string, filters: string) {
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

}
