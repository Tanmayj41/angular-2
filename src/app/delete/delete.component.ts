import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
    let No = result.get("No");
    let observable = this.service.delete(No);
    observable.subscribe((resultd)=>{
      console.log(resultd);
      this.router.navigate(['/home']);
    })
    })
    }

}
