# Exec

> 42/api/os/exec.js

Using the exec function/system-call will search for results in the following order:
1. Aliases
2. Builtins
3. Files

Note that aliases and builtins will only be found if the program has a manifest.  
If nothing is found, the system will return an `Error` with message: "Invalid command: " + the command.  

When apps are created, their ID is set to `app__%{manifest.command}__%{index}`, with index being the instance number (starting from 0).