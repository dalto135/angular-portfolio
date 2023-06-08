import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class Header {
    headshot = '../../api/projects/images/headshot.jpg';
    // parent = document.querySelector("html");
    constructor(private parent: ElementRef) {}

    setTheme(): void {
        let date = new Date();
        let time = date.getHours();
    
        if (time >= 8 && time < 21) {
        // this.parent.nativeElement.setAttribute("id", "light");
        }
    }
    
    // setTheme();

    toggleTheme(): void {
        // this.parent.nativeElement.setAttribute('id', 'light');
        if (this.parent.nativeElement.getAttribute("id") === "light") {
            this.parent.nativeElement.removeAttribute("id");
        }
        else {
            this.parent.nativeElement.setAttribute("id", "light");
        }
    }
}