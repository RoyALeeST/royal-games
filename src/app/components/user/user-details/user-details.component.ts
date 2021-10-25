import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SampleService } from '../../../shared/services/sample.service';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public owner: User;
  public showAccounts;
 
  constructor(private sampleService: SampleService, private router: Router, 
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }
 
  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        let userId = params['id'];
        this.getOwnerDetails(userId);
      })
  }
 
  private getOwnerDetails(userId){
    this.sampleService.getCustomerById(userId).subscribe(
      (foundUser) => {
        this.owner = foundUser as User;
      },
      (error) =>{
        this.errorHandler.handleError(error);
      })
  }

}
