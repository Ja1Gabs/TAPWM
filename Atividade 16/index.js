const textoInput = document.getElementById('textoInput');
        const transformarMaiusculas = document.getElementById('transformarMaiusculas');
        const transformarMinusculas = document.getElementById('transformarMinusculas');
        const textoTransformado = document.getElementById('textoTransformado');

        function transformarTexto() {
            let texto = textoInput.value;
            
            if (transformarMaiusculas.checked) {
                texto = texto.toUpperCase();
            }
            
            if (transformarMinusculas.checked) {
                texto = texto.toLowerCase();
            }
            
            textoTransformado.textContent = texto;
        }

        textoInput.addEventListener('input', transformarTexto);
        transformarMaiusculas.addEventListener('change', transformarTexto);
        transformarMinusculas.addEventListener('change', transformarTexto);
    