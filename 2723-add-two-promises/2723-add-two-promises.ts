type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const p1 = await promise1.then()
    const p2 = await promise2.then()
    
    return new Promise(
        resolve=>resolve(p1+p2)
    )
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */