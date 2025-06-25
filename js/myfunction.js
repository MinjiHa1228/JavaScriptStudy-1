
function minus(a, b) {
    //let c = a-b;
    return a - b;
}

// 1 ~ n까지의 합
function hap(n) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

// n까지의 짝수의 합
function hap_even(n) {

}
// n까지의 홀수의 합
function hap_odd(n) {

}

// n까지의 m의 배수의 합
function hap_baesu(n, m) {

}


// n까지의 짝수목록
function even_list(n) {

    let list = [];
    for (let i = 0; i <= n; i++) {
        //짝수면
        if (i % 2 == 0) {
            //배열에 요소 추가
            list.push(i);
        }
    }//end:for

    return list;
}

// n까지의 솟수를 구하기
// 솟수:자신의 값 외에 나눌수 없는수
function prime_list(n) {
    let list = [];

    //for: 솟수찾아서 배열에 
    for (let i = 2; i <= n; i++) {

        if (i == 2 || i == 3) {
            list.push(i);
            continue;
        }

        let bPrime = true;
        for (let k = 2; k < Math.sqrt(i); k++) {
            if (i % k == 0) {
                bPrime = false;
                break;
            }
        }//end:for(k)

        if (bPrime)
            list.push(i);

    }//end:for(i)

    return list;
}



함수 또는 for문 형식

//함수
function 함수(변수) {
    결과값=변수-변수;
};



function 함수(변수){
    결과값=변수-변수;
};

function 함수(변수){
    결과값=변수-변수
}

function 함수(변수){
    결과값=변수-변수
}

function 함수(변수){
    결과값=변수-변수
}

함수명 변수명

function (바보)(변수){
    결과값= 변수-변수
}

function (함수)(변수){
    결과값= 변수-변수;
};
function 함수(변수){
    결과값=변수-변수;
};

function 함수(변수){
    결과값=변수-변수;
};
function 함수(변수){
    결과값=변수-변수;
    
};

function 함수(변수){
    결과값=변수-변수;
};

function 함수(변수){
    결과값 = 변수-변수;

};
//ab의 변수를 갖는 apple 의 함수만들어
function apple(ab){
    result=ab-ab;
};