import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
    selector:'user-edit',
    templateUrl:'./user-edit.component.html',
    styleUrls:['./user-edit.component.css']
})

export class UserEditComponent implements OnInit{
    user:any=[];
    constructor(private userServive:UserService,private route:ActivatedRoute,private router: Router){

    }
    ngOnInit():void{
      this.getUsers();
    }
    getUsers():void{
        let id = this.route.snapshot.paramMap.get('id');
        this.userServive.searchUser(parseInt(id)).subscribe((item:{})=>{
            this.user=item;
            console.log(this.user)
        });
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
    updateUser():void{
        let id = this.route.snapshot.paramMap.get('id');
        this.userServive.updateUser(parseInt(id),this.user).subscribe((result)=>{
            this.router.navigate(['/user-edit/'+result.id]);
        },(err)=>{
            console.log(err);
        })
    }
    deleteUser():void{
        let id = this.route.snapshot.paramMap.get('id');
        this.userServive.deleteUser(parseInt(id)).subscribe((result)=>{
            this.router.navigate(['/home']);
        },(err)=>{console.log(err)});
    }
    
}