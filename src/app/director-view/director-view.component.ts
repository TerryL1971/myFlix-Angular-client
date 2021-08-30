import { Component, OnInit, Inject } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.scss'],
})
export class DirectorViewComponent implements OnInit {
  /**
   * @param data 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public director: {
      name: string;
      bio: string;
      image: string;
    }
  ) {}

  ngOnInit(): void {}
}
