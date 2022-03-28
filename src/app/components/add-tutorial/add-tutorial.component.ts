import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private tutorialService: TutorialService) { }
  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,

  }; // this is the method that is called when the form is submitted
    this.tutorialService.create(data)
    .subscribe({ // this is the method that is called when the form is submitted
      next: (res) => {  // this is the method that is called when the form is submitted
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e) // this is the method that is called when the form is submitted

    });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
