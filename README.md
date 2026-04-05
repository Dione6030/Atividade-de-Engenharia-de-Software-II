# Atividade-de-Engenharia-de-Software-II
Repositório destinado a atividade em grupo de **Engenharia de Software II**.

## Objetivo
Implementar um programa em typescript que simula a criação e o controle de um veículo via terminal, permitindo:
- Criar um veículo com: Marca, modelo, potência e números de marchas.
- Acelerar e frear.
- Subir e descer as marchas.
- Mostrar e salvar os dados do veículo em um arquivo TXT

## Tecnologias utilizadas
- Nodejs
- TypeScript
- ts-node
- Prompt-sync

## Requisitos
- Nodejs instalado

## Como executar

1) Clone o projeto:
```
git clone https://github.com/Dione6030/Atividade-de-Engenharia-de-Software-II.git
cd Atividade-de-Engenharia-de-Software-II
```

2) Instale as dependências:
```
npm i
```
ou
```
npm install
```

3) Execute o programa:
 ```
 npx ts-node index.ts
 ```

## Como usar
Quando o programa inicia é solicitado os dados do veículo:
- Marca
- Modelo
- Potência
- Número de marchas

Depois mostra um menu com as opções: 

1 - Acelerar  
2 - Frear  
3 - Subir marcha  
4 - Descer marcha  
5 - Imprimir dados do veículo (também salva)  
0 - Sair  

Ao escolher a opção **5** o programa salva os dados em **dados-veiculos.txt**

# Integrantes
- Dione
- Ítalo
- Louise
- Henrique
- Carlos Eduardo
- David
