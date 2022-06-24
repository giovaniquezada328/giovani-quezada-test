import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { EmployeeInterface } from 'src/app/shared/interfaces/employeeInterface';
import { GroupInterface } from 'src/app/shared/interfaces/groupInterface';
import { GroupsService } from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  @ViewChild('allSelected', {static: true}) private allSelected!: MatSelectionList;
  groups: GroupInterface[] = [];
  groupsTemp: GroupInterface[] = [];
  groupsDetail: any;
  employees: EmployeeInterface[] = [];
  groupName!: string;
  selectedEmployees:string[] = [];
  constructor(private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.fillList();
  }

  fillList(event?: PageEvent, filter?: string) {
    this.groupsService.list(event, filter)
    .subscribe(
      {
        next: async (res: any) => {
          if (res.status === 200) {
            this.groups = res.body.data.groups;
            this.groupsTemp = this.groups;
          }
          // this.loading = false;
        },
        error: (err: any) => {console.log(err)}
      }
    );
    return event;
  }

  applyFilter(filterValue: any) {
    this.groupsTemp = [];
    const filterVal = (filterValue.target as HTMLInputElement).value;

    this.groups.forEach(element => {
        if(element.name.includes(filterVal)){
          this.groupsTemp.push(element);
        }
    });

  }

  async drop(event: CdkDragDrop<any[]>){
    this.employees = [];
    const groupSearch = this.groupsTemp[event.previousIndex];

    if(groupSearch){
      this.groupName = groupSearch.name;
      this.groupsService.detail(groupSearch.id)
        .subscribe(
          {
            next: async (res: any) => {
              if (res.status === 200) {
                this.employees = await res.body.data.employees;

                this.employees.forEach(element => {
                    this.selectedEmployees.push(element.name);
                });
                this.selectAll();
              }
            },
            error: (err: any) => { console.log(err); }
          }
        );

    }
  }

  selectAll(){
    this.allSelected.selectAll();
  }

  clean(){
    this.employees = [];
    this.groupName = '';
  }

  continue(){
    console.log(this.selectedEmployees);
  }

}
