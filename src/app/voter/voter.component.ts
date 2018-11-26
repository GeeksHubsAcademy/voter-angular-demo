import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "voter",
  templateUrl: "./voter.component.html",
  styleUrls: ["./voter.component.css"]
})
export class VoterComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  vote(agree: boolean) {
    console.log(this.name, agree);
    this.voted.emit(agree);
  }
}
