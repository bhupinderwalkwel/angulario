import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    '<div *ngIf="myObject then Mytemp1 else  Mytemp2"></div><ng-template #Mytemp1>I am actually true</ng-template><ng-template #Mytemp2>I am actually false</ng-template>',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  myObject = false;
}
