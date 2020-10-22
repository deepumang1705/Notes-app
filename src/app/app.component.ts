import { Component,OnInit } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userModel = new User('', '');
  a = [];
  id:string;
    boolean=true
  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit() {
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => {console.log('Success!', data); this.userModel = new User('',''); this.ngOnInit},
        error => console.error('Error!', error)
      )
  }

ngOnInit() {
  this._enrollmentService.enrollGet()
  .subscribe(
    data => {console.log(data);this.a = data},
    error => console.error('Error!', error)
  )
  }

 delete(id) {
   this._enrollmentService.enrollDelete(id)
   .subscribe(
    data => {console.log(data); this.ngOnInit()},
    error => console.error('Error!', error)
   );
 }

 get(id) {
    console.log()
    this.id=id
    this.boolean=!this.boolean
    this._enrollmentService.enrollGetById(id)
    .subscribe(
      data => {  this.userModel = new User(data.title, data.content);},
      error => console.error('Error!', error)
     );
 }


 edit(){
  this._enrollmentService.enrollPut(this.id,this.userModel)
  .subscribe(
    data => {  this.userModel = new User('', ''); this.boolean=!this.boolean;
    this.ngOnInit()},
    error => console.error('Error!', error)
   );
 }
}

