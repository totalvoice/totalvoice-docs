# Áudio

### Objeto áudio

> <br>

> JSON

```json
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
    "url_audio": "http://fooooo.bar/audio.mp3",
    "resposta_usuario": true,
    "resposta": "8"
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
                ID do registro de Áudio.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário que foi enviado o áudio.
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
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi iniciado o processamento do áudio
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                Tipo de telefone: fixo, móvel ou ramal
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status do registro
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em segundos (inteiro) total da chamada desde o início do processamento
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
                url_audio
                <span class="attribute">string</span>
            </td>
            <td>
                URL do Áudio enviado para a chamada
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
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Quando o usuário executa alguma ação no teclado do dispositivo, o valor será exibido neste campo (DTMF). 
            </td>
        </tr>
    </tbody>
</table>

### Criar um áudio

> </br>

> Definição

```text
POST https://api.totalvoice.com.br/audio
```

> </br>

> Exemplo Requisição

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"NUMERO_DESTINO","url_audio":"http://foo.bar/audio.mp3"}' \
             'https://api.totalvoice.com.br/audio'
```
```php
<?php
$response = $client->audio->enviar('NUMERO-DESTINO', 'http://foo.bar/audio.mp3');
```
```javascript--node
var response = client.audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3")
```
```go
 response, err := client.Audio.Enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3", false, "")
```
```python
response = client.audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3")
```
```java
Audio audio = new Audio(client);
JSONObject response = audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3");
```
> Exemplo Resposta

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "audio criado com sucesso",
  "dados": {
    "id": 4921
  }
}
```
Possibilita o envio de mensagens de voz (audio) / torpedos de voz para um determinado número.

`POST /audio`

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
                url_audio
                <span class="required">Obrigatório</span>
            </td>
            <td>
                URL do audio formato MP3, exemplo: http://foo.bar/audio.mp3
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
                gravar_audio
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
                Retorna o ID do Áudio
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

### Recuperar áudio

> </br>

> Definição

```text
GET https://api.totalvoice.com.br/audio/{id}
```

> </br>

> Exemplo Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/audio/1'
```
```php
<?php
$response = $client->audio->buscaAudio(123);
```
```javascript--node
var response = client.audio.buscar(123)
```
```go
 response, err := client.Audio.Buscar(123)
```
```python
response = client.audio.get_by_id(123)
```
```java
Audio audio = new Audio(client);
JSONObject response = audio.buscar(123);
```
> Exemplo Response

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

Após o envio de mensagens de áudio, você poderá realizar a busca do registro pelo seu ID.

`GET /audio/{id}`

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do Áudio para recuperar os dados
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
                Retorna o objeto <a href="#objeto-audio">áudio</a>
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

### Relatório áudio 
> </br>

> Definição

```text
GET https://api.totalvoice.com.br/audio/relatorio
```

> </br>

> Exemplo Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/audio/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$response = $client->audio->relatorio($dataInicial, $dataFinal);
```
```javascript--node
var response = client.audio.relatorio(data_inicial, data_final)
```
```go
 response, err := client.Audio.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
response = client.audio.get_relatorio(data_inicio, data_fim)
```
```java
Audio audio = new Audio(client);
JSONObject response = audio.relatorio(dataInicial, dataFinal);
```
> Exemplo Response

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
        "url_audio": "http://fooooo.bar/audio.mp3",
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
        "url_audio": "http://fooooo.bar/audio.mp3",
        "resposta_usuario": true,
        "resposta": null
      }
    ]
  }
}
```

Você pode consultar os áudios enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

`GET /audio/relatorio?data_inicio=2018-03-10&data_fim=2018-03-11`

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_inicio
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Data inicial para consulta dos dados no relatório
            </td>
        </tr>
        <tr>
            <td>
                data_fim
                <span class="required">Obrigatório</span>
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
                Retorna um array com objetos <a href="#objeto-audio">áudio</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>