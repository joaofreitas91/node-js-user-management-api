# Documentação da API - Trabalhando com Streams em NodeJS

## Descrição

Esta é uma aplicação simples para exemplificar o uso de Streams em NodeJS.

Dentro dos arquivos existem comentários explicando o que cada parte do código faz.

## Como executar

Esse exemplo é dividido em duas partes: o servidor e o cliente.

Para executar a aplicação do lado do servidor, basta executar o arquivo stream-http-serve.js com o NodeJS:

```sh
node stream-http-server.js
```

A aplicação estará disponível na url: http://localhost:3334.

Para executar a aplicação do lado do cliente, basta executar o arquivo fake-upload-to-http-stream-client.js com o NodeJS:

```sh
node fake-upload-to-http-stream-client.js
```

A aplicação irá mostrar o progresso no console e, ao final, mostrará irá parar de executar.