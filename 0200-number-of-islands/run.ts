const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

console.log(numIslands(grid))

function numIslands(grid: string[][]): number {
    const direction = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]

    const queue : [number,number][] = []
    const rowMax = grid[0].length
    const colMax = grid.length

    for(let i=0; i<rowMax; i++){
        for(let j=0; j<colMax; j++){
            queue.push([j,i])
            if(grid[j][i]==="0" || grid[j][i]==="2")
                continue

            while(queue.length!==0){
                const [y,x] = queue.shift()!;
        
                if(grid[y][x]==="0")
                    continue
        
                grid[y][x]="2"
        
                for(const [d_y,d_x] of direction){
                    const n_y = y+d_y
                    const n_x = x+d_x
        
                    if(n_y>=0 && n_x>=0 && n_y<colMax && n_x<rowMax && grid[n_y][n_x]==="1"){
                        queue.push([n_y,n_x])
                    }
                }
            }
        }
    }
};