import { Component, input, output } from "@angular/core";
import {
  ClockArrowDown,
  LucideAngularModule,
  PlaneIcon,
  XIcon,
} from "lucide-angular";
import { TopicState } from "../trainings";

@Component({
  selector: "topic-panel",
  imports: [LucideAngularModule],
  template: `
    <div class="flex items-center gap-x-2">
      <button
        (click)="toggleState('onthefly')"
        class="btn btn-square btn-xs btn-accent"
        [class.btn-soft]="state() !== 'onthefly'"
      >
        <i-lucide [img]="ontheflyIcon" class="size-4" />
      </button>
      <button
        (click)="toggleState('postponed')"
        class="btn btn-square btn-xs btn-accent"
        [class.btn-soft]="state() !== 'postponed'"
      >
        <i-lucide [img]="postponedIcon" class="size-4" />
      </button>
      <button
        (click)="toggleState('deprecated')"
        class="btn btn-square btn-xs btn-error"
        [class.btn-soft]="state() !== 'deprecated'"
      >
        <i-lucide [img]="deprecatedIcon" class="size-4" />
      </button>
    </div>
  `,
})
export class TopicPanel {
  readonly deprecatedIcon = XIcon;
  readonly ontheflyIcon = PlaneIcon;
  readonly postponedIcon = ClockArrowDown;

  markTopic = output<TopicState>();
  state = input<TopicState>("");

  toggleState(state: TopicState) {
    if (this.state() === state) {
      this.markTopic.emit("");
    } else {
      this.markTopic.emit(state);
    }
  }
}
