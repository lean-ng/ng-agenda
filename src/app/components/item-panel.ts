import { Component, input, output } from "@angular/core";
import {
  LucideAngularModule,
  PenIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-angular";
import { ItemState } from "../trainings";

@Component({
  selector: "item-panel",
  imports: [LucideAngularModule],
  template: `
    <div class="flex items-center gap-x-2">
      <button
        (click)="edit.emit()"
        class="btn btn-square btn-xs btn-accent"
        [class.btn-soft]="state() !== 'edited'"
      >
        <i-lucide [img]="editIcon" class="size-4" />
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
export class ItemPanel {
  readonly deprecatedIcon = XIcon;
  readonly editIcon = PenIcon;
  readonly resetIcon = RotateCcwIcon;

  markItem = output<ItemState>();
  state = input<ItemState>("");

  toggleState(state: ItemState) {
    if (this.state() === state) {
      this.markItem.emit("");
    } else {
      this.markItem.emit(state);
    }
  }

  edit = output();
}
