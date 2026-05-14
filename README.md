# 🧩 Censo Autista - Bragança Paulista

O **Censo Autista** é uma aplicação web desenvolvida como parte de um projeto de pesquisa e extensão vinculado ao Instituto Federal de São Paulo (IFSP) - Campus Bragança Paulista. 

O objetivo da plataforma é realizar o mapeamento demográfico, socioeconômico e clínico da comunidade autista local. Os dados coletados visam subsidiar a criação de políticas públicas direcionadas, identificar demandas por serviços de saúde e educação, e fortalecer a rede de apoio na região.

## ✨ Funcionalidades

* **Página Inicial (Landing Page):** Apresentação do projeto com animações de rolagem (scroll) fluidas criadas via IntersectionObserver.
* **Formulário de Cadastro em Múltiplas Etapas:** Um fluxo de coleta de dados dividido em 7 passos para melhor experiência do usuário, com gerenciamento de estado centralizado para não perder os dados ao avançar ou retroceder:
  1. Informações Gerais
  2. Diagnóstico e Acompanhamento
  3. Perfil Socioeconômico
  4. Educação e Escolaridade
  5. Saúde e Terapias
  6. Rotina e Características
  7. Finalização e Observações
* **Páginas Institucionais:** Política de Privacidade (adequada à LGPD) e Termos de Uso.
* **Navegação SPA (Single Page Application):** Transições rápidas e sem recarregamento de página utilizando React Router.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **[React](https://reactjs.org/):** Biblioteca JavaScript para construção da interface de usuário baseada em componentes.
* **[Vite](https://vitejs.dev/):** Ferramenta de build super rápida para projetos web modernos.
* **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas e navegação.
* **CSS3:** Estilização global e modularizada com design responsivo e componentes translúcidos modernos.

## 📁 Estrutura do Projeto

A arquitetura do código foi pensada focando em Clean Code e componentização:

```text
src/
├── assets/         # Imagens, ícones e arquivos CSS globais
├── components/     # Componentes reaproveitáveis (Layouts, Páginas)
│   ├── layout/     # Estrutura base (Header, Footer)
│   └── pages/      # Telas principais (Home, Cadastro, Login, Políticas)
├── hooks/          # Custom Hooks (ex: useScrollAnimation para efeitos visuais)
└── routes/         # Configuração de rotas da aplicação.
```


## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento na sua máquina.

### 📋 Pré-requisitos

Antes de começar, certifique-se de que tem as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/) (Versão 18 ou superior)
* [Git](https://git-scm.com/)
* Um gestor de pacotes (npm ou yarn)

### 🚀 Passo a Passo

1. **Clonar o Repositório**
   Abra o terminal e execute o comando para clonar o projeto:
   ```bash
   git clone [https://github.com/micoliveira/ConnecTea.git](https://github.com/micoliveira/ConnecTea.git)

## 🛡️ Privacidade e Proteção de Dados (LGPD)

O **ConnecTea** foi desenvolvido com foco na segurança da informação e na privacidade dos participantes, assegurando total conformidade com a **Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)**.

### 🔐 Compromisso com a Segurança
Dada a natureza sensível dos dados recolhidos — que incluem informações de saúde, diagnóstico e perfil socioeconómico — a plataforma adota camadas de proteção para garantir a integridade e a confidencialidade das informações:

* **Finalidade Específica:** Os dados são recolhidos exclusivamente para fins estatísticos e de investigação académica, visando o desenvolvimento de políticas públicas em Bragança Paulista.
* **Tratamento de Dados Sensíveis:** O projeto aplica normas rigorosas de segurança no tratamento de informações sobre o Transtorno do Espectro Autista (TEA), garantindo que o acesso seja restrito e controlado.
* **Transparência:** O utilizador tem total clareza sobre quais dados estão a ser recolhidos em cada uma das 7 etapas do formulário.

### 📋 Direitos do Utilizador
Em conformidade com a legislação vigente, a plataforma assegura aos utilizadores os direitos de:
1.  **Acesso e Confirmação:** Saber se existe tratamento dos seus dados.
2.  **Correção:** Solicitar a alteração de dados incompletos ou inexatos.
3.  **Eliminação:** Requerer a exclusão de dados tratados sob consentimento.
4.  **Revogação:** Cancelar o consentimento de participação a qualquer momento.

### 🔬 Rigor Académico e Técnico
Sendo um projeto desenvolvido no âmbito do **IFSP - Campus Bragança Paulista**, a base de dados serve como um panorama real para gestores e investigadores, sendo tratada sob princípios éticos de segurança cibernética e governança de dados.

---
Para mais detalhes, consulte a nossa página interna de **[Política de Privacidade](https://connec-tea.vercel.app/politica-privacidade)**.