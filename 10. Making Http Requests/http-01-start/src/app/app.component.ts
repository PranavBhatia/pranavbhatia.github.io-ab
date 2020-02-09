import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://angular-practice-4e312.firebaseio.com/posts.json', postData).subscribe(
      responseBody => {
        console.log(responseBody);
      }
    );
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
