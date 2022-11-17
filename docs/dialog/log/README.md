# $log

### About

`$log` will display a message to the most recent `terminal` session opened. It can also be used to clear the terminal.

?> `$log` will always render HTML into the terminal output.


### Usage

`$log(text, unknown, unknown)`

### Parameters

| Parameter | Type | Remarks                                            |
|-----------|------|----------------------------------------------------|
| text      |      | Text logged to the console                         |
| unknown   |      | Unknown, appears to also be text logged to console |
| unknown   |      | Unknown, appears to also be text logged to console |


### Methods

| Name    | Description                                                                   |
|---------|-------------------------------------------------------------------------------|
| clear   | Clears the terminal                                                           |
| repeat  | Repeats a message many times                                                  |
| code    | Logs the text with styling for the programming language detected in the code. |
| pass    | Logs text in green and with a checkmark                                       |
| fail    | Logs text with an 'x' and in red                                              |
| info    | Logs text with an 'i' and in blue                                             |
| italic  | Logs text in italics                                                          |
| bold    | Logs bold text                                                                |
| white   | Logs text in color white                                                      |
| yellow  | Logs text in color yellow                                                     |
| cyan    | Logs text in color cyan                                                       |
| magenta | Logs text in color magenta                                                    |
| blue    | Logs text in color blue                                                       |
| red     | Logs text in color red                                                        |
| succes  | Logs text in color green                                                      |
| green   | Logs text in color green                                                      |
| error   | Logs text in color red                                                        |


### Examples 
These are what the above methods look like

![](/docs/assets/logPass.png)
*A success!*

![](/docs/assets/logFail.png)
*A not so successful success!*

![](/docs/assets/logInfo.png)
*My reaction to that information*

![](/docs/assets/logCombination.png)
*What happens when you combine methods?*

![](/docs/assets/logItalic.png)
*Curvy text...*

![](/docs/assets/logBold.png)
*T H I C C text...*

![](/docs/assets/logWhite.png)
*What the colors look like. Feel free to add the other ones*

![](/docs/assets/SUCCESS.png)
*What a successful success!*

![](/docs/assets/NOTSUCCESS.png)
*What an unsuccessful failure!*

If the images are not working, please try to fix them, we have a GitHub repo for that...