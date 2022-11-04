# cfg

| Parameter                                 | Type             | Description                                                     |
| ----------------------------------------- | ---------------- | --------------------------------------------------------------- |
| [title](dialog/window/winobject/title)                         | String           | The title of the window                                         |
| [html](dialog/window/winobject/html)                           | String/HTML      | HTML of window                                                  |
| [icon](dialog/window/winobject/icon)                           | String/Path      | Icon displayed in status bar and taskbar                        |
| [help](dialog/window/winobject/help)                           | String/HTML      | Text or html that shows up when the help icon is clicked        |
| [url](dialog/window/winobject/url)                             | String/URL       | The url that the window should iframe.                          |
| [menu](dialog/window/winobject/menu)                           | Object           | Undocumented                                                    |
| [header](dialog/window/winobject/header)                       | Boolean          | Shows the status bar/title bar of the window                    |
| [footer](dialog/window/winobject/footer)                       | String/HTML      | Displays text at bottom of window, supports html                |
| [width](dialog/window/winobject/width)                         | Integer          | The width of the window, in pixels                              |
| [height](dialog/window/winobject/height)                       | Integer          | The height of the window, in pixels                             |
| [borderTopWidth](dialog/window/winobject/bordertopwidth)       | Integer          | The top width of the border, in pixels                          |
| [borderBottomWidth](dialog/window/winobject/borderbottomwidth) | Integer          | The bottom width of the border, in pixels                       |
| [borderLeftWidth](dialog/window/winobject/borderleftwidth)     | Integer          | The left width of the border, in pixels                         |
| [borderRightWidth](dialog/window/winobject/borderrightwidth)   | Integer          | The right width of the border, in pixels                        |
| [baseWidth](dialog/window/winobject/basewidth)                 | Integer          | Undocumented                                                    |
| [baseHeight](dialog/window/winobject/baseheight)               | Integer          | Undocumented                                                    |
| [minWidth](dialog/window/winobject/minwidth)                   | Integer          | The minimum width of the window, in pixels                      |
| [minHeight](dialog/window/winobject/minheight)                 | Integer          | The minimum height of the window, in pixels                     |
| [top](dialog/window/winobject/top)                                       | String/Length    | Undocumented                                                    |
| [left](dialog/window/winobject/left)                           | String/Length    | Undocumented                                                    |
| [center](dialog/window/winobject/center)                       | Boolean          | Center the window when opened                                   |
| [noOut](dialog/window/winobject/noout)                         | Boolean          | Undocumented                                                    |
| [constrain](dialog/window/winobject/constrain)                 | Boolean          | Undocumented                                                    |
| [ajax](dialog/window/winobject/ajax)                           | Boolean          | Undocumented                                                    |
| [autoMaxmimize](dialog/window/winobject/automaximize)          | Boolean          | Whether the window is automatically maximized when it is opened |
| [contextmenuOnBody](dialog/window/winobject/contextmenuonbody) | Boolean          | Whether the context menu works in the body of the window        |
| [resizable](dialog/window/winobject/resizable)                 | Boolean          | Whether the window can be resized                               |
| [minimizable](dialog/window/winobject/minimizable)             | Boolean          | Whether the window can be minimized                             |
| [maximizable](dialog/window/winobject/minimizable)             | Boolean          | Whether the window can be maximized                             |
| [closeable](dialog/window/winobject/closeable)                 | Boolean          | Whether the window can be closed                                |
| [draggable](dialog/window/winobject/draggable)                 | Boolean          | Whether the window can be dragged around the screen             |
| [dockable](dialog/window/winobject/dockable)                   | Boolean          | Whether the window appears on the taskbar                       |
| [activable](dialog/window/winobject/activable)                 | Boolean          | Whether the window can be active                                |
| [headerBtn](dialog/window/winobject/headerbtn)                 | Object           | Undocumented                                                    |
| [onopen](dialog/window/winobject/onopen)                       | Function         | Function that runs when the window is opened                    |
| [onready](dialog/window/winobject/onready)                     | Function         | Undocumented                                                    |
| [onclose](dialog/window/winobject/onclose)                     | Function         | Function that runs when the window is closed                    |
| [onok](dialog/window/winobject/onok)                           | Function         | Function that runs when the 'OK' button is clicked              |
| [oncancel](dialog/window/winobject/oncancel)                   | Function         | Function that runs when the cancel button is clicked            |
| [onminimize](dialog/window/winobject/onminimize)               | Function         | Function that runs when the window is minimized                 |
| [ondrag](dialog/window/winobject/ondrag)                       | Function         | Function that runs when the window is being dragged             |
| [ondragstop](dialog/window/winobject/ondragstop)               | Function         | Function that runs when the window stops being dragged          |
| [onresize](dialog/window/winobject/onresize)                   | Function         | Function that runs when the window is resized                   |
| [onactive](dialog/window/winobject/onactive)                   | Function         | Function that runs when the window is made active               |
| [ondestroy](dialog/window/winobject/ondestroy)                 | Function         | Function that runs when the window is destroyed                 |
| [animationIn](dialog/window/winobject/animationin)             | String/Animation | Animation used when window is opened                            |
| [animatationOut](dialog/window/winobject/animationout)         | String           | Animation used when window is closed                            |
| [baseClass](dialog/window/winobject/baseclass)                 | String           | Undocumented                                                    |
| [bodyClass](dialog/window/winobject/bodyclass)                 | String           | Undocumented                                                    |
| [style](dialog/window/winobject/style)                         | String           | Undocumented                                                    |
| [dest](dialog/window/winobject/dest)                           | Object           | Undocumented                                                    |
| [dock](dialog/window/winobject/dock)                           | Object           | Undocumented                                                    |
| [contextmenu](dialog/window/winobject/contextmenu)             | Object           | Undocumented                                                    |
| [msg\*](dialog/window/winobject/msg)                           | String/HTML      | Message in alert dialog                                         |
| [img\*](dialog/window/winobject/img)                           | String/Path      | Image used in alert dialog                                      |

\* Only works on $alert, $confirm, and $prompt
