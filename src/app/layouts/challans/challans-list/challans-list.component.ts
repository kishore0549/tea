import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Challan} from '../Challan';
import {ActivatedRoute, Router} from '@angular/router';
import {ChallansService} from '../challans.service';
import {routerTransition} from '../../../shared/router.animations';
import {DataTableResource} from 'angular5-data-table';


@Component({
  selector: 'app-challans-list',
  templateUrl: './challans-list.component.html',
  styleUrls: ['./challans-list.component.scss'],
  animations: [routerTransition()]
})
export class ChallansListComponent implements OnInit {




  query: any;

  /*settings = {
    delete: {
      confirmDelete: false,
    },
    add: {
      confirmCreate: false,
    },
    edit: {
      confirmSave: false,
    },
    columns: {
      _id: {
        title: 'Challan #'
      },
      zone: {
        title: 'Zone'
      },
      location: {
        title: 'Location'
      },
      total: {
        title: 'Total '
      },
      offences: {
        title: 'Offences'
      }
    }
  };
*/

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  translations: (DataTableTranslations) => {
    headerReload: 'Test',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
  };



  selectedVehicleNumber: String;
  alerts: Array<any> = [];
  isNewChallan: string;
  items: any;
  violations: any;
  itemCount = 0;
  itemResource: DataTableResource<any>;


  findChallan: any = '';

  constructor(private challansService: ChallansService, private router: Router, private route: ActivatedRoute) {

    this.itemResource = new DataTableResource(this.route.snapshot.data.challansList);
    this.items = this.route.snapshot.data.challansList;
    this.itemCount = this.items.length;

    this.route.params.subscribe(params => {
      console.log(params);

      if (params['query']) {
        this.selectedVehicleNumber = params['query'];
        this.searchTicket();
      }});

  }


  ngOnInit() {

  /*  this.challansService.getChallans().subscribe((data: Challan[]) => {
      this.items = data;
       this.itemCount = this.items.length;
       this.itemResource = new DataTableResource(this.items);
    });*/
  }


  reloadItems(params) {

    if (this.itemResource) {
      this.itemResource.query(params).then(items => this.items = items);
    }

  }

  reloadOffences(params) {
    this.itemResource.query(params).then(items => this.violations = items);
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

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  searchTicket() {
    if (this.selectedVehicleNumber && this.selectedVehicleNumber.length === 10) {
      this.selectedVehicleNumber = this.selectedVehicleNumber.toUpperCase();
    }
    this.challansService.findChallan(this.selectedVehicleNumber)
      .subscribe((challans: Challan[]) =>  this.items = challans );
  }


}
