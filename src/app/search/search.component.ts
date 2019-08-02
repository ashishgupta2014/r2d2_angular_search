import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  result: any;
  queryField: FormControl = new FormControl();
  constructor(private _apiService: SearchService) { }

  ngOnInit() {

  }

  getDataHandler() {
    debugger;

    this._apiService.search(this.result).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
