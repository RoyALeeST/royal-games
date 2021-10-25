import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { SampleService } from './../../../shared/services/sample.service';
import { User } from '../../../models/user/user.model';
import { SuccessDialogComponent } from '../../../shared/components/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public ownerForm: FormGroup;
  private dialogConfig;

  constructor(private location: Location, 
              private dialog: MatDialog, 
              private errorService: ErrorHandlerService,
              private sampleService: SampleService) { }
 
  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }
 
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }
 
  private executeOwnerCreation = (ownerFormValue) => {
    let owner: User = {
      firstName: ownerFormValue.name,
      lastName: 'lastName',
      secondLastName: 'secondLastName',
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address,
      reputation: 100,
    }
 
    this.sampleService.createCustomer(owner).subscribe(
      (res) => {
        console.log(res)
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe( (result) => {
            this.location.back();
          });
      },
      (error) => {
        console.log(error)
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }
    )
  }

}
