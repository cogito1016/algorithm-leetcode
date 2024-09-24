capacity = 10
arr = [None]*capacity
pointer = -1

print(arr) #[None, None, None, None, None, None, None, None, None, None]

def add(n:int):
    global pointer
    pointer = pointer + 1
    arr[pointer] = n

add(3)
print(arr) #[3, None, None, None, None, None, None, None, None, None]
add(1)
print(arr) #[3, 1, None, None, None, None, None, None, None, None]

def isEmpty():
    if arr[0] == None:
        return True
    return False

add(2)
print(arr) #[3, 1, 2, None, None, None, None, None, None, None]
print(isEmpty()) #False

def pop():
    if(isEmpty()):
        return None
    global pointer
    result = arr[pointer]
    arr[pointer] = None
    pointer = pointer - 1
    return result

print(pop()) #2
print(pop()) #1
print(pop()) #3
print(isEmpty()) #True

add(8)
print(arr)

def peek():
    if(isEmpty()):
        return None
    return arr[pointer]

print(peek()) #8