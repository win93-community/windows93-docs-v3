# WinObject

| Parameter                                 | Type             | Description                                                     |
| ----------------------------------------- | ---------------- | --------------------------------------------------------------- |
| [title](title.md)                         | String           | The title of the window                                         |
| [html](html.md)                           | String/HTML      | HTML of window                                                  |
| [icon](icon.md)                           | String/Path      | Icon displayed in status bar and taskbar                        |
| [help](help.md)                           | String/HTML      | Text or html that shows up when the help icon is clicked        |
| [url](url.md)                             | String/URL       | The url that the window should iframe.                          |
| [menu](menu.md)                           | Object           | Undocumented                                                    |
| [header](header.md)                       | Boolean          | Shows the status bar/title bar of the window                    |
| [footer](footer.md)                       | String/HTML      | Displays text at bottom of window, supports html                |
| [width](width.md)                         | Integer          | The width of the window, in pixels                              |
| [height](height.md)                       | Integer          | The height of the window, in pixels                             |
| [borderTopWidth](bordertopwidth.md)       | Integer          | The top width of the border, in pixels                          |
| [borderBottomWidth](borderbottomwidth.md) | Integer          | The bottom width of the border, in pixels                       |
| [borderLeftWidth](borderleftwidth.md)     | Integer          | The left width of the border, in pixels                         |
| [borderRightWidth](borderrightwidth.md)   | Integer          | The right width of the border, in pixels                        |
| [baseWidth](basewidth.md)                 | Integer          | Undocumented                                                    |
| [baseHeight](baseheight.md)               | Integer          | Undocumented                                                    |
| [minWidth](minwidth.md)                   | Integer          | The minimum width of the window, in pixels                      |
| [minHeight](minheight.md)                 | Integer          | The minimum height of the window, in pixels                     |
| [top](top.md)                             | String/Length    | Undocumented                                                    |
| [left](left.md)                           | String/Length    | Undocumented                                                    |
| [center](center.md)                       | Boolean          | Center the window when opened                                   |
| [noOut](noout.md)                         | Boolean          | Undocumented                                                    |
| [constrain](constrain.md)                 | Boolean          | Undocumented                                                    |
| [ajax](ajax.md)                           | Boolean          | Undocumented                                                    |
| [autoMaxmimize](automaximize.md)          | Boolean          | Whether the window is automatically maximized when it is opened |
| [contextmenuOnBody](contextmenuonbody.md) | Boolean          | Whether the context menu works in the body of the window        |
| [resizable](resizable.md)                 | Boolean          | Whether the window can be resized                               |
| [minimizable](minimizable.md)             | Boolean          | Whether the window can be minimized                             |
| [maximizable](minimizable.md)             | Boolean          | Whether the window can be maximized                             |
| [closeable](closeable.md)                 | Boolean          | Whether the window can be closed                                |
| [draggable](draggable.md)                 | Boolean          | Whether the window can be dragged around the screen             |
| [dockable](dockable.md)                   | Boolean          | Whether the window appears on the taskbar                       |
| [activable](activable.md)                 | Boolean          | Whether the window can be active                                |
| [headerBtn](headerbtn.md)                 | Object           | Undocumented                                                    |
| [onopen](onopen.md)                       | Function         | Function that runs when the window is opened                    |
| [onready](onready.md)                     | Function         | Undocumented                                                    |
| [onclose](onclose.md)                     | Function         | Function that runs when the window is closed                    |
| [onok](onok.md)                           | Function         | Function that runs when the 'OK' button is clicked              |
| [oncancel](oncancel.md)                   | Function         | Function that runs when the cancel button is clicked            |
| [onminimize](onminimize.md)               | Function         | Function that runs when the window is minimized                 |
| [ondrag](ondrag.md)                       | Function         | Function that runs when the window is being dragged             |
| [ondragstop](ondragstop.md)               | Function         | Function that runs when the window stops being dragged          |
| [onresize](onresize.md)                   | Function         | Function that runs when the window is resized                   |
| [onactive](onactive.md)                   | Function         | Function that runs when the window is made active               |
| [ondestroy](ondestroy.md)                 | Function         | Function that runs when the window is destroyed                 |
| [animationIn](animationin.md)             | String/Animation | Animation used when window is opened                            |
| [animatationOut](animationout.md)         | String           | Animation used when window is closed                            |
| [baseClass](baseclass.md)                 | String           | Undocumented                                                    |
| [bodyClass](bodyclass.md)                 | String           | Undocumented                                                    |
| [style](style.md)                         | String           | Undocumented                                                    |
| [dest](dest.md)                           | Object           | Undocumented                                                    |
| [dock](dock.md)                           | Object           | Undocumented                                                    |
| [contextmenu](contextmenu.md)             | Object           | Undocumented                                                    |
| [msg\*](msg.md)                           | String/HTML      | Message in alert dialog                                         |
| [img\*](img.md)                           | String/Path      | Image used in alert dialog                                      |

\* Only works on $alert, $confirm, and $prompt
