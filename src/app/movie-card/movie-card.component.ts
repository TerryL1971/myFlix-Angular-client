import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MovieDescriptionViewComponent } from '../movie-description-view/movie-description-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];

constructor(
  public fetchApiData: FetchApiDataService,
  public dialog: MatDialog,
  public snackBar: MatSnackBar
) { }

ngOnInit(): void {
  this.getMovies();
}

// Gets Movie API
getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
    this.movies = resp;
    console.log(this.movies);
    return this.movies;
  });
}
//open movie details
openGenreViewDialog(name: string, description: string): void {
  this.dialog.open(GenreViewComponent, {
    data: { name, description },
    width: '300px',
  });
}

//open movie details
openDirectorViewDialog(name: string, bio: string, image: string): void {
  this.dialog.open(DirectorViewComponent, {
    data: { name, bio, image },
    width: '300px',
  });
}

//open movie description
openMovieDescriptionViewDialog(description: string): void {
  this.dialog.open(MovieDescriptionViewComponent, {
    data: { description },
    width: '300px',
  });
}
}
