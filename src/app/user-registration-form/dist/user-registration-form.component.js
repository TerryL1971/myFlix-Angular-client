"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserRegistrationFormComponent = /** @class */ (function () {
    function UserRegistrationFormComponent(fetchApiData, dialogRef, snackBar) {
        this.fetchApiData = fetchApiData;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.userData = {
            Username: '',
            Password: '',
            Email: '',
            Birthday: ''
        };
    }
    UserRegistrationFormComponent.prototype.ngOnInit = function () { };
    // This is the function responsible for sending the form inputs to the backend
    UserRegistrationFormComponent.prototype.registerUser = function () {
        var _this = this;
        this.fetchApiData.userRegistration(this.userData).subscribe(function (result) {
            // Logic for a successful user registration goes here! (To be implemented)
            _this.dialogRef.close(); // This will close the modal on success!
            console.log(result);
            _this.snackBar.open(result, 'OK', {
                duration: 2000
            });
        }, function (result) {
            console.log(result);
            _this.snackBar.open(result, 'OK', {
                duration: 2000
            });
        });
    };
    __decorate([
        core_1.Input()
    ], UserRegistrationFormComponent.prototype, "userData");
    UserRegistrationFormComponent = __decorate([
        core_1.Component({
            selector: 'app-user-registration-form',
            templateUrl: './user-registration-form.component.html',
            styleUrls: ['./user-registration-form.component.scss']
        })
    ], UserRegistrationFormComponent);
    return UserRegistrationFormComponent;
}());
exports.UserRegistrationFormComponent = UserRegistrationFormComponent;

//# sourceMappingURL=user-registration-form.component.js.map
