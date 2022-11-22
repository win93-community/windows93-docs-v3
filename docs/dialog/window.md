# $window

## About

`$window` is used in all applications that open a window. It is your go-to way to create a window.

## Usage

`let` [`WinInstance`](#return-value-wininstance) `=` [$window](#window)`(`[`WinObject`](#parameter-object-winobject)`)`

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
Title of the window. Can be changed with [WinInstance.changeTitle](#changetitle)  
Displays at the top of the window in the title bar and the dock.

### html
HTML to be displayed in window. Uses Element.innerHTML, so script tags are ignored (see [this MDN section](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations))

### icon
Icon for the window. Displays in dock and title bar next to the [title](#title)

### help
Help text or HTML that appears when a user selects the help button.  
This help button displays next to the minimize button and only appears when this property is truthy.  
It displays as an [$alert.info](dialog/alert#info) dialog.

### url
URL that the window embeds as an iframe.

### menu
!> Undocumented

### header
Whether the title bar should be visible.

### footer
Text to be shown at the footer. Can be modified with [WinInstance.changeFooter](#changefooter)

### width
The width of the window in pixels.

### height
The width of the window in pixels.

### borderTopWidth
!> Undocumented

### borderBottomWidth
!> Undocumented

### borderLeftWidth
!> Undocumented

### borderRightWidth
!> Undocumented

### baseWidth
!> Undocumented

### baseHeight
!> Undocumented

### minWidth
Minimum width of the window in pixels.

### minHeight
Minimum height of the window in pixels.

### top
Amount of pixels from the top of the screen the window should be.

### left
Amount of pixels from the left of the screen the window should be.

### center
When true, the window will spawn in the center of the viewport.

### noOut
!> Unknown

### constrain
When true, keeps the window from moving outside of the viewport.

### ajax
!> Undocumented

### autoMaximize
When true, this window will be automatically maximized when opened.

### contextmenuOnBody
Whether the context menu can be executed on the window body.

### resizable
Whether the window can be resized.

### minimizable
Whether the window can be minimized.

### maximizable
Whether the window can be maximized.

### closeable
Whether the window can be closed.

### draggable
Whether the window can be dragged around.

### dockable
Whether the window appears in the dock.

### activable
Whether the window be selected and active by clicking on it.
!> This is not a good method to use; it is easily bypassable.  
!> One may easily click on the item in the dock or drag it around to make it become active.

### headerBtn
!> Undocumented

### onopen
Function that executes when the window is opened.

### onready
Function that executes when the window is ready.

### onclose
Function that executes when the window is closed.

### onok
Function that executes when the "ok" button is clicked.

### oncancel
Function that executes when the "cancel" button is clicked.

### onminize
Function that executes when the window is minimized.

### ondrag
Function that executes when the window is dragged.

### ondragstop
Function that executes when the window stops being dragged.

### onresize
Function that executes when the window is resized.

### onactive
Function that executes when the window is made active.

### ondestroy
Function that executes when the window is destroyed.
!> Please do not use this. [WinInstance.destroy](#destroy) is supposed to destroy a window, and there should not be any after effects.  
!> Use [onclose](#onclose) instead.

### animationIn
Animation used when the window is opened.  
A list of available animations are available on the https://animate.style/ website.

### animationOut
Animation used when the window is closed.  
A list of available animations are available on the https://animate.style/ website.

### baseClass
!> Undocumented

### bodyClass
!> Undocumented

### style
A string of CSS used for the window.

### dest
!> Unknown

### dock
!> Unknown

### contextmenu
!> Undocumented

### msg
!> String/HTML of the message in a small dialogue.

### img
!> Image URL of the message in a small dialogue.

## Return value (WinInstance)

| Name                          | Type     | Description                                      |
|-------------------------------|----------|--------------------------------------------------|
| [id](#id)                     | number   | ID of the window                                 |
| [cfg](#cfg)                   | object   | WinObject instance                               |
| [el](#el)                     | object   | Object containing window elements                |
| [close](#close)               | function | Closes the window                                |
| [destroy](#destroy)           | function | Closes the window immediately with no animations |
| [maximize](#maximize)         | function | Maximizes the window                             |
| [minimize](#minimize)         | function | Minimizes the window                             |
| [restore](#restore)           | function | Opens window after it has been minimized         |
| [changeSize](#changeSize)     | function | Changes window size                              |
| [active](#active)             | function | Makes the window active                          |
| [changeTitle](#changeTitle)   | function | Changes the window title                         |
| [changeIcon](#changeIcon)     | function | Changes the window icon                          |
| [changeFooter](#changeFooter) | function | Changes the window footer                        |

### id
ID of the window.

### cfg
[WinObject](#parameter-object-winobject) instance.

### el
Object containing elements for window.

### close
Closes the window with an animation. Executes [WinObject.onclose](#onclose)  
To close a window without an animation, use [destroy](#destroy)

### destroy
Closes the window without an animation. Executes [WinObject.ondestroy](#ondestroy)

### maximize
Maximizes the window. **Does not execute anything else.**

### minimize
Minimizes the window. Executes [WinObject.onminimize](#onminize)

### restore
Restores the window. **Does not execute anything else.**

### changeSize
Changes the size of the window.

### active
Makes the window active. Executes [WinObject.onactive](#onactive)

### changeTitle
Changes the window's title.

### changeIcon
Changes the window's icon.

### changeFooter
Changes the window's footer.