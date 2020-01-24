import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @Output() listCreated = new EventEmitter();
  enteredTitle = "";
    enteredContent = "";

  newList="No Content";
 

  onAddList(){
      const list = {title: this.enteredTitle, content: this.enteredContent};
      
      this.listCreated.emit(list);//emiting our own event....
  }




  constructor() { }

  ngOnInit() {
  }

}
