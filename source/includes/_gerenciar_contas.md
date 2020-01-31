# Gerenciar Contas

> Gerenciar Contas End Point

```text
https://api.totalvoice.com.br/conta
```
Com a funcionalidade de Gerente de Contas você pode criar, consultar, alterar e deletar contas filhas, sendo as contas filhas exatamente iguais a qualquer outra conta na TotalVoice,
apenas são vinculadas com uma conta pai que tem o controle sobre ela, tendo o intuito de realizar integrações e automatizar processos de uso e revenda de serviços da API.

<aside class="warning">
A funcionalidade de Gerente de Contas é um acesso especial que precisa ser liberado por nossa equipe, caso tenha interesse, entrar em contato por telefone com a equipe de Vendas.
</aside>

## Objeto Conta

> JSON

```json
{
    "id": 3132,
    "nome": "Total Voice Telecom",
    "cpf_cnpj": "00.000.000/0000-00",
    "login": "totalvoice@totalvoice.com.br",
    "saldo": 999.99,
    "telefone": "4832830151",
    "access_token": "seu-token",
    "preco_fixo": "0.060",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "totalvoice@totalvoice.com.br",
    "nome_fantasia": "Total Voice",
    "conta_ativa": 1,
    "valor_aviso_saldo_baixo": "150.00",
    "metodo_pagamento": "prepago",
    "fatura_atual": 0.00,
}
```

Definição do objeto Conta

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único da Conta.
             </td>
        </tr>
        <tr>
            <td>
                login
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Login para a nova conta, precisa ser um endereço de e-mail válido.
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="optional">Opcional</span>
            </td>
            <td>
                CPF ou CNPJ desta conta, para fim de identificação e integração.
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="optional">Opcional</span>
            </td>
            <td>
                Número de telefone de contato desta conta, precisa ser um número de telefone válido.
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas a números fixos, deve ser maior ou igual ao da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas a números móveis deve ser maior ou igual ao da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamada entre Ramais dentro dela mesma deve ser maior ou igual ao valor da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                email_financeiro
                <span class="optional">Opcional</span>
            </td>
            <td>
                E-mail de contato para assuntos financeiros da nova conta, por padrão vem o e-mail da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="optional">Opcional</span>
            </td>
            <td>
                Nome fantasia desta conta que será utilizado para exibição.
            </td>
        </tr>
        <tr>
            <td>
                valor_aviso_saldo_baixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                É necessário sem um valor inteiro, ex: 100 .Quando o saldo de créditos atingir ou ficar abaixo do valor determinado, você receberá um aviso no email do email_financeiro(caso este não tenha sido cadastrado você receberá no e-mail de login
            </td>
        </tr>
    </tbody>
</table>

## Criar Conta

> Definição

```text
POST https://api.totalvoice.com.br/conta
```

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/conta' \
    -X POST \ 
    --header 'Content-Type: application/json' \
    --header 'Access-Token: seu-token' \
    -d '{"nome" : "Total Voice", "login" : "totalvoice@totalvoice.com.br", "senha" : "senha123"}'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$conta_dados = array(
    "nome" => "Total Voice", 
    "login" => "totalvoice@totalvoice.com.br", 
    "senha" => "senha123"
);
$response = $client->conta->criar($conta_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

var conta_dados = {
    nome: "Total Voice", 
    login: "totalvoice@totalvoice.com.br", 
    senha: "senha123"
};

client.conta.criar(conta_dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")

conta = new(Conta)
conta.Nome = "Total Voice"
conta.Login = "totalvoice@totalvoice.com.br"
conta.Senha = "senha123"

response, err := client.Conta.Criar(conta)
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.conta.criar_conta("Total Voice", "totalvoice@totalvoice.com.br", "senha123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conta conta = new Conta(client);

JSONObject contaDados = new JSONObject();
contaDados.put("nome", "Total Voice");
contaDados.put("login", "totalvoice@totalvoice.com.br");
contaDados.put("senha", "senha123");

JSONObject response = conta.criar(contaDados);
```

> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "conta criada com sucesso",
    "dados": {
        "id": 3132,
        "access_token": "seu-token"
    }
}
```

Cria uma nova conta filha.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nome para a nova conta filha.
             </td>
        </tr>
        <tr>
            <td>
                login
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Login para a nova conta, precisa ser um endereço de e-mail válido.
            </td>
        </tr>
        <tr>
            <td>
                senha
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Senha para esta nova conta, deve ter mais que 6 caracteres.
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="optional">Opcional</span>
            </td>
            <td>
                CPF ou CNPJ desta conta, para fim de identificação e integração.
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="optional">Opcional</span>
            </td>
            <td>
                Número de telefone de contato desta conta, precisa ser um número de telefone válido.
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas a números fixos, deve ser maior ou igual ao da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas a números móveis deve ser maior ou igual ao da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamada entre Ramais dentro dela mesma deve ser maior ou igual ao valor da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                email_financeiro
                <span class="optional">Opcional</span>
            </td>
            <td>
                E-mail de contato para assuntos financeiros da nova conta, por padrão vem o e-mail da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="optional">Opcional</span>
            </td>
            <td>
                Nome fantasia desta conta que será utilizado para exibição.
            </td>
        </tr>
        <tr>
            <td>
                valor_aviso_saldo_baixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                É necessário sem um valor inteiro, ex: 100 .Quando o saldo de créditos atingir ou ficar abaixo do valor determinado, você receberá um aviso no email do email_financeiro(caso este não tenha sido cadastrado você receberá no e-mail de login
            </td>
        </tr>
    </tbody>
</table>

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único da conta criada.
             </td>
        </tr>
        <tr>
            <td>
                access_token
                <span class="attribute">string</span>
            </td>
            <td>
                Token que deverá ser utilizado por esta nova conta para acessar os serviços da API.
             </td>
        </tr>
    </tbody>
</table>

## Buscar Conta

> Definição

```text
GET https://api.totalvoice.com.br/conta/{id}
```

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/conta/3132' \
    -X GET \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: seu-token' 
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->conta->buscaConta(3132);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.conta.buscar(3132)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Conta.Buscar(3132)
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.conta.get_by_id(3132)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conta conta = new Conta(client);

JSONObject response = conta.buscar(3132);
```

> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "dados retornados com sucesso",
    "dados": {
        "id": 3132,
        "nome": "Total Voice Telecom",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "totalvoice@totalvoice.com.br",
        "saldo": 999.99,
        "telefone": "4832830151",
        "access_token": "seu-token",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "totalvoice@totalvoice.com.br",
        "nome_fantasia": "Total Voice",
        "conta_ativa": 1,
        "valor_aviso_saldo_baixo": "150.00",
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00,
    }
}
```

> <br/><br/><br/>

Busca os detalhes de uma conta filha.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Identificador único da conta filha que você deseja buscar.
             </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o objeto <a href="#objeto-conta">Conta</a>
             </td>
        </tr>
    </tbody>
</table>

## Alterar Conta 

> Definição

```text
PUT https://api.totalvoice.com.br/conta/{id}
```

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/conta/3132' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: seu-token' \
    -d '{"senha" : "senha123456"}'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$conta_dados = array("senha" => "senha123456");
$response = $client->conta->atualizar(3132, $conta_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

var conta_dados = {
    senha: "senha123456"
};
client.conta.atualizar(3132, conta_dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")

conta = new(Conta)
conta.senha = "senha123"

response, err := client.Conta.Atualizar(conta)
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.conta.editar_conta("Total Voice", "totalvoice@totalvoice.com.br", "senha123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conta conta = new Conta(client);

JSONObject contaDados = new JSONObject();
contaDados.put("id", 3132);
contaDados.put("senha", "senha123");

JSONObject response = conta.atualizar(contaDados);
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

Altera as informações de uma conta já existente, você precisa passar na URL o ID da conta e no corpo do request o JSON com os campos que serão alterados, conforme os exemplos.

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
                O valor que será cobrado desta conta para chamadas destinadas a números fixos, deve ser maior ou igual ao da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas a números móveis deve ser maior ou igual ao da conta pai.
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
        <tr>
            <td>
                valor_aviso_saldo_baixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                É necessário sem um valor inteiro, ex: 100 .Quando o saldo de créditos atingir ou ficar abaixo do valor determinado, você receberá um aviso no email do email_financeiro(caso este não tenha sido cadastrado você receberá no e-mail de login
            </td>
        </tr>
    </tbody>
</table>

#### Response
<br/>
Retorna o objeto <a href="#respostas-da-api">resposta padrão</a> da API com sucesso ou falha.

## Deletar Conta

> Definição

```text
DELETE https://api.totalvoice.com.br/conta/{id}
```

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/conta/3132' \
    -X DELETE \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: seu-token' \
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->conta->excluir(3132);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.conta.excluir(3132)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Conta.Excluir(3132)
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.conta.deletar(3132)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conta conta = new Conta(client);

JSONObject response = conta.excluir(3132);
```

> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "Conta Removida com sucesso.",
    "dados": null
}
```

> <br/><br/><br/>

Deleta permanentemente uma conta filha, ficando indisponível para uma posterior consulta, 
tome muito cuidado ao executar este comando, após deletada, a conta filha irá perder todos os acessos à TotalVoice, 
com isso o login utilizdo ficará disponível (pois não é possível logins duplicados na API).

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Identificador único da conta filha que você deseja deletar.
             </td>
        </tr>
    </tbody>
</table>

#### Response
<br/>
Retorna o objeto <a href="#respostas-da-api">resposta padrão</a> da API com sucesso ou falha.

## Relatório de Contas

> Definição

```text
GET https://api.totalvoice.com.br/conta/relatorio
```

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/conta/relatorio' \
    -X GET \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: seu-token' 
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->conta->relatorio();
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.conta.relatorio()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Conta.Relatorio.Gerar()
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.conta.get_relatorio()
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conta conta = new Conta(client);

JSONObject response = conta.relatorio();
```

> <br/>Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "relatorio": [
      {
        "id": 3132,
        "nome": "Total Voice Telecom",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "totalvoice@totalvoice.com.br",
        "saldo": 999.99,
        "telefone": "4832830151",
        "access_token": "testeM68PU1Izmb9chEdLzep7IwRymWO",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "totalvoice@totalvoice.com.br",
        "nome_fantasia": "Total Voice",
        "conta_ativa": 1,
        "valor_aviso_saldo_baixo": "150.00",
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00,
      },
      {
        "id": 3132,
        "nome": "Total Voice Telecom",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "totalvoice@totalvoice.com.br",
        "saldo": 999.99,
        "telefone": "4832830151",
        "access_token": "testeM68PU1Izmb9chEdLzep7IwRymWO",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "totalvoice@totalvoice.com.br",
        "nome_fantasia": "Total Voice",
        "conta_ativa": 1,
        "valor_aviso_saldo_baixo": "150.00",
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00
      }
    ]
  }
}
```

> <br/><br/><br/>

Retorna um relatório com todas as suas contas filhas. As contas retornadas no relatório vem ordenadas por data de criação.

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-conta">conta</a>
             </td>
        </tr>
    </tbody>
</table>

<br/>
<br/>

## Crédito bônus

> Definição

```text
POST https://api2.totalvoice.com.br/conta/{id}/bonus
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            -d '{"valor":"100"}' \
            'https://api2.totalvoice.com.br/conta/id-conta/bonus'
```
```php
Em Contrução
```
```javascript--node
Em Contrução
```
```go
Em Contrução
```
```python
Em Contrução
```
```java
Em Contrução
```
```ruby
Em Contrução
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "valor adicionado com sucesso"
}
```

Permite adicionar crédito de bônus nas contas criadas por mim.
<br>
<br>
<aside class="warning">
A funcionalidade de Crédito de Bônus é um limite especial configurado em sua conta gerente, que precisa ser liberado por nossa equipe, caso tenha interesse, entre em contato
</aside>
#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da conta que vai receber os creditos
            </td>
        </tr>
        <tr>
            <td>
                valor
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Valor que será adicionado como crédito bônus na conta
            </td>
        </tr>
    </tbody>
</table>


<br/>
<br/>


## Listar Webhooks

Este método permite a listagem de todos os webhooks default configurados para suas subcontas(Contas filhas). <a href="#webhooks">Clique aqui</a> para obter mais informações sobre cada webhook da TotalVoice. 

> Definição

```text
GET https://api2.totalvoice.com.br/conta/webhook-default
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api2.totalvoice.com.br/conta/webhook-default'
```
```php
<?php
$response = $client->conta->webhooksDefault();
```
```javascript--node
var response = client.conta.webhooksDefault()
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")
response, err := client.WebhookDefault.Listar();
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
response = client.conta.get_webhook_default()
```
```java
Conta conta = new Conta(client);
JSONObject response = conta.webhookDefault()
```
```ruby
puts @client.conta.webhooks_default()
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
                Retorna dentro de dados um arrays com os webhooks default cadastros.
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

Este método permite a remoção de um webhook default específico.<a href="#webhooks">Clique aqui</a> para obter mais informações sobre cada webhook da TotalVoice. 

> Definição

```text
DELETE https://api2.totalvoice.com.br/conta/webhook-default/{nome_webhook}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api2.totalvoice.com.br/conta/webhook-default/chamada_fim'
```
```php
<?php
$response = $client->conta->excluirWebhookDefault("nome");
```
```javascript--node
var response = client.conta.excluirWebhookDefault("nome")
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")
response, err := client.WebhookDefault.Excluir("nome")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
client.conta.delete_webhook_default("nome")
```
```java
Conta conta = new Conta(client);
JSONObject response = conta.excluirWebhookDefault("nome");
```
```ruby
puts @client.conta.excluir_webhook_default("nome")
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
PUT https://api2.totalvoice.com.br/conta/webhook-default/{nome_webhook}
```

> <br/>Request

```shell--curl
curl 'https://api2.totalvoice.com.br/conta/webhook-default/chamada_fim' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: Seu_Token' \
    -d '{"url" : "www.urlretorno.com.br"}'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');
$response = $client->conta->salvaWebhookDefault("nome","url")
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

client.conta.salvaWebhookDefault("nome","url")
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")
response, err := client.WebhookDefault.Salvar("nome","url");
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
response = client.conta.edit_webhook_default("nome","url")
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
Conta conta = new Conta(client);
JSONObject response = conta.salvarWebhookDefault("nome","url");
```
```ruby
puts @client.conta.salvar_webhook_default("nome","url")
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