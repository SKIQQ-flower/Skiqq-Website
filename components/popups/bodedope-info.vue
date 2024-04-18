<template>
    <Popup>
        <h1 class="text-center">
            Informações de Bodedope
        </h1>
        <div>
            <h5>Aparencia</h5>
            Bodedope é um bode amarelo, de chifres pequenos, camisa roxa e shorts escuros, ele não tem só essas roupas para vestir, mas ele gosta muito delas. A cor de seus olhos flui entre amarelo e roxo, apesar disso, ele apresenta nenhuma deficiencia ocular.

            <h5>Gosta</h5>
            Piqueniques, natureza, parques, árvores, jogar bola, tecnologia, desenho e programação.

            <h5>Não gosta</h5>
            Barulho, carros de tele-mensagem, ruidos de giz, fumantes e alcolatras, erros de programação, erros de gramática e cogumelos.
            <h5>Descrições</h5>
            Bodedope é extrovertido, ama contar piadas e socializar, mas por pouco tempo, até ele chegar em casa e voltar a fazer os seus jogos. Ele tem poucos amigos, se desconsiderar os virtuais. Seu maior amigo é um coelho no qual controla o espaço tempo, vindo de outra dimensão. Ele gosta muito de computadores, e mantém o sonho de um dia deixar de ter um pc da xuxa.
        </div>
        <button @click.self="$emit('close')" class="w-full mt-2 bg-gradient-to-r transition-all from-yellow-700 to-orange-700 text-mono p-2 rounded-lg">Fechar</button>
    </Popup>
</template>