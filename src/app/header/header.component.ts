import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notifications, userItem } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage:any;
  
  languages = languages;
  notifications = notifications;
  userItems = userItem;

  constructor(){}

  @HostListener('window:resize',['$event']) 
  onResize(event:any){
    this.checkCanShowSearchAsOverlay(window.innerWidth); 
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }

  getHeaderClass(): string {

    let styleClass = '';

    if (this.collapsed && this.screenWidth > 766) {
      styleClass = "head-trimmed";
    } else {
      styleClass = "head-md-screen"
    }

    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
}
