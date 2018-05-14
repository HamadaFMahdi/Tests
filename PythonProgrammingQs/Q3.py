def sumOfEvenSquares( arr ):
    evenArr = list(filter(lambda x: x%2 == 0, arr))
    evenSquaredArr = map((lambda x: x**2), evenArr)
    sumArr = reduce((lambda x, y: x + y), evenSquaredArr)
    return sumArr


