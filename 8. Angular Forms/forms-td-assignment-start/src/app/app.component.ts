import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscribeOptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  formSubmitted = false;
  user: any;

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    this.user = form.value;
  }
}
