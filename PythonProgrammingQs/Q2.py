## Some research

def hi(num, special=5):
    special = 1
    return num+special

hi(1)

def hi1(num, special=[]):
    special.insert(0,num)
    return special

print hi1([10],[4,4])
# ------------------------------------------------------------------- #

## The lst=[] part is a default for that parameter
## so if that parameter is left empty it will default to [] in the code
## hoewever the lst.insert(0,v) line can change that lst variable
## and change/affect it.
## The decleration in the function is treated like any other decleration
## that can be changed later on.

### fn(23) => [23]
### fn(16, [1, 2]) => [16, 1, 2]
### fn([10], [3, 4]) => [[10], [3, 4]
### fn([11]) => [[11]]
