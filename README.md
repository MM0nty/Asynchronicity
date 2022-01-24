# Asynchronous Flow

`Asynchronous programming is when a unit of work is run separately from the main thread of the program and notifies the program of its completion.`

### Metaphor Example:
Imagine you and a friend are preparing for a party.

For this party that you're throwing, you (the main program thread) tell your friend (the asynchronous function) that you need them to get cups for the party. While they are getting cups, you are making the rest of the preparations based on your immaculate party prep schedule.

You don't need your friend to complete their task of retrieving cups in order to continue with your work. You send them on their way, and await their call to tell you if they were successful.

This differs from synchronous programming. In the same situation, synchronous code would have you wait until your friend returned with the cups before letting you continue your work. You would be sitting around waiting ("idling" or "blocked") despite having plenty of other tasks to complete. Now you're stuck waiting. Who knows if your friend will even come back with the cups?