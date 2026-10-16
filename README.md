# Super Bolhas

Site estático em Astro para orientar famílias que chegam pelo QR code da embalagem: receita, passo a passo, dicas, solução de problemas e cuidados.

## Requisitos

- Node.js 22.22 ou superior (requisito do Astro 7)
- npm

## Desenvolvimento local

```sh
npm install
npm run dev
```

O Astro informa no terminal o endereço local (normalmente `http://localhost:4321`).

## Verificação e build

```sh
npm run check
npm run build
npm run preview
```

O build gera HTML estático na pasta `dist/`. Não são necessárias variáveis de ambiente.

## Conteúdo

Edite `src/data/siteContent.ts` para atualizar texto, receita, dicas, cuidados, SEO e tutoriais. Os tutoriais começam como não publicados e não mostram players vazios. Para publicar um tutorial, informe `published: true` e uma URL válida do YouTube; opcionalmente, adicione thumbnail e duração. O cartão abre o vídeo no YouTube após uma ação explícita, sem carregar scripts de terceiros na página inicial.

Contato WhatsApp é opcional: configure `contact.whatsappUrl` com o endereço verificado antes de exibi-lo. Nenhum contato é configurado por padrão.

## Deploy na Vercel

1. Envie este projeto para um repositório GitHub.
2. Na Vercel, escolha **Add New → Project**, conecte o GitHub e importe o repositório.
3. Mantenha o preset Astro. O projeto fornece `vercel.json`; os comandos são `npm install` e `npm run build`, com saída em `dist`.
4. Após o primeiro deploy, copie a URL pública escolhida e atualize `siteUrl` em `src/data/siteContent.ts`. Até essa configuração, o site não publica uma URL canônica fictícia.
5. Faça novo deploy e confira a URL final. O QR code da embalagem deve apontar para essa URL estável na raiz (`/`).

O projeto usa saída estática e não exige adaptador Vercel. Consulte os limites atuais do plano da Vercel ao publicar.
