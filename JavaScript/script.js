"use strict";

document.getElementById('fizzbuzz-execution').addEventListener('click', () => {

    /*id=FizzBuzz_execution_result内に現状入っている子要素を削除_開始*/
    const parent = document.getElementById('fizzbuzz-execution-result');
    parent.innerHTML = '';
    /*id=FizzBuzz_execution_result内に現状入っている子要素を削除_終了*/

    /*入力した値を取得_開始*/
    const fizzNumChar = document.getElementById('fizz-num').value;
    const fizzNumNumber = Number(fizzNumChar);

    const buzzNumChar = document.getElementById('buzz-num').value;
    const buzzNumNumber = Number(buzzNumChar);
    /*入力した値を取得_終了*/

    /*固定の結果表示の作成_開始*/
    const output = document.createElement('p');
    output.innerHTML = `[出力]`;
    parent.appendChild(output);
    /*結果表示のテンプレートの作成_終了*/

    /*整数・空欄・桁数判定の処理_開始*/
    const alert = document.createElement('p');

    //fizzNumNumberとbuzzNumNumberのどちらかの値が整数ではなかった時の処理
    if(Number.isInteger(fizzNumNumber) === false || Number.isInteger(buzzNumNumber) === false) {

        alert.innerHTML = '整数以外が入力されています。整数を入力してください。'
        parent.appendChild(alert);
        return;
    }

    //fizzNumNumberとbuzzNumNumberのどちらかが空欄だった時の処理
    if(!fizzNumNumber || !buzzNumNumber) {

        alert.innerHTML = '何も入力されていません。整数を入力してください。'
        parent.appendChild(alert);
        return;
    }

    //FizzNum_NumberとBuzzNum_Numberのどちらかの値が100以上だった時の処理
    if(fizzNumNumber >= 100 || buzzNumNumber >= 100) {

        alert.innerHTML = '100以上の整数が入力されています。100より下の整数を入力してください。'
        parent.appendChild(alert);
        return;
    }
    /*整数・空欄・桁数判定の処理_終了*/

    /*FizzBuzzの処理_開始*/
    const ul = document.createElement('ul');
    parent.appendChild(ul);

    for(let i=1; i<100; i++) {

        let value = ''
        let li = document.createElement('li');

        if(i % fizzNumNumber === 0 && i % buzzNumNumber === 0) {
            value = 'FizzBuzz' + i;
            li.innerHTML = value;
            ul.appendChild(li);
        }
        else if(i % fizzNumNumber === 0 && i % buzzNumNumber != 0) {
            value = 'Fizz' + i;
            li.innerHTML = value;
            ul.appendChild(li);
        }
        else if(i % fizzNumNumber != 0 && i % buzzNumNumber === 0) {
            value = 'Buzz' + i;
            li.innerHTML = value;
            ul.appendChild(li);
        }
    }
});