# Conferências

> Conferência Endpoint

```text
https://voice-api.zenvia.com/conferencia
```

Conferências são como salas privadas que você cria e recebe um ID, só você com esse código consegue realizar
chamadas que ao serem atendidas, conectam-se a essa conferência.   

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
                  "numero": "+5510999999999",
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
                Identificador único da conferência.
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
    "numero": "+5510999999999",
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
                Identificador único da chamada da conferência. 
             </td>
        </tr>
        <tr>
            <td>
                conferencia_id
                <span class="attribute">id</span>
            </td>
            <td>
                Identificador único da conferência. 
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
                Valor cobrado por esta chamada da conferência.
            </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data do início da chamada.
            </td>
        </tr>
    </tbody>
</table>

## Criar conferência

> Definição

```text
POST https://voice-api.zenvia.com/conferencia
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"+5510999999999","url_conferencia":"http://foo.bar/conferencia.mp3"}' \
             'https://voice-api.zenvia.com/conferencia'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->conferencia->enviar('NUMERO-DESTINO', 'http://foo.bar/conferencia.mp3');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.conferencia.enviar("+5510999999999", "http://foo.bar/conferencia.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Conferencia.Enviar("+5510999999999", "http://foo.bar/conferencia.mp3", false, "")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.conferencia.cria_conferencia()

```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conferencia conferencia = new Conferencia(client);

JSONObject response = conferencia.enviar("+5510999999999", "http://foo.bar/conferencia.mp3");
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
Basta chamar o metodo cria_conferencia para criar o id da sua conferência.

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
GET https://voice-api.zenvia.com/conferencia/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-api.zenvia.com/conferencia/1'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->conferencia->buscaConferencia(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.conferencia.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Conferencia.Buscar(123)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.conferencia.get_by_id(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
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
        "numero_destino": "+5510999999999",
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
                ID da Conferência para recuperar os dados
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
GET https://voice-api.zenvia.com/conferencia/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/conferencia/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->conferencia->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.conferencia.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Conferencia.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.conferencia.get_relatorio(data_inicio, data_fim)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
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
        "numero_destino": "+5510999999999",
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
        "numero_destino": "+5510999999999",
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

Você pode consultar as conferências enviadas posteriormente. Basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-conferencia">conferência</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
