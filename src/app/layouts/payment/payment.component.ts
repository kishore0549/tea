import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../shared/router.animations';
import {ChallansService} from '../challans/challans.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataTableResource} from 'angular5-data-table';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  animations: [routerTransition()]
})
export class PaymentComponent implements OnInit {

  findChallan: FormGroup;
  inputQuery: FormControl;
  challans: any;
  itemCount: number;
  itemResource: any;
  constructor(private challanService: ChallansService, private _fb: FormBuilder, private router: Router, private modalService: NgbModal, private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.inputQuery = new FormControl('', [Validators.required]);
    this.findChallan = this._fb.group({
      inputQuery: this.inputQuery
    });

    this.activatedRouter.params.subscribe( params => {
      this.findChallan.controls['inputQuery'].setValue(params['query']);
      this.find();
    } );

  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  find() {
    if (this.findChallan.valid) {
      this.challanService.findChallan(this.findChallan.controls['inputQuery'].value).subscribe((challans) => {
        this.challans = challans;
        this.itemResource = new DataTableResource(this.challans);
        this.itemCount = this.challans.length;
      });
    }

    console.log(this.challans);

  }


  reloadItems(params) {
    this.itemResource.query(params).then( (items) => this.challans = items);
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.location);
    this.router.navigateByUrl( 'challans/' + rowEvent.row.item._id );

  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.location);
  }

  rowTooltip(item) { return item._id; }

}
