class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        while(n != 1):
            if(n == 4):
                return False

            strArr = list(str(n))
            n=0
            for s in strArr:
                nTemp = int(s)
                n += nTemp ** 2
            print(n)
        return True