## React Portfolio

[![Imagem do Portfólio](https://github.com/Gustavo-Torres-Gama/reactfolio/blob/main/public/preview.png)](https://github.com/Gustavo-Torres-Gama/reactfolio/blob/main/public/preview.png)

Este é um portfólio pessoal desenvolvido com React e Sass, criado para exibir minhas habilidades e projetos, ele tem o objetivo de treinar o desenvolvimento com React e Sass, Os links contidos nele, não estão conectados aos endereços espeerados ou funcionais, é apenas para treinamento.

### Recursos

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Sass:** Estilização de elementos HTML.

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Gustavo-Torres-Gama/reactfolio.git
   ```
2. Navegue para o diretório do projeto:
   ```bash
   cd reactfolio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Inicialização

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo será aberto em `http://localhost:3000`.

### Personalização

Para personalizar o portfólio, siga estes passos:

1. **Editar informações pessoais:**
   * Abra o arquivo `src/components/About/About.tsx` e edite as informações do perfil, como nome, descrição, links para redes sociais e etc.
2. **Adicionar projetos:**
   * Crie uma nova pasta dentro de `src/components/Projects/` para cada projeto.
   * Crie os arquivos `index.tsx` e `styles.css` dentro da nova pasta.
   * Adicione informações do projeto no arquivo `index.tsx`, como título, descrição, links para o repositório e demonstração, e etc.
   * Adicione estilos personalizados no arquivo `styles.css`.
3. **Atualizar tecnologias:**
   * Abra o arquivo `src/components/Skills/Skills.tsx` e edite a lista de tecnologias.
4. **Ajustar layout e estilos:**
   * Edite o arquivo `src/styles/globalStyles.css` para ajustar o layout e os estilos gerais.

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

### Licença

Este projeto é licenciado sob a [licença MIT](https://github.com/Gustavo-Torres-Gama/reactfolio/blob/main/LICENSE).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
