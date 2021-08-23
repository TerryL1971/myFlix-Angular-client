import { Component, OnInit, Inject } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-description-view',
  templateUrl: './movie-description-view.component.html',
  styleUrls: ['./movie-description-view.component.scss']
})
export class MovieDescriptionViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      description: string;
    }
  ) { }

  ngOnInit(): void {
  }

}