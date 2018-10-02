# Áudio

> Fila Endpoint

```text
https://api.totalvoice.com.br/fila
```

A funcionalidade de filas permite a automatização e manipulação de filas de atendimentos

## Objeto Fila

> <br>

> JSON

```json
{
    "id": 432,
    "nome": "Suporte",
    "chamadas": 0,
    "completado": 0,
    "cancelado": 0,
    "tempo_falado": "00:00:00",
    "tempo_espera": "00:00:00",
    "ramais": [
      {
         "id": 17,
         "nome": "Teste Atendimento",
         "ramal": "4000",
         "login": "ramal@empresa.com.br",
         "prioridade": "0",
         "qtd_ligacao_atendida": "0",
         "ultima_chamada": "0",
         "em_ligacao": false,
         "status": "indisponivel",
         "em_pausa": false,
         "razao_pausa": "",
         "bina": null,
         "tempo_status": "04:38:36"     
      }
    ]
}
```

Definição do objeto Fila

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro da Fila.
             </td>
        </tr>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da fila.
            </td>
        </tr>
        <tr>
            <td>
                chamadas
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de chamadas da fila.
            </td>
        </tr>
        <tr>
            <td>
                completado
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de chamadas completadas.
            </td>
        </tr>
        <tr>
            <td>
                cancelado
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de chamadas canceladas.
            </td>
        </tr>
        <tr>
            <td>
                tempo_falado
                <span class="attribute">string</span>
            </td>
            <td>
                Total de tempo falado da fila.
            </td>
        </tr>
        <tr>
            <td>
                tempo_espera
                <span class="attribute">string</span>
            </td>
            <td>
                Total de tempo de ramais em espera na fila.
            </td>
        </tr>
        <tr>
            <td>
                ramais
                <span class="attribute">array</span>
            </td>
            <td>
                Lista de ramais pertencentes a fila
            </td>
        </tr>
    </tbody>
</table>

## Criar uma fila

> Definição

```text
POST https://api.totalvoice.com.br/fila
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"nome":"Suporte","estrategia_ring":"Multiplo", "timeout_ring": "60"}' \
             'https://api.totalvoice.com.br/fila'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->fila->criar('Suporte', 'Multiplo', '60');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.enviar("Suporte", "Multiplo", "60")
    .then(function(data) {  
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Fila.Criar("Suporte", "Multiplo", 60)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.fila.criar("Suporte", "Multiplo", "60")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Fila fila = new Fila(client);

JSONObject response = fila.enviar("Suporte", "Multiplo")
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.fila.criar("Suporte", "Multiplo", "60")
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "fila criada com sucesso",
    "dados": {
        "id": 4921
    }
}
```
Basta informar o nome da fila e a estratégia de ring.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nome da fila a ser criada.
             </td>
        </tr>
        <tr>
            <td>
                estrategia_ring
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Distribuidor = Toca um ramal por vez ou Multiplo = Toca todos ramais ao mesmo tempo
            </td>
        </tr>
        <tr>
            <td>
                timeout_ring
                <span class="optional">Opcional</span>
            </td>
            <td>
                Segundos que vai ficar tocando na fila
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
                Retorna o ID da Fila
             </td>
        </tr>
    </tbody>
</table>

## Buscar fila

> Definição

```text
GET https://api.totalvoice.com.br/fila/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/fila/1'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->fila->buscar(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Fila.Buscar(123)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.fila.get_fila(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Fila fila = new Fila(client);

JSONObject response = fila.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.fila.buscar(123)
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
    "nome": "Suporte",
    "chamadas": 0,
    "completado": 0,
    "cancelado": 0,
    "tempo_falado": "00:00:00",
    "tempo_espera": "00:00:00",
    "ramais": [
      {
        "id": 17,
        "nome": "Teste Atendimento",
        "ramal": "4000",
        "login": "ramal@empresa.com.br",
        "prioridade": "0",
        "qtd_ligacao_atendida": "0",
        "ultima_chamada": "0",
        "em_ligacao": false,
        "status": "indisponivel",
        "em_pausa": false,
        "razao_pausa": "",
        "bina": null,
        "tempo_status": "04:38:36"
      }
    ]
  }
}
```

Após a criação de uma fila, você poderá realizar a busca do registro pelo seu ID.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da Fila para recuperar os dados
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
                Retorna o objeto <a href="#objeto-fila">fila</a>
             </td>
        </tr>
    </tbody>
</table>

## Editar fila

> Definição

```text
PUT https://api.totalvoice.com.br/fila/{id}
```

> Request

```shell--curl
curl 'https://api.totalvoice.com.br/fila/1' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
    -d '{"nome":"Suporte","estrategia_ring":"Multiplo", "timeout_ring": "60"}'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->fila->atualizarFila("Suporte", "Multiplo", "60");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.atualizarFila("Suporte", "Multiplo", "60")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Fila.Atualizar("Suporte", "Multiplo", "60")
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.fila.editar("Suporte", "Multiplo", "60")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Fila fila = new Fila(client);

JSONObject response = fila.atualizar("Suporte", "Multiplo");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.fila.atualizar("Suporte", "Multiplo", "60")
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

Altera as informações da sua fila.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo nome da fila.
             </td>
        </tr>
        <tr>
            <td>
                estrategia_ring
                <span class="optional">Opcional</span>
            </td>
            <td>
                Distribuidor = Toca um ramal por vez ou Multiplo = Toca todos ramais ao mesmo tempo.
            </td>
        </tr>
        <tr>
            <td>
                timeout_ring
                <span class="optional">Opcional</span>
            </td>
            <td>
                Segundos que vai ficar tocando na fila
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

## Adicionar um ramal na fila

> Definição

```text
POST https://api.totalvoice.com.br/fila/{id}
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"ramal_id":"111"}' \
             'https://api.totalvoice.com.br/fila/123'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->fila->addRamal("ID_FILA", "RAMAL_ID");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.addRamal("ID_FILA", "RAMAL_ID")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Fila.AdicionarRamalFila("ID_FILA", "RAMAL_ID");
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.fila.add_ramal("ID_FILA", "RAMAL_ID")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Fila fila = new Fila(client);

JSONObject response = fila.adicionaRamalFila("ID_FILA", "RAMAL_ID");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.fila.adiciona_ramal("ID_FILA", "RAMAL_ID")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Ramal adicionado com sucesso na fila",
  "dados": {
    "id": 4921
  }
}
```
Basta informar o id da fila e por parâmetro o id do ramal.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ramal_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do ramal para ser adicionado
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

## Deletar um ramal da fila

> Definição

```text
DELETE https://api.totalvoice.com.br/fila/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/fila/111/111'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->fila->excluirRamalFila("ID_FILA", "RAMAL_ID");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.excluirRamalFila("ID_FILA", "RAMAL_ID")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Fila.ExcluirRamalFila("ID_FILA", "RAMAL_ID")
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.fila.deleta_ramal("ID_FILA", "RAMAL_ID")
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.fila.excluir_ramal("ID_FILA", "RAMAL_ID")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Ramal removido da fila com sucesso"
}
```
Basta informar o id da fila e por parâmetro o id do ramal para ser removido.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ramal_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do ramal para ser removido
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

## Busca um ramal da fila

> Definição

```text
GET https://api.totalvoice.com.br/fila/{id}/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/fila/1/1'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->fila->buscarFilaRamal("ID_FILA", "RAMAL_ID")
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.buscarRamalFila("ID_FILA", "RAMAL_ID")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Fila.BuscarRamalFila("ID_FILA", "RAMAL_ID")
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.fila.get_fila_ramal("ID_FILA", "RAMAL_ID")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Fila fila = new Fila(client);

JSONObject response = fila.buscar("ID_FILA", "RAMAL_ID");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.fila.buscar_ramal("ID_FILA", "RAMAL_ID")
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
    "nome": "Suporte",
    "chamadas": 0,
    "completado": 0,
    "cancelado": 0,
    "tempo_falado": "00:00:00",
    "tempo_espera": "00:00:00",
    "ramais": [
      {
        "id": 17,
        "nome": "Teste Atendimento",
        "ramal": "4000",
        "login": "ramal@empresa.com.br",
        "prioridade": "0",
        "qtd_ligacao_atendida": "0",
        "ultima_chamada": "0",
        "em_ligacao": false,
        "status": "indisponivel",
        "em_pausa": false,
        "razao_pausa": "",
        "bina": null,
        "tempo_status": "04:38:36"
      }
    ]
  }
}
```
Basta informar o id da fila e o id do ramal.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da fila.
             </td>
        </tr>
        <tr>
            <td>
                ramal_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do ramal.
             </td>
        </tr>        
    </tbody>
</table>
