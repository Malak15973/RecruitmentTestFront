import { Component, OnChanges, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnChanges,OnInit{
  data:any=[];
  constructor(private jobService: JobService, private router: Router) {  }
  ngOnChanges() {
    console.log(11);
    this.jobService.getAllJobs()
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.data=res.result;
        console.log(this.data);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.jobService.getAllJobs()
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.data=res.result;
        console.log(`data is ${res}`);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deleteFunc(id:number){
    if (confirm('Are you sure you want to delete item?')) {
      this.jobService.deleteJob(id)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.ngOnChanges();
        },
        error: (err) => {
          console.log(err)
        }
      })
    } 
  }

  jobTrackByFn(index:number,job:any):number{
    return job.id;
  }
}
