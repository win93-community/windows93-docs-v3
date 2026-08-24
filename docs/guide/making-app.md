
# Making an App
This page guides you on how to make an application.

## Folder structure

Application code is stored in `/c/programs` ([not .desktop files](/docs/guide/faq#what-is-a-desktop-file)).
Programs must include:
* app manifest file
* icon files
* entry point

An entry point can be either `document` (an HTML file), or `module`, a Javascript file. [There are benefits to using one over the other, depending on your usecase](/docs/guide/document-vs-module)

## Caching
:::caution
You have to reload Windows93 every time you make a change to a file in your app. JS modules are globally cached.
:::

This can be prevented by using the `?v=timestamp` query parameter, but only if you use dynamic imports. For example, rather than doing: 

```js
import { myFunction } from './myModule.js';
```
Do this instead:

```js
const { myFunction } = await import(`./myModule.js?v=${Date.now()}`);
```
<details>
<summary>Pro tip</summary>

* Make sure you understand the tradeoffs between dynamic import and static import
* You can also use `Math.random()`
* *Do not do this in production:*

Having your app avoid the module cache on every single import will significantly slow things down and as an antipattern. Here's a quick workaround.

```ts
type devMode: boolean

export const smartImport = (module: string) => {
    if (devMode) {
        return await import(`${module}?v=${Date.now()}`);
    } else {
        return await import(module)
    }
}
```

</details>

## App Manifest

The apps manager scans for app manifest files ending with app.manifest.json5 on first initialization. This file is essentially your application manifest. Stored in the popular JSON5 format, your app manifest covers all the meta-information such as its name, content, and identifier.
JSON5 is a more relaxed version of JSON, and allows comments and single-quotes.

:::tip
**Submitting to the app store?** There are additional requirements for your app manifest. See [Platform](https://wiki.win93.xyz/93.php?App%20Store) for more information.
:::

At it the bare minimum, your app must have a command (a unique, logical identifier) and an entry point. [View all requirements](/docs/guide/manifest.md)

## Icons

App icons should be in the program directory.
There are two variants that should be used: `icon-16` and `icon-32`, for 16x16 and 32x32 image sizes respectively.
Icons may be PNGs or GIFs. Other image types may work but haven't been tested/relied upon.

## Module exports
Your entry point, the file at the manifest's *module* property, should export a function where it executes the program code.  
All of the following exports pass along one parameter, `app`, which is the [app instance](../api/app.md).

* `launchApp`: Most powerful export. The apps manager expects apps using this export to create the UI itself.
* `renderApp`: Main export. Expects plan to be returned, and creates a [`ui-dialog`](../gui/dialog.md) with `content` of the plan output. Only runs if launchApp is not present.
* `execApp`: Runs after `renderApp`. Useful for executing side effects, hooking, etc. Doesn't run after `launchApp`
* `destroyApp`: Runs when the app is closed. Useful for cleanup.

## Putting it together

Structure:
```
myApp
    /index.js
    /icon-16.png
    /icon-32.png
    /app.manifest.json5
```

index.js:
```js
export renderApp(app) {
    return {
        text: "This is a simple window.",
    }
}
```

app.manifest.json5
```json
{
    "name": "myApp",
    "command": "myapp"
}
```