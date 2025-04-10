const image = [[0,0,0],[1,0,0]];
const sr = 1, sc = 0, color = 2;

console.log(floodFill(image,sr,sc,color));

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const map:number[][] = Array.from({length:image.length},()=>Array(image[0].length).fill(0));

    const queue: [number,number][] = [];
    const targetValue = image[sr][sc];
    const colMax = image.length
    const rowMax = image[0].length

    queue.push([sr,sc])
    while(queue.length!==0){
        const [y,x] = queue.shift()!;
        const value = image[y][x];    

        if(targetValue!==value)
            continue
        
        image[y][x]=color;
        map[y][x]=1;

        if(x-1>=0 && image[y][x-1]===targetValue && !map[y][x-1]){
            queue.push([y,x-1])
        }

        if(y-1>=0 && image[y-1][x]===targetValue&& !map[y-1][x]){
            queue.push([y-1,x])
        }

        if(x+1<rowMax && image[y][x+1]===targetValue&& !map[y][x+1]){
            queue.push([y,x+1])
        }

        if(y+1<colMax && image[y+1][x]===targetValue&& !map[y+1][x]){
            queue.push([y+1,x])
        }
    }

    return image
};

