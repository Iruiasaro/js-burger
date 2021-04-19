window.addEventListener("load", function () {

    //inserimento variabili
    var ingredient = document.querySelectorAll(".ingredient [type='checkbox']");
    var ingredientPrice = document.getElementById("price");
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

            var sommaTotale = defaultPrice + prezzoAggiunta

            //coupon per sconto
            var coupon = document.getElementById("coupon")
            var couponValid = ["burger2021", "burgerapril", "burgerdiscount"]
            var discountCoupon = 0.15;
            //verificare il coupon
            if (couponValid.includes(coupon.value) === true) {
                sommaTotale -= sommaTotale * discountCoupon;
            }

        }
    })
})
    

