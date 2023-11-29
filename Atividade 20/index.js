/*Exercicio 1*/
var ObjLivro1 = {
    Titulo : "Dom Casmurro",
    Autor: "Machado de Assis"
}

alert(ObjLivro1.Titulo+" "+ObjLivro1.Autor)
alert(JSON.stringify(ObjLivro1))


var ObjLivro2 = {};
ObjLivro2.Titulo = "Dom Casmurro";
ObjLivro2.Autor = "Machado de Assis";
alert(JSON.stringify(ObjLivro2))

var ObjLivro3 = new Object();
ObjLivro3.Titulo = "Dom Casmurro";
ObjLivro3.Autor = "Machado de Assis";
alert(JSON.stringify(ObjLivro3))

function Livro (_Titulo, _AUtor)
{
    This.Titulo = "Dom Casmurro";
    This.Autor = "Machado de Assis";

}

var ObjLivro4 = new Livro ('Dom Casmurro', 'Machado de Assis');

class Livro1 {
    constructor(titulo, autor){
    This.Titulo = titulo;
    This.Autor = autor;
    }
}
    const ObjLivro5 = new Livro1 ("Titulo do Livro", "Autor do Livro" );

/*Exercicio 2*/
/*Voltas*
R: 1230, 1231, 1232, 1233, 1234, 1235.
*/

/*Exercicio 3*/
/*
Alternativa correta D)
*/

/*Exercicio 4*/
/*
R:  0
*/

/*Exercicio 5*/
/*R: FUNCTION Ordena(n1,n2,n3){
    var matriz = [n1, n2, n3];
    matriz.sort(function(a,b) {b-a})
    return matriz
}
    
    */ 

/*Exercicio 6*/
/*R: Alert (Obj.descrição+  +Obj.codigo)*/

/*Exercicio 7*/

/*R:undefined, Nan, infinity, null*/

/*Exercicio 8*/

/*R: Nenhuma das anteriores*/

/*Exercicio 9*/

/*R: 3340, 3341, 3342, 3343, 3344*/

/*Exercicio 10*/

/*R: C) 1,2,3,5,6*/

/*Exercicio 11*/

/*R: 1, title, form, 1, 4*/

/*Exercicio 12*/

/*R: Document - history - location - navigation
        |
        Links - imgs - anchor - forms.

*/