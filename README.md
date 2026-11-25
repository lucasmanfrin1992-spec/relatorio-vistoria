# Gerador de Relatório de Vistoria – DOR/TJPR

Ferramenta web para gerar o **Relatório de Vistoria (.docx ou PDF)** no modelo da Divisão de Obras de Reforma e Conservação de Edifícios - DOR (SG-SI-CED-DOR) do TJPR.

**Acesse:** https://lucasmanfrin1992-spec.github.io/relatorio-vistoria/

## Instalar como aplicativo
O gerador é um PWA: pode ser instalado e funciona sem internet depois da primeira abertura.
- **Computador (Chrome ou Edge):** clique em **Instalar app** no topo da página ou no ícone de instalar da barra de endereço.
- **Android (Chrome):** toque em **Instalar app** ou no menu **⋮ › Instalar app / Adicionar à tela inicial**.
- **iPhone/iPad (Safari):** **Compartilhar › Adicionar à Tela de Início**.
- **Mac (Safari):** **Arquivo › Adicionar ao Dock**.

O app instalado usa o símbolo do TJPR como ícone, abre em janela própria e avisa quando há uma nova versão.

## Como usar
1. Escolha regional, comarca e edificação (base de imóveis do TJPR).
2. Confira a identificação e informe o protocolo SEI, a data e o fiscal.
3. Escolha o modelo de objetivo e descreva a vistoria.
4. Inclua as fotos com legenda (arraste para reordenar).
5. Informe os assinantes e clique em **Gerar relatório .docx** (para editar no Word) ou **Gerar PDF** (pronto para anexar no SEI).

Campos obrigatórios vazios saem no documento como **[INDICAR …]** com fundo âmbar.

## Modelo visual
Segue o Manual de Uso da marca TJPR: cabeçalho com a marca horizontal e o texto da unidade (editável no app), cores institucionais (#002a3a, #008c95), Identificação em tabela e quadro de fotos padronizado. O .docx usa a fonte Bahnschrift (instalada no Windows), com Arial como reserva; o PDF leva embutida a fonte livre Barlow (SIL Open Font License), de desenho semelhante ao DIN.

## Privacidade
Tudo roda no navegador. Nenhum dado ou foto é enviado a servidores: o rascunho, o fiscal e os assinantes ficam guardados apenas no navegador de quem usa. É necessário estar conectado à internet para carregar as bibliotecas de geração do .docx e do PDF.

## Atualização
O app é o arquivo `index.html`, com `manifest.webmanifest`, `sw.js` (funcionamento offline) e a pasta `icons/`. Ao publicar uma versão nova, altere `VERSION` em `sw.js` para que os apps instalados ofereçam a atualização. Para atualizar, substitua o arquivo e faça commit na branch `main`; o GitHub Pages publica em cerca de 1 minuto.
