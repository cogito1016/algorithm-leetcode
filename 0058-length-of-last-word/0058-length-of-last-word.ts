function lengthOfLastWord(s: string): number {
    const strArr : string[] = s.split(" ").filter((element)=>element.length!==0)
    return strArr[strArr.length-1].length
};