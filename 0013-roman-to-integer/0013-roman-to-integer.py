class Solution(object):
    def changeException(self, s):
        if s == 'IV':
            return 4
        elif s== 'IX':
            return 9;
        elif s== 'XL':
            return 40;
        elif s== 'XC':
            return 90;
        elif s== 'CD':
            return 400;
        elif s== 'CM':
            return 900;
        else:
            return 0;
        
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = self.changeException(s)
        if result != 0:
            return result

        sum = 0;

        i = 0
        while i < len(s):
            gap = len(s) - i -1
            
            
            if gap != 0:
                c = s[i]+s[i+1]
                t = self.changeException(c)
                if t!=0:
                    sum+=t
                    i+=2
                    continue
            
            c = s[i]
            
            if c == 'I':
                sum += 1;
            elif c == 'V':
                sum += 5;
            elif c == 'X':
                sum += 10;
            elif c == 'L':
                sum += 50;
            elif c == 'C':
                sum += 100;
            elif c == 'D':
                sum += 500;
            elif c == 'M':
                sum += 1000;
                
            i+=1

        return sum;
        