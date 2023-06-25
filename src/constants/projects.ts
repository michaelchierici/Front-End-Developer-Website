import App from "../assets/images/app.svg";
import Spotify from "../assets/images/spotify.svg";
import AppTools from "../assets/images/app-tools.svg";
import SpotifyTools from "../assets/images/spotify-tools.svg";
export const projects = [
  {
    photo: App,
    description:
      "Esse projeto se trata de um e-commerce voltado para venda de tênis, nessa aplicação é possível adicionar item ao carrinho, alterar quantidade, remover e finalizar a compra. Também é possível adicionar itens aos favoritos. O fluxo de autenticação foi realizado no back e mobile com node utilizei JWT e no react native foi estruturado com Redux. onde é possível criar uma conta que ficará salva no PostgreSQL.",
    tools: AppTools,
  },
  {
    photo: Spotify,
    description:
      "Esse site é um redesign simples dos novos lançamentos da semana do spotify, o objetivo de fazer esse projeto veio da necessida de aprendizado em como consumir uma API pública, nesse projeto é possível logar com sua conta do spotify e ouvir os lançamentos da semana",
    tools: SpotifyTools,
  },
];
