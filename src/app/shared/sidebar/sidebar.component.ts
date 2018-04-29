import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'

})
export class SidebarComponent implements OnInit {


    showMenu = '';
    showSubMenu = '';
    public sidebarnavItems: any[];
    // this is for the open close
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';

        } else {
            this.showSubMenu = element;
        }
    }

    constructor( private router: Router,
        private route: ActivatedRoute) {
          this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd &&
              window.innerWidth <= 767 &&
              this.isToggled()
            ) {
              this.toggleSidebar();
            }
          });
    }


  isToggled(): boolean {
    const dom: Element = document.querySelector('#main-wrapper');
    return dom.classList.contains('mini-sidebar');
  }

  toggleSidebar() {
    const dom: Element = document.querySelector('#main-wrapper');
    dom.classList.toggle('mini-sidebar');
  }
    // End open close
    ngOnInit() {
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
       /* $(function () {
            $(".sidebartoggler").on('click', function() {
                if ($("#main-wrapper").hasClass("mini-sidebar")) {
                    $("body").trigger("resize");
                    $("#main-wrapper").removeClass("mini-sidebar");

                } else {
                    $("body").trigger("resize");
                    $("#main-wrapper").addClass("mini-sidebar");
                }
            });

        });*/

    }
}
