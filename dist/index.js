"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
// Função assíncrona autoexecutável para rodar o código
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Inicializa um array vazio para armazenar os números digitados pelo usuário
    let valores = [];
    // Loop para capturar 4 números do usuário
    for (let i = 0; i < 4; i++) {
        // Solicita ao usuário que digite um número e converte a entrada de string para número de ponto flutuante
        const valor = parseFloat(yield (0, prompts_1.input)({ message: "Digite um número: " }));
        // Adiciona o número digitado ao array 'valores'
        valores.push(valor);
    }
    // Ordena os números no array em ordem crescente usando o algoritmo de ordenação bolha
    for (let i = 0; i < valores.length - 1; i++) {
        for (let j = 0; j < valores.length - 1 - i; j++) {
            // Se o valor atual for maior que o próximo valor, trocamos eles de lugar
            if (valores[j] > valores[j + 1]) {
                // Armazena o valor atual em uma variável temporária
                let auxiliar = valores[j];
                // Substitui o valor atual pelo próximo valor
                valores[j] = valores[j + 1];
                // Coloca o valor atual na posição do próximo valor
                valores[j + 1] = auxiliar;
            }
        }
    }
    // Exibe o array de valores ordenados no console
    console.log("Valores ordenados:", valores);
    // Armazena o menor valor (primeiro elemento após a ordenação) em uma variável
    let menor = valores[0];
    // Exibe o menor valor
    console.log("O menor número é:", menor);
    // Armazena o maior valor (último elemento após a ordenação) em uma variável
    let maior = valores[valores.length - 1];
    // Exibe o maior valor
    console.log("O maior número é:", maior);
    // Calcula a soma de todos os valores no array
    let soma = valores.reduce((total, valor) => total + valor, 0);
    // Calcula a média dividindo a soma pelo número de valores
    let media = soma / valores.length;
    // Exibe a média
    console.log("A média é:", media);
    // Inicializa arrays vazios para armazenar os valores pares e ímpares
    let valoresPares = [];
    let valoresImpares = [];
    // Loop para separar os valores em pares e ímpares
    for (let i = 0; i < valores.length; i++) {
        // Verifica se o valor atual é par
        if (valores[i] % 2 === 0) {
            // Adiciona o valor ao array 'valoresPares' se for par
            valoresPares.push(valores[i]);
        }
        else {
            // Adiciona o valor ao array 'valoresImpares' se for ímpar
            valoresImpares.push(valores[i]);
        }
    }
    // Exibe os valores pares no console
    console.log("Os valores pares são:", valoresPares);
    // Exibe os valores ímpares no console
    console.log("Os valores ímpares são:", valoresImpares);
    // Calcula a soma de todos os valores pares
    let somaPares = valoresPares.reduce((total, valor) => total + valor, 0);
    // Exibe a soma dos valores pares
    console.log("A soma dos valores pares é:", somaPares);
    // Calcula a soma de todos os valores ímpares
    let somaImpares = valoresImpares.reduce((total, valor) => total + valor, 0);
    // Exibe a soma dos valores ímpares
    console.log("A soma dos valores ímpares é:", somaImpares);
}))();
