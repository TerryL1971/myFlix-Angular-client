import { Component, OnInit, Inject } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss'],
})
export class GenreViewComponent implements OnInit {
  /**
   * @param data 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public genre: {
      name: string;
      description: string;
    }
  ) {}

  ngOnInit(): void {}
}
