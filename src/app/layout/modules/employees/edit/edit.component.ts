import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeInterface } from 'src/app/shared/interfaces/employeeInterface';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [DatePipe]
})
export class EditComponent implements OnInit {
  titleModal!: string;
  form!: FormGroup;
  option = this.data.option;
  employee!: EmployeeInterface;
  constructor(
    private employeeService: EmployeesService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({ top: '15px' });
    this.titleModal = this.option === 'new' ? 'Nuevo' : 'Actualizar';
    this.form = this.fb.group({
      name: ['',  [Validators.required, Validators.maxLength(100)]],
      last_name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });
  }

  closeDialogAdmin(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
      this.employee = this.form.getRawValue();
      const startDate: string = this.datePipe.transform(this.employee.birthday, 'yyyy/MM/dd')!;
      this.employee.birthday = startDate;
      this.employeeService.create(this.employee)
      .subscribe(
        {
          next: async (res: any) => {
            console.log(res);
            this.closeDialogAdmin();
            if (res.status === 200) {

              const snackBarRef = this.snackBar.open(
                'Mensaje', res.body.data,
                { duration: 1000 }
              );
              snackBarRef.afterDismissed().subscribe(() => {

              if (res.status === 200) {
                this.closeDialogAdmin();
              }
            });
          }
         },
          error: (err: any) => {console.log(err)}
        });

  }


}
