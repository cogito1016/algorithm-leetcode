class Solution(object):
    def twoSum(self, nums, target):
        result_idx_1 = 0
        result_idx_2 = 0
        
        for i in range(0, len(nums)):
            for j in range(i+1,len(nums)):
                if(nums[i]+nums[j] != target):
                    continue
                if(nums[i]+nums[j] == target):
                    result_idx_1 = i
                    result_idx_2 = j
                    break
            if(result_idx_1+result_idx_2 == target):
                break
        
        return [result_idx_1,result_idx_2]
        