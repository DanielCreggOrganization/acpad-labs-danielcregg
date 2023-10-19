import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // <-- add RouterModule needed for navigation



@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class NotesPage {
  notes: Observable<string[]>;
  newNote = ''; // Initialize newNote property

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.notes;
  }

  addNote() {
    this.noteService.addNote(this.newNote);
    this.newNote = '';
  }
}
