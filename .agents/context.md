# Contexto da aplicação mobile

## Sobre a Ranguei

Nasceu para dar mais inteligência e eficiência à operação interna dos comércios, bares e restaurantes. Nossa missão é simplificar o dia a dia de quem atende o público presencialmente, conectando balcão, mesas e cozinha num único fluxo ágil e sem atritos.

**📱 A Experiência Mobile (Frente de Salão):**

O garçom registra os pedidos diretamente pelo seu aplicativo/tablet e os envia em tempo real para a cozinha fazer o preparo do pedido (comida/bebida), eliminando falhas de comunicação e acelerando o atendimento aos clientes.

**⚙️ O Motor da Operação (Backend):**

Uma infraestrutura robusta e escalável, preparada para:

- centralizar regras de negócio dos comércios locais e comércio on delivery.
- autenticação de usuários e gestão de cardápio (categorias e produtos).
- controlar processos no fluxo de pedidos com itens de produtos.
- gerenciar operações de delivery de ponta a ponta.
- gerenciar a persistência de dados e a comunicação entre os clientes.

## Visão geral

A aplicação mobile é desenvolvido com stacks javascript (Expo, React Native e Typescript).
O código atual dessa aplicação móvel está em estado inicial de esqueleto, com telas de exemplo e uma arquitetura mínima de roteamento.

## Estrutura técnica

Construído com foco em alta performance, uma interface intuitiva com uma experiência do usuário (UX) refinada, usando um ecossistema moderno de desenvolvimento mobile (React Native, Expo 57.0.22, Expo Router 57.0.21, React Native 0.86.3 e TypeScript 6.0.3).

## Estrutura de pastas

- app/: telas e layouts baseados em file-based routing do Expo Router
- components/: diretório previsto para componentes reutilizáveis
- constants/: tokens visuais e tematico
- assets/: imagens, fontes e configuração visual

## Rotas e telas existentes

- app/index.tsx: tela inicial com texto "Página INDEX"
- app/login.tsx: tela de login com texto "Página LOGIN"
- app/(authenticated)/dashboard.tsx: tela autenticada com texto "Página DASHBOARD"

## Layout e navegação

- app/\_layout.tsx: layout raiz com Stack e StatusBar, ocultando headers
- app/(authenticated)/\_layout.tsx: layout de área autenticada com Stack
- O agrupamento (authenticated) indica intenção de separar o fluxo pós-login

## Tokenização e design system

- constants/tokens.ts: define cor branding, escala de espaçamento, raio, escala e paleta de cores com padrões de black, white, green, red, gray
- constants/theme.ts: define objetos theme.light e theme.dark, com uso de tokens globais e configurações de spacing, radius e font

## Estado atual do projeto

A aplicação está implementada como protótipo estrutural, sem lógica real de autenticação, dashboard com dados dinâmicos, pedidos ou telas de fluxo completo. O projeto já tem infraestrutura de navegação e design tokens mas ainda depende de implementação funcional para funcionar como produto.

## Objetivo de documentação

Essa documentação serve como ponto de partida para quem entra no projeto e precisa saber o que já existe, o que foi estruturado e o que ainda precisa ser desenvolvido.
