import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp={"No":"","Name":"","Address":""};
  constructor(private service: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
     let No = result.get("No");
     let observable = this.service.selectByNo(No);
     observable.subscribe((data)=>{
      this.emp = data[0];
     })
    })
  }
  update()
  {
   let observableU = this.service.update(this.emp);
   observableU.subscribe((resultU)=>{
     console.log(resultU);
     this.router.navigate(['/home']);
   })
  }

}
