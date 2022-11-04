# save

### About

This is used to save a file on /a/.

?> Remember: You can only store files on the `a` drive. Attempting to store on another drive will return a permissions error.


!> **There will be a notification shown whenever a file is saved using this function. There is no way around it other than using** [**$db**](../../db) **or** [**$store**](../../store) **instead.**


`$file.save(path, content, callback)`

| Parameter           | Type          | Description                                                                                                                                          |
| ------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| path                | String        | The path (has to start with /a/) where the file should be saved.                                                                                     |
| content             | String/Object | The content of the file. When an object is specified. it will be turned into a string (however you can still read it as an object using $file.open). |
| callback (optional) | Function      | Called with the filename when the file has finished saving.                                                                                          |

**Code Example:**&#x20;

`$file.save("/a/test.txt", "hello world")`
