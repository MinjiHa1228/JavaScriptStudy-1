
class Lotto { //클래스 설계도 - 로또번호를 만들고 정렬

    constructor() { //클래스가 처음만들어질때 실행되는 함수
        this.win_no = []; // 로또 번호들을 저장하는 배열

    }
    getWinNum() {// 실제로 **로또 번호를 뽑는 메서더(함수)** 임

        let count = 0;

        //배열지우기
        this.win_no = [];// 실행하면 7개의 랜던 번호를 만들어 win_no 에 저장하고 반환함
        //이전에 저장된 번호가 있을 수 있으니, 배열을 비웁니다.

        while (count < 7) { //조건이 참일동안 계속 반복하는 반복문! count 가7보다 작을 때만 반복함
            //7개의 난수를 얻어옵니다(무작위수)
            let no = Math.floor(Math.random() * 45) + 1; // 0~1 미만의 무작위 실수 , 0~45 미만의 부작위 실수가 됨
                                                        //소수점 이하를 버림
            //중복수 체크
            let bSame = false;

            for(let i =0 ; i<count;i++){ // count 는 현재 배열에 들어 있는 번호의 개수
                if(this.win_no[i]==no) //this.win_no는 지금까지 뽑힌 로또 번호 배열 == no는 지금 새로 뽑은 번호
                    bSame = true; // 중복 여부를 저장하는 불리언 변수 (true/false)
                break;
            }//end:for

            //동일한 수가 없으면
            if(bSame==false){

                
                //배열에 추가
                this.win_no.push(no); //lotto 클래스 안에서 선언된 로또 번호들을 저장하는 배열 this는 현재 클래스 객체 lotto 를 가리키고 
                //win_no는 그안에 속성 (배열임)  배열에 새로운 값을 맨 뒤에 추가하는 함수
                //넣은갯수 증가
                count++;
                
                if (count == 6) this.win_no_sort(); // 같은 수가 없었을때 해준다
            }
        }
        return this.win_no;
    }
    //end:getWinNo()

    win_no_sort() {

        for (let i = 0; i < this.win_no.length - 1; i++) {
            for (let k = i; k < this.win_no.length; k++) {
                if (this.win_no[i] > this.win_no[k]) {
                    let im = this.win_no[i];
                    this.win_no[i] = this.win_no[k];
                    this.win_no[k] = im;
                }

            }

        }

    } // end:win_no_sort()
}


