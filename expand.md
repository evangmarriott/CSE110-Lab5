# Expand

**1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections?**

IDs and classes serve as the contract between HTML, CSS, and JavaScript. If a CSS selector targets `.btn-primary` and a JavaScript event listener queries `.btn-primary`, renaming that class in HTML silently breaks both. Thoughtful, descriptive names make this contract explicit and stable — a class like `.volume-icon` clearly communicates its purpose to all three layers, whereas a generic `.img2` does not. Consistent naming also prevents accidental collisions where a style rule or script unintentionally affects elements it was never meant to target.

**2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?**

Data attributes (`data-*`) are custom HTML attributes that let you embed extra information directly on an element without affecting presentation. They are useful for storing state or metadata that JavaScript needs without adding hidden inputs or cluttering the DOM with non-standard attributes. You access them via `element.dataset.attributeName` in JavaScript (e.g., `data-user-id="42"` becomes `element.dataset.userId`). The implication around microdata is that `data-*` attributes are purely for author use and are ignored by search engines and accessibility tools, whereas microdata formats like schema.org use dedicated attributes (`itemprop`, `itemtype`) that are understood by crawlers. Mixing the two carelessly can lead to confusion about which attributes carry semantic meaning for machines.

**3. What is a DOM fragment? Why are they powerful?**

A DocumentFragment is a lightweight, in-memory container for DOM nodes that is not attached to the live document tree. You can build up a subtree inside a fragment — appending many child nodes — and then insert the entire fragment into the document in a single operation. This is powerful because manipulating the live DOM triggers reflows and repaints; by batching all changes inside a fragment first and inserting once, you minimize those expensive layout recalculations and get significantly better performance when building large lists or tables dynamically.

**4. What is the point of a "Virtual DOM"? What do you gain? What do you lose?**

A Virtual DOM is an in-memory JavaScript representation of the real DOM. When state changes, the framework re-renders the virtual tree, diffs it against the previous version, and applies only the minimal set of real DOM mutations needed. You gain predictable, declarative UI updates — you describe what the UI should look like for a given state and the framework figures out how to get there efficiently. You lose some raw performance overhead because maintaining the virtual tree and running the diff algorithm has a non-zero cost. For very simple or infrequently-updated UIs, direct DOM manipulation can actually be faster; the Virtual DOM pays off most when there are frequent, complex state changes.

**5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?**

`class` is a reserved keyword in JavaScript (used for ES6 class declarations), so it cannot be used as a property name in the dot-notation form `element.class` without a syntax conflict. To avoid this collision, the DOM specification maps the HTML `class` attribute to the JavaScript property `className`. The same principle applies to the `for` attribute on `<label>`, which becomes `htmlFor` in JavaScript for the same reason (`for` is a reserved word).

**6. What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?**

`onclick` is an event handler property: each element has exactly one, so assigning a new function overwrites any previous one. It is simple to write but brittle in larger codebases where multiple scripts might want to respond to the same click. `addEventListener()` allows multiple independent listeners to be registered for the same event on the same element without any of them overwriting the others. It also supports options like `{ once: true }` and `{ capture: true }` for more fine-grained control, and paired with `removeEventListener()` it allows clean teardown. The trade-off is slightly more verbose syntax. For simple, one-off interactions `onclick` is fine; for anything requiring composability or cleanup, `addEventListener` is the better choice.
