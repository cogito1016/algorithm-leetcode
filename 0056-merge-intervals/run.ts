const intervals = [[1,4],[0,2],[3,5]]

console.log(merge(intervals))

function merge(intervals: number[][]): number[][] {
  if(intervals.length===1)
    return intervals

  intervals.sort((a,b)=> a[0]-b[0])
  const result:number[][] = []

  let prev = intervals[0]
  
  for(let i=1; i<intervals.length; i++){
    let current = intervals[i]

    if(prev[1]>= current[0]){
        prev = [prev[0],Math.max(prev[1],current[1])]
    }else{
        result.push(prev)
        prev=current
    }
  }

  result.push(prev)
  return result;
};