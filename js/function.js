$(function () {
    $("#btn_consejo").click(function () {
        getConsejo();
    })
    async function getConsejo() {
        var texto = document.getElementById("texto")

        try {
            var res = await fetch("https://api.adviceslip.com/advice");
            var consejo = await res.json();
            texto.innerHTML = `<p>${consejo.slip.advice}</p>`
        } catch (err) {
            console.log(err)
        }
    }
})

