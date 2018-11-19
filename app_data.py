import json
import random


def generateData(x,y):
    grid = [[0 for m in range(x+1)] for n in range(y+1)]
    for j in range(y+1):
        for i in range(x+1):
            cell_val = random.uniform(0, 1)
            if cell_val >= 0.7:
                grid[j][i] = 1

    print grid
    return grid



grid = generateData(30,30)

def makeJson(grid):

    data = {}
    data["grid"] = []
    data["grid"].append(grid)
    print data

    with open('robotdata.txt', 'w') as outfile:  
        json.dump(data, outfile)

makeJson(grid)
