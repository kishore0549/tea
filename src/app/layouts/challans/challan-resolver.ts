import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Challan} from './Challan';
import {ChallansService} from './challans.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChallanResolver implements Resolve<Challan[]> {

  constructor(private challanService: ChallansService) {}

  resolve(): Observable<any>|Promise<any>|any {
    return this.challanService.getChallans();
  }
}
