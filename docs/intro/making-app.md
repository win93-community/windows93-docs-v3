# Making an App
This page guides you on how to make an application.

## Folder structure

Application code is stored in `/c/programs` ([not .desktop files](intro/faq.md#what-is-a-desktop-file)).  
Programs must include:
* app manifest file
* icon files
* entry point

An entry point can be either `document` (an HTML file), or `module`, a Javascript file. [There are benefits to using one over the other, depending on your usecase](intro/document-vs-module.md)

## App Manifest

The apps manager scans for app manifest files ending with app.manifest.json5 on first initialization. This file is essentially your application manifest. Stored in the popular JSON5 format, your app manifest covers all the meta-information such as its name, content, and identifier.  
JSON5 is a more relaxed version of JSON, and allows comments and single-quotes.

| Property                  | Type                | Description                                                                                                                                                             |
|---------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**                  | String              | Friendly name of your app. Can include spaces, capital letters, etc.                                                                                                    |
| **slug**                  | String              | Unique identifier of your app. Should be lowercase and not include spaces, etc. If not present, it will take the name, apply kebab case, and assign it as the app slug. |
| **command**               | String              | Command that executes your app. Should be lowercase without spaces.                                                                                                     |
| **categories**            | Array               | Array of strings with the categories the app belongs to.                                                                                                                |
| **description**           | String              | String with the description of the app. Will show in the about window.                                                                                                  |
| **document**              | Path                | HTML file your app opens. Entry point.                                                                                                                                  |
| **icons**                 | Path[]              | Array of objects with the app icons. Each object has `size` (pixels) and `url` (icon URL).                                                                              |
| **modules**               | Path[]              | Array of URLs with modules to load when the app opens. Modules run in a sandboxed environment.                                                                          |
| **module**                | Path                | Entry point.                                                                                                                                                            |
| **scripts**               | Array               | Array of URLs with scripts to execute before the app renders on screen.                                                                                                 |
| **styles**                | Array               | Array of URLs with stylesheets to load before the app renders on screen.                                                                                                |
| **preload**               | Array               | Array of URLs with assets to preload before the app renders on screen.                                                                                                  |
| **decode.types**          | Array               | Filetypes your app can open. Array of objects with `description` (friendly string) and `accept` (mimetype).                                                             |
| **multiple**              | Boolean             | Whether your app can open multiple windows at once.                                                                                                                     |
| **suspendIntensiveTasks** | boolean             | Pauses dynamic wallpaper, GIFs while the app is running.                                                                                                                |
| **tray**                  | Boolean             | Whether your app should be registered as a system tray                                                                                                                  |
| **empty**                 | Boolean             | Unknown.                                                                                                                                                                |
| **width**                 | Number              | Width of the app window in pixels.                                                                                                                                      |
| **height**                | Number              | Height of the app window in pixels.                                                                                                                                     |
| **dir**                   | String              | App root directory. Should not be set.                                                                                                                                  |
| **dirURL**                | String              | App directory as a URL. Should not be set.                                                                                                                              |
| **manifestPath**          | Path                | Manifest path. Should not be set.                                                                                                                                       |
| **dialog**                | Unknown             | Unknown.                                                                                                                                                                |
| **zoom**                  | Unknown             | Unknown.                                                                                                                                                                |
| **encode**                | Unknown             | Unknown.                                                                                                                                                                |
| **about**                 | Path                | A path to a file that displays when a user clicks the question mark icon                                                                                                |
| **license**               | String              | The license under which the app is distributed. Will show in the about window.                                                                                          |
| **authors**               | String              | The authors or contributors of the app. Will show in the about window.                                                                                                  |
| **options**               | Object/Array/String | [See below](#options)                                                                                                                                                   |

---

### Options
The `options` property can be one of the following types: Object, Array, or String. All options are boolean. Below are the possible configurations:

#### If `options` is an Object:
| Property | Description |
|----------|-------------|
| shell    | Unknown     |

#### If `options` is an Array:
All items in the array are considered `true`.

#### If `options` is a String:
The string represents a single option considered `true`.

## Icons

App icons should be in the program directory.  
There are two variants that should be used: `icon-16` and `icon-32`, for 16x16 and 32x32 image sizes respectively.  
Icons may be PNGs or GIFs. Other image types may work but haven't been tested/relied upon.

## Module exports
All of the following exports pass along one parameter, `app`, which is the app instance.

* `launchApp`: Most powerful export. The apps manager expects apps using this export to create the UI itself.
* `renderApp`: Main export. Expects plan. Only runs if launchApp is not present.
* `execApp`: Runs after `renderApp`. Useful for executing side effects, hooking, etc.
* `destroyApp`: Runs when the app is closed. Useful for cleanup.