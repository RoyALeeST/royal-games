import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SampleService } from '../../../shared/services/sample.service';
import { User } from '../../../models/user/user.model';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

 
  public displayedColumns = ['firstName', 'lastName', 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
  public dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sampleService: SampleService, 
              private errorService: ErrorHandlerService, 
              private router: Router) { }
 
  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
 
  public getAllOwners = () => {
      this.sampleService.getCustomers().subscribe(
        (result)=>{
          this.dataSource.data = result;
          console.log(result)
        },
        (error) => {
          this.errorService.handleError(error);
        }
      )
  }
 

  public redirectToDetails = (id: string) => {
      this.router.navigate([`/user/details/${id}`]);
    }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  pageChanged(event){

  }
}
