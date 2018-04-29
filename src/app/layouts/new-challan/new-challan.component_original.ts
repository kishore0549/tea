import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NewChallanService} from './new-challan.service';
import {ActivatedRoute, ParamMap, Router, RouterModule} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChallanFile, SiteLocation, VehicleType, Zone} from '../../shared/models/Models';
import {FileUploadService} from '../../shared/services/file-upload.service';
import {ZoneService} from '../../shared/services/zone.service';
import {SiteLocationService} from '../../shared/services/site-location.service';


const date = new Date();

/*@Component({
    selector: 'app-new-challan',
    templateUrl: './new-challan.component.html',
    styleUrls: ['./new-challan.component.scss'],
    animations: [routerTransition()]
})*/


export class NewChallanComponent implements OnInit {

    vehicleNo: String;
    zones: Observable<Zone[]>;
    locations: Observable<SiteLocation[]>;
    vehicleTypes: Observable<VehicleType[]>;
    fileToUpload: File[] = [];
    challanFiles: ChallanFile[] = [];
    selectedZone: any;
    selectedLocation: SiteLocation;
    selectedVehicleType: VehicleType;
    longDistanceFile: File;
    shortDistanceFile: File;
    offences: any = [];
    selectedOffence: any = [];
    vehicleDetails: any;
    editMode: boolean;
    challanForm: FormGroup;

 /*   public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd-mm-yyyy'
    };*/

    // Initialized to specific date (09.10.2018).


    public challanDate: any = {

        date: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        }
    };

    constructor(
                private route: ActivatedRoute,
                private router: Router,
                private fileUploader: FileUploadService,
                private zoneService: ZoneService,
                private siteLicationService: SiteLocationService,
                private challanService: NewChallanService,
                private viewRef: ViewContainerRef
    ) { }

    ngOnInit() {

       this.challanForm = new FormGroup({
            longDistanceShot: new FormControl('', Validators.required),
            shortDistanceShot: new FormControl(),
            location: new FormControl(),
            vehicleType: new FormControl()
        });

        this.editMode = true;
        this.findVehicleDetails();

        this.siteLicationService.getVehicleTypes().subscribe((vehicleTypes: Observable<VehicleType[]>) => {
            this.vehicleTypes = vehicleTypes;
        });

        this.zoneService.getZones().subscribe((zones: Observable<Zone[]> ) => {
            this.zones = zones;
        });

        this.siteLicationService.getLocations().subscribe((locations: Observable<SiteLocation[]>) => {
            this.locations = locations;
        });

        this.challanService.getOffences().subscribe((offenceList: any) => {

            this.offences = offenceList;
        });
    }

    setLongDistanceShot(files: FileList) {

        if (files.length !== 0) {
            this.longDistanceFile = files.item(0);
        } else if ( this.longDistanceFile !== undefined) {
            this.longDistanceFile = null;
        }

    }

    setShortDistanceShot(files: FileList) {

        if (files.length !== 0) {
            this.shortDistanceFile = files.item(0);
        } else if ( this.shortDistanceFile !== undefined) {
            this.shortDistanceFile = null;
        }

    }


    createChallan() {

        this.fileToUpload = [];
        this.fileToUpload.push(this.longDistanceFile);
        this.fileToUpload.push(this.shortDistanceFile);

        this.fileUploader.postFiles(this.fileToUpload).subscribe((data: ChallanFile[]) => {
            this.challanFiles = data;
            console.log(this.challanFiles);
            if (this.challanFiles.length === 2) {

                console.log('Upload success');
                const longDistanceShot: ChallanFile = this.challanFiles[0];
                const shortDistanceShot: ChallanFile = this.challanFiles[1];


                    const challan = {
                        'attachments': [longDistanceShot, shortDistanceShot],
                        'location': this.selectedLocation.location,
                        'zone': this.selectedLocation.zone_name,
                        'vehicleNumber': this.vehicleNo,
                        'vehicle': {
                            'type': this.selectedVehicleType.type,
                            'number': this.vehicleNo,
                            'segment': this.selectedVehicleType.segment,
                            'owner': this.vehicleDetails.name,
                            'address': this.vehicleDetails.address
                        },
                        'created': new Date(),
                        'offences': this.selectedOffence,
                        'address': this.vehicleDetails.address,
                        'name': this.vehicleDetails.name
                    };

                    this.challanService.createChallan(challan).subscribe((challanResponse: any) => {
                        console.log(challanResponse);

                        /*this.router.navigate(['challans', { challanCreated: 'created' }]);*/

                       this.router.navigate(['challans', challanResponse._id] );
                    });

                }


        });
    }


    findVehicleDetails() {
        const vehicleDetails = {
            'name' : 'Kishore',
            'chasis': 101111101111,
            'address': '265 7th crs 25th main MCHS colony BTM 2nd Stage Bangalore 560076',
            'model': 'Maruti Suzuki Baleno',
            'make': 2017
        };

        this.vehicleDetails = vehicleDetails;
    }

    populateZone() {

        this.selectedZone = this.selectedLocation.zone;
    }

    clear() {
        console.log('Clear All Fields');
    }


    openNewDialog() {


      /*  this.modalService.openDialog(this.viewRef, {
            title: 'Vehicle Details',
            childComponent: SimpledialogueComponent,
            data: {
                text: 'Some text content. It will close after 1 sec.'
            },
            settings: {
                closeButtonClass: 'close theme-icon-close'
            },
            actionButtons: [
                {
                    text: 'Yes, close me!',
                    buttonClass: 'btn btn-success',
                    onAction: () => new Promise((resolve: any) => {
                        setTimeout(() => {
                            resolve();
                        }, 20);
                    })
                },
                {
                    text: 'Side effect',
                    buttonClass: 'btn btn-info',
                    onAction: () => {
                        alert('As you can see, I will not close this dialog');
                    }
                },
                {
                    text: 'No, fail closing!',
                    buttonClass: 'btn btn-danger',
                    onAction: () => new Promise((resolve: any, reject: any) => {
                        setTimeout(() => {
                            reject();
                        }, 20);
                    })
                }]}
        );*/
    }




    openNewChallanDetailsDialog(challanResponse) {


       /* this.modalService.openDialog(this.viewRef, {
            title: 'Challan Details',
            childComponent: ChallanDetailsComponent,
            data: challanResponse,
            settings: {
                closeButtonClass: 'close theme-icon-close',
                modalClass: 'modal-custom-lg'
            },
            actionButtons: [
                {
                    text: 'Print',
                    buttonClass: 'btn btn-success',
                    onAction: () => new Promise((resolve: any) => {
                        setTimeout(() => {
                            resolve();
                        }, 20);
                    })
                },
                {
                    text: 'Side effect',
                    buttonClass: 'btn btn-info',
                    onAction: () => {
                        alert('As you can see, I will not close this dialog');
                    }
                },
                {
                    text: 'No, fail closing!',
                    buttonClass: 'btn btn-danger',
                    onAction: () => new Promise((resolve: any, reject: any) => {
                        setTimeout(() => {
                            reject();
                        }, 20);
                    })
                }]}
        );*/
    }


}
