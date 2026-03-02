# Making an App
This page guides you on how to make an application.

## Local development
The apps manager scans for app manifest files ending with app.json5 on first initialization. To force a rescan you must clear site data and reload.  
Make sure to use the sys42 CLI tool to generate the file index (so the apps manager can find the manifest you created). The syntax for this is `npx 42 scan`  

## Folder structure

Application code is stored in `/c/programs` ([not .desktop files](intro/faq.md#what-is-a-desktop-file)).  
Programs must include:
* app manifest file
* icon files
* entry point

An entry point can be either `document` (an HTML file), or `module`, a Javascript file.

## App Manifest
The app.manifest.json5 file is essentially your application manifest. Stored in the popular JSON5 format, your app manifest covers all the meta-information such as its name, content, and identifier.  
JSON5 is a more relaxed version of JSON, and allows comments and single-quotes.

| Property       | Type       | Required | Description                                                                                       |
|----------------|------------|----------|---------------------------------------------------------------------------------------------------|
| **name**       | String     | Yes      | Friendly name of your app. Can include spaces, capital letters, etc.                              |
| **slug**       | String     | No       | Unique identifier of your app. Should be lowercase and not include spaces, etc. If not present, it will take the name, apply kebab case, and assign it as the app slug. |
| **command**    | String     | Yes      | Command that executes your app. Should be lowercase without spaces.                               |
| **categories** | Array      | No       | Array of strings with the categories the app belongs to.                                          |
| **description**| String     | No       | String with the description of the app. Will show in the about window.                            |
| **document**   | Path     | Yes      | HTML file your app opens. Entry point.                                                                          |
| **icons**      | Path[]      | Yes      | Array of objects with the app icons. Each object has `size` (pixels) and `url` (icon URL).        |
| **modules**    | Path[]      | No       | Array of URLs with modules to load when the app opens. Modules run in a sandboxed environment.    |
| **module**     | Path      | No       | Entry point.    |
| **scripts**    | Array      | No       | Array of URLs with scripts to execute before the app renders on screen.                           |
| **styles**     | Array      | No       | Array of URLs with stylesheets to load before the app renders on screen.                          |
| **preload**    | Array      | No       | Array of URLs with assets to preload before the app renders on screen.                            |
| **decode.types** | Array    | No       | Filetypes your app can open. Array of objects with `description` (friendly string) and `accept` (mimetype). |
| **multiple**   | Boolean    | No       | Whether your app can open multiple windows at once.                                               |
| **empty**      | Boolean    | No       | Unknown.                                                                                          |
| **width**      | Number     | No       | Width of the app window in pixels.                                                                |
| **height**     | Number     | No       | Height of the app window in pixels.                                                               |
| **dir**        | String     | No       | App root directory. Should not be set.                                                           |
| **dirURL**     | String     | No       | App directory as a URL. Should not be set.                                                       |
| **manifestPath** | Path   | No       | Manifest path. Should not be set.                                                                  |
| **dialog**     | Unknown    | No       | Unknown.                                                                                          |
| **zoom**       | Unknown    | No       | Unknown.                                                                                          |
| **decode**     | Unknown    | No       | Unknown.                                                                                          |
| **encode**     | Unknown    | No       | Unknown.                                                                                          |
| **about**      | Path       | No       | A path to a file that displays when a user clicks the question mark icon                                    |
| **license**    | String     | No       | The license under which the app is distributed. Will show in the about window.                   |
| **authors**    | String     | No       | The authors or contributors of the app. Will show in the about window.                           |
| **options**    | Object/Array/String     | No       | [See below](#options)                           |

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


## App code
Modules have special defined variables that you can use to interact with the system. They are executed right before the app starts.
You can override this and make it so that the app starts while your module is still executing, but it is not recommended. To use this approach, run `$app.start()` inside of your module code.  
Below is a list of all variables available in the global scope of your app modules. They are listed in order of declaration.

| Variable   | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| **App**    | The OS App class.                                                          |
| **$manifest** | The app manifest. Same as the app.json5 file.                           |
| **$app**   | The app instance, an instance of the app class with the manifest loaded.   |
| **$files** | Alias for `$app.state.$files`.                                             |

## Icons

App icons should be in the program directory.  
There are two variants that should be used: `icon-16` and `icon-32`, for 16x16 and 32x32 image sizes respectively.  
Icons may be PNGs or GIFs. Other image types may work but haven't been tested/relied upon.