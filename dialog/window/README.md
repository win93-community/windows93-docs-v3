# $window

### About

`$window` is used in all applications that open a window. It is your go-to way to create a window.

### Usage

`let` [`WinInstance`](wininstance/) `=` [`$window`](./)`(`[`WinObject`](winobject/)`)`

### Parameter Object (WinObject)

| Property                                            | Type             | Description                                                     |
| --------------------------------------------------- | ---------------- | --------------------------------------------------------------- |
| [title](winobject/title.md)                         | String           | The title of the window                                         |
| [html](winobject/html.md)                           | String/HTML      | HTML of window                                                  |
| [icon](winobject/icon.md)                           | String/Path      | Icon displayed in status bar and taskbar                        |
| [help](winobject/help.md)                           | String/HTML      | Text or html that shows up when the help icon is clicked        |
| [url](winobject/url.md)                             | String/URL       | The url that the window should iframe.                          |
| [menu](winobject/menu.md)                           | Object           | Undocumented                                                    |
| [header](winobject/header.md)                       | Boolean          | Shows the status bar/title bar of the window                    |
| [footer](winobject/footer.md)                       | String/HTML      | Displays text at bottom of window, supports html                |
| [width](winobject/width.md)                         | Integer          | The width of the window, in pixels                              |
| [height](winobject/height.md)                       | Integer          | The height of the window, in pixels                             |
| [borderTopWidth](winobject/bordertopwidth.md)       | Integer          | The top width of the border, in pixels                          |
| [borderBottomWidth](winobject/borderbottomwidth.md) | Integer          | The bottom width of the border, in pixels                       |
| [borderLeftWidth](winobject/borderleftwidth.md)     | Integer          | The left width of the border, in pixels                         |
| [borderRightWidth](winobject/borderrightwidth.md)   | Integer          | The right width of the border, in pixels                        |
| [baseWidth](winobject/basewidth.md)                 | Integer          | Undocumented                                                    |
| [baseHeight](winobject/baseheight.md)               | Integer          | Undocumented                                                    |
| [minWidth](winobject/minwidth.md)                   | Integer          | The minimum width of the window, in pixels                      |
| [minHeight](winobject/minheight.md)                 | Integer          | The minimum height of the window, in pixels                     |
| [top](winobject/top.md)                             | String/Length    | Undocumented                                                    |
| [left](winobject/left.md)                           | String/Length    | Undocumented                                                    |
| [center](winobject/center.md)                       | Boolean          | Center the window when opened                                   |
| [noOut](winobject/noout.md)                         | Boolean          | Undocumented                                                    |
| [constrain](winobject/constrain.md)                 | Boolean          | Undocumented                                                    |
| [ajax](winobject/ajax.md)                           | Boolean          | Undocumented                                                    |
| [autoMaxmimize](winobject/automaximize.md)          | Boolean          | Whether the window is automatically maximized when it is opened |
| [contextmenuOnBody](winobject/contextmenuonbody.md) | Boolean          | Whether the context menu works in the body of the window        |
| [resizable](winobject/resizable.md)                 | Boolean          | Whether the window can be resized                               |
| [minimizable](winobject/minimizable.md)             | Boolean          | Whether the window can be minimized                             |
| [maximizable](wininstance/maximize.md)              | Boolean          | Whether the window can be maximized                             |
| [closeable](winobject/closeable.md)                 | Boolean          | Whether the window can be closed                                |
| [draggable](winobject/draggable.md)                 | Boolean          | Whether the window can be dragged around the screen             |
| [dockable](winobject/dockable.md)                   | Boolean          | Whether the window appears on the taskbar                       |
| [activable](winobject/activable.md)                 | Boolean          | Whether the window can be active                                |
| [headerBtn](winobject/headerbtn.md)                 | Object           | Undocumented                                                    |
| [onopen](winobject/onopen.md)                       | Function         | Function that runs when the window is opened                    |
| [onready](winobject/onready.md)                     | Function         | Undocumented                                                    |
| [onclose](winobject/onclose.md)                     | Function         | Function that runs when the window is closed                    |
| [onok](winobject/onok.md)                           | Function         | Function that runs when the 'OK' button is clicked              |
| [oncancel](winobject/oncancel.md)                   | Function         | Function that runs when the cancel button is clicked            |
| [onminimize](winobject/onminimize.md)               | Function         | Function that runs when the window is minimized                 |
| [ondrag](winobject/ondrag.md)                       | Function         | Function that runs when the window is being dragged             |
| [ondragstop](winobject/ondragstop.md)               | Function         | Function that runs when the window stops being dragged          |
| [onresize](winobject/onresize.md)                   | Function         | Function that runs when the window is resized                   |
| [onactive](winobject/onactive.md)                   | Function         | Function that runs when the window is made active               |
| [ondestroy](winobject/ondestroy.md)                 | Function         | Function that runs when the window is destroyed                 |
| [animationIn](winobject/animationin.md)             | String/Animation | Animation used when window is opened                            |
| [animatationOut](winobject/animationout.md)         | String           | Animation used when window is closed                            |
| [baseClass](winobject/baseclass.md)                 | String           | Undocumented                                                    |
| [bodyClass](winobject/bodyclass.md)                 | String           | Undocumented                                                    |
| [style](winobject/style.md)                         | String           | Undocumented                                                    |
| [dest](winobject/dest.md)                           | Object           | Undocumented                                                    |
| [dock](winobject/dock.md)                           | Object           | Undocumented                                                    |
| [contextmenu](winobject/contextmenu.md)             | Object           | Undocumented                                                    |
| [msg](winobject/msg.md)\*                           | String/HTML      | Message in alert                                                |
| [img](winobject/img.md)\*                           | String/Path      | Image used in alert                                             |

\* Only works on $alert, $confirm, and $prompt
