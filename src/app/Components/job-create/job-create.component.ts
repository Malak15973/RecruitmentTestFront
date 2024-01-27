import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { JobSkillsService } from '../../services/job-skills.service';
import { JobResponsabilitiesService } from '../../services/job-responsabilities.service';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './job-create.component.html',
  styleUrl: './job-create.component.scss'
})
export class JobCreateComponent implements OnInit{
  jobData!: { name: string; description: string;
    validFrom: string; validTo: string;
    maxApplicants: number; categoryId: number;
    jobSkills: number[]; jobResponsabilities: number[]; 
   };
  categoryList!:{id:number,name:string}[];
  jobSkillsList!:{id:number,name:string}[];
  jobResponsabilitiesList!:{id:number,name:string}[];

  constructor(private jobService:JobService,private router:Router,private categoryService:CategoryService,private skillsService:JobSkillsService,private responsabilitiesService:JobResponsabilitiesService){}

  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (res: any) => {
        this.categoryList=res.result;
      },
    })

    this.skillsService.getAllSkills()
    .subscribe({
      next: (res: any) => {
        this.jobSkillsList=res.result;
      },
    })

    this.responsabilitiesService.getAllResponsabilities()
    .subscribe({
      next: (res: any) => {
        this.jobResponsabilitiesList=res.result;
      },
    })
  }

  addJobFunc(){
    console.log(this.jobData);
    this.jobService.addJob(this.jobData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/Home']);
      },
      error: (err) => {
        alert(err.error.errorMessages)
      }
    })
  }

}
