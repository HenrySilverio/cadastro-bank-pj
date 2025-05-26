# 🏦 Cadastro de Usuários PJ - Bradesco

![Bradesco](https://raw.githubusercontent.com/bradesco/assets/main/logo.png)

## 📋 Índice

- [📝 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Demonstração](#-demonstração)
- [⚙️ Instalação e Uso](#️-instalação-e-uso)
- [📱 Responsividade](#-responsividade)
- [🌐 Internacionalização](#-internacionalização)
- [🔒 Validações e Segurança](#-validações-e-segurança)
- [👨‍💻 Desenvolvimento](#-desenvolvimento)
- [📚 Estrutura do Projeto](#-estrutura-do-projeto)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

## 📝 Sobre o Projeto

O projeto **Cadastro de Usuários PJ - Bradesco** é uma aplicação web desenvolvida com Angular que permite o cadastro de Pessoas Jurídicas no sistema do Bradesco. A aplicação segue a identidade visual do banco, com foco em usabilidade, acessibilidade e responsividade.

## ✨ Funcionalidades

- ✅ Fluxo intuitivo com etapas (introdução, benefícios, formulário)
- 💼 Apresentação de benefícios da conta PJ (cartões, tarifas, serviços)
- 📝 Formulário completo para cadastro de empresas com inputs de fundo branco
- 📱 Design responsivo para todos os dispositivos
- 🌐 Suporte a múltiplos idiomas (PT-BR e EN)
- 🔍 Validações em tempo real para todos os campos
- 📋 Máscaras para CNPJ e telefone
- 🔄 Simulação de API para cadastro
- 🎨 Interface seguindo a identidade visual do Bradesco

## 🛠️ Tecnologias Utilizadas

- ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) Angular 19
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) TypeScript
- ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white) SCSS
- ![Angular Material](https://img.shields.io/badge/Angular_Material-0081CB?style=for-the-badge&logo=material-ui&logoColor=white) Angular Material
- ![NGX-Translate](https://img.shields.io/badge/NGX_Translate-0081CB?style=for-the-badge) NGX-Translate
- ![NGX-Mask](https://img.shields.io/badge/NGX_Mask-0081CB?style=for-the-badge) NGX-Mask

## 🚀 Demonstração

A aplicação está disponível online em: [https://rqogyjqr.manus.space](https://rqogyjqr.manus.space)

### Novas Melhorias Visuais

- 🔄 **Fluxo em Etapas**: Introdução com pergunta inicial, apresentação de benefícios e formulário de cadastro
- 💰 **Seção de Benefícios**: Apresentação visual de cartões, tarifas e serviços exclusivos
- ⚪ **Inputs com Fundo Branco**: Formulário com campos de entrada mais limpos e agradáveis
- 🎨 **Layout Moderno**: Design mais atraente e profissional seguindo as tendências atuais

## ⚙️ Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cadastro-pj-bradesco.git
```

2. Navegue até o diretório do projeto:
```bash
cd cadastro-pj-bradesco
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
ng serve
```

5. Acesse a aplicação em:
```
http://localhost:4200
```

### Build para Produção

Para gerar uma versão de produção:

```bash
ng build --configuration production
```

Os arquivos serão gerados na pasta `dist/`.

## 📱 Responsividade

A aplicação foi desenvolvida seguindo o conceito de Mobile First, garantindo uma experiência consistente em diferentes dispositivos:

- 📱 Smartphones
- 📱 Tablets
- 💻 Notebooks
- 🖥️ Desktops

O layout se adapta automaticamente ao tamanho da tela, reorganizando os elementos para melhor visualização.

## 🌐 Internacionalização

O projeto suporta múltiplos idiomas através do NGX-Translate:

- 🇧🇷 Português (Brasil) - Padrão
- 🇺🇸 Inglês

Para alterar o idioma, utilize o seletor no canto superior direito da aplicação.

## 🔒 Validações e Segurança

Todos os campos do formulário possuem validações específicas:

- **Razão Social**: Mínimo de 3 caracteres
- **CNPJ**: Formato válido (XX.XXX.XXX/XXXX-XX)
- **Nome do Responsável**: Mínimo de 3 caracteres
- **E-mail Corporativo**: Formato de e-mail válido
- **Telefone**: Formato válido ((XX) XXXXX-XXXX)
- **Área de Atuação**: Seleção obrigatória

## 👨‍💻 Desenvolvimento

### Arquitetura

O projeto segue a arquitetura de componentes standalone do Angular 15+, com foco em:

- 🧩 Componentização (Atomic Design)
- 📦 Modularização
- 🔄 Reatividade
- 🧪 Testabilidade

### Padrões de Código

- 📏 ESLint para garantir qualidade de código
- 🎨 Prettier para formatação consistente
- 📝 TypeScript strict mode para tipagem segura

## 📚 Estrutura do Projeto

```
src/
  app/
    core/             // Serviços, guards, interceptors
    shared/           // Componentes e pipes reutilizáveis
    features/
      cadastro/
        components/   // Componentes da tela de cadastro
        services/     // Serviços da feature
        models/       // Interfaces e tipagens
        pages/        // Página principal
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

⭐️ Desenvolvido com ❤️ para o Bradesco ⭐️
# cadastro-bank-pj
