# Using Plan

Plan is the name of the reactive system commonly used for defining UI components using JSON within a JavaScript module.
*Plan* is also used to refer to a specific group of components using this system.  
> [!WARNING] Plan can only be used with JavaScript apps, not HTML documents.

> Plans should only be used to create complex windows. Simple alert dialogs, prompts, etc can be created using invocables.  
> See the UI section for that.

At the highest level, a plan is a plain old object.  
It is very similar to HTML. Here is a very simple comparison of plan to HTML. This example is taken from the TextArea app.  
The following plan:
```js
const id = "app__text__2"
const state = {
    monospace: true,
    spellcheck: true,
    wrap: true,
}
app.file = //bleh, file here
const textareaEl;

// PLAN
{
    tag: "textarea",
    id: `${app.id}__textarea`,
    class: { "font-mono": state.monospace },
    spellcheck: state.spellcheck,
    wrap: state.wrap ? "soft" : "off",
    readonly: Boolean(app.file),
    aria: { busy: Boolean(app.file) },
    created(el) {
      textareaEl = el
    },
}
```
could render the following HTML:
```html
<textarea id="app__text__2__textarea" class="font-mono" spellcheck="false" wrap="soft" autocomplete="off" autocapitalize="none" autocorrect="off" translate="no"></textarea>
```

## Format
Tag is a required element, but you do not need to include an HTML tag.
Rather you may use a css class such as the following:
```js
tag: ".flex-rows"
```

There will be a sys42 CSS reference soon.  

All other properties on the object can be their HTML equivalents. When dealing with properties with dashes (aria-hidden, data-url, etc), put the items into nested objects. See the example above with aria-busy.  
You can embed plan components into other plan components by using the `content[]` property. While you can only have one root node, you may have as many children as you'd like.

Plan is more complex than most people realize.
It supports conditionals, with "if" being a valid property. If the statement in `if` evaluates to false, the component will not render.
There are a variety of use cases for this. 

## Quirks
* If a *plan* element has the HTML equivalent of a *data-no-render* property, the plan component will not render.
* This documentation lies a bit for the sake of consistency. *A plan does not necessarily have to be an object.* It can be a string, number, function, object or an array.
  * "---" - Plan will render an `hr` element
  * starts with "%md " - Plan will render the rest of the string in Markdown.
  * String - If the (parent?) element is a `button` or `label`, Plan will append the string in a span element
  * String - in all other cases, Plan will simply append the string as-is
  * Number - Plan will convert to string, and append as-is.
  * Function - Plan will (synchronously) execute the function and render its return value
  * Object - already explained
  * Array - will render each Plan in the array.
* *Documentation note: plan rendering logic is in `/42/api/gui/render.js`*

## Known property list
| Property      | Type                                                | Description                                              |
|---------------|-----------------------------------------------------|----------------------------------------------------------|
| tag           | string                                              |                                                          |
| state         | any                                                 |                                                          |
| computed      | any                                                 |                                                          |
| label         | Plan                                                |                                                          |
| list          |                                                     |                                                          |
| content       | Plan                                                |                                                          |
| fragment      | boolean                                             |                                                          |
| box           | PlanObject                                          |                                                          |
| picto         | PlanPicto                                           |                                                          |
| css           |                                                     |                                                          |
| created       | `(el: HTMLElement \| SVGElement, data:any) => void` | Very useful. Look at textedit code to see how they do it |
| on            | `{...(event: () => {})}`                            | [Event listeners](/intro/on)                                          |
| buttons       | `{before: any[], after: any[]}`                     |                                                          |
| action        | Function                                            |                                                          |
| animation     | any                                                 |                                                          |
| menu          |                                                     |                                                          |
| range         | string                                              |                                                          |
| position      | boolean                                             | Alias for positionable                                   |
| positionable  | boolean                                             |                                                          |
| bind          | string \| AudioParam                                |                                                          |
| movable       | boolean                                             |                                                          |
| selectable    | boolean                                             |                                                          |
| transferable  | boolean                                             |                                                          |
| unrollable    | boolean                                             |                                                          |
| renamable     | boolean                                             |                                                          |
| plugins       |                                                     |                                                          |
| if            | any                                                 |                                                          |
| beforeContent | Plan                                                |                                                          |
| afterContent  | Plan                                                |                                                          |

## Examples
I'll add some soon. For now, look at apps that have a `module` property in their app manifest, and their scripts.