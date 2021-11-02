# WinObject

| Parameter         | Type             | Description                                                     |
|-------------------|------------------|-----------------------------------------------------------------|
| title             | String           | The title of the window                                         |
| html              | String/HTML      | HTML of window                                                  |
| icon              | String/Path      | Undocumented, confusion about this parameter                    |
| help              | String/HTML      | Text or html that shows up when the help icon is clicked        |
| url               | String/URL       | The url that the window should iframe.                          |
| menu              | Object           | Undocumented                                                    |
| header            | Boolean          | Shows the status bar/title bar of the window                    |
| footer            | String/HTML      | Displays text at bottom of window, supports html                |
| width             | Integer          | The width of the window, in pixels                              |
| height            | Integer          | The height of the window, in pixels                             |
| borderTopWidth    | Integer          | The top width of the border, in pixels                          |
| borderBottomWidth | Integer          | The bottom width of the border, in pixels                       |
| borderLeftWidth   | Integer          | The left width of the border, in pixels                         |
| borderRightWidth  | Integer          | The right width of the border, in pixels                        |
| baseWidth         | Integer          | Undocumented                                                    |
| baseHeight        | Integer          | Undocumented                                                    |
| minWidth          | Integer          | The minimum width of the window, in pixels                      |
| minHeight         | Integer          | The minimum height of the window, in pixels                     |
| top               | String/Length    | Undocumented                                                    |
| left              | String/Length    | Undocumented                                                    |
| center            | Boolean          | Center the window when opened                                   |
| noOut             | Boolean          | Undocumented                                                    |
| constrain         | Boolean          | Undocumented                                                    |
| ajax              | Boolean          | Undocumented                                                    |
| autoMaxmimize     | Boolean          | Whether the window is automatically maximized when it is opened |
| contextmenuOnBody | Boolean          | Whether the context menu works in the body of the window        |
| resizable         | Boolean          | Whether the window can be resized                               |
| minimizable       | Boolean          | Whether the window can be minimized                             |
| maximizable       | Boolean          | Whether the window can be maximized                             |
| closeable         | Boolean          | Whether the window can be closed                                |
| draggable         | Boolean          | Whether the window can be dragged around the screen             |
| dockable          | Boolean          | Whether the window appears on the taskbar                       |
| activable         | Boolean          | Whether the window can be active                                |
| headerBtn         | Object           | Undocumented                                                    |
| onopen            | Function         | Function that runs when the window is opened                    |
| onready           | Function         | Undocumented                                                    |
| onclose           | Function         | Function that runs when the window is closed                    |
| onok              | Function         | Function that runs when the 'OK' button is clicked              |
| oncancel          | Function         | Function that runs when the cancel button is clicked            |
| onminimize        | Function         | Function that runs when the window is minimized                 |
| ondrag            | Function         | Function that runs when the window is being dragged             |
| ondragstop        | Function         | Function that runs when the window stops being dragged          |
| onresize          | Function         | Function that runs when the window is resized                   |
| onactive          | Function         | Function that runs when the window is made active               |
| ondestroy         | Function         | Function that runs when the window is destroyed                 |
| animationIn       | String/Animation | Animation used when window is opened                            |
| animatationOut    | String           | Animation used when window is closed                            |
| baseClass         | String           | Undocumented                                                    |
| bodyClass         | String           | Undocumented                                                    |
| style             | String           | Undocumented                                                    |
| dest              | Object           | Undocumented                                                    |
| dock              | Object           | Undocumented                                                    |
| contextmenu       | Object           | Undocumented                                                    |
| msg*              | String/HTML      | Message in alert                                                |
| img*              | String/Path      | Image used in alert                                             |

\* Only works on $alert, $confirm, and $prompt
