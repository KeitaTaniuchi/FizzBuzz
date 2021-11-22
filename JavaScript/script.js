document.getElementById('FizzBuzz_execution').addEventListener('click', function(){

    /*id=FizzBuzz_execution_result内に現状入っている子要素を削除_開始*/

    //html内のid=FizzBuzz_execution_resultの要素を取得し、その子要素を削除する
    const parent =document.getElementById('FizzBuzz_execution_result');
    parent.innerHTML = '';

    /*id=FizzBuzz_execution_result内に現状入っている子要素を削除_開始*/

    
    /*入力した値を取得_開始*/

    //html内のid=FizzNumのvalue属性の値を取得し、それを10進数の数値に変換
    const FizzNum_Char = document.getElementById('FizzNum').value;
    const FizzNum_Number = Number(FizzNum_Char);

    //html内のid=BuzzNumのvalue属性の値を取得し、それを10進数の数値に変換
    const BuzzNum_Char = document.getElementById('BuzzNum').value;
    const BuzzNum_Number = Number(BuzzNum_Char);

    /*入力した値を取得_終了*/


    /*固定の結果表示の作成_開始*/

    //html内のid=FizzBuzz_execution_result内にpタグを作成し、それに文字列'[出力]'を入れる
    const output = document.createElement('p');
    output.innerHTML = `[出力]`;
    parent.appendChild(output);

    /*結果表示のテンプレートの作成_終了*/


    /*整数・空欄・桁数判定の処理_開始*/

    //html内のid=FizzBuzz_execution_result内にpタグを作成
    const alert = document.createElement('p');

    //FizzNum_NumberとBuzzNum_Numberのどちらかの値が整数ではなかった時の処理
    if(Number.isInteger(FizzNum_Number) === false | Number.isInteger(BuzzNum_Number) === false){
     
        //html内のid=FizzBuzz_execution_result内にpタグを作成し、それに文字列'整数以外が入力されています。整数を入力してください'を入れ、この関数を終了させる
        alert.innerHTML = '整数以外が入力されています。整数を入力してください。'
        parent.appendChild(alert);
        return;
    }

    //FizzNum_NumberとBuzzNum_Numberのどちらかが空欄だった時の処理
    if(FizzNum_Number === 0 | BuzzNum_Number === 0){

        //html内のid=FizzBuzz_execution_result内にpタグを作成し、それに文字列'何も入力されていません。整数を入力してください'を入れ、この関数を終了させる
        alert.innerHTML = '何も入力されていません。整数を入力してください。'
        parent.appendChild(alert);
        return;
    }

    //FizzNum_NumberとBuzzNum_Numberのどちらかの値が100以上だった時の処理
    if(FizzNum_Number >= 100 | BuzzNum_Number >= 100){

        //html内のid=FizzBuzz_execution_result内にpタグを作成し、それに文字列'100以上の整数が入力されています。100より下の整数を入力してください'を入れ、この関数を終了させる
        alert.innerHTML = '100以上の整数が入力されています。100より下の整数を入力してください。'
        parent.appendChild(alert);
        return;
    }

    /*整数・空欄・桁数判定の処理_終了*/


    /*FizzBuzzの処理_開始*/

    //変数iを定義し、iが100より小さい場合に1づつ足していく処理
    for(let i=1; i<100; i++){

        //変数valueを定義
        let value = ''

        //iがFizzNum_NumberとBuzzNum_Numberの両方の倍数の場合、valueの値に'FizzBuzz' + i を入れる
        if(i % FizzNum_Number === 0 & i % BuzzNum_Number === 0){
            value = 'FizzBuzz' + i;
        }

        //iがFizzNum_Numberの倍数の場合、valueの値に'Fizz' + i を入れる
        else if(i % FizzNum_Number === 0 & i % BuzzNum_Number != 0){
            value = 'Fizz' + i;
        }

        //iがBuzzNum_Numberの倍数の場合、valueの値に'Buzz' + i を入れる
        else if(i % FizzNum_Number != 0 & i % BuzzNum_Number === 0){
            value = 'Buzz' + i;
        }

        //iがFizzNum_NumberとBuzzNum_Numberのどちらの倍数でもない場合、何もしない
        else{
    
        }
        
        //html内のid=FizzBuzz_execution_result内にpタグを作成し、それにvalueの値を入れる
        const FizzBuzz_value = document.createElement('p');
        FizzBuzz_value.innerHTML = value;
        parent.appendChild(FizzBuzz_value);

    }
    
    /*FizzBuzzの処理_終了*/

});

