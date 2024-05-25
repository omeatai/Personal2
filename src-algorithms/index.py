def solution(number):
    threes = list(range(3, number, 3))
    fives = list(range(5, number, 5))
    return sum(list(set(threes + fives)))


print(solution(10))
