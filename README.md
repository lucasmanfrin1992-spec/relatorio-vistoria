# Gerador de Relatório de Vistoria – DOR/TJPR

Ferramenta web para gerar o **Relatório de Vistoria (.docx ou PDF)** no modelo da Divisão de Obras de Reformas e Conservação de Edifícios (SG-SI-CED-DOR) do TJPR.

**Acesse:** https://lucasmanfrin1992-spec.github.io/relatorio-vistoria/

## Como usar
1. Escolha regional, comarca e edificação (base de imóveis do TJPR).
2. Confira a identificação e informe o protocolo SEI, a data e o fiscal.
3. Escolha o modelo de objetivo e descreva a vistoria.
4. Inclua as fotos com legenda (arraste para reordenar).
5. Informe os assinantes e clique em **Gerar relatório .docx** (para editar no Word) ou **Gerar PDF** (pronto para anexar no SEI).

Campos obrigatórios vazios saem no documento como **[INDICAR …]** realçados em amarelo.

## Privacidade
Tudo roda no navegador. Nenhum dado ou foto é enviado a servidores: o rascunho, o fiscal e os assinantes ficam guardados apenas no navegador de quem usa. É necessário estar conectado à internet para carregar as bibliotecas de geração do .docx e do PDF.

## Atualização
O app é um único arquivo (`index.html`). Para atualizar, substitua o arquivo e faça commit na branch `main`; o GitHub Pages publica em cerca de 1 minuto.
