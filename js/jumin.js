


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
        //짝수면
        let gender = (this.jumin_no).substring(7, 8);
        console.log(gender);
        if (gender % 2 == 0) return "여자";
        return "남자";
    }

    // 12지
    // 4  5  6  7  8 9 10 11  0  1  2  3 <= 출생년도 ()%12
    // 자 축 인 묘 진 사 오 미 신 유 술 해

    getTti() {
        let tti;
        switch (this.getYear() % 12) {
            case 0: return "원숭이"

            case 1: tti = "닭"; break;
            case 2: tti = "개"; break;
            case 3: tti = "돼지"; break;
            case 4: tti = "쥐"; break;
            case 5: tti = "소"; break;
            case 6: tti = "호랑이"; break;
            case 7: tti = "토끼"; break;
            case 8: tti = "용"; break;
            case 9: tti = "뱀"; break;
            case 10: tti = "말"; break;
            case 11: tti = "양"; break;
        }

        return tti;

    }

    getLocal() {

        let local = parseInt(this.jumin_no.substring(8, 10));

        if (local >= 0 && local <= 8) return "서울특별시";
        if (local >= 9 && 12 >= local) return "부산광역시";
        if (local >= 13 && 15 >= local) return "인천광역시";
        if (local >= 16 && 25 >= local) return "경기도";
        if (local >= 26 && 34 >= local) return "강원도";
        if (local >= 35 && 39 >= local) return "충청북도";
        if (local >= 40 && 41 >= local) return "대전광역시";
        if (local == 44 || 96 == local) return "세종특별자치시";
        if (local >= 42 && 47 >= local) return "충청남도";
        if (local >= 48 && 54 >= local) return "전라북도";
        if (local >= 55 && 56 >= local) return "광주광역시";
        if (local >= 55 && 64 >= local) return "전라남도";
        if (local >= 65 && 66 >= local) return "광주광역시";
        if (local >= 67 && 69 >= local) return "대구광역시";
        if (local >= 70 && 81 >= local) return "경상북도";
        if (local == 85 || local == 90) return "울산광역시";
        if (local >= 82 && 91 >= local) return "경상남도";

        if (local >= 92 && 95 >= local) return "제주특별자치도";


        return "제주";




    }

    //                01234567890123  <- index
    //this.jumin_no ="991212-1234567"


    getSeason() {
        // 2<=month<4
        let month = parseInt(this.jumin_no.substring(2, 4));

        //방법1)
        //     if(month>=3 && month <=5)return "봄";
        //     else if(month>=6 && month <=9)return "여름";
        //     else if(month>=9 && month <=11)return "가을";

        //     return "겨울";
        // }

        //방법2) switch
        //     switch(month)
        //    {
        //             case 3 :
        //             case 4 :
        //             case 5 :  return "봄";
        //             case 6 :
        //             case 7 :
        //             case 8 :   return "여름";
        //             case 9 :
        //             case 10 :
        //             case 11 :  return "가을";

        //    }

        //       return "겨울";
        //방법3)
        switch (Math.floor(month / 3)) {
            case 1: return "봄";
            case 2: return "여름";
            case 3: return "가을";
        }

        return "겨울";
    }

    //10간
    // 0  1 2  3  4 5  6  7  8 9   <= 년도%10(0~9)
    // 경 신 임 계 갑 을 병 정 무 기 

    getGanji() {
        let year = this.getYear();
        //1 2 3 45 6 7 8 9 <- index
        let gan = "경신임계갑을병정무기".charAt(year % 10);
        //   0 1 2 3456  78 91011 <- index
        let ji = "신유술해자축인묘진사오미".charAt(year % 12);

        console.log(ji);



        return gan + ji + "년"; // `${gan}${ji}년`

    }

    //                01234567890123  <- index
    //this.jumin_no ="991212-1234567"
    //               234567 892345
    //is XXXX : 맞냐?
    
    isValid() {

        let sum = 0;

        sum = sum + parseInt(this.jumin_no.charAt(0)) * 2;
        sum = sum + parseInt(this.jumin_no.charAt(1)) * 3;
        sum = sum + parseInt(this.jumin_no.charAt(2)) * 4;
        sum = sum + parseInt(this.jumin_no.charAt(3)) * 5;
        sum = sum + parseInt(this.jumin_no.charAt(4)) * 6;
        sum = sum + parseInt(this.jumin_no.charAt(5)) * 7;

        sum = sum + parseInt(this.jumin_no.charAt(7)) * 8;
        sum = sum + parseInt(this.jumin_no.charAt(8)) * 9;
        sum = sum + parseInt(this.jumin_no.charAt(9)) * 2;
        sum = sum + parseInt(this.jumin_no.charAt(10)) * 3;
        sum = sum + parseInt(this.jumin_no.charAt(11)) * 4;
        sum = sum + parseInt(this.jumin_no.charAt(12)) * 5;


        // //checksum1
        // sum = sum %11;
        // sum =11-sum;
        // let checksum = sum%10


        //checksum2

        let checksum = (11 - (sum % 11)) % 10;
        console.log("checksum", checksum);


        //주민번호의 마지막 값
        let last_no = parseInt(this.jumin_no.charAt(13))

        return (checksum == last_no);
       
    } //end : isValid()


    // sum = sum + parseInt(this.jumin_no.charAt(0)) * 2;
    // sum = sum + parseInt(this.jumin_no.charAt(1)) * 3;
    // sum = sum + parseInt(this.jumin_no.charAt(2)) * 4;
    // sum = sum + parseInt(this.jumin_no.charAt(3)) * 5;
    // sum = sum + parseInt(this.jumin_no.charAt(4)) * 6;
    // sum = sum + parseInt(this.jumin_no.charAt(5)) * 7;

    // sum = sum + parseInt(this.jumin_no.charAt(7)) * 8;
    // sum = sum + parseInt(this.jumin_no.charAt(8)) * 9;
    // sum = sum + parseInt(this.jumin_no.charAt(9)) * 2;
    // sum = sum + parseInt(this.jumin_no.charAt(10)) * 3;
    // sum = sum + parseInt(this.jumin_no.charAt(11)) * 4;
    // sum = sum + parseInt(this.jumin_no.charAt(12)) * 5;

    isValid2() {
        let sum = 0;
        let su = 2;
        for (let i = 0; i <= 12; i++) {
            if (i == 6) continue; //다음 수 무시하고 계속해라 ->6 자리는 하이푼이니까
            sum = sum + parseInt(this.jumin_no.charAt(i)) * su;
            su++
            if (su > 9) su = 2;
        } // 반복되는 내용을 간략하게 만든 식


        let checksum = (11 - (sum % 11)) % 10;
        console.log("checksum", checksum);


        //주민번호의 마지막 값
        let last_no = parseInt(this.jumin_no.charAt(13))

        return (checksum == last_no);




    }// end:isValid2()


    // sum = sum + parseInt(this.jumin_no.charAt(0)) * 2;
    // sum = sum + parseInt(this.jumin_no.charAt(1)) * 3;
    // sum = sum + parseInt(this.jumin_no.charAt(2)) * 4;
    // sum = sum + parseInt(this.jumin_no.charAt(3)) * 5;
    // sum = sum + parseInt(this.jumin_no.charAt(4)) * 6;
    // sum = sum + parseInt(this.jumin_no.charAt(5)) * 7;

    // sum = sum + parseInt(this.jumin_no.charAt(7)) * 8;
    // sum = sum + parseInt(this.jumin_no.charAt(8)) * 9;
    // sum = sum + parseInt(this.jumin_no.charAt(9)) * 2;
    // sum = sum + parseInt(this.jumin_no.charAt(10)) * 3;
    // sum = sum + parseInt(this.jumin_no.charAt(11)) * 4;
    // sum = sum + parseInt(this.jumin_no.charAt(12)) * 5;

    isValid3() {
        let sum = 0;
        //
        let su_array = [2, 3, 4, 5, 6, 7, 0, 8, 9, 2, 3, 4, 5];

        for (let i = 0; i <= 12; i++) {
            if (i == 6) continue;
            sum = sum + parseInt(this.jumin_no.charAt(i)) * su_array[i];
        }


        //     // //checksum1
        //     // sum = sum %11;
        //     // sum =11-sum;
        //     // let checksum = sum%10


        //     //checksum2

        let checksum = (11 - (sum % 11)) % 10;
        console.log("checksum", checksum);


        //주민번호의 마지막 값
        let last_no = parseInt(this.jumin_no.charAt(13))

        return (checksum == last_no);

    }
}
