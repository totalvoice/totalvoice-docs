# APIs de Contas

## Gerenciar Contas

> Gerenciar Contas End Point

```text
https://voice-api.zenvia.com/conta
```

Usando esse recurso, você pode criar, consultar, alterar e deletar contas filhas. As contas filhas são exatamente iguais a qualquer outra conta na Zenvia, se diferenciando apenas por serem vinculadas com uma conta pai que possui o controle sobre ela. 

O intuito é o de realizar integrações e automatizar processos de uso e revenda de serviços da API. 

<aside class="notice">
A funcionalidade de Gerente de Contas é um acesso especial que precisa ser liberado por nossa equipe, caso tenha interesse, entrar em contato por telefone com a equipe de Vendas.
</aside>

### Objeto Conta

> JSON

```json
{
    "id": 3132,
    "nome": "Zenvia Telecom",
    "cpf_cnpj": "00.000.000/0000-00",
    "login": "zenvia@zenvia.com",
    "saldo": 999.99,
    "telefone": "4832830151",
    "access_token": "seu-token",
    "preco_fixo": "0.060",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "zenvia@zenvia.com",
    "nome_fantasia": "Zenvia",
    "conta_ativa": 1,
    "valor_aviso_saldo_baixo": "150.00",
    "metodo_pagamento": "prepago",
    "fatura_atual": 0.00,
}
```

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

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
                <span class="required">Obrigatório</span>
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

### Criar Conta

> Definição

```text
POST https://voice-api.zenvia.com/conta
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta' \
    -X POST \ 
    --header 'Content-Type: application/json' \
    --header 'Access-Token: seu-token' \
    -d '{"nome" : "Zenvia", "login" : "zenvia@zenvia.com", "senha" : "senha123"}'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$conta_dados = array(
    "nome" => "Zenvia", 
    "login" => "zenvia@zenvia.com", 
    "senha" => "senha123"
);
$response = $client->conta->criar($conta_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

var conta_dados = {
    nome: "Zenvia", 
    login: "zenvia@zenvia.com", 
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
conta.Nome = "Zenvia"
conta.Login = "zenvia@zenvia.com"
conta.Senha = "senha123"

response, err := client.Conta.Criar(conta)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.conta.criar_conta("Zenvia", "zenvia@zenvia.com", "senha123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conta conta = new Conta(client);

JSONObject contaDados = new JSONObject();
contaDados.put("nome", "Zenvia");
contaDados.put("login", "zenvia@zenvia.com");
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

Para criar uma conta filha, basta informar o nome da mesma e seguir os campos solicitados abaixo. 


**POST:** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

**REQUEST:**

- **Headers**

1. **Content-Type:** application/json
2. **Authorization:** Access-Token: seu-token

Veja ao lado um exemplo de requisição. Utilize os campos abaixo para informar à nossa API quais informações deseja enviar:

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
                Senha para esta nova conta. (Deve conter 8 caracteres, sendo pelo menos 1 maiúsculo e 1 minúsculo)
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="required">Obrigatório</span>
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

### Buscar Conta 

> Definição

```text
GET https://voice-api.zenvia.com/conta/{id}
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta/3132' \
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
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
        "nome": "Zenvia Telecom",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "zenvia@zenvia.com",
        "saldo": 999.99,
        "telefone": "4832830151",
        "access_token": "seu-token",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "zenvia@zenvia.com",
        "nome_fantasia": "Zenvia",
        "conta_ativa": 1,
        "valor_aviso_saldo_baixo": "150.00",
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00,
    }
}
```

Caso deseje buscar detalhes de uma conta filha, basta realizar uma chamada para obter os dados. Utilize um HTTP GET para o endereço de definição da API. 

**GET** <a href ="https://voice-api.zenvia.com/conta{id}">https://voice-api.zenvia.com/conta{id}</a>

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

### Alterar Conta

> Definição

```text
PUT https://voice-api.zenvia.com/conta/{id}
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta/3132' \
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.conta.editar_conta("Zenvia", "zenvia@zenvia.com", "senha123")
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

Para alterar as informações de uma conta já existente, você precisa passar na URL o ID da conta e no corpo do request o JSON com os campos que serão alterados, conforme os exemplos.

O método de solicitação deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

**PUT** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

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

### Deletar Conta

> Definição

```text
DELETE https://voice-api.zenvia.com/conta/{id}
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta/3132' \
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
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

Para deletar permanentemente uma conta filha, deixando-a indisponível para uma posterior consulta, basta informar o ID da mesma.

Método utilizado: 

**DELETE** <a href ="https://voice-api.zenvia.com/fila/{id}">https://voice-api.zenvia.com/fila/{id}</a>

<aside class="notice">
Atenção ao executar este comando, pois após deletar, a conta filha irá perder todos os acessos à Zenvia. Com isso, o login utilizado ficará indisponível porque não é possível logins duplicados na API.
</aside>

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

### Relatório de Contas 

> Definição

```text
GET https://voice-api.zenvia.com/conta/relatorio
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta/relatorio' \
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
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
        "nome": "Zenvia Telecom",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "zenvia@zenvia.com",
        "saldo": 999.99,
        "telefone": "4832830151",
        "access_token": "testeM68PU1Izmb9chEdLzep7IwRymWO",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "zenvia@zenvia.com",
        "nome_fantasia": "Zenvia",
        "conta_ativa": 1,
        "valor_aviso_saldo_baixo": "150.00",
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00,
      },
      {
        "id": 3132,
        "nome": "Zenvia Telecom",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "zenvia@zenvia.com",
        "saldo": 999.99,
        "telefone": "4832830151",
        "access_token": "testeM68PU1Izmb9chEdLzep7IwRymWO",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "zenvia@zenvia.com",
        "nome_fantasia": "Zenvia",
        "conta_ativa": 1,
        "valor_aviso_saldo_baixo": "150.00",
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00
      }
    ]
  }
}
```

Para consultar os dados da sua conta e retornar um relatório com todas as suas contas filhas, veja ao lado um exemplo de requisição. 

As contas retornadas no relatório vêm ordenadas por data de criação.

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

### Crédito bônus

> Definição

```text
POST https://voice-api.zenvia.com/conta/{id}/bonus
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            -d '{"valor":"100"}' \
            'https://voice-api.zenvia.com/conta/id-conta/bonus'
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

Para adicionar crédito de bônus nas contas criadas, veja ao lado um exemplo de requisição.

<aside class="notice">
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

### Webhooks

A seguir, veja quais métodos de Webhooks estão disponíveis para a API de Gerenciar Contas. 

Caso ainda não tenha configurado nenhum evento no nosso Painel de Voz, recomendamos a leitura desta <a href ="https://www.google.com/url?q=https://docs.google.com/document/d/11vrdKptDA_9Pu17OIA4zOyZsSG7pYz32/edit&sa=D&source=docs&ust=1679666573842562&usg=AOvVaw19vK9Bqn6tfwlETfupklQq">documentação técnica.</a>

### Listar Webhooks 

> Definição

```text
GET https://voice-api.zenvia.com/conta/webhook-default
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/conta/webhook-default'
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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

Este método permite a listagem de todos os webhooks default configurados para suas subcontas (Contas filhas). 

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

### Remover Webhooks 

> Definição

```text
DELETE https://voice-api.zenvia.com/conta/webhook-default/{nome_webhook}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/conta/webhook-default/chamada_fim'
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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

Este método permite a remoção de um webhook default específico. 

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

### Alterar um webhook

> Definição

```text
PUT https://voice-api.zenvia.com/conta/webhook-default/{nome_webhook}
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta/webhook-default/chamada_fim' \
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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

Este método permite alterar as informações de um webhook default. Para isso, antes você precisa passar no corpo do request o JSON com a url que vai receber o webhook.

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

## Minha conta

Usando esse recurso, você pode visualizar seu saldo, monitorar suas contas e suas recargas, editar suas contas e configurar e visualizar seus webhooks.

### Objeto Minha Conta

> <br>

> JSON

```json
{
    "id": 1,
    "nome": "Zenvia Telecom",
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

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

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

### Objeto Resposta - Minha conta

> <br>

> JSON

```json
{
    "id": 1,
    "nome": "Zenvia Telecom",
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

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

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

### Consultar saldo da Conta

> Definição

```text
GET https://voice-api.zenvia.com/saldo
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/saldo'
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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

Caso deseje consultar o saldo disponível em sua conta, basta realizar uma chamada para obter os dados. Utilize um HTTP GET para o endereço de definição da API. 

**GET** <a href ="https://voice-api.zenvia.com/saldo">https://voice-api.zenvia.com/saldo</a>

### Buscar conta

> Definição

```text
GET https://voice-api.zenvia.com/conta/
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-api.zenvia.com/conta'
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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
    "nome": "Zenvia Telecom",
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

Caso deseje buscar a sua conta, basta realizar uma chamada para obter os dados. Utilize um HTTP GET para o endereço de definição da API. 

**GET** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

### Alterar Conta

> Definição

```text
PUT https://voice-api.zenvia.com/conta
```

> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/conta/3132' \
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
response = client.perfil.editar_conta("Zenvia")
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

Para alterar as informações da sua conta principal, você precisa passar no corpo do request o JSON com os campos que serão alterados, conforme os exemplos.

O método de solicitação deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

**PUT** <a href ="https://voice-api.zenvia.com/conta">https://voice-api.zenvia.com/conta</a>

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

### Relatório de Recarga  

> Definição

```text
GET https://voice-api.zenvia.com/conta/recargas
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/conta/recargas'
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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

Para consultar os dados de recarga da sua conta, basta informar o período desejado para que a API retorne os dados.

Veja ao lado um exemplo de requisição. Os campos são:

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

### URL de recarga

> Definição

```text
GET https://voice-api.zenvia.com/conta/urlrecarga
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/conta/urlrecarga?url_retorno=www.urlretorno.com.br'
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

client = Cliente("Seu_Token", 'voice-api.zenvia.com')
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

Para gerar uma URL para recarga de créditos na sua conta, utilize um HTTP GET no endereço de definição da API. 

**GET** <a href ="https://voice-api.zenvia.com/conta/urlrecarga">https://voice-api.zenvia.com/conta/urlrecarga</a>