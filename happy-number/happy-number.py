class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        s = set()

        while(n not in s):
            if(n == 1):
                return True
            s.add(n)

            nArr = list(str(n))
            n = 0
            for nTemp in nArr:
                n += int(nTemp) ** 2
        return False
