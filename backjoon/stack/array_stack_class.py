class ArrayStack:
    #self는 무조건 첫 번째 매개변수이다. (객체 자신을 의미한다)
    def __init__(self, capacity): #파이썬의 멤버필드는 생성자에서 선언하고초기화한다.
        self.capacity = capacity
        self.array = [None]*capacity
        self.top = -1