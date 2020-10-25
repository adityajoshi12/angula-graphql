import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private pastlaunches: PastLaunchesListGQL) { }

  ngOnInit(): void {
  }

  pastLaunches$ =this.pastlaunches.fetch({limit:60}).pipe(map(res=>res.data.launchesPast))

}
