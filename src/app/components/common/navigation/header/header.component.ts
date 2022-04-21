import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { MenuItem } from 'src/app/models/interfaces/menu-item.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  menuItems: MenuItem[] = [
    {
      label: 'Login',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      redirectUrl: '/auth/twitch/login'
    },
    {
      label: 'Admin',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      redirectUrl: '/admin'
    },
    {
      label: 'Home',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      redirectUrl: "/home"
    },
    // {
    //   label: 'Showcase',
    //   icon: 'slideshow',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
  ];
  profilePicUrl: string;

  constructor(private router: Router, private authService: AuthService) { 

    this.authService.broadcastLogin$.subscribe((userData)=>{
      if(userData != null){
        console.log(userData);
        this.profilePicUrl = userData.profile_image_url;
      }
    });
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public isLoggedIn(){
    return this.authService.getLoggedInStatus()
  }
}
