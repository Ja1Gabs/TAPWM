function verificarTriangulo() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite números válidos para os lados do triângulo.";
    } else if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("resultado").innerHTML = "Os valores devem ser positivos para formar um triângulo.";
    } else {
        if (Math.abs(b - c) < a && a < (b + c) && Math.abs(a - c) < b && b < (a + c) && Math.abs(a - b) < c && c < (a + b)) {
            if (a == b && b == c) {
                document.getElementById("resultado").innerHTML = "Os valores formam um triângulo Equilátero.";
            } else if (a == b || b == c || a == c) {
                document.getElementById("resultado").innerHTML = "Os valores formam um triângulo Isósceles.";
            } else {
                document.getElementById("resultado").innerHTML = "Os valores formam um triângulo Escaleno.";
            }
        } else {
            document.getElementById("resultado").innerHTML = "Os valores fornecidos não podem formar um triângulo.";
        }
    }
}