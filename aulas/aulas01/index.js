// variaveis 
let varivavel_local = 10;   //number
const varivael_global = []; //array
const objeto = {};          //objeto
const msg = "Txt";          //string
let status = false;          //bool

// funcoes
function soma(a, b){
    return a+b;
}
let resultado_soma = soma(1,2);

const multiplica = (a,b) => {a * b}; 

let resultado = multiplica(1,2);

async function tempo(duracao){
    await new Promise((r) => {
        setInterval(r, duracao);
    });
    console.log("passou o tempo");
}

tempo(3000);

// objetos
 const pessoa = {nome: "Jose", email: "xxx@gmail.com", telefone: "0000-0000"};
pessoa.nome = "Ivin";
    //desestruturação
const {nome} = pessoa;
    //propagação
const pessoa_fisica = {cpf: 111, ...pessoa}

const lista = []
lista.push("uva")
const procura = lista.find((item) => item === "uva")
lista.indexOf("uva")

const texto = "Ola"
texto.concat(" Mundo");
texto.toUpperCase();

// modulos 

export {soma, multiplica}
