/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function(isBadVersion: any) {
    return function(n: number): number {

        let left=0
        let right=n-1
        let mid=Math.floor((left+right)/2)
        let lastBadVersion = mid;

        while(left<=right){
            mid = Math.floor((left+right)/2)
            if(isBadVersion(mid)){
                right = mid-1
                lastBadVersion = mid
            }else
                left = mid+1
        }
        return lastBadVersion
    };
};

1 2 3 (4) (5) (6)

  left 0 3 3 3
 right 5 5 3 2
   mid 2 4 3 2
midVal f t t x


1 (2) (3)
  left 0 0
 right 2 0
   mid 1 0
midVal t f