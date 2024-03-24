// alert('안녕 월드')

var 배열 = [6, 3, 40, 7, 2] 

// 정렬하는 법 ==> sort 

배열.sort()             // 정렬완료  (문자열 기준)
console.log(배열)

// 숫자 정렬하고 싶으면 a (앞에거) b (뒤에거) 비교해서 
// 음수나오면 (앞에거가 작으면) a, b로 정렬
// 양수나모녀 (뒤에꺼가 작으면) b, a로 정렬
배열.sort((a,b)=>a-b)
console.log(배열)

// sort로 정렬하고 싶다
// 리턴값이 -면 a를 앞에두고 
// 리턴값이 +면 b를 앞에둔다 

// 문자열 정렬 (알파벳순)
배열 = ['qwer12', 'asdf34', 'zxcv', 'pl']
배열.sort()         // 배열을 정렬
console.log(배열)

배열 = ['한글34', '한글12', '가나다라마', '안녕하세요']
배열.sort()
console.log(배열)

객체배열 = [
    {'id':0, 'name': '홍길동'},
    {'id':2, 'name': '유관순'},
    {'id':1, 'name': '김유신'}
]
객체 = [
    {'id':0, 'name': '홍길동'},
    {'id':2, 'name': '유관순'},
    {'id':1, 'name': '김유신'}
]

// 객체들 정렬
객체.sort((a,b)=>{
    return a['id']-b['id']
})
console.log(객체)

객체배열.sort((a,b)=>{
    // 해당 지역의 언어순으로 정렬 localeCompare
    return a['name'].localeCompare(b['name'])
})
console.log(객체배열)

// filter : 내가 원하는 값만 남겨라 (return값에 해당하는 요소만 남김)
// id가 2이상인 객체만 남기자
var 새정렬 = 객체배열.filter((e)=>{
    return e['id'] >= 2 
})
console.log(새정렬)

// map : 일괄변경 (배열 안에 들어있는 모든 요소를 return 값으로 변경)
var 달러 = [1,2,3,4,5,6,7,8,9,10]
var 원화 = 달러.map(e=>{
    return parseFloat((e * 1344.60).toFixed(2))   // 소수점 2자리에서 반올림
})
console.log(달러)
console.log(원화)


// forEach : 배열이 각 요소를 분리해주는 배열전용 반복문
// 길이 계산을 자동으로 for(let i=0; i<달러; i++){}
달러.forEach((e)=>{
    console.log(e)      // 안에 있는 요소들을 하나씩 돌아가면서 반복문 사용
})

