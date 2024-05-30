class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
#         result = True
#         stack = list(s)
#         calcul_stack = []
#         while(len(stack)!=0):
#             c = stack.pop()
#             if len(calcul_stack) ==0:
#                 calcul_stack.append(c)
#                 continue

#             peek = calcul_stack[len(calcul_stack) - 1]
#             if (c == "[" and peek == "]") or (c == "(" and peek == ")") or (c == "{" and peek == "}"):
#                 calcul_stack.pop()
#                 continue
#             calcul_stack.append(c)

#         if len(calcul_stack)!=0:
#             result = False

#         return result
            
        stack = []
        for c in s:
            if c in '({[':
                stack.append(c) 
            else:
                if not stack or \
                (c == ')' and stack[-1] !='(') or \
                 (c == '}' and stack[-1] !='{') or \
                 (c == ']' and stack[-1] !='['):
                        return False
                stack.pop()
        return not stack
                    
        
        
    #     class Solution(object):
    # def isValid(self, s):
    #     stack = [] # create an empty stack to store opening brackets
    #     for c in s: # loop through each character in the string
    #         if c in '([{': # if the character is an opening bracket
    #             stack.append(c) # push it onto the stack
    #         else: # if the character is a closing bracket
    #             if not stack or \
    #                 (c == ')' and stack[-1] != '(') or \
    #                 (c == '}' and stack[-1] != '{') or \
    #                 (c == ']' and stack[-1] != '['):
    #                 return False # the string is not valid, so return false
    #             stack.pop() # otherwise, pop the opening bracket from the stack
    #     return not stack # if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
    #                      # so the string is valid, otherwise, there are unmatched opening brackets, so return false