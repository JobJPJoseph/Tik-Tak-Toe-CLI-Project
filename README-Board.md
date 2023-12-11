# Board Class

## Phase 1
Our first task for this class is to create a constructor that will accept two arguments. The arguments represent an instance from the `player` class and the `Cpu` class.
Note: We can just use `extends`.
We need to initialize a instance variable called `this.grid` which is an empty array. The grid needs to be a 2-D Array 3-by-3 where each default value is a dash `"-"`.

Next we need to print out the `this.grid` instance in a way to replicate a tik-tak-toe baord.

```
    - | - | -
    ---------
    - | - | -
    ---------
    - | - | -
```
Our next task is to create a method called `getCoordinate`. It will accept one argument called `input`. `input` represents a Coordinate in `this.grid`. The purpose of this method is to return the value of the element inside grid using the input that is given.

Create a method called `setCoordinate`. It will accept two argument called `input` and `player`. `input` representing coordinates and `player` representing an instance. The purpose of this method is to reference the `this.grid` value using the input and replacing the `this.grid` value with the `player.symbol`

Create a method called `isValid`. It will accept an argument called `input`.
The purpose of this is to return a boolean. It is to confirm that if the input given value equals a dash.

Create a method called `collectCoordinate`. It will iterate through `this.grid` and call `isValid`. If true, will push the coordinates into an empty array. Once done will return that array.

## Phase 2
Create a method called `stateOfGame`. The purpose of this method is to call `isLose` and `isWin`. If `isWin` is true, then return`console.log("You Win!!!")`. If lose, then return `console.log("You Lose!!!")`

Create a method called `isLose`. The purpose of this method is to see if `horizontalStreak`, `verticalStreak`, `acrossTopLeft`, `acrossBottomLeft` have streak of `this.cpu.symbol`. If any them returns true, return true, otherwise return false.

Create a method called `isWin`. The puropse of the method is to see if `horizontalStreak`, `verticalStreak`, `acrossTopLeft`, `acrossBottomLeft` have streak of `this.player.symbol`. If any them returns true, return true, otherwise return false.

Create a method called `flattenGridRecursive`. The goal here is flatten to the `this.grid` and return it.

Create a method called `isTie`. The purpose here is to call `flattenGridRecursive` and test if the count of dashes equal 0.

## Phase 3
Create a method called `horizontalStreak`. The method accept a single argument named `character`. The purpose of the method is to see if any of the rows in `this.grid` has a streak of `character`. If any of the rows become true, explicitly return true, if all else fails return false.

Create a method called `verticalStreak`. The method accept a single argument named `character`. The purpose of the method is to see if any of the cols in `this.grid` has a streak of `character`. If any of the cols become true, explicitly return true, if all else fails return false.

Create a method called `acrossTopLeft`. The method accept a single argument named `character`. The purpose of the method is to see if by grabbing a  coordinate form top left to the bottom right and see if it produces a streak. If any of the cols become true, explicitly return true, if all else fails return false.
`Note`: Make sure to look for any pattern when iterating through `this.grid`

Create a method called `acrossBottomLeft`. The method accept a single argument named `character`. The purpose of the method is to see if by grabbing a  coordinate form bottom left to the top right and see if it produces a streak. If any of the cols become true, explicitly return true, if all else fails return false.
`Note`: Make sure to look for any pattern when iterating through `this.grid`

## Phase 4
Create a method called `rotateTurn`. This method will reference `this.turn`. The purpose of this method is to replicate a basic rotate method since JavaScript does not have a built-in `.rotate`.

Create a method called `current`. The goal here is to return the first index of `this.turn`.
