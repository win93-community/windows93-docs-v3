# Making an App
This page guides you on how to make an application.

## Local development
Currently, you cannot create an application with the browser. You must modify some Windows 93 source files to successfully create an application.  
On first initialization, the apps manager scans for app manifest files ending with app.json5. To force a rescan you must clear site data.  
Also, make sure to use the sys42 CLI tool to generate the file index (so the apps manager can find the manifest you created).

## app.json5
The app.json5 file is essentially your application manifest. Stored in the popular JSON5 format, your app manifest covers all the meta-information such as its name, content, and identifier.  
This section covers the contents of an app.json5 file.
### name
Friendly name of your app. Can include spaces, capital letters, etc.
### command
Command that executes your app. Think of this as your app's unique identifier. It shouldn't be the same as other apps' commands installed on your system.
Property can only be a lowercase value without spaces, etc
### categories
Array of strings with the categories the app is.
### decode.types
Essentially the filetypes your app can open. Array of objects - object can have two string properties; description and accept. Description is a friendly string explaining what the filetype is, and accept is the mimetype for the files to be allowed opened