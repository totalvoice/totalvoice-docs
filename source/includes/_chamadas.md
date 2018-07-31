# Chamadas

> Chamada Endpoint

```text
https://api.totalvoice.com.br/chamada
```

A funcionalidade **Chamada** permite que você crie chamadas perna A e perna B, podendo gravar as ligações, agendar, binar o seu próprio número.
Permite gerar relatório de chamadas, derrubar chamadas em andamento, transferir chamadas, avaliação de chamadas.


### Objeto Chamada

> <br>

> JSON

```json
{  
   "numero_origem":"4832830151",
   "numero_destino":"4832830151",
   "data_criacao":"2017-03-30T17:17:14-03:00",
   "gravar_audio":true,
   "bina_origem":"4832830151",
   "bina_destino":"4832830151",
   "tags":"clienteX"
}
```
Definição do objeto Chamada

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número origem, recebe a chamada primeiro.  Exemplo: 4832830151
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
               Número destino, recebe a chamada após o número origem atender. Exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">string</span>
            </td>
            <td>
                Informe uma data e hora para agendar a chamada. vazio = liga imediatamente. Data e Hora no formato UTC
            </td>
        </tr>
       	<tr>
            <td>
                gravar_audio
                <span class="optional">Opcional</span>
            </td>
            <td>
                Flag que indica se o áudio da ligação deve ser gravado
            </td>
        </tr>
        <tr>
            <td>
                bina_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA na perna A, formato DDD + Número exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                bina_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA na perna B, formato DDD + Número exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Tags ou comentários sobre esta chamada
            </td>
        </tr>
    </tbody>
</table>

## Criar uma chamada
> Definição

```text
POST https://api.totalvoice.com.br/chamada
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
             -d '{"numero_origem":"4811111111","numero_destino":"4811111112"}' \
             'https://api.totalvoice.com.br/chamada'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->chamada->ligar('4811111111', '4811111112');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.chamada.ligar("4811111111", "4811111112")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Chamada.Criar("4811111111", "4811111112", nil)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.chamada.enviar("4811111111", "4811111112")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Chamada chamada = new Chamada(client);

JSONObject response = chamada.ligar("4811111111", "4811111112");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.chamada.ligar("4811111111", "4811111112")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "chamada criada com sucesso",
  "dados": {
    "id": 123123
  }
}
```
Basta informar o número de origem e destino.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número origem, recebe a chamada primeiro.  Exemplo: 4832830151
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
               Número destino, recebe a chamada após o número origem atender. Exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">string</span>
            </td>
            <td>
                Informe uma data e hora para agendar a chamada. vazio = liga imediatamente. Data e Hora no formato UTC
            </td>
        </tr>
       	<tr>
            <td>
                gravar_audio
                <span class="optional">Opcional</span>
            </td>
            <td>
                Flag que indica se o áudio da ligação deve ser gravado
            </td>
        </tr>
        <tr>
            <td>
                bina_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA na perna A, formato DDD + Número exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                bina_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA na perna B, formato DDD + Número exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Tags ou comentários sobre esta chamada
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
                Retorna o ID da chamada
             </td>
        </tr>
    </tbody>
</table>

## Desligando uma chamada
> Definição

```text
POST https://api.totalvoice.com.br/chamada/{id}
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"4811111111","url_audio":"http://foo.bar/audio.mp3"}' \
             'https://api.totalvoice.com.br/audio'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->audio->enviar('NUMERO-DESTINO', 'http://foo.bar/audio.mp3');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.audio.enviar("4811111111", "http://foo.bar/audio.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Audio.Enviar("4811111111", "http://foo.bar/audio.mp3", false, "")
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.audio.enviar("4811111111", "http://foo.bar/audio.mp3")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Audio audio = new Audio(client);

JSONObject response = audio.enviar("4811111111", "http://foo.bar/audio.mp3");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.audio.enviar("4811111111", "http://foo.bar/audio.mp3")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "chamada criada com sucesso",
  "dados": {
    "id": 9235245
  }
} 
```
Basta informar o id da chamada ativa

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da chamada ativa
             </td>
        </tr>
    </tbody>
</table>

## Buscar uma chamada

> Definição

```text
GET https://api.totalvoice.com.br/chamada/{id}
```
 
> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/audio/1'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->audio->buscaAudio(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.audio.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Audio.Buscar(123)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.audio.get_by_id(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Audio audio = new Audio(client);

JSONObject response = audio.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.audio.enviar("NUMERO-DESTINO", "URL-AUDIO")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 185,
    "data_criacao": "2016-03-31T20:33:13-03:00",
    "ativa": false,
    "cliente_id": 123,
    "ramal_id_origem": null,
    "origem": {
      "data_inicio": "2016-03-31T20:33:27-03:00",
      "numero": "4832830151",
      "tipo": "fixo",
      "status": "atendida",
      "substatus": "maquina_origem",
      "duracao_segundos": 47,
      "duracao": "00:00:47",
      "duracao_cobrada_segundos": 30,
      "duracao_cobrada": "00:00:30",
      "duracao_falada_segundos": 60,
      "duracao_falada": "00:01:00",
      "preco": 0.1
    },
    "destino": {
      "data_inicio": "2016-03-31T20:33:44-03:00",
      "numero": "4899999999",
      "tipo": "movel",
      "status": "atendida",
      "duracao_segundos": 30,
      "duracao": "00:00:30",
      "duracao_cobrada_segundos": 30,
      "duracao_cobrada": "00:00:30",
      "duracao_falada_segundos": 60,
      "duracao_falada": "00:01:00",
      "preco": 0.1
    }
  }
}
```

Após o envio de chamadas, você poderá realizar a busca do registro pelo seu ID.

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada para recuperar os dados
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
                Retorna o objeto <a href="#objeto-chamada">chamada</a>
             </td>
        </tr>
    </tbody>
</table>


## Buscar gravação da chamada

> Definição

```text
GET https://api.totalvoice.com.br/chamada/{id}/gravacao
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/audio/1'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->audio->buscaAudio(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.audio.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Audio.Buscar(123)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.audio.get_by_id(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Audio audio = new Audio(client);

JSONObject response = audio.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.audio.enviar("NUMERO-DESTINO", "URL-AUDIO")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 185,
    "data_criacao": "2016-03-31T20:33:13-03:00",
    "ativa": false,
    "cliente_id": 123,
    "ramal_id_origem": null,
    "origem": {
      "data_inicio": "2016-03-31T20:33:27-03:00",
      "numero": "4832830151",
      "tipo": "fixo",
      "status": "atendida",
      "substatus": "maquina_origem",
      "duracao_segundos": 47,
      "duracao": "00:00:47",
      "duracao_cobrada_segundos": 30,
      "duracao_cobrada": "00:00:30",
      "duracao_falada_segundos": 60,
      "duracao_falada": "00:01:00",
      "preco": 0.1
    },
    "destino": {
      "data_inicio": "2016-03-31T20:33:44-03:00",
      "numero": "4899999999",
      "tipo": "movel",
      "status": "atendida",
      "duracao_segundos": 30,
      "duracao": "00:00:30",
      "duracao_cobrada_segundos": 30,
      "duracao_cobrada": "00:00:30",
      "duracao_falada_segundos": 60,
      "duracao_falada": "00:01:00",
      "preco": 0.1
    }
  }
}
```

Após o envio de chamadas, você poderá realizar a busca do registro pelo seu ID.

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada para recuperar os dados
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
                Retorna o objeto <a href="#objeto-chamada">chamada</a>
             </td>
        </tr>
    </tbody>
</table>
