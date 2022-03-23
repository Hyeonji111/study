/* < 컴퓨터와 1:1 빙고게임을 만들어 보세요. > 
    1. 요구사항은 다음과 같습니다.
    2. Class를 사용해서 완성하세요!!
    3. 5x5의 입력란이 있습니다.
    4. 1부터 25의 숫자를 원하는 항목에 기록하고 게임시작을 눌러 게임을 실행하면 컴퓨터도 1~25까지의 숫자가 기록됩니다. (컴퓨터의 숫자는 유저가 볼수 없습니다.)
    5. 유저가 지워나갈 숫자를 입력하고 등록버튼을 누르면 유저가 입력한 항목에서 해당 숫자의 값이 사라집니다. (컴퓨터도 해당 숫자를 지웁니다.)
    6. 다음차례엔 컴퓨터가 임의의 숫자를 표시하고 유저와 컴퓨터의 숫자가 적힌 항목에서 해당 숫자의 값이 사라집니다. (가능하면 컴퓨터도 지워진 위치 주변의 숫자가 선택되게..)
    7. 이렇게 유저와 컴퓨터간에 차례대로 지워나갈 숫자를 등록하면서 지운숫자가 가로,세로,대각선으로 라인이 완성되면 빙고가 완성됩니다.
    8. 가로,세로,대각선 12개의 라인중 5개의 라인이 먼저 완성되면 승리입니다. */ 

class table{

    tableCreate(){
        // 선언
        let gameStart = document.querySelector('#gameStart');
        let num = document.querySelector('#num');
        let numRegister = document.querySelector('#numRegister');
        let gameTable = document.querySelector(".gameTable")

        gameStart.addEventListener('click', function (){
            let ArrNum = new Array(25);    
            for(let i=0;i<ArrNum.length;i++) //우선 1~25를 순서대로 담는다.
                    ArrNum[i]=i+1;
            //셔플
            ArrNum.sort(function(){return 0.5-Math.random()});
            // 빙고체크를 위해 2차원에 담아준다.
            let ArrNum2 = [];
            let x = 0; // 2차원에 담기위한 임시 변수
            let row = []; // 2차원에 담기위한 임시 배열
            let called = ""; // 호출된 숫자들을 담을 변수.

            // tr td 추가??
            for(let i=0;i<ArrNum.length;i++){
                row[i%5] = ArrNum[i]; // 5개씩 담는다.
                if((i+1)%5==0){ // 5개가 담기면 2차원 배열에 담고 insert[] 초기화
                    ArrNum2[x] = row;
                    x++; // 5번에 한번 증가되야하므로 if문안에서 증가시킴
                    gameStart.append(row) = [];
                    console.log(row);
                }
            }
        });
        

    }
    check(){
        var element = document.getElementById(id); // 객체를 바로 받아서 하려했으나 잘되지 않아 아이디로 받아 가져왔다.
        // ArrNum[id] = 0; // 2차원 배열로 비교할 것이므로 굳이 0으로 바꿀 필요가 없다.
        ArrNum2[parseInt(id/5)][id%5] = 0; // 2차원 배열에서 고른 값을 0으로 바꾸어줌 자바스크립트는 int변환해주어야함.
        element.style.backgroundColor = "black"; // 검정으로 바꾸고
        element.innerHTML = "　"; // 숫자를 사라지게함
        called += ArrNum[id]+'; ';
        document.getElementById('called').innerHTML = called;
        checkBingo(); // 클릭시 마다 빙고갯수를 체크하는 함수를 호출
    }
    bingo(){
        let rowCnt = 0; // 가로빙고
        let colCnt = 0; // 세로빙고
        let crossCnt = 0; // 대각선빙고

        //가로빙고
        for(let i=0;i<ArrNum2.length;i++){
            let check = false;
            for(let j=0;j<ArrNum2[i].length;j++){
                if(ArrNum2[i][j]==0){
                    check = true;
                }else{
                    check = false; // 중간에 0이 아닌값이 나오면 그 줄을 더할 필요가 없음.
                    break;
                }
            }
            if(check) rowCnt++; // 빙고 갯수를 증가시킴
        }

        //세로빙고 - 가로와 동일.
        for(let i=0;i<ArrNum2[0].length;i++){
            let check = false;
            for(let j=0;j<ArrNum2[i].length;j++){
                if(ArrNum2[j][i]==0){
                    check = true;
                }else{
                    check = false;
                    break;
                }
            }
            if(check) colCnt++;
        }

        let check1 = 0; // 대각선의 경우 2개를 한번에 하기위해 boolean이 아닌 숫자를 증가시킴.
        let check2 = 0; // 이 값이 5가되면 대각선 빙고의 수를 늘려줌.

        for(let i=0;i<ArrNum2[0].length;i++){
            if(ArrNum2[i][i]==0) check1++;
            if(ArrNum2[ArrNum2.length-i-1][i]==0)  check2++;
        }
        if(check1==5) crossCnt++;
        if(check2==5) crossCnt++;

        // 결과 출력값에 빙고의 갯수를 담아줌.
        document.getElementById('result').innerHTML = "현재 빙고의 갯수는 "+(rowCnt+colCnt+crossCnt)+"개 입니다.";
    }
}

class computerCheck{
    
}

class userCheck{
    
}
