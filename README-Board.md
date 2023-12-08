# Board Class

## Phase 1
Our first task for this class is to create a constructor that will accept two arguments. The arguments represent an instance from the `player` class and the `Cpu` class.
Note: We can just use `extends`.
We need to initialize a instance variable called `this.grid` which is an empty array. The grid needs tp be a 2-D Array 3-by-3 where each default value is a dash `"-"`.

## Phase 2
Next we need to print out the `this.grid` instance in a way to replicate a tik-tak-toe baord.

```
    - | - | -
    ---------
    - | - | -
    ---------
    - | - | -
```
## Phase 3
Our next task is to create a method called `getCoordinate`. It will accept one argument called `input`. `input` represents a Coordinate in `this.grid`. The purpose of this method is to return the value of the element inside grid using the input that is given.

## Phase 4
Create a method called `setCoordinate`. It will accept two argument called `input` and `player`. `input` representing coordinates and `player` representing an instance. The purpose of this method is to reference the `this.grid` value using the input and replacing the `this.grid` value with the `player.symbol`

## Phase 5
Create a method called `isValid`. It will accept an argument called `input`.
The purpose of this is to return a boolean. It is to confirm that if the input given value equals a dash.

## Phase 6
Create a method called `collectCoordinate`. It will iterate through `this.grid` and call `isValid`. If true, will push the coordinates into an empty array. Once done will return that array.
