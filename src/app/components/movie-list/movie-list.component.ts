import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {map} from "rxjs";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  @Input() movies: Movie[] = [];

  ngOnInit(): void {

  }
}
