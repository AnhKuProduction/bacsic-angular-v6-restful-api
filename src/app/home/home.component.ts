import {Component,OnInit} from '@angular/core';
import {Product} from '../product'
import {ProductService} from '../product.service';
import {User} from '../user';
import {UserService} from '../user.service';
@Component({
    selector:'app-section',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
    title = "Content Section"
    products:Product[];
    users:User[];
    constructor(private productService:ProductService,private userServive:UserService){

    }
    ngOnInit():void{
        this.getProducts();
        this.getUsers();
    }
    getProducts():void{
       // this.products = this.productService.getProducts();
       this.productService.getProducts().subscribe(
           products=>this.products=products
       )
    }
    getUsers():void{
        this.userServive.getUsers().subscribe(user=>this.users=user);
    }
    
}