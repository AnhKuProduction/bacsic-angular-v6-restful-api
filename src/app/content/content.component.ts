import {Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PRODUCTS} from '../mock-product';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
    selector:'app-content',
    templateUrl:'./content.component.html',
    styleUrls:['./content.component.css']
})

export class ContentComponent implements OnInit{
    title=""
    link:number=0;
    user:any=[];
    constructor(private route:ActivatedRoute,private userServive:UserService){
        
    }
    ngOnInit():void{
         //const id = +this.route.snapshot.paramMap.get('tieude');
         this.SearchUser();
    }
    SearchUser(){
        
        this.route.paramMap.subscribe(params => {
            this.link = parseInt(params.get("link"));
            this.userServive.searchUser(this.link).subscribe((item:{})=>{
               this.user=item;
            });
           
        });
    }
}