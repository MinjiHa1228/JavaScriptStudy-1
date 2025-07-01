
// ClassName은 Pascal표기법(Upper Camel) 사용
// class : 설계서
class Jumin{
 
    //생성자함수
    constructor(jumin_no){
        //내부에 저장될변수
        this.jumin_no = jumin_no  
    }

    //부가정보를 얻어오는 함수 정의
    
    //함수(변수)명의 표기법 : lower Camel
    //출생년도구하기         Get + Year : getYear()
    //                  01234567890123   <- index
    // this.jumin_no = "991212-1234567"

    /*
                  내국인      외국인
                  남  여      남  녀 
          1900    1   2       5  6 
          2000    3   4       7  8
          1800    9   0
    */

    getYear(){
       
        let year =  parseInt(this.jumin_no.substring(0,2)) ;  // "99" -> 99

        let gender = parseInt(this.jumin_no.charAt(7));  // "1" -> 1

        switch(gender)
        {
            case 1:
            case 2:
            case 5:
            case 6: year = year + 1900; break;
            case 3:
            case 4:
            case 7:
            case 8: year = year + 2000; break;
            default:year = year + 1800; 
        }
        return year;

    }//end:getYear()

    getAge(){
        
        //출생년도:내가소유한 함수 getYear()호출
        let year = this.getYear();
        //현재년도
        let today = new Date(); //현재시스템날짜구하기(년월일시분초요일)
        let current_year = today.getFullYear();

        //나이 = 현재년도 - 출생년도

        return current_year - year;
    }

    getGender(){

        let gender = parseInt(this.jumin_no.charAt(7)); 
        //짝수면...
        if(gender%2==0) return "여자";

        return "남자";
    }


    //12지
    // 4  5  6 7  8  9 10 11 0 1  2  3  <=   출생년도()%12(0~11)
    // 자 축 인 묘 진 사 오 미 신 유 술 해


    getTti(){

        switch( this.getYear()%12 )
        {
            case  0: return "원숭이";
            case  1: return "닭";
            case  2: return "개";
            case  3: return "돼지";
            case  4: return "쥐";
            case  5: return "소";
            case  6: return "호랑이";
            case  7: return "토끼";
            case  8: return "용";
            case  9: return "뱀";
            case 10: return "말";
        }
        return "양";
    }

    getLocal(){

        let local = parseInt( this.jumin_no.substring(8,10) );

        if(local>=0 && local<=8) return "서울특별시";
        if(local>=9 && local<=12) return "부산광역시";
        if(local>=13 && local<=15) return "인천광역시";
        if(local>=16 && local<=25) return "경기도";
        if(local>=26 && local<=34) return "강원도";
        if(local>=35 && local<=39) return "충청북도";
        if(local>=40 && local<=41) return "대전광역시";
        if(local==44 || local==96) return "세종특별지치시";
        if(local>=42 && local<=47) return "충청남도";
        if(local>=48 && local<=54) return "전라북도";
        if(local>=55 && local<=56) return "광주광역시";
        if(local>=55 && local<=64) return "전라남도";
        if(local>=65 && local<=66) return "광주광역시";
        if(local>=67 && local<=69) return "대구광역시";
        if(local>=70 && local<=81) return "경상북도";
        if(local==85 || local==90) return "울산광역시";
        if(local>=82 && local<=91) return "경상남도";
        
        if(local>=92 && local<=95) return "제주특별자치도";

        return "기타";
    }



    //                  01234567890123   <- index
    // this.jumin_no = "991212-1234567"

    getSeason(){
        //                             2 <= month < 4
        let month = parseInt(this.jumin_no.substring(2,4)) ;

        //방법1) if문
        // if(month>=3 && month <=5) return "봄";
        // else if(month>=6 && month <=8) return "여름";
        // else if(month>=9 && month <=11) return "가을";

        //방법2) switch문
        // switch(month)
        // {
        //     case  3:
        //     case  4:
        //     case  5: return "봄";
        //     case  6:
        //     case  7:
        //     case  8: return "여름";
        //     case  9:
        //     case 10:
        //     case 11: return "가을";
        // }

        //방법3) switch문
        switch( Math.floor(month/3) )
        {
            case 1: return "봄";
            case 2: return "여름";
            case 3: return "가을";
        }


        return "겨울";
    }

    //  10간
    //  0  1 2  3  4  5 6  7  8  9   <= 년도%10(0~9)
    //  경 신 임 계 갑 을 병 정 무 기

    // 12지
    //  0  1  2 3  4 5  6  7  8 9 10 11 <= 년도%12(0~11)
    //  신 유 술 해 자 축 인 묘 진 사 오 미
    
    getGanji(){

        //출생년도
        let year = this.getYear();
        //         0 1 23 4 56 78 9  <- index        
        let gan = "경신임계갑을병정무기".charAt(year%10);
        //         0 1 2 345 6 7 89 1011 <- index
        let ji  = "신유술해자축인묘진사오미".charAt(year%12);


        return gan + ji +"년"; // `${gan}${ji}년`
    }


    //                  01234567890123   <- index
    // this.jumin_no = "991212-1234567"
    //                  234567 892345  
    // isXXXX : 맞냐?
    isValid(){

        let sum = 0;

        sum = sum +  parseInt(this.jumin_no.charAt(0)) * 2 ;
        sum = sum +  parseInt(this.jumin_no.charAt(1)) * 3 ;
        sum = sum +  parseInt(this.jumin_no.charAt(2)) * 4 ;
        sum = sum +  parseInt(this.jumin_no.charAt(3)) * 5 ;
        sum = sum +  parseInt(this.jumin_no.charAt(4)) * 6 ;
        sum = sum +  parseInt(this.jumin_no.charAt(5)) * 7 ;

        sum = sum +  parseInt(this.jumin_no.charAt(7))  * 8 ;
        sum = sum +  parseInt(this.jumin_no.charAt(8))  * 9 ;
        sum = sum +  parseInt(this.jumin_no.charAt(9))  * 2 ;
        sum = sum +  parseInt(this.jumin_no.charAt(10)) * 3 ;
        sum = sum +  parseInt(this.jumin_no.charAt(11)) * 4 ;
        sum = sum +  parseInt(this.jumin_no.charAt(12)) * 5 ;

        //checksum 1
        // sum = sum%11;
        // sum = 11-sum;
        // let checksum = sum%10;

        //checksum 2
        let checksum = (11-(sum%11))%10;

        console.log("checksum", checksum);

        //주민번호의 마지막값
        let last_no = parseInt(this.jumin_no.charAt(13))

        return (checksum==last_no);

    }//end:isValid()

    isValid2(){

        let sum = 0;

        let su = 2;

        for(let i=0;i<=12;i++){
            if(i==6)continue;
            sum = sum +  parseInt(this.jumin_no.charAt(i)) * su ;
            su++;
            if(su>9)su=2;
        }

        //checksum 1
        // sum = sum%11;
        // sum = 11-sum;
        // let checksum = sum%10;

        //checksum 2
        let checksum = (11-(sum%11))%10;

        console.log("checksum", checksum);

        //주민번호의 마지막값
        let last_no = parseInt(this.jumin_no.charAt(13))

        return (checksum==last_no);

    }//end:isValid2()



    //                  01234567890123   <- index
    // this.jumin_no = "991212-1234567"
    //                  2345670892345  
    isValid3(){

        let sum = 0;
        //              0 1 2 3 4 5 6 7 8 9 0 1 2      
        let su_array = [2,3,4,5,6,7,0,8,9,2,3,4,5];

        for(let i=0;i<=12;i++){
            if(i==6)continue;
            sum = sum +  parseInt(this.jumin_no.charAt(i)) * su_array[i] ;
        }

        //checksum 1
        // sum = sum%11;
        // sum = 11-sum;
        // let checksum = sum%10;

        //checksum 2
        let checksum = (11-(sum%11))%10;

        console.log("checksum", checksum);

        //주민번호의 마지막값
        let last_no = parseInt(this.jumin_no.charAt(13))

        return (checksum==last_no);

    }//end:isValid3()
    


}

