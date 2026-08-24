# Users Manager

```js
import { usersManager } from "/42/api/os/managers/usersManager.js"
// Or
const usersManager = sys42.users
```

The users manager handles user accounts and login sessions.

:::tip
The [boot process](../boot.md) goes hand in hand with the users manager.
:::

- `activeUser` - the currently logged-in user.
- `users` - list of user names.
- `loggedOut` - the user who logged out (shown next on the login screen).

## Methods

- `createUser(name)` creates the base folder structure under `/c/users/<name>`:
  - default directories (~/documents, etc), each with a `.directory` file for its folder icon.
  - a `Home.desktop` shortcut on the desktop.
- `forkUser(name, forkedUserName)` copies an existing user's entire folder to a new user.
- `login(name)` - switches to a user. Points `/style.css` at `~/config/style.css`, updates `activeUser`, and reloads.
- `logout()` - clears `activeUser`, remembers `loggedOut`, and reloads.
- `chooseUserDialog()` - the login screen shown after logout.
- `claimRootUserDialog()` - shown on system updates while logged in as the default `windows93` user. Offers to overwrite the default user with the updated files, or create a new user instead.