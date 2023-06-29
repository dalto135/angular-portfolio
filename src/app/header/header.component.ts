import { Component, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class Header {
    headshot = '../../../api/projects/images/headshot.jpg';

    constructor(@Inject(DOCUMENT) private parent: Document) {}

    setTheme(): void {
        let date = new Date();
        let time = date.getHours();
    
        if (time >= 8 && time < 21) {
            this.parent.documentElement.setAttribute("id", "light");
        }
    }

    ngOnInit(): void {
        this.setTheme();
    }

    toggleTheme(): void {
        if (this.parent.documentElement.getAttribute("id") === "light") {
            this.parent.documentElement.removeAttribute("id");
        }
        else {
            this.parent.documentElement.setAttribute("id", "light");
        }
    }
}