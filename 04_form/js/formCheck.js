window.onload = function(){

		var frm = document.getElementById('frm');
		var inputs = document.querySelectorAll("input");

		frm.onsubmit = function(e) {

			// 이벤트 미리 막기
			e.preventDefault();
			e.stopPropagation();
			// 체크박스
			var agree = frm.agree;
			// value = on / false
			// 유효성 검사 해주고
			if(!agree.checked) {
				alert('반드시 확인하셔야합니다');
				return;
			}
			// alert(agree.checked);

			// 다시 서버에 전송
			frm.submit();
		}

	}