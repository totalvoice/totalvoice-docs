# SMS

> SMS Endpoint

```text
https://api.totalvoice.com.br/sms
```

O **SMS** permite que você envie mensagens de texto pela nossa API. Você precisa informar
um número de destino e uma mensagem à ser enviada. Existem algumas opções adicionais,
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
    "mensagem": "Ola tudo bem?",
    "preco": 0.09,
    "status_envio": "enviada",
    "data_status": "2018-03-19T00:51:36.000Z",
    "resposta_usuario": true,
    "respostas": [
      {
        "id": 2,
        "resposta": "tudo bem, e voce?",
        "data_resposta": "2016-03-31T22:46:42-03:00"
      }
    ]
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
    </tbody>
</table>

### Objeto Resposta SMS

> <br>

> JSON

```json
{
  "id": 2,
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
POST https://api.totalvoice.com.br/sms
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"48111111111","mensagem":"Ola tudo bem?"}' \
             'https://api.totalvoice.com.br/sms'
```
```php
<?php
$response = $client->sms->enviar('48111111111', 'Ola tudo bem?');
```
```javascript--node
var response = client.sms.enviar("48111111111", "Ola tudo bem?")
```
```go
 response, err := client.SMS.Enviar("4811111111", "Ola tudo bem?", false, false, nil)
```
```python
response = client.sms.enviar("48111111111", "Ola tudo bem?")
```
```java
Sms sms = new Sms(client);
JSONObject response = sms.enviar("48111111111", "Ola tudo bem?");
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
Para o envio de SMS, é necessário informar um número móvel válido e uma mensagem de texto.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone móvel que irá receber a mensagem de texto
             </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Mensagem de texto para ser enviada, limite: 160 caracteres não aceita acentos
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
                Aguardar uma resposta do destinário
            </td>
        </tr>
        <tr>
            <td>
                multi_sms
                <span class="optional">
                    Opcional, 
                    <span>default <b>false</b></span>
                </span>
            </td>
            <td>
                Aceita SMS com mais de 160 char - ate 16.000. Envia multiplos sms para o mesmo numero (um a cada 160 char) e retorna array de ids.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="optional">Opcional</span>
            </td>
            <td>
                Informe uma data e hora para agendar a entrega do sms. vazio = liga imediatamente. Data e Hora no formato UTC
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
                A resposta pode ser um Objeto com o ID do SMS ou, um array com vários ID's caso seja setado para o envio de multi_sms = true.
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

### Recuperar SMS

> Definição

```text
GET https://api.totalvoice.com.br/sms/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/sms/1'
```
```php
<?php
$response = $client->sms->buscaSms(123);
```
```javascript--node
var response = client.sms.buscar(123)
```
```go
 response, err := client.SMS.Buscar(123)
```
```python
response = client.sms.get_by_id(123)
```
```java
Sms sms = new Sms(client);
JSONObject response = sms.buscar(123);
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
    "url_audio": "http://fooooo.bar/audio.mp3",
    "resposta_usuario": true,
    "resposta": "8"
  }
}
```

Após o envio de mensagens de SMS, você poderá realizar a busca do registro pelo seu ID.

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
GET https://api.totalvoice.com.br/sms/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/sms/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$response = $client->sms->relatorio($dataInicial, $dataFinal);
```
```javascript--node
var response = client.sms.relatorio(data_inicial, data_final)
```
```go
 response, err := client.SMS.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
response = client.sms.get_relatorio(data_inicio, data_fim)
```
```java
Sms sms = new Sms(client);
JSONObject response = sms.relatorio(dataInicial, dataFinal);
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

Você pode consultar os SMS's enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-sms">SMS</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>