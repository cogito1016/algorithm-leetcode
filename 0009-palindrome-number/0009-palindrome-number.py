class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        str_x = str(x)
        while(len(str_x)!=0):
            if(str_x[0]!=str_x[len(str_x)-1]):
                return False
            str_x = str_x[1:len(str_x)-1]
            
        return True

