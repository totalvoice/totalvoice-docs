# SMS

> SMS Endpoint

```text
https://voice-app.zenvia.com/sms
```

O **SMS** permite que você envie mensagens de texto pela nossa API. Você precisa informar
um número de destino e uma mensagem a ser enviada. Existem algumas opções adicionais
que permitem aguardar uma resposta do usuário, enviar multi sms ou agendar uma 
data de envio por exemplo.

### Objeto Sms

> <br>

> JSON

```json
{
    "id": 432,
    "numero_destino": "48111111111",
    "data_criacao": "2018-03-18T00:51:22.000Z",
    "mensagem": "Oi, tudo bem?",
    "preco": 0.09,
    "status_envio": "enviada",
    "data_status": "2018-03-19T00:51:36.000Z",
    "resposta_usuario": true,
    "respostas": [
      {
        "id": 2,
        "sms_id": 432,
        "resposta": "tudo bem, e voce?",
        "data_resposta": "2016-03-31T22:46:42-03:00"
      }
    ],
    "tags": null
}
```

Definição do objeto Sms

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de SMS.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário (móvel) que será enviado o SMS.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi criado o registro
            </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="attribute">string</span>
            </td>
            <td>
                Mensagem que será enviada para o número.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado pelo envio
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status do registro:
                <ul>
                    <li>enviada: enviado para processamento</li>
                    <li>erro: erro no processamento</li>
                    <li>entregue: entregue para o número de destino</li>
                    <li>aguardando: aguardando o envio para processamento</li>
                </ul> 
            </td>
        </tr>
        <tr>
            <td>
                data_status
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que o status foi alterado 
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Aguarda a resposta do usuário: sim ou não
            </td>
        </tr>
        <tr>
            <td>
                respostas
                <span class="attribute">array</span>
            </td>
            <td>
                Array contendo os objetos de <a href="#objeto-resposta-sms">resposta</a>
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                String com a tag enviado no momento do post.
            </td>
        </tr>
    </tbody>
</table>

### Objeto Resposta SMS

> <br>

> JSON

```json
{
  "id": 2,
  "sms_id": 3,
  "resposta": "tudo bem, e voce?",
  "data_resposta": "2016-03-31T22:46:42-03:00"
}
```

Definição do objeto Resposta SMS

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de Resposta.
             </td>
        </tr>
        <tr>
            <td>
                sms_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do SMS vinculado a resposta.
             </td>
        </tr>
        <tr>
            <td>
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Texto com a resposta do usuário
            </td>
        </tr>
        <tr>
            <td>
                data_resposta
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi respondido pelo usuário
            </td>
        </tr>
    </tbody>
</table>

### Enviar um SMS

> Definição

```text
POST https://voice-app.zenvia.com/sms
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"48111111111","mensagem":"Ola tudo bem?"}' \
             'https://voice-app.zenvia.com/sms'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->sms->enviar('48111111111', 'Ola tudo bem?');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.sms.enviar("48111111111", "Ola tudo bem?")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.SMS.Enviar("4811111111", "Ola tudo bem?", false, false, nil)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-app.zenvia.com')
response = client.sms.enviar("48111111111", "Ola tudo bem?")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");

Sms sms = new Sms(client);
JSONObject response = sms.enviar("48111111111", "Ola tudo bem?");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.sms.enviar("48111111111", "Ola tudo bem?")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "sms criado com sucesso",
  "dados": {
    "id": 4921
  }
}
```
Para o envio de SMS é necessário informar um número móvel válido e uma mensagem de texto.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone móvel que irá receber a mensagem de texto.
             </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Mensagem de texto para ser enviada com limite de 160 caracteres e não aceita acentos.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="optional">
                    Opcional,
                    <span>default <b>false</b></span>
                </span>
            </td>
            <td>
                Aguardar uma resposta do destinário.
            </td>
        </tr>
        <tr>
            <td>
                multi_sms
                <span class="optional">
                    Opcional 
                    <span>default <b>false</b></span>
                </span>
            </td>
            <td>
                Aceita SMS com mais de 160 caracteres, máximo é de 16.000 caracteres. Envia multiplos SMSs para o mesmo número (um a cada 160 caracteres) e retorna array de IDs.
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="optional">
                    Opcional 
                </span>
            </td>
            <td>
                Você pode enviar informações em texto no campo tags com até 50 caracteres.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="optional">
                    Opcional
                    <span>default <b>null</b></span>
                </span>
            </td>
            <td>
                Informe uma data e hora para agendar a entrega do SMS. vazio = liga imediatamente. Data e Hora no formato UTC.
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
                <span class="attribute">integer/array</span>
            </td>
            <td>
                A resposta pode ser um Objeto com o ID do SMS, ou um array com vários IDs caso seja setado para o envio de multi_sms = true.
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

### Buscar SMS

> Definição

```text
GET https://voice-app.zenvia.com/sms/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-app.zenvia.com/sms/1'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->sms->buscaSms(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.sms.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.SMS.Buscar(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-app.zenvia.com')
response = client.sms.get_by_id("123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");

Sms sms = new Sms(client);
JSONObject response = sms.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.sms.buscar(123)
```

> Response

```json
{
   "status":200,
   "sucesso":true,
   "motivo":0,
   "mensagem":"dados retornados com sucesso",
   "dados":{  
      "id":25536757,
      "numero_destino":"48933445566",
      "data_criacao":"2019-05-29T17:49:00.000-03:00",
      "mensagem":"Ola tudo bem?",
      "preco":0.045,
      "status_envio":"enviada",
      "data_status":null,
      "resposta_usuario":false,
      "respostas":[  

      ],
      "tags":"informações adicionais"
}
```

Após o envio de mensagens de SMS você poderá realizar a busca do registro pelo seu ID.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do SMS para recuperar os dados
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
                Retorna o objeto <a href="#objeto-sms">SMS</a>
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

### Relatório SMS 

> Definição

```text
GET https://voice-app.zenvia.com/sms/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://voice-app.zenvia.com/sms/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->sms->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.sms.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.SMS.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-app.zenvia.com')
response = client.sms.get_relatorio("2017-12-08T11:00:32-02:00", "2017-12-08T11:00:32-02:00")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");

Sms sms = new Sms(client);
JSONObject response = sms.relatorio(dataInicial, dataFinal);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.sms.relatorio(data_inicial, data_final)
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
        "id": 151,
        "numero_destino": "4899999999",
        "data_criacao": "2016-03-30T23:34:08-03:00",
        "data_envio": null,
        "mensagem": "Mensagem de teste",
        "preco": 0,
        "status": "enviada",
        "resposta_usuario": false,
        "respostas": []
      },
      {
        "id": 204,
        "numero_destino": "4899999999",
        "data_criacao": "2016-03-31T22:39:36-03:00",
        "data_envio": null,
        "mensagem": "Oi, tudo bem?",
        "preco": 0.05,
        "status": "enviada",
        "resposta_usuario": true,
        "respostas": [
          {
            "id": 2,
            "resposta": "tudo bem, e voce?",
            "data_resposta": "2016-03-31T22:46:42-03:00"
          }
        ]
      }
    ]
  }
}
```

Você pode consultar os SMSs enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-sms">SMS</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
