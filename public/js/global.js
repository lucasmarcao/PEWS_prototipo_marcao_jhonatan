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
