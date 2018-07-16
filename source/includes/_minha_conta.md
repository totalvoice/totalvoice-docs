# Minha Conta

> Minha Conta Endpoint

```text
https://api.totalvoice.com.br/conta
```

> Saldo Endpoint

```text
https://api.totalvoice.com.br/saldo
```

> Webhook Endpoint

```text
https://api.totalvoice.com.br/webhook 
```

O **Minha Conta** permite que você visualize seu saldo, monitore suas contas e suas recargas,
edite suas contas e configure e visualize seus webhooks.

### Objeto Minha Conta

> <br>

> JSON

```json
{
    "nome": "Total Voice Telecom",
    "login": "contato@totalvoice.com.br",
    "senha": "senha secreta",
    "cpf_cnpj": "00.000.000/0000-00",
    "telefone": "4832830151",
    "preco_fixo": "0.09",
    "preco_cel": "0.35",
    "preco_ramal": "0.02"
    "email_financeiro": "financeiro@totalvoice.com.br",
    "nome_fantasia": "Total Voice",
}
```
Definição do objeto Conta

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da conta.
             </td>
        </tr>
        <tr>
            <td>
                login
                <span class="attribute">string</span>
            </td>
            <td>
                Login de acesso da sua conta
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">senha</span>
            </td>
            <td>
                Senha de acesso da sua conta
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="attribute">string</span>
            </td>
            <td>
                CPF ou CNPJ da sua conta
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="attribute">string</span>
            </td>
            <td>
                Telefone da sua conta
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="attribute">string</span>
            </td>
            <td>
                Preço por minuto do fixo
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="attribute">string</span>
            </td>
            <td>
                Preço por minuto para celular
            </td>
        </tr>
        <tr>
        <tr>
            <td>
                preco_ramal
                <span class="attribute">string</span>
            </td>
            <td>
                Preço por minuto do ramal
            </td>
        </tr>
        <tr>
            <td>
                email_financeiro
                <span class="attribute">string</span>
            </td>
            <td>
                E-mail do financeiro da sua empresa
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="attribute">string</span>
            </td>
            <td>
                Nome fantasia da sua empresa
            </td>
        </tr>
    </tbody>
</table>

### Objeto Resposta Minha Conta

> <br>

> JSON

```json
{
    "id": 14681,
    "nome": "DesenvolvimentoTotalVoice",
    "cpf_cnpj": "12.042.833/0001-02",
    "login": "desenvolvimento@totalvoice.com.br",
    "saldo": 100.00,
    "telefone": "4832830151",
    "access_token": "acces_token",
    "preco_fixo": "0.060",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "financeiro@totalvoice.com.br",
    "nome_fantasia": "TotalVoice",
    "metodo_pagamento": "prepago"
}
```

Definição do objeto resposta Minha Conta

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro da sua conta
             </td>
        </tr>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da sua conta
             </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="attribute">string</span>
            </td>
            <td>
                CPF ou CNPJ da sua conta
            </td>
        </tr>
        <tr>
            <td>
                login
                <span class="attribute">string</span>
            </td>
            <td>
                Login de acesso da sua conta
            </td>
        </tr>
        <tr>
            <td>
                saldo
                <span class="attribute">float</span>
            </td>
            <td>
                Saldo atual da conta
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="attribute">string</span>
            </td>
            <td>
                Telefone da sua conta
            </td>
        </tr>
        <tr>
            <td>
                access_token
                <span class="attribute">string</span>
            </td>
            <td>
                Access Token da sua conta
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="attribute">string</span>
            </td>
            <td>
                Preço por minuto para fixo
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="attribute">string</span>
            </td>
            <td>
                Preço por minuto para celulares
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="attribute">string</span>
            </td>
            <td>
                Preço por minuto para ramal
            </td>
        </tr>
        <tr>
            <td>
                email_financeiro
                <span class="attribute">string</span>
            </td>
            <td>
                E-mail do financeiro da sua empresa
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="attribute">string</span>
            </td>
            <td>
                Nome fantasia da sua empresa
            </td>
        </tr>
        <tr>
            <td>
                metodo_pagamento
                <span class="attribute">string</span>
            </td>
            <td>
                Método de faturamento da sua conta
            </td>
        </tr>
    </tbody>
</table>

### Saldo da Conta

> Definição

```text
POST https://api.totalvoice.com.br/saldo
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/saldo'
```
```php
<?php
$response = $client->perfil->consultaSaldo();
```
```javascript--node
var response = client.perfil.consultaSaldo()
```
```go
 response, err := client.Saldo.ConsultaSaldo()
```
```python
response = client.minha_conta.get_saldo()
```
```java
Perfil perfil = new Perfil(client);
JSONObject response = perfil.consultaSaldo();
```
```ruby
puts @client.perfil.consulta_saldo()
```

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "saldo atual",
  "dados": {
    "saldo": 100.00
  }
}
```

#### Response

<table class="table-parameters">
    <tbody>
 <tr>
            <td>
                saldo
                <span class="attribute">float</span>
            </td>
            <td>
                Saldo atual da sua conta
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Buscar minha conta

> Definição

```text
GET https://api.totalvoice.com.br/conta/
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/conta'
```
```php
<?php
$response = $client->perfil->minhaConta();
```
```javascript--node
var response = client.perfil.minhaConta()
```
```go
 response, err := client.Perfil.MinhaConta()
```
```python
response = client.minha_conta.get_conta()
```
```java
Perfil perfil = new Perfil(client);
JSONObject response = perfil.minhaConta();
```
```ruby
puts @client.perfil.minha_conta()
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 14681,
    "nome": "DesenvolvimentoTotalVoice",
    "cpf_cnpj": "11.111.111/0001-02",
    "login": "desenvolvimento@totalvoice.com.br",
    "saldo": 111.38,
    "telefone": "4832830151",
    "access_token": "tokentestetoken",
    "preco_fixo": "0.060",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "",
    "nome_fantasia": null,
    "metodo_pagamento": "pospago",
    "fatura_atual": 365.34
  }
}
```

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o objeto <a href="#objeto-minha-conta">Minha Conta</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Alterar sua Conta 

> Definição

```text
PUT https://api.totalvoice.com.br/conta
```

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/conta/3132' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
    -d '{"senha" : "senha123456"}'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$conta_dados = array("senha" => "senha123456");
$response = $client->perfil->atualizaDadosConta($conta_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

var conta_dados = {
    senha: "senha123456"
};
client.perfil.atualizaDadosConta(conta_dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")

perfil = new(Perfil)
perfil.NomeFantasia = "NovoNome"

response, err := client.Perfil.AtualizarConta(perfil)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.perfil.editar_conta("Total Voice")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Perfil perfil = new Perfil(client);
JSONObject response = perfil.atualizaDadosConta('{"nome":"TotalVoice"}');
```
```ruby
puts @client.perfil.atualizar('{"nome":"TotalVoice"}')
```

> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "dados atualizados com sucesso",
    "dados": null
}
```

Altera as informações de sua conta principal, você precisa passar no corpo do request o JSON com os campos que serão alterados, conforme exemplos.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo nome para a conta que você deseja alterar
             </td>
        </tr>
        <tr>
            <td>
                login
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo login para a conta, precisa ser um endereço de e-mail válido.
            </td>
        </tr>
        <tr>
            <td>
                senha
                <span class="optional">Opcional</span>
            </td>
            <td>
                Nova senha para esta conta, deve ter mais que 6 caracteres.
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo CPF ou CNPJ desta conta, para fim de identificação e integração.
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo número de telefone de contato desta conta, precisa ser um número de telefone válido.
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas à números fixos, deve ser maior ou igual ao da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas à números móveis, deve ser maior ou igual ao da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamada entre Ramais dentro dela mesma, deve ser maior ou igual ao valor da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                email_financeiro
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo e-mail de contato para assuntos financeiros desta conta.
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo nome fantasia desta conta que será utilizado para exibição.
            </td>
        </tr>
    </tbody>
</table>

#### Response
<br/>
Retorna o objeto <a href="#respostas-da-api">resposta padrão</a> da API com sucesso ou falha.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Relatório de recarga

> Definição

```text
GET https://api.totalvoice.com.br/conta/recargas
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/conta/recargas'
```
```php
<?php
$response = $client->perfil->relatorioRecarga();
```
```javascript--node
var response = client.perfil.relatorioRecarga();
```
```go
 response, err := client.Perfil.RelatorioRecarga()
```
```python
response = client.minha_conta.get_recargas()
```
```java
Perfil perfil = new Perfil(client);
JSONObject response = perfil.relatorioRecarga();
```
```ruby
puts @client.perfil.relatorio_recarga()
```

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "relatorio": [
      {
        "id": 6470,
        "credito": 10,
        "data": "2018-07-05T09:42:03-03:00",
        "descricao": "Recarga"
      },
      {
        "id": 5873,
        "credito": 10,
        "data": "2018-05-28T11:34:49-03:00",
        "descricao": "Recarga"
      }
    ]}
}
```

#### Response

<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da transação de recarga
             </td>
		</tr>
		<tr>
            <td>
                credito
                <span class="attribute">float</span>
            </td>
            <td>
                Valor da recarga
             </td>
		</tr>
		<tr>
            <td>
                data
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data da transação
             </td>
		</tr>
		<tr>
            <td>
                descricao
                <span class="attribute">string</span>
            </td>
            <td>
                Descrição da transação
             </td>
		</tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## URL de Recarga

> Definição

```text
GET https://api.totalvoice.com.br/conta/urlrecarga
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/conta/urlrecarga?url_retorno=www.urlretorno.com.br'
```
```php
<?php
$response = $client->perfil->urlRecarga("www.urlretorno.com.br");
```
```javascript--node
var response = client.perfil.urlRecarga("www.urlretorno.com.br");
```
```go
 response, err := client.Perfil.GeraURLRecarga("www.urlretorno.com.br")
```
```python
response = client.minha_conta.get_url_recarga("www.urlretorno.com.br")
```
```java
Perfil perfil = new Perfil(client);
JSONObject response = perfil.urlRecarga("www.urlretorno.com.br");
```
```ruby
puts @client.perfil.url_recarga("www.urlretorno.com.br")
```

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "url": "https://api.evoline.com.br/recarga/index.php?id=eagr&public_key=teste5a4b033e14e69"
  }
}
```
#### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                url_retorno
                <span class="optional">Opcional</span>
            </td>
            <td>
                URL para retorno depois da recarga ou ao cancelar.
             </td>
        </tr>
    </tbody>
</table>

#### Response
<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                url
                <span class="attribute">string</span>
            </td>
            <td>
                URL para acessar o painel de recarga
             </td>
		</tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Listar Webhooks

Este método permite a listagem de todos os webhooks configurados da sua conta. <a href="#webhooks">Clique aqui</a> para obter mais informações sobre cada webhook da TotalVoice. 

> Definição

```text
GET https://api.totalvoice.com.br/webhook
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/webhook'
```
```php
<?php
$response = $client->perfil->webhooks();
```
```javascript--node
var response = client.perfil.webhooks();
```
```go
 response, err := client.Webhook.Listar()
```
```python
response = client.minha_conta.get_webhook()
```
```java
Perfil perfil = new Perfil(client);
JSONObject response = perfil.webhooks();
```
```ruby
puts @client.perfil.webhooks()
```

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "webhook apagado com sucesso",
  "dados": null
}
```

#### Request
<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                nome_webhook
                <span class="attribute">string</span>
            </td>
            <td>
                Nome do webhook a ser deletado
             </td>
		</tr>
    </tbody>
</table>

#### Response
<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                dados
                <span class="attribute">string</span>
            </td>
            <td>
                Retorna dados null e mensagem de sucesso
             </td>
		</tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Remover Webhook

Este método permite a remoção de um webhook específico de sua conta. <a href="#webhooks">Clique aqui</a> para obter mais informações sobre cada webhook da TotalVoice. 

> Definição

```text
DELETE https://api.totalvoice.com.br/webhook/{nome_webhook}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/webhook/chamada_fim'
```
```php
<?php
$response = $client->perfil->excluirWebhook("chamada_fim");
```
```javascript--node
var response = client.perfil.excluirWebhook("chamada_fim");
```
```go
 response, err := client.Webhook.Excluir("chamada_fim")
```
```python
response = client.minha_conta.delete_webhook("chamada_fim")
```
```java
Perfil perfil = new Perfil(client);
JSONObject response = perfil.excluirWebhook("chamada_fim");
```
```ruby
puts @client.perfil.excluir_webhook("chamada_fim")
```

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "webhooks": [
      {
        "webhook": "status_tempo_real",
        "url": "http://urltemporeal.com.br"
      },
      {
        "webhook": "chamada_fim",
        "url": "http://urlchamadafim.com.br"
      },
      {
        "webhook": "envio_sms",
        "url": "http://enviosms.com.br"
      },
      {
        "webhook": "chamada_did_fim",
        "url": "http://chamadadidfim.com.br"
      }
    ]
  }
}
```
#### Response
<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                webhook
                <span class="attribute">string</span>
            </td>
            <td>
                Nome do webhook
             </td>
		</tr>
		<tr>
            <td>
                url
                <span class="attribute">string</span>
            </td>
            <td>
                URL destino para receber o webhook
             </td>
		</tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>