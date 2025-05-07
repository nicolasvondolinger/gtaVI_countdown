# GTA VI Countdown

Projeto web com contagem regressiva em tempo real para o lançamento oficial de *Grand Theft Auto VI*, previsto para 26 de maio de 2026. A página é responsiva, multilíngue, com suporte a múltiplos fusos horários, integração com Google Calendar e links para trailers oficiais.

![Preview](./assets/preview.png) <!-- Substitua por uma imagem de preview do projeto -->

## 🚀 Funcionalidades

- ⏱️ **Contagem regressiva precisa** baseada no fuso horário selecionado.
- 🌐 **Suporte a idiomas**: inglês 🇺🇸, espanhol 🇪🇸 e português 🇧🇷.
- 🌍 **Seleção de fuso horário** com mais de 400 zonas suportadas.
- 📆 **Botão para adicionar o lançamento ao Google Calendar**.
- 🎬 **Trailer oficial embutido do YouTube**.
- 💼 **Links para perfis do desenvolvedor e site oficial da Rockstar**.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **CSS3**: Estilização moderna e responsiva.
- **JavaScript (ES6+)**: Manipulação de DOM, lógica de contagem e internacionalização.
- **[Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)**: Para listar e trabalhar com fusos horários.

---

## 📦 Estrutura do Projeto

gtaVI_countdown/
│
├── index.html # Página principal
├── style.css # Estilos globais
├── script.js # Lógica da contagem e idioma
│
├── assets/ # Imagens utilizadas
│ ├── gta6.png
│ ├── usa.png
│ ├── brazil.png
│ ├── spain.png
│ ├── github.png
│ ├── linkedin.png
│ └── rockstar.png
│
└── README.md # Este arquivo

## 📌 Como Usar

### 1. Clonando o Repositório

git clone https://github.com/seu-usuario/GTA6-Countdown.git
cd GTA6-Countdown

2. Abrindo Localmente

Abra o arquivo index.html em seu navegador:

open index.html # macOS
start index.html # Windows
xdg-open index.html # Linux

3. Personalização (Opcional)

    Data de lançamento: Altere a linha abaixo em script.js se a data mudar:

    const releaseDateUTC = new Date("2026-05-26T00:00:00Z");

    Idiomas: Adicione novos idiomas no objeto translations no script.js.

    Vídeos: Substitua os links <iframe> por outros vídeos do YouTube se desejar.

## 🌐 Internacionalização

O projeto permite alterar o idioma da interface com um clique em bandeiras no canto superior. Os textos são gerenciados via JavaScript, facilitando a adição de novos idiomas.

Idiomas disponíveis:

    🇺🇸 Inglês (en)

    🇧🇷 Português (pt)

    🇪🇸 Espanhol (es)

## ⏳ Fuso Horário Dinâmico

O usuário pode selecionar qualquer fuso horário suportado pelo navegador. A contagem regressiva será ajustada automaticamente. O valor padrão é Europe/London.

## 📅 Integração com Google Calendar

Clique no botão "Add to Calendar" para criar um evento no seu Google Calendar para o dia do lançamento de GTA VI.

    ⚠️ O link ainda precisa ser completado com os parâmetros corretos (isso pode ser feito usando encodeURIComponent no script.js com os dados do evento).

## 🔗 Links

    Site oficial do GTA VI

    Canal da Rockstar no YouTube

    Perfil do desenvolvedor no GitHub

    Perfil do desenvolvedor no LinkedIn

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.
🧑‍💻 Autor

Desenvolvido por Nicolas von Dolinger para os fãs da Rockstar Games e da franquia GTA.

## 📄 Licença

Este projeto está licenciado sob a MIT License. Você é livre para usá-lo e modificá-lo.