import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
@Component({
    selector:'user-add',
    templateUrl:'./user-add.component.html',
    styleUrls:['./user-add.component.css']
})

export class UserAddComponent{
    user:any={};
    constructor(private userService:UserService,private route:ActivatedRoute,private router: Router){}
    addUser():void{
        this.userService.addUser(this.user).subscribe((result)=>{
          //  console.log(result);
           this.router.navigate(['/'+result.id]);
        },(err)=>{
            console.log(err);
        })
        
    }
    readUrl(event:any):void{
        if(event.target.files && event.target.files[0]){
            var reader = new FileReader();
            reader.onload = (event:ProgressEvent)=>{
                this.user.avatar = (<FileReader>event.target).result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}