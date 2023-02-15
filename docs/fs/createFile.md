# Create File

You can create a file in Windows 93 using the `sys42.actions.createFile` method.

## Usage
```js
sys42.actions.createFile(path, options)
```

## Arguments
### path
String. Path where the file resides. The file is created empty.

### options
Object. Properties:  
#### untitled
Boolean. Whether the file should be named untitled.txt