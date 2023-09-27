window.onload = function() {
    
    var adultCount = form.adultCount.value;
    var childCount = form.childCount.value;
    var infantCount = form.infantCount.value;

    adultCount.onchange =  cals;
    childCount.onchange =  cals;
    infantCount.onchange =  cals;

    function cals() {
        let total= adultCount*39000 
        + childCount*29000 
        + infantCount*19000;
        form.total.value = total;

    }

    form.onsubmit = function(e) {

        e.preventDefault();
        e.stopPropagation();

        // adultCount.onchange = function() {
        //     form.total.value = adultCount*39000;
        // }
       
        
        if(!checkbox.checked && !checkbox2.checked) {
            alert('반드시 확인하셔야합니다.');
            return;
        }
        alert(form.total.value+"원");

        form.submit();


    }


}