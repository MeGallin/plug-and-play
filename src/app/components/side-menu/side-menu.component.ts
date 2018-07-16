import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  providers: [HttpService]
})
export class SideMenuComponent implements OnInit, OnDestroy {
  show;
  private sub: Subscription;
  public menuItems;

  constructor(private _http: HttpService) {
  }

  ngOnInit() {
    this.sub = this._http.getData().subscribe(data => {
      this.menuItems = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
