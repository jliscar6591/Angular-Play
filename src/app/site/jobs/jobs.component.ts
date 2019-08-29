import { Component, OnInit } from '@angular/core';

export interface job     {
  name: string,
  currentDistance: string,
  weight: number,
  description: string,
  pay: number

}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent implements OnInit {
  public jobsList: job[];

  constructor() { }

  ngOnInit() {
    this.jobsList = [
      {
        name: 'Chandlee and Sons Construction Comp LLC',
        currentDistance: '25.6mi',
        weight: 1500,
        description: 'Removing debris from jobsite after home demolition.',
        pay: 1375
      },
      {
        name: 'Ginger Ragsdale',
        currentDistance: '31.7mi',
        weight: 3000,
        description: 'Transport of two large gears, pre wrapped and palleted.',
        pay: 1890
      },
      {
        name: 'Suwanee Welding & Fabrication',
        currentDistance: '17.9mi',
        weight: 4300,
        description: 'Load and transport of large metal build frame pieces. Total of eight pieces.',
        pay: 1375
      },
      {
        name: 'Bubba and Bros Loggin',
        currentDistance: '22.5',
        weight: 6000,
        description: 'Load and haul of 25-45ft oak trees, de-limbed.',
        pay: 1375
      }

    ]
  }

  //COMPLETES A BID, FIRES OFF THE BOTTOMSHEET SUCCESS MESSAGE, REMOVES THAT JOB FROM AVAILABLE TO HISTORY
  public bid(i){
    this.jobsList.splice(i,1)
  }
}


