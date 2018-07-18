# Conferências

> Conferência Endpoint

```text
https://api.totalvoice.com.br/conferencia
```

Conferências são como salas privadas que você cria e recebe um ID, só você com esse código consegue realizar
chamadas que ao serem atendidas, conectam-se à essa conferência.   

## Objeto Conferência

> <br>

> JSON

```json
{
    "id": 432,
    "data_criacao": "2016-03-27T15:12:44+03:00",
    "data_termino": "2016-03-27T15:12:49+03:00",
    "chamadas": [
          {
                  "id": 46132,
                  "conferencia_id" : 432,
                  "url_gravacao": "http://fooooo.bar/gravacao.mp3",
                  "numero": "4832830151",
                  "data_criacao": "2016-03-27T15:12:44+03:00",
                  "cli": 3132,
                  "duracao": "00:00:45",
                  "duracao_cobrada": "00:00:60",
                  "duracao_falada": "00:00:35",
                  "status": "atendida",
                  "preco": 0.12,
                  "data_inicio": "2016-03-27T15:13:11+01:00"                  
          }
    ]
}
```

Definição do objeto Conferência

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificar único da conferência.
             </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi criada a conferência.
            </td>
        </tr>
        <tr>
            <td>
                data_termino
                <span class="attribute">datetime</span>
            </td>
            <td>
               Data e hora que a conferência foi fechada.
            </td>
        </tr>
        <tr>
            <td>
                chamadas
                <span class="attribute">array</span>
            </td>
            <td>
                Lista de objetos de cada <a href="#objeto-chamada-da-conferencia">chamada da conferência</a>.
            </td>
        </tr>
    </tbody>
</table>

## Objeto Chamada da Conferência

> <br>

> JSON

```json
{
    "id": 46132,
    "conferencia_id" : 432,
    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
    "numero": "4832830151",
    "data_criacao": "2016-03-27T15:12:44+03:00",
    "cli": 3132,
    "duracao": "00:00:45",
    "duracao_cobrada": "00:00:60",
    "duracao_falada": "00:00:35",
    "status": "atendida",
    "preco": 0.12,
    "data_inicio": "2016-03-27T15:13:11+01:00"                  
}
```

Definição do objeto da Chamada da Conferência

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificar único da chamada da conferência. 
             </td>
        </tr>
        <tr>
            <td>
                conferencia_id
                <span class="attribute">id</span>
            </td>
            <td>
                Identificar único da conferência. 
            </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                Endereço URL da gravação desta chamada na conferência.
            </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="attribute">integer</span>
            </td>
            <td>
                Número do destinatário que foi conectado à conferência.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi criada a chamada.
            </td>
        </tr>
        <tr>
            <td>
                cli
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único do cliente.
            </td>
        </tr>
        <tr>
            <td>
                duracao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Duração total da chamada desde o início do processamento.
            </td>
        </tr>
        <tr>
            <td>
                duracao_cobrada
                <span class="attribute">datetime</span>
            </td>
            <td>
                Duração total da chamada considerada para fins de cobrança.
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada
                <span class="attribute">datetime</span>
            </td>
            <td>
                Duração da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Estado atual da chamada.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado por por esta chamada da conferência.
            </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data do inicio da chamada.
            </td>
        </tr>
    </tbody>
</table>

## Criar conferência

> Definição

```text
POST https://api.totalvoice.com.br/conferencia
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"4811111111","url_conferencia":"http://foo.bar/conferencia.mp3"}' \
             'https://api.totalvoice.com.br/conferencia'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->conferencia->enviar('NUMERO-DESTINO', 'http://foo.bar/conferencia.mp3');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.conferencia.enviar("4811111111", "http://foo.bar/conferencia.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Conferencia.Enviar("4811111111", "http://foo.bar/conferencia.mp3", false, "")
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.conferencia.enviar("4811111111", "http://foo.bar/conferencia.mp3")
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Conferencia conferencia = new Conferencia(client);

JSONObject response = conferencia.enviar("4811111111", "http://foo.bar/conferencia.mp3");
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "conferencia criado com sucesso",
    "dados": {
        "id": 4921
    }
}
```
Basta informar o número de destino válido e a URL pública do arquivo.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone que irá receber a chamada, formato DDD + Número exemplo: 4832830151
             </td>
        </tr>
        <tr>
            <td>
                url_conferencia
                <span class="required">Obrigatório</span>
            </td>
            <td>
                URL do conferencia formato MP3, exemplo: http://foo.bar/conferencia.mp3
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="optional">Opcional</span>
            </td>
            <td>
                Aguardar uma resposta do destinário
            </td>
        </tr>
        <tr>
            <td>
                gravar_conferencia
                <span class="optional">Opcional</span>
            </td>
            <td>
                Gravar a ligação
            </td>
        </tr>
        <tr>
            <td>
                bina
                <span class="optional">Opcional</span>
            </td>
            <td>
                Número de telefone que aparecerá no identificador de quem receber a chamada, formato DDD + Número exemplo: 4832830151
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
                Retorna o ID do Conferência
             </td>
        </tr>
    </tbody>
</table>

## Buscar conferência

> Definição

```text
GET https://api.totalvoice.com.br/conferencia/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/conferencia/1'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->conferencia->buscaConferencia(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.conferencia.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Conferencia.Buscar(123)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.conferencia.get_by_id(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Conferencia conferencia = new Conferencia(client);

JSONObject response = conferencia.buscar(123);
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
        "numero_destino": "4832830151",
        "data_criacao": "2016-03-27T15:12:44+03:00",
        "data_inicio": "2016-03-27T15:12:49+03:00",
        "tipo": "fixo",
        "status": "atendida",
        "duracao_segundos": 45,
        "duracao": "00:00:45",
        "duracao_cobrada_segundos": 60,
        "duracao_cobrada": "00:00:60",
        "duracao_falada_segundos": 35,
        "duracao_falada": "00:00:35",
        "preco": 0.12,
        "url_conferencia": "http://fooooo.bar/conferencia.mp3",
        "resposta_usuario": true,
        "resposta": "8"
    }
}
```

Após o envio de mensagens de conferência, você poderá realizar a busca do registro pelo seu ID.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do Conferência para recuperar os dados
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
                Retorna o objeto <a href="#objeto-conferencia">conferência</a>
             </td>
        </tr>
    </tbody>
</table>

## Encerrar conferência 

> Definição

```text
GET https://api.totalvoice.com.br/conferencia/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/conferencia/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->conferencia->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.conferencia.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Conferencia.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.conferencia.get_relatorio(data_inicio, data_fim)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Conferencia conferencia = new Conferencia(client);

JSONObject response = conferencia.relatorio(dataInicial, dataFinal);
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
        "numero_destino": "4832830151",
        "data_criacao": "2016-03-27T15:12:44+03:00",
        "data_inicio": "2016-03-27T15:12:49+03:00",
        "tipo": "fixo",
        "status": "atendida",
        "duracao_segundos": 45,
        "duracao": "00:00:45",
        "duracao_cobrada_segundos": 60,
        "duracao_cobrada": "00:00:60",
        "duracao_falada_segundos": 35,
        "duracao_falada": "00:00:35",
        "preco": 0.12,
        "url_conferencia": "http://fooooo.bar/conferencia.mp3",
        "resposta_usuario": true,
        "resposta": "8"
      },
      {
        "id": 432,
        "numero_destino": "4832830151",
        "data_criacao": "2016-03-27T15:12:44+03:00",
        "data_inicio": "2016-03-27T15:12:49+03:00",
        "tipo": "fixo",
        "status": "ocupado",
        "duracao_segundos": 10,
        "duracao": "00:00:10",
        "duracao_cobrada_segundos": null,
        "duracao_cobrada": null,
        "duracao_falada_segundos": null,
        "duracao_falada": null,
        "preco": 0,
        "url_conferencia": "http://fooooo.bar/conferencia.mp3",
        "resposta_usuario": true,
        "resposta": null
      }
    ]
  }
}
```

Você pode consultar os conferências enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-conferencia">conferência</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
