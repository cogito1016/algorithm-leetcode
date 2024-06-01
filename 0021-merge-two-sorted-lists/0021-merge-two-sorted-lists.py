class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        result = ListNode()
        resultInner = result
        while(list1 or list2):
            
            if(not list2):
                resultInner.next = ListNode(list1.val)
                list1 = list1.next
                resultInner = resultInner.next
                continue
                
            if( not list1):
                resultInner.next = ListNode(list2.val)
                list2 = list2.next
                resultInner = resultInner.next
                continue
            
            
            if(list1.val < list2.val):
                resultInner.next = ListNode(list1.val)
                list1 = list1.next
                resultInner = resultInner.next
                continue
            if( list2.val < list1.val):
                resultInner.next = ListNode(list2.val)
                list2 = list2.next
                resultInner = resultInner.next
                continue
            if(list1.val == list2.val):
                resultInner.next = ListNode(list1.val)
                resultInner.next.next = ListNode(list2.val)
                list1 = list1.next
                list2 = list2.next
                resultInner = resultInner.next.next
                continue
        
        if result.next:
            result = result.next
        else:
            result = None
        
        return result