Roombaa
===========

Here's my answer to the Roomba question. If you don't know what that is, don't worry, and move along.

To download, call these commands in this order in your CL:
```
git clone https://github.com/jamieallen59/roombaa.git
cd roombaa
npm i
```
Once you have it, you can run it in development by calling:
```
npm run start:dev
```
Head to localhost:8080 to see it in development.

To run the production code, call:
```
npm run build:prod
npm start
```

Then head to localhost:3000 to see it in all its divine glory.

### Why?
The concept is that you are the master of all hoovers, and you can define exactly where they begin, the parameters in which they charge around, and also lay down some dirt for them to clean up. Once you know that, you must feed your machine (the programme) your commands (in a rather precise format, which I'll get to), and your magic machine will output not only the final position of your hoover, but also the bits of dirt is has picked up on the way!

### How?
Ok, so here's the format. Upload a text file with the following:
First two numbers are the dimensions of the grid.
Third and fourth are the X and Y coords of the starting position of your hoover.
Then, you can put as many pairs of X and Y coords after that, which will be the patches of dirt on your grid.
Finally, a row of letters e.g. NEEWSWENN, which are the instructions to your hoover.

### Example file
```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

Do it correctly and you will see the results miraculously displayed as if by magic on your screen.
