import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import jwt_decode from 'jwt-decode';
import { SidebarService } from './sidebar.service';
// import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public showMenu: string | undefined;
  public pushRightClass: string | undefined;
  cookieValue = 'UNKNOWN';
  decoded: any;
  menu: any;
  role = 'admin';
  pushRightContainerClass: string | undefined;
  // isDesktopDevice: boolean;
  constructor(
    // private cookieService: CookieService,
    private sidebarService: SidebarService,
    // private deviceService: DeviceDetectorService
  ) {
    // this.cookieValue = this.cookieService.get('Authorization').substring(7);
    // this.decoded = jwt_decode(this.cookieValue);
    // this.role = this.decoded.role;
    // this.isDesktopDevice = this.deviceService.isDesktop();
  }

  ngOnInit() {
    this.showMenu = '';
    this.pushRightClass = 'push-right';
    this.pushRightContainerClass = 'push-container';
    this.getMenu();
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
    // if (this.isDesktopDevice) {
      const container: any = document.querySelector('#main-container');
      container.classList.toggle(this.pushRightContainerClass);
    // }
  }

  getMenu(): void {
    this.sidebarService.listMenu().subscribe(
      (res) => {
        this.menu = res;
        console.log(this.menu);
      },
      (err) => {
        if (err.status === 401) {
          // console.log('error');
        }
      }
    );
  }
}
