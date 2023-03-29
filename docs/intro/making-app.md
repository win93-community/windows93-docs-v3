# Making an App
This page guides you on how to make an application.

## Local development
Currently, you cannot create an application with the browser. You must modify some Windows 93 source files to successfully create an application.  
On first initializatiion, the apps manager scans for app manifest files ending with app.json5. To force a rescan you must clear site data.  
Also, make sure to use the sys42 CLI tool to generate the file index (so the apps manager can find the manifest you created).