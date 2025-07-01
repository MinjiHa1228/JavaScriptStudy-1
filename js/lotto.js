
class Lotto{

    constructor(){
        this.win_no = [];
        this.user_no= [];
    }

    getWinNo(){

        let count = 0;
        
        //배열지우기
        this.win_no=[];

        while(count<7){
            // 7개의 난수얻어온다(1~45)
            let no = Math.floor(Math.random()*45) + 1 ;

            let bSame = false;//동일수냐?
            //중복수 체크
            for(let i=0;i<count;i++){
               if(this.win_no[i]==no){
                   bSame = true;
                   break;//현재 for문을 탈출한다(끝낸다)
               }
            }//end:for

            //동일한 수가 없으면
            if(bSame==false){
                //배열에 추가
                this.win_no.push(no);
                //넣은갯수증가
                count++;
                // Ascending : a-b (오름차순)
                // Descending: b-a (내림차순)
                // if(count==6) this.win_no.sort(function(a,b){ return a-b; });
                // Arrow Function(Lambda식)
                // if(count==6) this.win_no.sort((a,b)=>{ return a-b; });
                // if(count==6) this.win_no.sort((a,b)=> a-b );
                
                if(count==6) this.win_no_sort();
            }

        }//end:while


        return this.win_no;

    }//end:getWinNo()
    

    checkRank(){

        let rank=0;
        let count=0;
        let bonus=0;

        //맞은갯수 체크하기
        for(let i=0;i<6;i++){
            for(let k=0;k<6;k++){

                if(this.user_no[i]==this.win_no[i]){
                    count++;
                    break;
                }
            }//end:for(k)
        }//end:for(i)

        //등수체크하기
        if(count==6) rank=1;
        else if(count==5) rank=3;
        else if(count==4) rank=4;
        else if(count==3) rank=5;

        //3등 중에서 2등 체크
        if(count==5){
            for(let i=0;i<6;i++){
                if(this.win_no[6]==this.user_no[i]){
                    rank = 2;
                    bonus=this.win_no[6];
                    break;
                }
            }
        }

        return {"rank":rank , "count":count , "bonus":bonus };
    }


    win_no_sort(){
        //Selection Sort
        for(let i=0;i<this.win_no.length-1; i++){
            for(let k=i+1;k<this.win_no.length;k++){
                
                if(this.win_no[i]>this.win_no[k]){
                    let im = this.win_no[i];
                    this.win_no[i]=this.win_no[k];
                    this.win_no[k]=im;
                }
            }
        }
    }//end:win_no_sort()
 

}