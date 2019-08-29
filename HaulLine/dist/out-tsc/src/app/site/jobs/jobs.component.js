import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let JobsComponent = class JobsComponent {
    constructor() { }
    ngOnInit() {
        this.jobsList = [
            {
                name: 'Chandlee and Sons Construction Comp LLC',
                currentDistance: '25.6mi',
                description: 'Removing debris from jobsite after home demolition. Approxmately 2500lbs. ',
                pay: 1375
            },
            {
                name: 'Ginger Ragsdale',
                currentDistance: '31.7mi',
                description: 'Removing debris from jobsite after home demolition. Approxmately 2500lbs. ',
                pay: 1375
            },
            {
                name: 'Chandlee and Sons Construction Comp LLC',
                currentDistance: '17',
                description: 'Removing debris from jobsite after home demolition. Approxmately 2500lbs. ',
                pay: 1375
            },
            {
                name: 'Chandlee and Sons Construction Comp LLC',
                currentDistance: '25.6m',
                description: 'Removing debris from jobsite after home demolition. Approxmately 2500lbs. ',
                pay: 1375
            }
        ];
    }
};
JobsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-jobs',
        templateUrl: './jobs.component.html',
        styleUrls: ['./jobs.component.less']
    })
], JobsComponent);
export { JobsComponent };
//# sourceMappingURL=jobs.component.js.map