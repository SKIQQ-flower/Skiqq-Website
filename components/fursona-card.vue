<template>
    <div class="fursona-card card-vertical appear">
        <div class="fursona-details">
            <div class="fursona">
                <NuxtImg preload src="/img/Fursona/em pé.png" alt="Fursona"/>
            </div>
            <div><h2>Bodedope</h2>
                <h3>Aparencia</h3>
                <p>Bodedope é um bode amarelo, de chifres pequenos, camisa roxa e shorts escuros, ele não tem só essas roupas para vestir, mas ele gosta muito delas. A cor de seus olhos flui entre amarelo e roxo, apesar disso, ele apresenta nenhuma deficiencia ocular.</p>
                <h3>Gosta</h3>
                <p>Piqueniques, natureza, parques, árvores, jogar bola, tecnologia, desenho e programação.</p>
                <h3>Não gosta</h3>
                <p>Barulho, carros de tele-mensagem, ruidos de giz, fumantes e alcolatras, erros de programação, erros de gramática e cogumelos.</p>
                <h3>Descrições</h3>
                <p>Bodedope é extrovertido, ama contar piadas e socializar, mas por pouco tempo, até ele chegar em casa e voltar a fazer os seus jogos. Ele tem poucos amigos, se desconsiderar os virtuais. Seu maior amigo é um coelho no qual controla o espaço tempo, vindo de outra dimensão. Ele gosta muito de computadores, e mantém o sonho de um dia deixar de ter um pc da xuxa.</p>
            </div>
        </div>
    </div>
</template>

<style>
    .fursona-details img {
        float: left;
        width: 15em
    }

    .fursona-details {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        .fursona-details h1, h2 {
            text-align: center
        }

        .fursona-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .fursona {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>