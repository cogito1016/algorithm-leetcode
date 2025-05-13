const intervals = [[1,4],[0,2],[3,5]]

console.log(merge(intervals))

function merge(intervals: number[][]): number[][] {
  if(intervals.length===1)
    return intervals

  intervals.sort((a,b)=> a[0]-b[0])
  console.log(intervals)
  
  for(let i=0; i<intervals.length-1; i++){
    const prev = intervals[i]
    const next = intervals[i+1]
    if(prev[1]>=next[0]){
        const mergedValue = [prev[0],Math.max(next[1],prev[1])]

        const originIntervals = intervals.slice(0,i)
        const slicedIntervals = intervals.slice(i,intervals.length)

        slicedIntervals.shift()
        slicedIntervals.shift()
        slicedIntervals.unshift(mergedValue)

        intervals=[...originIntervals, ...slicedIntervals]
        i--
        continue
    }
  }

  return intervals;
};