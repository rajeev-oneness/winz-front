import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { APIService } from 'src/app/service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public showContactUsBOX: boolean=true;

  constructor(private _router:Router,private _api:APIService) {

  }

  ngOnInit(): void {
    this._router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/contact-us') {
          this.showContactUsBOX = false;
        }else {
          this.showContactUsBOX = true;
        }
      }
    });
    if(this._router.url == '/contact-us'){
      this.showContactUsBOX = false;
    }else{
      this.showContactUsBOX = true;
    }
    this.getContactusData();
  }
  
  public contactDatatoShow : any = {};
  getContactusData(){
    this._api.getConatctUsDataToShow().subscribe(
        res => {
          this.contactDatatoShow = res.data;
        },err => {

        }
    )
  }

}
