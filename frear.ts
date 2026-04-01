import { Veiculo } from "./Veiculo";


function frear(veiculo: Veiculo): void {
    // Reduz a velocidade com base na potência (exemplo: 15% da potência)
    veiculo.velocidade -= veiculo.potencia * 0.15;

    // Garante que a velocidade não fique negativa
    if (veiculo.velocidade < 0) {
        veiculo.velocidade = 0;
    }

    console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
}