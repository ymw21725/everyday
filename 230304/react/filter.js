'use strict';

const student = [
    '홍길동',
    '박성연',
    '강감찬',
    '간디',
    '박명수',
];

/*
    Array.filter(predicate: (value: T, index: number, array: T[]) => value is T, thisArg?: any): T[]

- 배열을 순차적으로 순회하면서 콜백함수(predicate)를 호출하되, 콜백함수가 true 가 되는 모든 배열
  요소를 새로운 배열 형태로 반환하지만 콜백함수의 반환값이 모두 false 가 되면 빈 배열[]을 반환.
  따라서 filter 메서드는 배열의 원본 내에서 특정 조건에 맞추어 새로운 배열을 추출하는 역할.
  
*/
console.log(student.filter(() => 1)); // true만 반환 false는 반환안됨.
// 위의 문장은 1일경우 반환인되 1은 true이므로 전부 반환
// ['홍길동', '박성연',' 강감찬', '간디', '박명수'] 출력.

console.log()
console.log(student.filter((v, i) => i % 2 === 0)); // 인덱스 값이 나누어서 나머지가 0인경우(짝수)만 출력
// 인덱스가 짝수인 항목 ['홍길동', '강감찬', '박명수'] 만 출력됨.
console.log('-------------------');

// map은 전부 다 출력하나 filter는 조건을 만족하는 값만 가져와 새로운 배열을 만듬