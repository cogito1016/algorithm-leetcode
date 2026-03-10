function strStr(haystack: string, needle: string): number {
    let firstIdx = -1
    let needleIdx = 0
    const N = haystack.length
    const needleLength = needle.length

    for(let i=0; i<N; i++){
        const char = haystack[i]

        if(firstIdx===-1 && char===needle[needleIdx]){
            firstIdx = i
            needleIdx++
            if(needleIdx===needleLength){
                break
            }
            continue
        }

        if(char===needle[needleIdx]){
            needleIdx++
            if(needleIdx===needleLength)
                break
            continue
        }
        
        if(firstIdx!==-1)
            i = firstIdx

        firstIdx = -1
        needleIdx = 0
    }

    if(needleIdx < needleLength){
        return -1
    }

    return firstIdx
};