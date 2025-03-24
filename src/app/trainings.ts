export type TopicState = "" | "onthefly" | "deprecated" | "postponed";
export type ItemState = "" | "deprecated" | "edited";

export type Item = {
  id: number;
  text: string;
  state: ItemState;
  nr: number;
  done?: boolean;
  priority?: boolean;
  editedText?: string;
};

export type Topic = {
  id: number;
  title: string;
  state: TopicState;
  items: Item[];
  nr: number;
  done?: boolean;
};

export type Training = {
  title: string;
  topics: Topic[];
};

export const trainings: Training[] = [
  {
    title: "Angular Kompakt",
    topics: [
      {
        title: "Grundlagen von TypeScript und ECMAScript 6 (ES6)",
        state: "",
        id: 1,
        nr: 1,
        items: [
          {
            text: "TypeScript-Installation, Konfiguration und Kompilierung",
            state: "",
            id: 1,
            nr: 1,
          },
          {
            text: "Typ-Annotationen",
            state: "",
            id: 2,
            nr: 2,
          },
          {
            text: "Klassen",
            state: "",
            id: 3,
            nr: 3,
          },
          {
            text: "Scoping mit let-, var- und const-Keywords",
            state: "",
            id: 4,
            nr: 4,
          },
          {
            text: "Arrow-Funktionen",
            state: "",
            id: 5,
            nr: 5,
          },
          {
            text: "ES-Module",
            state: "",
            id: 6,
            nr: 6,
          },
          {
            text: "Dekoratoren",
            state: "",
            id: 7,
            nr: 7,
          },
          {
            text: "Template-Literale",
            state: "",
            id: 8,
            nr: 8,
          },
          {
            text: "Spread-Syntax und Rest Parameter",
            state: "",
            id: 9,
            nr: 9,
          },
          {
            text: "Umstrukturierung",
            state: "",
            id: 10,
            nr: 10,
          },
        ],
      },
      {
        title: "Übersicht über Angular",
        state: "",
        nr: 2,
        id: 2,
        items: [
          {
            text: "Vorteile des Programmierens mit Angular",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Verständnis der Angular-Versionen",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Single-page Web Application Architectures vs. Traditional Server-side Web Application Architectures",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Angular Style Guide",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Architektur von Angular",
            state: "",
            nr: 5,
            id: 5,
          },
          {
            text: "Angular im Vergleich zu anderen JavaScript-Bibliotheken und Frameworks (React, VueJS, etc...)",
            state: "",
            nr: 6,
            id: 6,
          },
          {
            text: "Ihre erste Angular-Anwendung",
            state: "",
            nr: 7,
            id: 7,
          },
        ],
      },
      {
        title: "Komponenten",
        state: "",
        nr: 3,
        id: 3,
        items: [
          {
            text: "Verstehen von Komponenten",
            state: "",
            id: 1,
            nr: 1,
          },
          {
            text: "Komponenteneigenschaften und Methoden",
            state: "",
            id: 2,
            nr: 2,
          },
          {
            text: "emplates: Inline, Multi-line und Extern mit Komponenten-relativen Pfaden",
            state: "",
            id: 3,
            nr: 3,
          },
        ],
      },
      {
        title: "Angular-Module (NgModule)",
        state: "",
        nr: 4,
        id: 4,
        items: [
          {
            text: "Angular-Module vs. ES-Module",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Organisieren des Codes in Feature-Modulen",
            state: "",
            nr: 2,
            id: 2,
          },
        ],
      },
      {
        title: "Projekt einrichten (Verwendung der Angular CLI)",
        state: "",
        nr: 5,
        id: 5,
        items: [
          {
            text: "Angular CLI-Funktionen",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Erstellen eines neuen Projekts (mit neuen CLI-Eingabeaufforderungen)",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Code generieren",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Anpassen der Angular CLI",
            state: "",
            nr: 4,
            id: 4,
          },
        ],
      },
      {
        title: "Daten-Bindung",
        state: "",
        nr: 6,
        id: 6,
        items: [
          {
            text: "Interpolation",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Bindung von Eigenschaften",
            state: "",
            nr: 2,
            id: 2,
          },

          {
            text: "Ereignisbindung",
            state: "",
            nr: 3,
            id: 3,
          },

          {
            text: "Bidirektionale Datenbindung",
            state: "",
            nr: 4,
            id: 4,
          },
        ],
      },
      {
        title: "Direktives",
        state: "",
        nr: 7,
        id: 7,
        items: [
          {
            text: "trukturell: ngFor, ngIf, ngSwitch",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Attribut: ngClass, ngStyle",
            state: "",
            nr: 2,
            id: 2,
          },
        ],
      },
      {
        title: "Pipes",
        state: "",
        nr: 8,
        id: 8,
        items: [
          {
            text: "Built-in Pipes: Verwenden, Parameterübergabe, Verkettung",
            state: "",
            nr: 1,
            id: 1,
          },
        ],
      },
      {
        title: "Fortgeschrittene Komponenten",
        state: "",
        nr: 9,
        id: 9,
        items: [
          {
            text: "Komponentenkommunikation mit @Input, @Output",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Komponenten-Architektur",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Komponenten-Stile",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Lifecycle Hooks für Komponenten",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Evaluierung von UI-Komponenten-Frameworks & Bibliotheken",
            state: "",
            nr: 5,
            id: 5,
          },
        ],
      },
      {
        title: "Services & Dependency Injection",
        state: "",
        nr: 10,
        id: 10,
        items: [
          {
            text: "Verwendung eines Service für den Zugriff auf Daten",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Verwendung eines Service, um Geschäftslogik zu kapseln",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Verstehen des Umfangs von Diensten",
            state: "",
            nr: 3,
            id: 3,
          },
        ],
      },
      {
        title: "Injektion von Abhängigkeiten",
        state: "",
        nr: 11,
        id: 11,
        items: [
          {
            text: "Verständnis von Dependency Injection",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Angulars System zur Einspritzung von Abhängigkeiten",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Registrieren",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Injizieren",
            state: "",
            nr: 4,
            id: 4,
          },
        ],
      },
      {
        title: "Modellgesteuerte Formulare (Reactive Forms)",
        state: "",
        nr: 12,
        id: 12,
        items: [
          {
            text: "Importieren des ReactiveFormsModuls",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "FormControl, FormGroup und AbstractControl",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Binden von DOM-Elementen an FormGroups und FormControls",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Validierungsregeln, Meldungen und Stile",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Refactoring von Reactive Forms zur Wiederverwendung",
            state: "",
            nr: 5,
            id: 5,
          },
          {
            text: "Benutzerdefinierte Validatoren",
            state: "",
            nr: 6,
            id: 6,
          },
        ],
      },
      {
        title:
          "Kommunikation mit dem Server unter Verwendung des HttpClient-Dienstes",
        state: "",
        nr: 13,
        id: 13,
        items: [
          {
            text: "Entscheiden zwischen Promises oder Observables (RxJS)",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Eine HTTP-GET-Anfrage stellen",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Senden von Daten an den Server mit Http POST- und PUT-Anfragen",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Ausstellen einer HTTP DELETE-Anforderung",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Abfangen von Requests und Responses",
            state: "",
            nr: 5,
            id: 5,
          },
        ],
      },
      {
        title: "Router",
        state: "",
        nr: 14,
        id: 14,
        items: [
          {
            text: "Importieren des RouterModuls",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Routes konfigurieren",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Komponenten mit einem RouterOutlet anzeigen",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Deklarativ navigieren mit RouterLink",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Navigieren mit Code unter Verwendung des Routers",
            state: "",
            nr: 5,
            id: 5,
          },
          {
            text: "Zugriff auf Parameter mit ActivatedRoute",
            state: "",
            nr: 6,
            id: 6,
          },
        ],
      },
      {
        title: "Bereitstellen einer Angular Application to Production",
        state: "",
        nr: 15,
        id: 15,
        items: [
          {
            text: "Erstellen einer Anwendung mit der Angular CLI",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Differenzielles Laden: Erstellen eines modernen Builds (ES2015) und eines Legacy-Builds (ES5)",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Bereitstellen auf einem Webserver",
            state: "",
            nr: 3,
            id: 3,
          },
        ],
      },
      {
        title: "Ivy: Neue Compilation & Rendering Pipeline",
        state: "",
        nr: 16,
        id: 16,
        items: [
          {
            text: "Verstehen von Ivy",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Ivy-Ziele",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Vorteile von Ivy",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Ivy-Bundle Sizes",
            state: "",
            nr: 4,
            id: 4,
          },
        ],
      },
      {
        title: "Unit-Tests",
        state: "",
        nr: 17,
        id: 17,
        items: [
          {
            text: "Tools: Jasmine, Karma",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Jasmine-Syntax: describe, it, beforeEach, afterEach, matchers",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Setup und der erste Test",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Test-Terminologie: Mock, Stub, Spy, Fakes",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Angular Test-Terminologie: TestBed, ComponentFixture, debugElement, async, fakeAsync, tick, inject",
            state: "",
            nr: 5,
            id: 5,
          },
          {
            text: "Einfacher Komponententest",
            state: "",
            nr: 6,
            id: 6,
          },
          {
            text: "Erkennen von Komponentenänderungen",
            state: "",
            nr: 7,
            id: 7,
          },
          {
            text: "Testen einer Komponente mit Eigenschaften ( Inputs ) und Ereignissen ( Outputs )",
            state: "",
            nr: 8,
            id: 8,
          },
          {
            text: "Testen einer Komponente, die den Router verwendet",
            state: "",
            nr: 9,
            id: 9,
          },
          {
            text: "Testen einer Komponente, die von einem Dienst abhängt",
            state: "",
            nr: 10,
            id: 10,
          },
          {
            text: "Testen eines Services und Mocking der HTTP Requests",
            state: "",
            nr: 11,
            id: 11,
          },
          {
            text: "Testen einer Pipe",
            state: "",
            nr: 12,
            id: 12,
          },
        ],
      },
      {
        title: "RxJS und Observables",
        state: "",
        nr: 18,
        id: 18,
        items: [
          {
            text: "Was ist eine Observable?",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Erstellen von Observables",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Was ist ein Observer?",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "Observer Beispiel",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Operatoren: map, switchMap, debounceTime, distinctUntilChanged",
            state: "",
            nr: 5,
            id: 5,
          },
          {
            text: "Praktische Anwendung der Verwendung von RxJS",
            state: "",
            nr: 6,
            id: 6,
          },
          {
            text: "Subjekt",
            state: "",
            nr: 7,
            id: 7,
          },
          {
            text: "Subjekt Example",
            state: "",
            nr: 8,
            id: 8,
          },
          {
            text: "EventEmitter oder Observable",
            state: "",
            nr: 9,
            id: 9,
          },
        ],
      },
      {
        title: "Security",
        state: "",
        nr: 19,
        id: 19,
        items: [
          {
            text: "Best Practices",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Verhindern von Cross-Site Scripting (XSS)",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "Trusting values mit dem DOMSanitizer",
            state: "",
            nr: 3,
            id: 3,
          },
          {
            text: "HTTP-Angriffe (CSRF und CSSI)",
            state: "",
            nr: 4,
            id: 4,
          },
          {
            text: "Authentifizierung mit JSON-Web-Tokens (JWT)",
            state: "",
            nr: 5,
            id: 5,
          },
          {
            text: "Autorisierung: Router-Guards",
            state: "",
            nr: 6,
            id: 6,
          },
        ],
      },
      {
        title: "Erkennung von Änderungen",
        state: "",
        nr: 20,
        id: 20,
        items: [
          {
            text: "Verständnis für Zone.js und Change Detection",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Change Detection Strategies Default und OnPush",
            state: "",
            nr: 2,
            id: 2,
          },
        ],
      },
      {
        title: "Erweitertes Angular CLI",
        state: "",
        nr: 21,
        id: 21,
        items: [
          {
            text: "Anpassen eines Builds mit Builder-APIs in der CLI",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Erzeugen von Web Workers",
            state: "",
            nr: 2,
            id: 2,
          },
        ],
      },
      {
        title: "Erweitertes Routing",
        state: "",
        nr: 22,
        id: 22,
        items: [
          {
            text: "Lazy-Loading von Angular-Modulen (mit dynamischen Importen)",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Nested oder Child Routes",
            state: "",
            nr: 2,
            id: 2,
          },
        ],
      },
      {
        title: "Erweiterte Dependency Injection",
        state: "",
        nr: 23,
        id: 23,
        items: [
          {
            text: "Provider",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Hierarchische Injection",
            state: "",
            nr: 2,
            id: 2,
          },
          {
            text: "providedIn-Optionen: root, module, platform, any",
            state: "",
            nr: 3,
            id: 3,
          },
        ],
      },
      {
        title: "Pipes",
        state: "",
        nr: 24,
        id: 24,
        items: [
          {
            text: "Erstellen einer benutzerdefinierten Pipe mit PipeTransform",
            state: "",
            nr: 1,
            id: 1,
          },
          {
            text: "Verstehen von Pure und Impure Pipes",
            state: "",
            nr: 2,
            id: 2,
          },
        ],
      },
    ],
  },
];
