import { Component, Input } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class Project {
    @Input() project: any;
}