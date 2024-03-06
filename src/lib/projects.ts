import { ProjectLang } from "@/@types"

import tamagoImage from "@/assets/images/covers/tamago.png"
import lamenImage from "@/assets/images/covers/lamen.png"
import takoiakiImage from "@/assets/images/covers/takoiaki.png"
import tacosImage from "@/assets/images/covers/tacos.png"
import soundImage from "@/assets/images/covers/music-player.png"
import notionImage from "@/assets/images/covers/notion-clone.png"
import tictacImage from "@/assets/images/covers/tic-tac.png"
import pokedexImage from "@/assets/images/covers/pokedex.png"
import netflixImage from "@/assets/images/covers/pokedex.png"
import calculadoraImage from "@/assets/images/covers/calculadora.png"

export const highLightProjects: ProjectLang = {
    pt: [
        {
            id: 1,
            title: "tamago-app",
            description: "O tamago é um projeto desenvolvido com a finalizade de ser uma especie de 'card-game' onde é possivel criar, editar,excluir e vender um card.",
            cover: tamagoImage,
            video: "https://www.youtube.com/watch?v=qoXKFhCjShU",
            technologies: [
                "react", "next", "tailwind", "springboot", "postgrees"
            ],
            repository: "https://github.com/N7thz/neki-processo-seletivo"
        },
        {
            id: 2,
            title: "lamen-app",
            description: "o lamen é um to-do list para gerenciamento de tarefas onde é possivel adicionar, editar e excluir uma tarefa.",
            cover: lamenImage,
            video: "https://www.youtube.com/watch?v=4ujtelOmadc",
            technologies: [
                "react", "next", "tailwind", "prisma"
            ],
            repository: "https://github.com/N7thz/lamen"
        },
        {
            id: 3,
            title: "takoiaki",
            description: "o takoiaki é um projeto de um ecommerce onde é póssivel logar com a conta do Google ou Github, comprar produtos e depois receber um email de confirmação",
            cover: takoiakiImage,
            video: "https://www.youtube.com/watch?v=wVrOTxZVJxE",
            technologies: [
                "react", "next", "tailwind", "react-query", "next-auth", "resend"
            ],
            repository: "https://github.com/N7thz/takoiaki"
        }
    ],
    en: [

        {
            id: 1,
            title: "tamago-app",
            description: "Tamago is a project developed with the aim of being a type of 'card-game' where it is possible to create, edit, delete and sell a card",
            cover: tamagoImage,
            video: "https://www.youtube.com/watch?v=qoXKFhCjShU",
            technologies: [
                "react", "next", "tailwind", "springboot", "postgrees"
            ],
            repository: "https://github.com/N7thz/neki-processo-seletivo"
        },
        {
            id: 2,
            title: "lamen-app",
            description: "lamen is a to-do list for task management where you can add, edit and delete a task.",
            cover: lamenImage,
            video: "https://www.youtube.com/watch?v=4ujtelOmadc",
            technologies: [
                "react", "next", "tailwind", "prisma"
            ],
            repository: "https://github.com/N7thz/lamen"
        },
        {
            id: 3,
            title: "takoiaki",
            description: "takoiaki is an ecommerce project where you can log in with your Google or Github account, buy products and then receive a confirmation email.",
            cover: takoiakiImage,
            video: "https://www.youtube.com/watch?v=wVrOTxZVJxE",
            technologies: [
                "react", "next", "tailwind", "react-query", "next-auth", "resend"
            ],
            repository: "https://github.com/N7thz/takoiaki"
        }
    ],
}

export const otherProjects: ProjectLang = {

    pt: [

        {
            id: 1,
            title: "tacos",
            description: "O Tacos é um jogo da forca tradicional onde o objetivo é acertar a palavra secreta com o minimo de tentativas possivel.",
            cover: tacosImage,
            video: "https://www.youtube.com/watch?v=1wbzAOa19rM",
            technologies: [
                "react", "next", "tailwind", "shadcn-ui"
            ],
            repository: "https://github.com/N7thz/tacos"
        },
        {
            id: 2,
            title: "sound-player",
            description: "O Sound-player é um player de música onde o usuario pode ouvir musicas e suas respectivas letras.",
            cover: soundImage,
            video: "https://www.youtube.com/watch?v=YD3ZdZ9FTcY",
            technologies: [
                "react", "next", "tailwind"
            ],
            repository: "https://github.com/N7thz/music-player"
        },
        {
            id: 3,
            title: "notion-clone",
            description: "é um clone do Notion, editor de texto que possiu algumas funcionalidades como negrito, sublinhado e etc.",
            cover: notionImage,
            video: "https://youtu.be/yxTTovt5mJw",
            technologies: [
                "react", "next", "tailwind", "tip-tap"
            ],
            repository: "https://github.com/N7thz/notion"
        },
        {
            id: 4,
            title: "jogo da velha",
            description: "Jogo da velha tradicional",
            cover: tictacImage,
            video: "https://youtu.be/bIs-bwlHiYw",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/jogo-da-velha"
        },
        {
            id: 5,
            title: "pokedex",
            description: "Uma pokedex para relembrar a infancia e ser um mestre pokemon",
            cover: pokedexImage,
            video: "https://youtu.be/Dtuey9ihHAg",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/pokedex"
        },
        {
            id: 6,
            title: "netflix-clone",
            description: "Um clone da Netflix para treinar estilização",
            cover: netflixImage,
            video: "https://youtu.be/fIICcVPekaU",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/netflix-clone"
        },
        {
            id: 7,
            title: "calculadora",
            description: "Meu primeiro projeto.",
            cover: calculadoraImage,
            video: "https://youtu.be/bqBZnp82eG8",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/calculadora"
        }
    ],
    en: [

        {
            id: 1,
            title: "tacos",
            description: "Tacos is a traditional game of hangman where the objective is to guess the secret word with as few attempts as possible.",
            cover: tacosImage,
            video: "https://www.youtube.com/watch?v=1wbzAOa19rM",
            technologies: [
                "react", "next", "tailwind", "shadcn-ui"
            ],
            repository: "https://github.com/N7thz/tacos"
        },
        {
            id: 2,
            title: "sound-player",
            description: "Sound-player is a music player where the user can listen to songs and their respective lyrics.",
            cover: soundImage,
            video: "https://www.youtube.com/watch?v=YD3ZdZ9FTcY",
            technologies: [
                "react", "next", "tailwind"
            ],
            repository: "https://github.com/N7thz/music-player"
        },
        {
            id: 3,
            title: "notion-clone",
            description: "It is a clone of Notion, a text editor that has some features such as bolding, underlining, etc.",
            cover: notionImage,
            video: "https://youtu.be/yxTTovt5mJw",
            technologies: [
                "react", "next", "tailwind", "tip-tap"
            ],
            repository: "https://github.com/N7thz/notion"
        },
        {
            id: 4,
            title: "jogo da velha",
            description: "Traditional tic-tac-toe.",
            cover: tictacImage,
            video: "https://youtu.be/bIs-bwlHiYw",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/jogo-da-velha"
        },
        {
            id: 5,
            title: "pokedex",
            description: "A pokedex to remember your childhood and be a pokemon master.",
            cover: pokedexImage,
            video: "https://youtu.be/Dtuey9ihHAg",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/pokedex"
        },
        {
            id: 6,
            title: "netflix-clone",
            description: "A Netflix clone to train styling.",
            cover: netflixImage,
            video: "https://youtu.be/fIICcVPekaU",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/netflix-clone"
        },
        {
            id: 7,
            title: "calculadora",
            description: "My first project.",
            cover: calculadoraImage,
            video: "https://youtu.be/bqBZnp82eG8",
            technologies: [
                "html", "css", "javascript"
            ],
            repository: "https://github.com/N7thz/calculadora"
        }
    ],
}