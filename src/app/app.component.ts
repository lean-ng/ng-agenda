import {
  Component,
  computed,
  signal,
  viewChild,
  ElementRef,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TopicState, Topic, trainings, ItemState, Item } from "./trainings";
import { TopicPanel } from "./components/topic-panel";
import { CheckIcon, LucideAngularModule } from "lucide-angular";
import { ItemPanel } from "./components/item-panel";

const SELECTED_TRAINING = 0;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [LucideAngularModule, TopicPanel, ItemPanel, FormsModule],
})
export class AppComponent {
  readonly checkIcon = CheckIcon;

  selectedTraining = trainings[SELECTED_TRAINING];
  title = this.selectedTraining.title;

  topics = signal(
    (() => {
      const agenda = localStorage.getItem("ng-agenda");
      if (agenda !== null) {
        return JSON.parse(agenda) as Topic[];
      }
      const topics = this.selectedTraining.topics;
      localStorage.setItem("ng-agenda", JSON.stringify(topics));
      return topics;
    })(),
  );

  stats = computed(() => {
    const topicsTodo = this.topics().filter(
      (t) => t.state !== "deprecated" && !t.done,
    );
    const itemsTodo = topicsTodo.reduce(
      (count, t) =>
        t.items.filter((it) => it.state !== "deprecated" && !it.done).length +
        count,
      0,
    );
    return { leftTopics: topicsTodo.length, leftItems: itemsTodo };
  });

  currentTopics = computed(() =>
    this.topics()
      .filter((t) => t.state === "")
      .toSorted((a, b) => a.nr - b.nr),
  );

  ontheflyTopics = computed(() =>
    this.topics()
      .filter((t) => t.state === "onthefly")
      .toSorted((a, b) => a.nr - b.nr),
  );

  postponedTopics = computed(() =>
    this.topics()
      .filter((t) => t.state === "postponed")
      .toSorted((a, b) => a.nr - b.nr),
  );

  deprecatedTopics = computed(() =>
    this.topics()
      .filter((t) => t.state === "deprecated")
      .toSorted((a, b) => a.nr - b.nr),
  );

  syncTraining() {
    const topics = this.selectedTraining.topics;
    localStorage.setItem("ng-agenda", JSON.stringify(topics));
    this.topics.update(() => [...this.selectedTraining.topics]);
  }

  markTopic(topic: Topic, state: TopicState) {
    this.topics.update((topics) => {
      const updatedTopics = topics.map((t) =>
        t === topic ? { ...t, state } : t,
      );
      localStorage.setItem("ng-agenda", JSON.stringify(updatedTopics));
      return updatedTopics;
    });
  }

  markItem(topic: Topic, item: Item, state: ItemState) {
    item.state = state;
    topic.done = !topic.items
      .filter((it) => it.state !== "deprecated")
      .some((it) => !it.done);
    this.topics.update((topics) => {
      localStorage.setItem("ng-agenda", JSON.stringify(topics));
      return [...topics];
    });
  }

  toggleItemDone(topic: Topic, item: Item) {
    item.done = !item.done;
    topic.done = !topic.items
      .filter((it) => it.state !== "deprecated")
      .some((it) => !it.done);
    this.topics.update((topics) => {
      localStorage.setItem("ng-agenda", JSON.stringify(topics));
      return [...topics];
    });
  }

  editDlg = viewChild<ElementRef<HTMLDialogElement>>("dialog");
  editText = "";
  selectedItem = signal<Item>(undefined as never);

  editItem(item: Item) {
    this.selectedItem.update(() => item);
    this.editText = item.editedText ?? item.text;
    this.editDlg()?.nativeElement.showModal();
  }

  commitEdit() {
    const item = this.selectedItem();
    item.editedText = this.editText;
    item.state = "edited";
    this.topics.update((topics) => {
      localStorage.setItem("ng-agenda", JSON.stringify(topics));
      return [...topics];
    });
    this.editDlg()?.nativeElement.close();
  }

  resetEdit(item: Item) {
    item.state = "";
    item.editedText = undefined;
    this.topics.update((topics) => {
      localStorage.setItem("ng-agenda", JSON.stringify(topics));
      return [...topics];
    });
  }
}
