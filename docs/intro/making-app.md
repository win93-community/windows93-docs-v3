# Making an App
This page guides you on how to make an application.

## Local development
Currently, you cannot create an application with the browser. You must modify some Windows 93 source files to successfully create an application.  
The apps manager scans for app manifest files ending with app.json5 on first initialization. To force a rescan you must clear site data and reload.  
Make sure to use the sys42 CLI tool to generate the file index (so the apps manager can find the manifest you created). The syntax for this is `npx 42 scan`

## app.json5
The app.json5 file is essentially your application manifest. Stored in the popular JSON5 format, your app manifest covers all the meta-information such as its name, content, and identifier.  
This section covers the contents of an app.json5 file.
### name
Friendly name of your app. Can include spaces, capital letters, etc.
### slug
Unique identifier of your app. Should be lowercase and not include spaces, etc. If this property is not present, it will take the [name](#name), apply kebab case and will assign it as the app slug.
### command
Command that executes your app. Think of this as your app's unique identifier. It shouldn't be the same as other apps' commands installed on your system.
Property can only be a lowercase value without spaces, etc
### categories
Array of strings with the categories the app is.
### description
String with the description of the app.
### icons
Array of objects with the icons of the app. Each object has two properties; size and url. Size is the size of the icon in pixels, and url is the URL of the icon.
### scripts
Array of URLs with the scripts to be executed when the app is opened. The scripts are executed in order, before the app has rendered on screen.
### styles
Array of URLs with the stylesheets to be loaded when the app is opened. The stylesheets are loaded in order, before the app has rendered on screen.
### preload
Array of URLs with the assets to be preloaded when the app is opened. The assets are loaded in order, before the app has rendered on screen.
### decode.types
Essentially the filetypes your app can open. Array of objects - object can have two string properties; description and accept. Description is a friendly string explaining what the filetype is, and accept is the mimetype for the files to be allowed opened
### multiple
Boolean. Whether your app can open multiple windows at once.
### empty
Boolean. Unknown.
### width
Number. Width of the app window in pixels.
### height
Number. Height of the app window in pixels.
### dir
App root directory. This option should not be set.
### dirURL
App directory as a URL. This option should not be set.
### manifestPath
Manifest path. This option should not be set.
### manifestURL
Manifest path as a URL. This option should not be set.