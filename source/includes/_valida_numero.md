# Valida Número

> Valida Número Endpoint

```text
https://api2.totalvoice.com.br/valida-numero
```

A funcionalidade do valida número é checar se o número fornecido existe ou se é um número inválido.

## Objeto Valida Número


> JSON

```json
{
    "id": 432,
    "numero_destino": "554811111111",
    "data_criacao": "2018-08-02T10:49:30-03:00",
    "preco": 0.1,
    "valido": true,
    "finalizado": true
}
```

Definição do objeto Valida Número

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro do valida número.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino 
                <span class="attribute">string</span>
            </td>
            <td>
                Número a ser validado.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de criação do registro do valida número. Data e Hora no formato UTC.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
               Valor cobrado no processo de validação do número.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status da chamada realizada.
            </td>
        </tr>
        <tr>
            <td>
                valido
                <span class="attribute">boolean</span>
            </td>
            <td>
                Resultado do teste de validação do número.
            </td>
        </tr>
        <tr>
            <td>
                finalizado
                <span class="attribute">boolean</span>
            </td>
            <td>
                Status do processo. 
                <ul>
                    <li>true - Finalizado </li>
                    <li>false - Processo de validação em andamento </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Criar um Valida Número

> Definição

```text
POST https://api2.totalvoice.com.br/valida_numero
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"554811111111"}' \
             'https://api2.totalvoice.com.br/valida_numero'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');
$response = $client->valida_numero->criar('554811111111');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

client.validanumero.criar("554811111111")
    .then(function(data) {  
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")
 response, err := client.ValidaNumero.Criar("554811111111")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
response = client.valida_numero.criar("554811111111")
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
ValidaNumero validaNumero = new ValidaNumero(client);

JSONObject response = validaNumero.validaNumero("554811111111")
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("Seu_Token")
puts @client.valida_numero.criar("554811111111")
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "validação criada com sucessoo",
    "dados": {
        "id": 4921
    }
}
```
Basta informar o número de destino a ser validado.

Assim que um registro é criado ele é imediatamente processado, ao término do processo um <a href="#webhook-valida-numero">Webhook</a> é disparado para a url cadastrada enviando um objeto <a href="#objeto-valida-numero">Valida Número</a>.

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número que será validado.
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
                Retorna o ID do registro valida-numero
             </td>
        </tr>
    </tbody>
</table>

## Buscar Valida Número

> Definição

```text
GET https://api2.totalvoice.com.br/valida_numero/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api2.totalvoice.com.br/valida_numero/123'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');
$response = $client->valida_numero->buscar(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

client.validaNumero.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")
 response, err := client.ValidaNumero.Buscar(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
response = client.valida_numero.get_valida_numero(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
ValidaNumero validaNumero = new ValidaNumero(client);

JSONObject response = validaNumero.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.valida_numero.buscar(123)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 432,
    "numero_destino": "554811111111",
    "data_criacao": "2018-08-02T10:49:30-03:00",
    "preco": 0.1,
    "valido": true,
    "finalizado": true
  }
}
```

Após a criação de um Valida Número, você poderá realizar a busca do registro pelo seu ID.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do registo valida número para recuperar os dados
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
                Retorna o objeto <a href="#objeto-valida-numero">valida número</a>
             </td>
        </tr>
    </tbody>
</table>

## Relatório Valida Número

> Definição

```text
GET https://api2.totalvoice.com.br/valida_numero/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api2.totalvoice.com.br/valida_numero/realatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');
$response = $client->valida_numero->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

client.validanumero.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")
response, err := client.ValidaNumero.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
response = client.valida_numero.get_relatorio(data_inicio, data_fim)
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");

ValidaNumero validaNumero = new ValidaNumeo(client);
JSONObject response = validaNumero.relatorio(dataInicial, dataFinal);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("Seu_Token")
puts @client.valida_numero.relatorio(data_inicial, data_final)
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
            "id": 432,
            "numero_destino": "554811111111",
            "data_criacao": "2018-08-02T10:49:30-03:00",
            "preco": 0.1,
            "valido": true,
            "finalizado": true
        },
        {
            "id": 433,
            "numero_destino": "554822222222",
            "data_criacao": "2018-08-02T10:49:30-03:00",
            "preco": 0.1,
            "valido": true,
            "finalizado": false
        }
    ]
  }
}
```

Você pode consultar o relatório de valida números. Basta informar o período desejado para que a API retorne os dados.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_inicio
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Data inicial para consulta dos dados no relatório
            </td>
        </tr>
        <tr>
            <td>
                data_fim
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Data final para consulta dos dados no relatório
            </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="required">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.            
            </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="required">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Quantidade de chamadas a retornar na consulta. O limite padrão é 100 e o máximo é 200.
            </td>
        </tr> 
    </tbody>
</table>

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-valida-numero">valida número</a>
             </td>
        </tr>
    </tbody>
</table>
