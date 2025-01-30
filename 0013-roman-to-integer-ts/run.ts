/**
 * I 1
 * V 5
 * X 10
 * L 50
 * C 100
 * D 500
 * M 1000
 * 각각을 정수로 변환
 *
 * 좌측부터 우측으로 숫자가작아지며 이때는 직관적으로 더하면 됨 XXI = 10+10+1 = 21
 * 그러나 좌측에있는수가 우측보다 작은경우는 우측-좌측 처리를해야함 IX = 10-1 = 9
 *
 * 숫자를 왼쪽부터 오른쪽으로 읽어가며
 * 좌측(이전)에 어떤 숫자가나왔는지 체크를해야함
 * 좌측 숫자가 현재숫자보다 작다면
 * 토탈 = 토탈-좌측숫자+(현재숫자-좌측숫자)
 */

const s = "MCMXCIV"
console.log(romanToInt(s))
function romanToInt(s: string): number {
    const map: Record<string,number> = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };

    let result = 0;
    let prevValue = 0;

    for(let i=0; i<s.length; i++){
        const c = s.charAt(i);
        const currentValue = map[c];

        if(prevValue < currentValue){
            result += currentValue-prevValue*2 //result-beforeValue+(currentValue-beforeValue)
        }else{
            result += currentValue
        }

        prevValue = currentValue
    }
    return result;
}