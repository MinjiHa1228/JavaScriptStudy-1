


// ClassName 은 Pascal 표기법(Upper Camel) 사용
// class : 설계서
class Jumin {

    // 생성자 함수 (생성되는 즉시 호출됨) - 함수는 호출 되면 끝날 때 소멸되므로 어딘가에 저장을 해야 함
    constructor(jumin_no) {
        //내부에 저장될 변수
        this.jumin_no = jumin_no // this - Jumin 자신이 가지고 있는 변수
    }
    // 부가정보를 얻어오는 함수를 만든다

    //함수(변수)명의 표기법은 일반적으로 : low Camel => getYear() , snake 표기법도 무관함

    //출생년도 구하는 함수
    //                01234567890123  <- index
    //this.jumin_no ="991212-1234567"

    /*       gender code
    
               내국인         외국인
            남      여      남        여
    1900    1       2       5       6
    2000    3       4       7       8
    1800    9       0       
    
    */
    getYear() {

        let year = parseInt(this.jumin_no.substring(0, 2)); // "99" -> 99


        let gender = parseInt(this.jumin_no.charAt(7)); // "1" -> 1

        switch (gender) {

            case 1:
            case 2:
            case 5:
            case 6: year = year + 1900; break;
            case 3:
            case 4:
            case 7:
            case 8: year = year + 2000; break;
            default: year = year + 1800
        }
        return (year);

    }

    getAge() {
        //내가 소유한 함수 getYear()호출
        // 출생년도
        let year = this.getYear();
        // 현재년도

        let today = new Date();// 현재시스템 날짜구하기 (년월일시분초요일)
        let current_year = today.getFullYear();

        //나이 = 현재년도 - 출생년도
    
        return current_year - year;

    }

    getGender() {

        return "남자";
    }

    // 12지
    // 4  5  6  7  8 9 10 11  0  1  2  3 <= 출생년도 ()%12
    // 자 축 인 묘 진 사 오 미 신 유 술 해
    
    getTti() {
        let tti;
        switch(this.getYear()%12){
            case 0: return "원숭이"

            case 1: tti ="닭" ; break;
            case 2: tti ="개";  break;
            case 3: tti ="돼지"; break;
            case 4: tti ="쥐"; break;
            case 5:  tti ="소"; break;
            case 6:  tti ="호랑이"; break;
            case 7:  tti ="토끼"; break;
            case 8: tti ="용"; break;
            case 9:  tti ="뱀"; break;
            case 10:  tti ="말"; break;
            case 11:  tti ="양";break;
        }
     
       console.log(tti);
         return tti;
    
}
    
    getLocal() {

        return "제주";
    }

    getSeason() {

        return "겨울";
    }
    getGanji() {

        return "기묘년";
    }

}

// const Jumin = new Jumin("901212-1234567"); // Jumin 을 new 에서 다시 생성한다
// let year    = Jumin.getYear();
// let age     = Jumin.getAge();
// let gender  = Jumin.getGender();
// let tti  = Jumin.getTti();