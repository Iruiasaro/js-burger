window.addEventListener("load", function () {

    //inserimento variabili
    var ingredient = document.querySelectorAll(".ingredient [type='checkbox']");
    var button = document.getElementById("button");
    var burgerName = document.getElementById("name");
    var defaultPrice = 50;


    button.addEventListener("click", function () {
        //obbligo di inserire un nome
        if (!burgerName.value) {
            alert("E' obbligatoria fornire un nome al Burger")
        } else {
            var prezzoAggiunta = 0;
            for (var i = 0; i < ingredient.length; i++) {
                var ingredients = ingredient[i]
                if (ingredients.checked) {
                    prezzoAggiunta += parseInt(ingredients.value)
                }
            }
        }

        var sommaTotale = defaultPrice + prezzoAggiunta
        //inserimento coupon sconto     
        var couponValid = ["burger2021", "burgerapril", "burgerdiscount"]

        var discountCoupon = document.getElementById("coupon");

        //condizione di validità sconto -5
        for (var i = 0; i < couponValid.length; i++) {
            var coupon = couponValid[i];

            if (coupon === discountCoupon.value) {
                sommaTotale = sommaTotale - 5;
            }
            document.getElementById("price").innerHTML = sommaTotale;
        }
    })
})