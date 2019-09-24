# Angular-Practice Notes:

### Bindable Properties and Events
How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to `console.log()`  the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for `YOUR_ELEMENT properties`  or `YOUR_ELEMENT events`  should yield nice results.

### Important: FormsModule is Required for Two-Way-Binding!
Important: For Two-Way-Binding to work, you need to enable the `ngModel`  directive. This is done by adding the `FormsModule`  to the `imports[]`  array in the AppModule.

You then also need to add the import from `@angular/forms`  in the app.module.ts file:

`import { FormsModule } from '@angular/forms';`

### Info about Renderer
We can use the Angular Renderer class to change the style of a HTML element. As a good practice, we should use the Renderer for any DOM manipulations.

Of course, we can do more than simply change the styling of an element via setStyle(). Learn more about the available Renderer methods [here](https://angular.io/api/core/Renderer2).

### Observables
Observables are constructs to which you subscribe to be informed about the changes in data because remember, observables are that stream of data and whenever a new data piece is emitted, our subscription will know about it.
