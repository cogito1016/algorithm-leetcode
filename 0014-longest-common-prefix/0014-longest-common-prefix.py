class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        result = ""
        
        i = 0
        lenStrs = len(strs)
        
        while(i<200):
            
            commonC = ""
            resultLen = len(result)
            
            for j in range(lenStrs):
                lenStr = len(strs[j])
                if(lenStr<=i):
                    break
                
                c = strs[j][i]
                if(commonC==""):
                    commonC = c
                
                if(commonC!=c):
                    break
                
                if(j== lenStrs-1):
                    result+=c
            
            if(resultLen == len(result)):
                break
            
            i+=1
            
        return result
            
        
        