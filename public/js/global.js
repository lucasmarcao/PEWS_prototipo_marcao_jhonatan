let contador = 0;

// pra caixa muda cor.

// pro modal funfar.
try {
    $("#myModal").on("shown.bs.modal", function () {
        $("#myInput").trigger("focus");
    });
} catch (error) {
    console.log("o jquerry n funciona pois: \n", error);
}

window.addEventListener("load", () => {
    try {
        let cudeputa = document.getElementById("cudeputa");

        if (cudeputa) {
            let footerzudo = document.getElementById("footerzudo");

            footerzudo.setAttribute(
                "style",
                `position: fixed;
                 bottom: 1px;
                 left: 0;`
            );
        }
    } catch (error) {
        console.log("fica flinstons", error);
    }
});
