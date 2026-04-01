import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("\n########### MENU ###########");
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
        case 2:
            frear(carro); 
            break;
        case 5:
            console.table(carro);
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    } else {
        console.log("O veículo está em ponto morto (Marcha 0). Suba a marcha para acelerar!");
    }
}

function frear(veiculo: Veiculo): void {
    veiculo.velocidade -= veiculo.potencia * 0.15;

    if (veiculo.velocidade < 0) {
        veiculo.velocidade = 0;
    }

    console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    

    veiculo.velocidade = 0;
    veiculo.marchaAtual = 0;
    
    return veiculo;
}