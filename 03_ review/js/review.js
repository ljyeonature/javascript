
// 각 메뉴명을 클릭하면 총 가격 구해짐
var tds = document.getElementsByClassName('item');
var total_txt = document.getElementById('total');
console.log(tds)
var total = 0;
for(var i = 0; i < tds.length; i++){
    tds[i].onclick = function() {
        var price = parseInt(this.getAttribute('data-price'));
        total += price;
        total_txt.value = total;
        // 표에 동적으로 뜨게 하기.
        // 커피의 커피와 가격
        console.log(tds[i].text);
    }
}

// 구매 버튼 => 총금액 알림
var btn = document.getElementById('btn');
btn.onclick = function() {
    alert(total);
}

