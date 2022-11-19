# $window

## About

`$window` is used in all applications that open a window. It is your go-to way to create a window.

## Usage

`let` [`WinInstance`](dialog/window/wininstance/) `=` $window`(`[`WinObject`](#)`)`

## Parameter Object (WinObject)

| Parameter                               | Type             | Description                                                     |
|-----------------------------------------|------------------|-----------------------------------------------------------------|
| [title](#title)                         | String           | The title of the window                                         |
| [html](#html)                           | String/HTML      | HTML of window                                                  |
| [icon](#icon)                           | String/Path      | Icon displayed in status bar and taskbar                        |
| [help](#help)                           | String/HTML      | Text or html that shows up when the help icon is clicked        |
| [url](#url)                             | String/URL       | The url that the window should iframe.                          |
| [menu](#menu)                           | Object           | Undocumented                                                    |
| [header](#header)                       | Boolean          | Shows the status bar/title bar of the window                    |
| [footer](#footer)                       | String/HTML      | Displays text at bottom of window, supports html                |
| [width](#width)                         | Integer          | The width of the window, in pixels                              |
| [height](#height)                       | Integer          | The height of the window, in pixels                             |
| [borderTopWidth](#bordertopwidth)       | Integer          | The top width of the border, in pixels                          |
| [borderBottomWidth](#borderbottomwidth) | Integer          | The bottom width of the border, in pixels                       |
| [borderLeftWidth](#borderleftwidth)     | Integer          | The left width of the border, in pixels                         |
| [borderRightWidth](#borderrightwidth)   | Integer          | The right width of the border, in pixels                        |
| [baseWidth](#basewidth)                 | Integer          | Undocumented                                                    |
| [baseHeight](#baseheight)               | Integer          | Undocumented                                                    |
| [minWidth](#minwidth)                   | Integer          | The minimum width of the window, in pixels                      |
| [top](#top)                             | String/Length    | Undocumented                                                    |
| [left](#left)                           | String/Length    | Undocumented                                                    |
| [center](#center)                       | Boolean          | Center the window when opened                                   |
| [noOut](#noout)                         | Boolean          | Undocumented                                                    |
| [constrain](#constrain)                 | Boolean          | Undocumented                                                    |
| [ajax](#ajax)                           | Boolean          | Undocumented                                                    |
| [autoMaxmimize](#automaximize)          | Boolean          | Whether the window is automatically maximized when it is opened |
| [contextmenuOnBody](#contextmenuonbody) | Boolean          | Whether the context menu works in the body of the window        |
| [resizable](#resizable)                 | Boolean          | Whether the window can be resized                               |
| [minimizable](#minimizable)             | Boolean          | Whether the window can be minimized                             |
| [maximizable](#minimizable)             | Boolean          | Whether the window can be maximized                             |
| [closeable](#closeable)                 | Boolean          | Whether the window can be closed                                |
| [draggable](#draggable)                 | Boolean          | Whether the window can be dragged around the screen             |
| [dockable](#dockable)                   | Boolean          | Whether the window appears on the taskbar                       |
| [activable](#activable)                 | Boolean          | Whether the window can be active                                |
| [headerBtn](#headerbtn)                 | Object           | Undocumented                                                    |
| [onopen](#onopen)                       | Function         | Function that runs when the window is opened                    |
| [onready](#onready)                     | Function         | Undocumented                                                    |
| [onclose](#onclose)                     | Function         | Function that runs when the window is closed                    |
| [onok](#onok)                           | Function         | Function that runs when the 'OK' button is clicked              |
| [oncancel](#oncancel)                   | Function         | Function that runs when the cancel button is clicked            |
| [onminimize](#onminimize)               | Function         | Function that runs when the window is minimized                 |
| [ondrag](#ondrag)                       | Function         | Function that runs when the window is being dragged             |
| [ondragstop](#ondragstop)               | Function         | Function that runs when the window stops being dragged          |
| [onresize](#onresize)                   | Function         | Function that runs when the window is resized                   |
| [onactive](#onactive)                   | Function         | Function that runs when the window is made active               |
| [ondestroy](#ondestroy)                 | Function         | Function that runs when the window is destroyed                 |
| [animationIn](#animationin)             | String/Animation | Animation used when window is opened                            |
| [animatationOut](#animationout)         | String           | Animation used when window is closed                            |
| [baseClass](#baseclass)                 | String           | Undocumented                                                    |
| [bodyClass](#bodyclass)                 | String           | Undocumented                                                    |
| [style](#style)                         | String           | Undocumented                                                    |
| [dest](#dest)                           | Object           | Undocumented                                                    |
| [dock](#dock)                           | Object           | Undocumented                                                    |
| [contextmenu](#contextmenu)             | Object           | Undocumented                                                    |
| [msg\*](#msg)                           | String/HTML      | Message in alert dialog                                         |
| [img\*](#img)                           | String           | Image used in alert dialog                                      |

\* Only works on $alert, $confirm, and $prompt

### title

### html

### icon

### help

### url

### menu

### header

### footer

### width

### height

### borderTopWidth

### borderBottomWidth

### borderLeftWidth

### borderRightWidth

### baseWidth

### baseHeight

### minWidth

### minHeight

### top

### left

### center

### noOut

### constrain

### ajax

### autoMaximize

### contextmenuOnBody

### resizable

### minimizable

### maximizable

### closeable

### draggable

### dockable

### activable

### headerBtn

### onopen

### onready

### onclose

### onok

### oncancel

### onminize

### ondrag

### ondragstop

### onresize

### onactive

### ondestroy

### animationIn

### animationOut

### baseClass

### bodyClass

### style

### dest

### dock

### contextmenu

### msg

### img

## Return value (WinInstance)

| Name                          | Description                                      |
|-------------------------------|--------------------------------------------------|
| [close](#close)               | Closes the window                                |
| [destroy](#destroy)           | Closes the window immediately with no animations |
| [maximize](#maximize)         | Maximizes the window                             |
| [minimize](#minimize)         | Minimizes the window                             |
| [restore](#restore)           | Opens window after it has been minimized         |
| [changeSize](#changeSize)     | Changes window size                              |
| [active](#active)             | Makes the window active                          |
| [changeTitle](#changeTitle)   | Changes the window title                         |
| [changeIcon](#changeIcon)     | Changes the window icon                          |
| [changeFooter](#changeFooter) | Changes the window footer                        |

### close

### destroy

### maximize

### minimize

### restore

### changeSize

### active

### changeTitle

### changeIcon

### changeFooter