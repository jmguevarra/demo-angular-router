import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //route.snapshot.param - is a default but not asynchronously loaded data. 
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    } 
    //route.params - is an observable to load data asynchronously when data changed.
    this.route.params.subscribe((param: Params)=>{
        this.user.id = param['id'];
        this.user.name = param['name'];
    });
  }

}
