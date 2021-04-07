# Minha Conta

> Minha Conta Endpoint

```text
https://voice-app.zenvia.com/conta
```

O **Minha Conta** permite que você visualize seu saldo, monitore suas contas e suas recargas,
edite suas contas e configure e visualize seus webhooks.

### Objeto Minha Conta

> <br>

> JSON

```json
{
    "id": 1,
    "nome": "Total Voice Telecom",
    "cpf_cnpj": "12.123.123\/0001-10",
    "login": "teste@zenvia.com",
    "saldo": 950.64,
    "telefone": "4832830151",
    "access_token": "1234asdkgh1g23213nkbdfsh3v43",
    "preco_fixo": "0.060",
    "preco_sms": "0.090",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "testefinanceiro@zenvia.com",
    "nome_fantasia": null,
    "conta_ativa": 1,
    "valor_aviso_saldo_baixo": "0.00",
    "metodo_pagamento": "prepago",
    "fatura_atual": 1.52,
    "limite_credito_bonus": 0
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
    "id": 1,
    "nome": "Total Voice Telecom",
    "cpf_cnpj": "12.123.123\/0001-10",
    "login": "teste@zenvia.com",
    "saldo": 950.64,
    "telefone": "4832830151",
    "access_token": "1234asdkgh1g23213nkbdfsh3v43",
    "preco_fixo": "0.060",
    "preco_sms": "0.090",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "testefinanceiro@zenvia.com",
    "nome_fantasia": null,
    "conta_ativa": 1,
    "valor_aviso_saldo_baixo": "0.00",
    "metodo_pagamento": "prepago",
    "fatura_atual": 1.52,
    "limite_credito_bonus": 0
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
GET https://voice-app.zenvia.com/saldo
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-app.zenvia.com/saldo'
```
```php
<?php
$response = $client->perfil->consultaSaldo();
```
```javascript--node
var response = client.perfil.consultaSaldo()
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

 response, err := client.Saldo.ConsultaSaldo()
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
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

### Buscar minha conta

> Definição

```text
GET https://voice-app.zenvia.com/conta/
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-app.zenvia.com/conta'
```
```php
<?php
$response = $client->perfil->minhaConta();
```
```javascript--node
var response = client.perfil.minhaConta()
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

 response, err := client.Perfil.MinhaConta()
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
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
    "id": 1,
    "nome": "Total Voice Telecom",
    "cpf_cnpj": "12.123.123\/0001-10",
    "login": "teste@zenvia.com",
    "saldo": 950.64,
    "telefone": "4832830151",
    "access_token": "1234asdkgh1g23213nkbdfsh3v43",
    "preco_fixo": "0.060",
    "preco_sms": "0.090",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "testefinanceiro@zenvia.com",
    "nome_fantasia": null,
    "conta_ativa": 1,
    "valor_aviso_saldo_baixo": "0.00",
    "metodo_pagamento": "prepago",
    "fatura_atual": 1.52,
    "limite_credito_bonus": 0
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
PUT https://voice-app.zenvia.com/conta
```

> <br/>Request

```shell--curl
curl 'https://voice-app.zenvia.com/conta/3132' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: Seu_Token' \
    -d '{"senha" : "senha123456"}'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');

$conta_dados = array("senha" => "senha123456");
$response = $client->perfil->atualizaDadosConta($conta_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

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
client := totalvoice.NewTotalVoiceClient("Seu_Token")

perfil = new(Perfil)
perfil.NomeFantasia = "NovoNome"

response, err := client.Perfil.AtualizarConta(perfil)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
response = client.perfil.editar_conta("Total Voice")
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
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

Altera as informações de sua conta principal, você precisa passar no corpo do request o JSON com os campos que serão alterados, conforme os exemplos.

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
                Nova senha para esta conta. (Deve conter 8 caracteres, sendo pelo menos 1 maiúsculo e 1 minúsculo)
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
                O valor que será cobrado desta conta para chamadas destinadas a números fixos deve ser maior ou igual ao da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas a números móveis, deve ser maior ou igual ao da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamada entre Ramais dentro dela mesma deve ser maior ou igual ao valor da conta pai.
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
GET https://voice-app.zenvia.com/conta/recargas
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-app.zenvia.com/conta/recargas'
```
```php
<?php
$response = $client->perfil->relatorioRecarga();
```
```javascript--node
var response = client.perfil.relatorioRecarga();
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

 response, err := client.Perfil.RelatorioRecarga()
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
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
GET https://voice-app.zenvia.com/conta/urlrecarga
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-app.zenvia.com/conta/urlrecarga?url_retorno=www.urlretorno.com.br'
```
```php
<?php
$response = $client->perfil->urlRecarga("www.urlretorno.com.br");
```
```javascript--node
var response = client.perfil.urlRecarga("www.urlretorno.com.br");
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

 response, err := client.Perfil.GeraURLRecarga("www.urlretorno.com.br")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
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

Este método permite a listagem de todos os webhooks configurados da sua conta. <a href="#webhooks">Clique aqui</a> para obter mais informações sobre cada webhook da ZenAPI. 

> Definição

```text
GET https://voice-app.zenvia.com/webhook
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-app.zenvia.com/webhook'
```
```php
<?php
$response = $client->perfil->webhooks();
```
```javascript--node
var response = client.perfil.webhooks();
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

 response, err := client.Webhook.Listar()
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
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
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "webhooks": [
      {
        "webhook": "status_tempo_real",
        "url": "https://webhook.site/T3st1dew3b400k"
      },
      {
        "webhook": "chamada_fim",
        "url": "https://webhook.site/T3st1dew3b400k"
      },
    ]
  }
}
```

#### Request
<table class="table-parameters">
    <p>Não precisa passar nenhum parâmetro.</p>
</table>

#### Response
<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                webhooks
                <span class="attribute">array</span>
            </td>
           <td>
                Retorna dentro de dados um arrays com os webhooks cadastros.
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

Este método permite a remoção de um webhook específico de sua conta. <a href="#webhooks">Clique aqui</a> para obter mais informações sobre cada webhook da ZenAPI. 

> Definição

```text
DELETE https://voice-app.zenvia.com/webhook/{nome_webhook}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-app.zenvia.com/webhook/chamada_fim'
```
```php
<?php
$response = $client->perfil->excluirWebhook("chamada_fim");
```
```javascript--node
var response = client.perfil.excluirWebhook("chamada_fim");
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

 response, err := client.Webhook.Excluir("chamada_fim")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
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
  "mensagem": "webhook default apagado com sucesso",
  "dados": null
}
```
#### Request
<table class="table-parameters">
    <tbody>
		<tr>
            <td>
                webhook
                <span class="required">string</span>
            </td>
            <td>
                Nome do webhook
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

## Alterar um webhook

> Definição

```text
PUT https://voice-app.zenvia.com/webhook/{nome_webhook}
```

> <br/>Request

```shell--curl
curl 'https://voice-app.zenvia.com/webhook/chamada_fim' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: Seu_Token' \
    -d '{"url" : "www.urlretorno.com.br"}'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');
$response = $client->perfil->salvaWebhook("chamada_fim", "www.urlretorno.com.br");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

client.perfil.salvaWebhook("chamada_fim", "www.urlretorno.com.br")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

response, err := client.Webhook.Salva("chamada_fim", "www.urlretorno.com.br")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'voice-app.zenvia.com')
response = client.perfil.editar_webhook("chamada_fim", "www.urlretorno.com.br")
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
Perfil perfil = new Perfil(client);
JSONObject response = perfil.salvaWebhook("chamada_fim", "www.urlretorno.com.br");
```
```ruby
puts @client.perfil.salva_webhook("chamada_fim", "www.urlretorno.com.br")
```

> <br/>Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "webhook default atualizado com sucesso",
  "dados": null
}
```

Altera as informações de um webhook default, você precisa passar no corpo do request o JSON com a url que vai receber o webhook.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="required">string</span>
            </td>
            <td>
                Nome do webhook que vai ser alterado
             </td>
        </tr>
        <tr>
            <td>
                url
                <span class="required">string</span>
            </td>
            <td>
                Sua URL que vai receber o callback
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
