import {AfterViewInit, Component, Directive, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChallansService} from '../challans.service';
import {routerTransition} from '../../../shared/router.animations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [routerTransition()]
})
export class DetailsComponent implements OnInit, AfterViewInit {

    challanId: string;
    details: any;
    printTemplate: any;
    color: String;
    @ViewChild('print', { read: ViewContainerRef}) printArea;

      constructor(private route: ActivatedRoute, private challansService: ChallansService) {
          this.route.params.subscribe( params => this.challanId = params.id);
      }


  ngOnInit() {

          this.challansService.findChallan(this.challanId).subscribe((challan) =>  {

              console.log(challan);
              this.details = challan[0];
          });
  }

    ngAfterViewInit() {

    }

    printChallan() {

         window.print();
    }





}
