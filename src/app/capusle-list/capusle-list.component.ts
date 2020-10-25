import { Component, OnInit } from '@angular/core';
import { CapsuleListGQL, CapsuleListQuery } from '../services/spacexGraphql.service';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-capusle-list',
  templateUrl: './capusle-list.component.html',
  styleUrls: ['./capusle-list.component.css']
})
export class CapusleListComponent implements OnInit {

  constructor(private capsuleList:CapsuleListGQL) { }

  ngOnInit(): void {
  }
capsuleList$=this.capsuleList.fetch().pipe(map(res=>res.data.capsules))
}
