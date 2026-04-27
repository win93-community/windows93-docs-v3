# Trollbox Documentation

## Overview

Trollbox is a real-time chat client built on Socket.IO. It connects to a server at `https://v2.windows93.net:8088`.

---

## Socket.IO Connection

```javascript
const socket = io('https://v2.windows93.net:' + port);
```

**Port:** `8088`

The client automatically connects and emits an initial "user joined" event.

---

## Socket Events Emitted (Client → Server)

### `user joined`
Emitted when a user joins or when their nickname/color changes.

**Parameters:**
- `pseudo` (string) - User's nickname
- `color` (string) - User's color (CSS color or empty string)
- `style` (string) - Additional style string (e.g., "image")
- `pass` (string) - Password (currently unused)

**Usage:**
```javascript
socket.emit('user joined', pseudo, color, style, pass);
```

**Triggered by:**
- Initial connection via `connect` event
- Nickname change (button click or `/nick` command)
- Color change via `/color` command

---

### `message`
Emitted when a user sends a chat message.

**Parameters:**
- `msg` (string) - The message text (max 10,000 characters)

**Usage:**
```javascript
socket.emit('message', msg);
```

---

## Socket Events Received (Server → Client)

### `connect`
Fired when the WebSocket connection is successfully established.  
Emits initial "user joined" event with current user's data

---

### `message`
Received when any user sends a message (including the current user).

**Payload:**
```javascript
{
  msg: string,
  nick: string,
  color: string,
  style: string,
  date: number,
  home: string
}
```

---

### `user joined`
Fired when a new user joins the trollbox. This updates the user list, and skips the join message if the user is blocked

**Payload:**
```javascript
{
  nick: string,
  color: string,
  style: string,
  home: string,
  date: number
}
```

**Validation:** (client side)
- Ignores messages with undefined/null nickname
- Converts undefined nicknames to "anonymous"
- Rejects non-string nicknames

---

### `user left`
Fired when a user disconnects from trollbox.

**Payload:**
```javascript
{
  nick: string,
  home: string,
  date: number
}
```

---

### `user change nick`
Fired when a user changes their nickname.

**Payload:**
```javascript
[
  { nick: string, home: string, ... },
  { nick: string, home: string, ... }
]
```

---

### `user change room`
Fired when a user enters a different room.

**Payload:**
```javascript
[
  { date: number, home: string, nick: string, ... },
  roomName
]
```

---

### `room info`
Fired when requesting room information via `/r` command.

**Payload:**
```javascript
[
  currentRoom: string,
  [
    {
      name: string,
      users: [
        { nick: string, home: string, ... },
        ...
      ]
    },
    ...
  ]
]
```

---

### `update users`
Fired when the user list changes (user joins, leaves, or changes nick).

**Payload:**
```javascript
{
  [socketId]: {
    nick: string,
    home: string,
    color: string,
    style: string,
    date: number
  },
  ...
}
```

---

## Theming

| ID | Purpose |
|---|---|
| `#trollbox_scroll` | Chat message area (scrollable) |
| `#trollbox_infos` | User list panel (right side) |
| `#trollbox_form` | Message input form |
| `#trollbox_input` | Textarea for message input |
| `#trollbox_nick_btn` | Nickname button (clickable to change) |
| `#cooking` | Hidden container for image processing |

---


**Theme:**
- Background: `#272822`
- Text: `#f8f8f2`
- Font: Tomo (monospace)
- Line height: 13px
- Font size: 12px

**User list hover:** `#494A44` background on interaction

