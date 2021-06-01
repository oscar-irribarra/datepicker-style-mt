import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myDateValue: Date = new Date();
  minDate: Date = new Date();

  config: any = {
    dateInputFormat: 'DD/MM/YYYY',
    containerClass: 'theme-white',
    showWeekNumbers: false
  };

  constructor(private localeService: BsLocaleService) {
    this.localeService.use('es');
  }

  ngOnInit() {
    this.minDate.setDate(this.minDate.getDate() - 36500);
  }
}
