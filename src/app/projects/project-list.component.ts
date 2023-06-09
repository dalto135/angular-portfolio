import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
    templateUrl: './project-list.component.html',
    styleUrls: ['../pages.css', './project-list.component.css']
})
export class ProjectListComponent {
    errorMessage: string = '';
    sub!: Subscription;

    projects: IProject[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.sub = this.projectService.getProjects().subscribe({
            next: projects => {
                this.projects = projects;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}