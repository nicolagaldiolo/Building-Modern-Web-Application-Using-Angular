"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.passwordStrength = function (control) {
        if (CustomValidators.isEmptyValue(control.value)) {
            return null;
        }
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map