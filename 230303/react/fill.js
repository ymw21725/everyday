'use strict';

let ar1 = [1, 2, 3, 4, 5];

/*
    < fill >

- 배열의 요소들을 인수값으로 초기화한 원본 배열 반환.
  초기화한 새로운 배열이 아닌 원본 배열 자체를 초기화함에 주의.
  offset 설정이 가능하며 end 인덱스는 포함되지 않아 end 직전까지만 지정.

형식    :   Array<any>.fill(value: any, start?: number | undefined, end?: number | undefined): any[]
                            초기화값,   시작값(선택),                종료값(선택)
*/
console.log(ar1); // [1,2,3,4,5]출력.
let ar2 = ar1.fill(5);  // ar1의 배열에 인수값 5를 넣어서 원본 반환 

console.log(ar1);      // 위의 줄에서 5로 넣어서 원본 반환하였으므로 [5,5,5,5,5] 출력.
console.log(ar2);       // ar2 = ar1.fill(5)이므로 [5,5,5,5,5]출력.
console.log();

ar2[0] = 7; // ar2[0]번째 값을 7로 바꿈.

console.log(ar1); //[7,5,5,5,5] // ar1과 ar2가 같아지므로(?)
console.log(ar2);   // [7,5,5,5,5] 출력됨 (위에서 0번째 인덱스값을 변경하였으므로.)
console.log();

/* ================================================================================================ */
console.log(ar1)    // [7,5,5,5,5]
ar1.fill(0, 1, 3);      // end 인덱스 직전까지 초기화.
console.log(ar1);   // end 인덱스 직전까지 초기화하므로 0 값을 1번째 인덱스부터 3번째 인덱스 직전까지 할당.
                    // [7,0,0,5,5] 출력
console.log(ar2);   // ar2 = ar1.fill이므로 [7,0,0,5,5] 출력.
console.log('======================');

/* ================================================================================================ */

/* 
    < forEach 와 map 의 특성 >

- forEach, map 메서드는 크기가 할당되더라도 초기화되지 않은 상태에서는 자동 순회되지 않으며,
  콜백함수에 익명함수나 람다식 적용시 this 는 적용되지 않음. ( undefined 반환 )
*/

let ar3 = new Array(5);

ar3.forEach((v, i) => console.log(i));  // 배열의 크기가 할당되더라도 초기화되지 않아
//                                      // 배열 순회가 되지 않음을 확인 가능.

ar3.fill(0).forEach((v, i) => console.log(i));  // 0,1,2,3,4 출력됨.
console.log();

ar3.forEach(function () {   // forEach 메서드의 악명객체 내에서의 this 는 undefined 반환.
    console.log(this);  // 전부 undefined 반환된다. 
});