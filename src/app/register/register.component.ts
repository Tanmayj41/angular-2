import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp= {"No":"","Name":"","Address":""};
  constructor(private service: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() 
  {}
    insert()
    {
      let observable = this.service.insert(this.emp);
      observable.subscribe((resultI)=>{
        console.log(resultI);
        this.router.navigate(['/home']);
      })
    }
}
