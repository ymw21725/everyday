'use strict';

const student = [
    '홍길동',
    '박성연',
    '강감찬',
    '간디',
    '박명수',
];

// return을 쓰는 이유는 반환값이 필요한지 여부, (없으면 실행하고 끝. )
/*
    Array.map(callbackfn: (value: T, index: number, array: T[]) => T, thisArg?: any): T[]
    // T는 템플릿(Template) 의미.
- 배열을 순차적으로 순회하면서 배열의 각 요소에 대해 콜백함수(predicate)를 호출하여 각 요소를 가공하여 원본 배열에 사상(Mapping)
  되는 새로운 배열을 반환.
  map 메서드는 크기가 할당되더라도 초기화되지 않은 상태에서는 자동 순회되지 않음에 주의.
*/

let client = student.map(v => v + '님');    // client에 student안 배열 요소들을 1대1로 배치(매핑)하여 추가함.
console.log(client);                        // 홍길동님, 박성연님, 강감찬님 ~ 으로 배열형태로 출력됨. 

client = student.map(v => {           // map 메서드는 원본 배열의 각 요소에 대하여 익명 객체의 반환값을 이용해
    v + '님';  
    return client; // return client 써주면 배열5개가 5번만들어진다(2차원배열형태로)  // 1:1 매핑된 새로운 배열의 참조를 반환받는 형식을 취하므로 당행과 같은 블럭{}
}); 

// 내에서는 명시적 return 을 하지 않으면 undefined 로 매핑된 배열이 반환됨에 주의.
let ct = 0;
student.forEach(v => console.log(v));

console.log(student.forEach);

console.log(client);
console.log(student);
console.log(student.map);

console.log('-------------------');