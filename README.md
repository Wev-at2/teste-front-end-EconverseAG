# Teste Front-End - EconverseAG

Este projeto é um teste de desenvolvimento front-end utilizando **React + TypeScript + Vite**.

## Estrutura do Projeto

- `src/components` - Componentes reutilizáveis:
  - `ProductSection.tsx` - Seção de produtos.
  - `ProductCard.tsx` - Cartão individual de produto.
  - `TopBar.tsx` - Barra superior com itens responsivos.
- `src/assets` - Imagens e arquivos estáticos.
- `src/styles` - Estilos globais e componentes estilizados.

## Funcionalidades Implementadas

1. **Grid de Produtos convertido em Carrossel**
   - Utiliza [react-slick](https://react-slick.neostack.com/) para exibir os produtos como carrossel.
   - Responsivo: desktop mantém grid, mobile mostra carrossel deslizante.

2. **TopBar Responsiva**
   - Itens da TopBar viram slide em dispositivos mobile.
   - Animação automática (autoplay) implementada para não precisar arrastar manualmente.

3. **Configuração de Lint e TypeScript**
   - ESLint configurado com regras recomendadas e checagem de tipos.
   - Suporte a React + TypeScript + Vite com Hot Module Replacement.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- react-slick (carrossel)
- ESLint
- TailwindCSS (se aplicável)

## Rodando o Projeto

1. Instale as dependências:

```bash
npm install