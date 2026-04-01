import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";
import { writeFileSync } from "fs";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
    
        default:
            break;

        case 4:
            descerMarcha(carro);
            break;
        
        case 5:
            imprimirDados(carro);
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function descerMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual > 0) {
        veiculo.marchaAtual--;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    } else {
        console.log("Você já está no ponto morto.");
    }
}

function imprimirDados(veiculo: Veiculo): void{
    const dados = [
        `Marca: ${veiculo.marca}`,
        `Modelo: ${veiculo.modelo}`,
        `Potência: ${veiculo.potencia}`,
        `Número de marchas: ${veiculo.numeroMarchas}`
    ].join("\n");

    console.log(dados);
    writeFileSync("dados-veiculo.txt", dados, "utf8");
    console.log("Dados salvos em dados-veiculo.txt");
}
// Escreve os dados do veículo em TXT, usa apenas as informações do criaVeiculo()
