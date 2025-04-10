const image = [[0,0,0],[0,0,0]];
const sr = 1, sc = 0, color = 2;

console.log(floodFill(image,sr,sc,color));

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const direction = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]

    const queue: [number,number][] = [];
    const targetValue = image[sr][sc];
    const colMax = image.length
    const rowMax = image[0].length

    if(targetValue===color)
        return image

    queue.push([sr,sc])
    while(queue.length!==0){
        const [y,x] = queue.shift()!;
        const value = image[y][x];    

        if(targetValue!==value)
            continue
        
        image[y][x]=color;

        for(const [d_y,d_x] of direction){
            if(y+d_y >= 0 && x+d_x >=0 && y+d_y<colMax && x+d_x<rowMax && image[y+d_y][x+d_x]===targetValue){
                queue.push([y+d_y,x+d_x])
            }
        }
    }

    return image
};

