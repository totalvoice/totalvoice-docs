# DIDs

## Objeto DID

> Did Endpoint

```text
https://api.totalvoice.com.br/did
```

> JSON

```json 
    {
    "id": 4844577,
    "cidade": "Rio de Janeiro",
    "estado": "RJ",
    "numero": "552120182293"
    }
```

Definição do objeto Áudio

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do DID(Número receptivo)
             </td>
        </tr>
        <tr>
            <td>
                cidade
                <span class="attribute">string</span>
            </td>
            <td>
                Cidade do número de telefone(DID)
            </td>
        </tr>
        <tr>
            <td>
                estado
                <span class="attribute">string</span>
            </td>
            <td>
                Estado/Região do DID
            </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="attribute">datetime</span>
            </td>
            <td>
                Número completo do DID
            </td>
        </tr>
    </tbody>
</table>
<br>

A funcionalidade **DID** (Número de telefone para recebimento de chamadas) permite que você gerencie, adquire ou remova um DID da sua Conta. Também será possível extrair relatórios dos DIDs adquiridos e das chamadas recebidas por um número específico da sua Conta.

## Consulta DIDs

Lista todos os DIDs da sua conta

> Did Endpoint

```text
https://api.totalvoice.com.br/did
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://api2.totalvoice.com.br/did'
```
```php
<?php
Em construção
```
```javascript--node
Em construção
```
```go
Em construção
```
```python
Em construção
```
```java
Em construção
```
```ruby
Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "dids": [
      {
        "id": 123454,
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "numero": "552120128207"
      }
    ]
  }
}
```

##### Request

Não precisa passar nenhum parâmetro.

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-did">DID</a>
             </td>
        </tr>
    </tbody>
</table>

## Atualizar DID

> Definição

```text
PUT https://api2.totalvoice.com.br/did/{id}
```

> Request

```shell--curl
curl -X PUT --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"ura_id":"4321789"}' \
             'https://api2.totalvoice.com.br/did/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

Em construção
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados atualizados com sucesso",
  "dados": null
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Id do ramal que será modificado(O id é passado na URL do endpoint) 
                </td>
        </tr>
        <tr>
            <td>
                ura_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da URA, a qual irá atender a ligação no momento em que o número receber uma ligação.¹
            </td>
        </tr>
        <tr>
            <td>
                ramal_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal, o qual irá atender a ligação no momento em que o número receber uma ligação.¹
            </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                status
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o status da requisição</a>
             </td>
        </tr>
    </tbody>
</table>



Importante¹: Você só pode passar uma das opções, ou uma ura_id ou um ramal_id.

> Definição

```text
DELETE https://api2.totalvoice.com.br/did/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://api2.totalvoice.com.br/did/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

Em construção
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Did Removido com sucesso",
  "dados": null
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do DID
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
                 Retorna o status da requisição
             </td>
        </tr>
    </tbody>
</table>


## Estoque de DIDs

Consulta todos os DIDs disponíveis para serem comprados. 

<b>Nota:</b> Para adquirir um DID você deve ter o cartão de crédito cadastrado na plataforma.

> Did Endpoint

```text
https://api.totalvoice.com.br/did/estoque
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://api2.totalvoice.com.br/did/estoque'
```
```php
<?php
Em construção
```
```javascript--node
Em construção
```
```go
Em construção
```
```python
Em construção
```
```java
Em construção
```
```ruby
Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "dids": [
      {
        "id": 12341,
        "cidade": "SAO PAULO",
        "estado": "SP",
        "numero": "5511203729395"
      },
      {
        "id": 12341,
        "cidade": "Campinas",
        "estado": "SP",
        "numero": "5519350128096"
      }
    ]
  }
}
```

##### Request

Não precisa passar nenhum parâmetro.

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-did">DIDs</a> disponíveis.
             </td>
        </tr>
    </tbody>
</table>

## Comprar DID

Para adquirir um DID você deve ter um cartão de crédito cadastrado na plataforma.

> Did Endpoint

```text
https://api.totalvoice.com.br/did/
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            d '{"did_id":"123"}' \
            --header 'Access-Token: seu-token' 'https://api2.totalvoice.com.br/did/'
```
```php
Em construção
```
```javascript--node
Em construção
```
```go
Em construção
```
```python
Em construção
```
```java
Em construção
```
```ruby
Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "dids": [
      {
        "id": 12341,
        "cidade": "SAO PAULO",
        "estado": "SP",
        "numero": "5511203729395"
      },
      {
        "id": 12341,
        "cidade": "Campinas",
        "estado": "SP",
        "numero": "5519350128096"
      }
    ]
  }
}
```

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                did_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Id do DID que será comprado
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
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o id do DID adquirido.
             </td>
        </tr>
    </tbody>
</table>

## Objeto Chamada DID

> Chamada Recebidas Endpoint

```text
https://api.totalvoice.com.br/did/chamada/{id}
```

> <br>

> JSON

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 21344543,
    "ativa": false,
    "url_gravacao": "https://api.evoline.com.br/rec/sua-gravacao.mp3",
    "data_inicio": "2019-07-10T09:45:49-03:00",
    "numero_destino": "552120182097",
    "numero_origem": "4831810323",
    "status": "sem resposta",
    "duracao_segundos": 18,
    "tags": null,
    "duracao": "00:00:18",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "ramal_id": 34484,
    "ramal": "2000",
    "gravacoes_parciais": []
  }
}
```
Definição do objeto Chamada DID

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro da chamada.
             </td>
        </tr>
        <tr>
            <td>
                ativa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Identifica se a chamada está ativa ou não
             </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                URL com áudio da gravação da chamada
             </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de início do registro da chamada. Data e Hora no formato UTC
            </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número de destino da ligação
             </td>
        </tr>
        <tr>
            <td>
                numero_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número que originou a ligação.
             </td>
        </tr>
        <tr>
             <td>
                 status
                 <span class="attribute">string</span>
             </td>
             <td>
                 Status da ligação na Origem/Destino:
                 <ul>
                     <li>atendida</li>
                     <li>sem resposta</li>
                     <li>ocupado</li>
                     <li>congestionado</li>
                     <li>falha</li>
                     <li>cancelada</li>
                     <li>não existe</li>
                 </ul>
             </td>
        </tr>
         <tr>
             <td>
                 duracao_segundos
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração em segundos (inteiro) do total da chamada desde o início do processamento
             </td>
         </tr>
         <tr>
             <td>
                 duracao
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração total da chamada desde o início do processamento
             </td>
         </tr>
         <tr>
             <td>
                 duracao_cobrada_segundos
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração em segundos para fins de cobrança
             </td>
         </tr>
         <tr>
             <td>
                 duracao_cobrada
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração considerada para fins de cobrança
             </td>
         </tr>
                 <tr>
             <td>
                 duracao_falada_segundos
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração em segundos da chamada desde que o destino atendeu
             </td>
         </tr>
         <tr>
             <td>
                 duracao_falada
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração da chamada desde que o destino atendeu
             </td>
         </tr>
         <tr>
             <td>
                 preco
                 <span class="attribute">float</span>
             </td>
             <td>
                 Valor cobrado pela chamada
             </td>
         </tr>
         <tr>
              <td>
                  ramal_id
                  <span class="attribute">integer</span>
              </td>
              <td>
                  ID do ramal vinculado ao DID
              </td>
          </tr>
    </tbody>
</table>

<br>
<br>

## Buscar uma chamada recebida

> Definição

```text
GET https://api.totalvoice.com.br/did/chamada/{id-chamada}
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
            'https://api.totalvoice.com.br/did/chamada/{id-chamada}'
```
```php
Em Construção
```
```javascript--node
Em Construção
```
```go
Em Construção
```
```python
Em Construção
```
```java
Em Construção
```
```ruby
Em Construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Você pode consultar as Chamadas recebidas por um DID. Basta informar o período desejado e o ID do DID para que a API retorne os dados.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada recebida a ser consultada
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
                <span class="attribute">object</span>
            </td>
            <td>
                Dados da chamada recebida.
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

## Relatório chamadas recebidas por DID

> Definição

```text
GET https://api.totalvoice.com.br/did/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
            'https://api.totalvoice.com.br/did/1/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->did->relatorioChamadas($id, $dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.did.relatorioChamadas(id, dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
response, err := client.DID.RelatorioChamadas.Gerar(id, dataInicial, dataFinal, filtros)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.did.get_relatorio_chamadas(id, data_inicio, data_fim, filtros)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Did did = new Did(client);
JSONObject response = did.relatorioChamadas(id, dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.did.relatorioChamadas(id, data_inicial, data_final, filtros)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Você pode consultar as Chamadas recebidas por um DID. Basta informar o período desejado e o ID do DID para que a API retorne os dados.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do DID que será consultado
            </td>
        </tr>
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
                origem
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de origem para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de destino para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
            </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="optional">Opcional</span>
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
                total
                <span class="attribute">integer</span>
            </td>
            <td>
                Retorna a quantidade total de registros
             </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="attribute">integer</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
             </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="attribute">integer</span>
            </td>
            <td>
                Quantidade de chamadas que retornou na consulta.
             </td>
        </tr>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-chamada-did">chamada DID</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

## Relatório de todas as chamadas

> Definição

```text
GET https://api.totalvoice.com.br/did/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
            'https://api.totalvoice.com.br/did/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->did->relatorioChamadas($dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.did.relatorioChamadas(dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
response, err := client.DID.RelatorioChamadas.Gerar(dataInicial, dataFinal, filtros)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.did.get_relatorio_chamadas(data_inicio, data_fim, filtros)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Did did = new Did(client);
JSONObject response = did.relatorioChamadas(dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.did.relatorioChamadas(data_inicial, data_final, filtros)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Você pode consultar as Chamadas recebidas por todos DIDs. Basta informar o período desejado para que a API retorne os dados.

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
                origem
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de origem para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de destino para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
            </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="optional">Opcional</span>
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
                total
                <span class="attribute">integer</span>
            </td>
            <td>
                Retorna a quantidade total de registros
             </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="attribute">integer</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
             </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="attribute">integer</span>
            </td>
            <td>
                Quantidade de chamadas que retornou na consulta.
             </td>
        </tr>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-chamada-did">chamada DID</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>