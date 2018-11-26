import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "We you need you 👉";
  agreed = 0;
  disagreed = 0;
  voters = ["superman", "spiderman", "deadpool"];
  onVoted(event) {
    console.log("onVoted", event);
    if (event) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
