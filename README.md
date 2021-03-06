[Roombaa]
===========

Here's my answer to the Roomba question. If you don't know what that is, don't worry, move along, nothing to see here.

To download the code, call these commands in this order in your CLI:
```
git clone https://github.com/jamieallen59/roombaa.git
cd roombaa
npm i
```
Development
----------
Once downloaded, run it in development by calling:
```
npm run start:dev
```
Now head over to localhost:8080 to take a look.

Production
----------
To run the production code, call:
```
npm run build:prod
npm start
```

Then head to localhost:3000 to see it in all its divine glory.

### Why?
The concept is that you are the master of all hoovers (A Roomba is a hoover - this one is called roombaa), and you can define exactly where they begin, the parameters in which they charge around, and also lay down some dirt for them to clean up. This is done in a very precise format, which I'll come on to. Once you know what you want and have the commands written down (in a .txt file...), you must feed your machine (the programme) your commands, and your magic machine will output not only the final position of your hoover, but also the bits of dirt is has picked up on the way!

### How?
Ok, so here's the format. Upload a text file with the following:
- First two numbers are the dimensions of the grid.
- Third and fourth are the X and Y coords of the starting position of your hoover.
- Then, you can put as many pairs of X and Y coords after that, which will be the patches of dirt on your grid.
- Finally, a row of letters e.g. NEEWSWENN, which are the instructions to your hoover.

Sounds a bit complicated... here's an example:
### Example file
```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

Do it correctly and you will see the results displayed as if by magic on your screen.

Got your text file ready? Head over [here] and try it.

Thanks!

[here]: https://roombaa.herokuapp.com/
[Roombaa]: https://roombaa.herokuapp.com/
