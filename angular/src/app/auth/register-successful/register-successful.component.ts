import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/user/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-successful',
  templateUrl: './register-successful.component.html',
  styleUrls: ['./register-successful.component.scss']
})
export class RegisterSuccessfulComponent implements OnInit {

  user: User;
  sub: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.user = params as User;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
