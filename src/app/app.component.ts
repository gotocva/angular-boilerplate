import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public titleDataUrl: string = '/assets/data/title-data.json';
  public defaultTitle: string = 'My app';

  constructor(private TitleService:Title, private router: Router,private http: HttpClient) {
    this.titleHandler(window.location.pathname);
  }

  /**
   * 
   */
  subscribeRouterEvents() : void {
    this.router.events.subscribe((route) => {
      if(route instanceof NavigationEnd) {
        this.titleHandler(route.url.toString());
      }
    });
  }

  /**
   * 
   * @param urlPath {string}
   */
  titleHandler(urlPath: string) : void {
    this.http.get(this.titleDataUrl).subscribe((response:any) => {
      if (response.title_data[urlPath] != undefined) {
        this.TitleService.setTitle(response.title_data[urlPath]);
      } else {
        this.TitleService.setTitle(this.defaultTitle);
      }
    })
  }
}
