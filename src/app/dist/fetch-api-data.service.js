"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/internal/operators");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_2 = require("rxjs/operators");
var apiUrl = 'https://myflix-app-2021.herokuapp.com/';
var UserRegistrationService = /** @class */ (function () {
    function UserRegistrationService(http) {
        this.http = http;
    }
    UserRegistrationService.prototype.userRegistration = function (userDetails) {
        console.log(userDetails);
        return this.http
            .post(apiUrl + 'users', userDetails)
            .pipe(operators_1.catchError(this.handleError));
    };
    UserRegistrationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + "," + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Something went wrong - please try again later!');
    };
    // User login
    UserRegistrationService.prototype.userLogin = function (userDetails) {
        console.log(userDetails);
        return this.http
            .post(apiUrl + 'login', userDetails)
            .pipe(operators_1.catchError(this.userLoginHandleError));
    };
    UserRegistrationService.prototype.userLoginHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error logging in, please try again!');
    };
    // Get all movies
    UserRegistrationService.prototype.getAllMovies = function () {
        var token = localStorage.getItem('token');
        return this.http
            .get(apiUrl + 'movies', {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.handleError));
    };
    // Non-typed response extraction
    UserRegistrationService.prototype.extractResponseData = function (res) {
        var body = res;
        return body || {};
    };
    // Get movie by title
    UserRegistrationService.prototype.getMovieByTitle = function () {
        var token = localStorage.getItem('token');
        return this.http
            .get(apiUrl + 'movies/:Title', {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.getMovieByTitleHandleError));
    };
    UserRegistrationService.prototype.getMovieByTitleHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error retieving movie details');
    };
    // Get director
    UserRegistrationService.prototype.getDirector = function () {
        var token = localStorage.getItem('token');
        return this.http
            .get(apiUrl + 'movies/directors/:Name', {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.getDirectorHandleError));
    };
    UserRegistrationService.prototype.getDirectorHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error retieving director view');
    };
    // Get genre
    UserRegistrationService.prototype.getGenre = function () {
        var token = localStorage.getItem('token');
        return this.http
            .get(apiUrl + 'movies/genres/:Name', {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.getGenreHandleError));
    };
    UserRegistrationService.prototype.getGenreHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error retieving genre view');
    };
    // Get user
    UserRegistrationService.prototype.getUser = function (user) {
        var token = localStorage.getItem('token');
        return this.http
            .get(apiUrl + ("users/" + user), {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.getUserHandleError));
    };
    UserRegistrationService.prototype.getUserHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error retrieving user account data');
    };
    // Get favorite movies for a user
    UserRegistrationService.prototype.getFavorite = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        return this.http
            .get(apiUrl + ("users/" + user + "/favorites/" + id), {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.addFavoriteHandleError));
    };
    UserRegistrationService.prototype.getFavoriteHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error adding movie to favorites list');
    };
    // Add movies to favorites
    UserRegistrationService.prototype.addFavorite = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        return this.http
            .post(apiUrl + ("users/" + user + "/favorites/" + id), id, {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.addFavoriteHandleError));
    };
    UserRegistrationService.prototype.addFavoriteHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error adding movie to favorites list');
    };
    // Edit user
    UserRegistrationService.prototype.updateUser = function (userDetails) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        return this.http
            .put(apiUrl + ("users/" + user), userDetails, {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.editUserHandleError));
    };
    UserRegistrationService.prototype.editUserHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error updating user info');
    };
    // Delete user
    UserRegistrationService.prototype.deleteUser = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        return this.http["delete"](apiUrl + ("users/" + user), {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.deleteUserHandleError));
    };
    UserRegistrationService.prototype.deleteUserHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error deleting profile');
    };
    // Delete a movie from the favorite movies
    UserRegistrationService.prototype.removeFavorite = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        return this.http["delete"](apiUrl + ("users/" + user + "/favorites/" + id), {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + token
            })
        })
            .pipe(operators_2.map(this.extractResponseData), operators_1.catchError(this.removeFavoriteHandleError));
    };
    UserRegistrationService.prototype.removeFavoriteHandleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error("Error Status code " + error.status + ", " + ("Error body is: " + error.error));
        }
        return rxjs_1.throwError('Error adding movie to favorites list');
    };
    UserRegistrationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserRegistrationService);
    return UserRegistrationService;
}());
exports.UserRegistrationService = UserRegistrationService;

//# sourceMappingURL=fetch-api-data.service.js.map
