
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)

  list.onclick = function(e) {
    // 데이터 data-isbn의 값 가져오기 => target.getAttribute()
    var isbn = e.target.getAttribute('data-isbn');
    if( isbn ) {
      // <img src='경로' height=150 width=100 />
      var img = document.createElement('img');
      img.height = 150;
      img.width  = 100;
      // img.src    = 'images/' + isbn + '.jpg';
      img.src    = `images/${isbn}.jpg`;
      // console.log(img);

      // pic.appendChild(img);
      if( pic.getElementsByTagName('img').length > 0 ){
        pic.replaceChild( img, pic.lastChild )
      } else {
        pic.appendChild(img);
        del.disabled = false;
      }
    }
  }
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
  var img = document.getElementsByTagName('img');
  del.onclick = function() {
        // pic.remove(img);
        pic.removeChild(pic.firstChild);
        // del.disabled = true;
  }
  
//};
