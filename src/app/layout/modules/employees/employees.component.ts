import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeInterface } from 'src/app/shared/interfaces/employeeInterface';
import { Ipage } from 'src/app/shared/interfaces/pageInterface';
import { EditComponent } from './edit/edit.component';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'birthday'];
  dataSource!: MatTableDataSource<EmployeeInterface>;
  filterValue: string | undefined;
  page: Ipage | undefined;
  pageEvent: PageEvent | undefined;
  total: number | undefined;
  number: number | undefined;
  size: number | undefined;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  sorting!: { direction: string; active: string };
  constructor(
    private employeeService: EmployeesService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.fillTable()
  }

  openDialogAdmin(id: number, option: string): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '95%',
      minWidth: '300px',
      maxWidth: '600px',
      data: {
        id,
        option,
        buttonYes: true,
        buttonNo: true,
        buttonOk: false
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fillTable(this.pageEvent, this.filterValue !== undefined && this.filterValue.length > 2 ? this.filterValue : undefined);
    });
  }

  applyFilter(filterValue: any) {
    const filterVal = (filterValue.target as HTMLInputElement).value;
    this.dataSource.filter = filterVal.trim().toLowerCase();
    this.filterValue = filterValue;
  }

  fillTable(event?: PageEvent, filter?: string) {
    if (filter === undefined){
      filter = this.filterValue !== undefined && this.filterValue.length > 2 ? this.filterValue : undefined;
    }
    this.employeeService.list(event, filter,  this.sorting)
    .subscribe(
      {
        next: async (res: any) => {
          if (res.status === 200) {
            const dataDeserialize: any = res.body.data.employees;
            // this.total = res.body.page.total;
            // this.number = res.body.meta.page.number;
            this.number =  -1;
            // this.size = res.body.meta.page.size;
            // this.data = dataDeserialize;
            this.dataSource = new MatTableDataSource<EmployeeInterface>(dataDeserialize);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          // this.loading = false;
        },
        error: (err: any) => {console.log(err)}
      }
    );
    return event;
  }

}
