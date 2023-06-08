import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IProject } from "./project";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projectUrl = 'api/projects/projects.json';

    constructor(private http: HttpClient) {}

    getProjects(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.projectUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it accordingly.
            errorMessage = `An error occured: ${err.error.message}`; 
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}