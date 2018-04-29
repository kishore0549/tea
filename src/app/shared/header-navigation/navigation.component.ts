import {Component, AfterViewInit, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit  {

    name: string;
    searchForm: FormGroup;
    showSearch = false;
    constructor(private router: Router, private _fb: FormBuilder) {

    }


  ngOnInit(): void {
    this.createSearchForm();
  }


    createSearchForm() {
          this.searchForm = this._fb.group({
              query: new FormControl('', [Validators.required])
          });
    }

  searchChallan() {
      this.toggleSearch();
      this.router.navigate(['payment', this.searchForm.value]);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('#main-wrapper');
    return dom.classList.contains('mini-sidebar');
  }

  toggleSidebar() {
    const dom: Element = document.querySelector('#main-wrapper');
    dom.classList.toggle('mini-sidebar');
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }




}
