# speed

### About

This property is the amount of milliseconds before the notification automatically closes. If this isn't present, the notification will automatically close after 1 millisecond per character has passed (average word = 5 chars, 180wpm/60 = 5, each word is 5 \* 1000 so each char is 1000)

This can be overridden by setting [`delay`](delay)to `true`, making the notification not auto-close,

### Type

number
