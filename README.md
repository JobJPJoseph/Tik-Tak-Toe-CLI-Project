# Tik-Tak-Toe CLI Project

## Phase 1
Our first task is to create a __player.js__ file and spec file to go with it. We need to make sure the `readline` is working as intended.

We need to create a `Player` class that accepts an object that represents the `readline` object.
The class will have two instance methods: `getCoordinate` and `validateCoordinate`.
Also need to create tests for them.

## Phase 2
Our next task is to create a `Cpu` class that emulates the `Player` class. This time the cpu will grab a random coordinate from the `availableCoordinates` and return it. No need to validate it or format it.

## Phase 3
Our next task is to create a `Board` class. This will handle most of the tasks for this application.

### Phase 3-1
Our first task for this class is to create a constructor that will accept two arguments. The arguments represent an instance from the `player` class and the `Cpu` class.
Note: We can just use `extends`.
We need to initialize a instance variable called `this.grid` which is an empty array. The grid needs tp be a 2-D Array 3-by-3 where each default value is a dash `"-"`.
