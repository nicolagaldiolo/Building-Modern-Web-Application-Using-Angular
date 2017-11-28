"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.passwordStrength = function (control) {
        if (CustomValidators.isEmptyValue(control.value)) {
            return null;
        }
        return control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/) ? null : { 'weakPassword': true };
    };
    CustomValidators.passwordMatcher = function (control) {
        var password = control.get('password').value;
        var confirmPassword = control.get('confirmPassword').value;
        if (CustomValidators.isEmptyValue(password) || CustomValidators.isEmptyValue(confirmPassword)) {
            return null;
        }
        return password === confirmPassword ? null : { 'mismatch': true };
    };
    CustomValidators.isEmptyValue = function (value) {
        return value === null || typeof value === 'string' && value.length === 0;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map