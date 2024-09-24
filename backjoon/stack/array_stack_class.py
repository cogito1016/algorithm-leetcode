class ArrayStack:
    #self는 무조건 첫 번째 매개변수이다. (객체 자신을 의미한다)
    def __init__(self, capacity): #파이썬의 멤버필드는 생성자에서 선언하고초기화한다.
        self.capacity = capacity
        self.arr = [None]*capacity
        self.pointer = -1


    def add(self, n):
        self.pointer += 1
        self.arr[self.pointer] = n

    def isEmpty(self):
        if self.arr[0] == None:
            return True
        return False

    def pop(self):
        if (self.isEmpty()):
            return None
        result = self.arr[self.pointer]
        self.arr[self.pointer] = None
        self.pointer -= 1
        return result

    def peek(self):
        if (self.isEmpty()):
            return None
        return self.arr[self.pointer]

stack = ArrayStack(10)


print(stack.arr) #[None, None, None, None, None, None, None, None, None, None]
stack.add(3)
print(stack.arr) #[3, None, None, None, None, None, None, None, None, None]
stack.add(1)
print(stack.arr) #[3, 1, None, None, None, None, None, None, None, None]
stack.add(2)
print(stack.arr) #[3, 1, 2, None, None, None, None, None, None, None]
print(stack.isEmpty()) #False
print(stack.pop()) #2
print(stack.pop()) #1
print(stack.pop()) #3
print(stack.isEmpty()) #True
stack.add(8)
print(stack.arr) #[8, None, None, None, None, None, None, None, None, None]
print(stack.peek()) #8