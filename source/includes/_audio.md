# Áudio

> <b>Audio Endpoint</b>

```text
https://api2.totalvoice.com.br/audio
```

A funcionalidade de **Envio de Aúdio**, permite que você envie um torpedo de voz ou mensagens de voz do tipo audio determinados números. 
Basta você informar um número destino e a URL contendo o seu arquivo de áudio. Estes arquivos 
devem estar disponíveis em uma URL pública. Você poderá enviar algumas opções adicionais, 
tais como, aguardar uma resposta do usuário, gravar o áudio da ligação ou colocar um número bina que aparecerá no momento da ligação.

####Formatos aceitos:
- .mp3
- .wav
 
####Tamanho máximo:
- 5MB
   

## Objeto Áudio

> JSON

```json 
{
    "id": 12345678,
    "numero_destino": "48912341234",
    "data_criacao": "2019-05-22T09:18:44.000-03:00",
    "data_inicio": "2019-05-22T09:18:44.000-03:00",
    "tipo": "movel",
    "status": "atendida",
    "duracao_segundos": 22,
    "duracao": "00:00:22",
    "duracao_cobrada_segundos": 60,
    "duracao_cobrada": "00:01:00",
    "duracao_falada_segundos": 2,
    "duracao_falada": "00:00:02",
    "preco": 0.36,
    "url_audio": "https://sua.url.audio/files/audios/audio.mp3",
    "resposta_usuario": true,
    "resposta": "1",
    "motivo_desconexao": null,
    "url_gravacao": "https://api2.totalvoice.com.br/rec/123456789"
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
                Data e hora que foi criado o registro.
            </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi iniciado o processamento do áudio.
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                Tipo de telefone: fixo, móvel ou ramal.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status do registro.
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em total em <i>segundos</i>, da chamada, desde o início do processamento.
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
                Duração em <i>segundos</i> para fins de cobrança.
            </td>
        </tr>
        <tr>
            <td>
                duracao_cobrada
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração considerada para fins de cobrança.
            </td>
        </tr>
                <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em <i>segundos</i> da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado pela chamada.
            </td>
        </tr>
        <tr>
            <td>
                url_audio
                <span class="attribute">string</span>
            </td>
            <td>
                URL do Áudio enviado para a chamada.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Valor enviado identendificando se aceita a resposta do usuário.¹
            </td>
        </tr>
        <tr>
            <td>
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Se você enviou resposta_usuario = true, quando o usuário executa alguma ação no teclado númerico do dispositivo, o valor será exibido neste campo (DTMF).¹
            </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                Quando enviado a opção Gravar Áudio = true, este campo disponibilizará uma URL contendo o áudio da gravação da ligação.
            </td>
        </tr>
    </tbody>
</table>
<br>
¹ Após o usuário digitar algo no teclado númerico a ligação sera derrubada.

## Criar um áudio

> Definição

```text
POST https://api2.totalvoice.com.br/audio
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero_destino":"4811111111","url_audio":"http://sua.url.audio/audio.mp3"}' \
             'https://api2.totalvoice.com.br/audio'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->audio->enviar('4811111111', 'http://sua.url.audio/audio.mp3');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.audio.enviar("4811111111", "http://sua.url.audio/audio.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Audio.Enviar("4811111111", "http://sua.url.audio/audio.mp3", false, "")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'api2.totalvoice.com.br')
response = client.audio.enviar("4811111111", "http://sua.url.audio/audio.mp3")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Audio audio = new Audio(client);

JSONObject response = audio.enviar("4811111111", "http://sua.url.audio/audio.mp3");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.audio.enviar("4811111111", "http://sua.url.audio/audio.mp3")
```
> Response

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
                url_audio
                <span class="required">Obrigatório</span>
            </td>
            <td>
                URL do audio, exemplo: http://sua.url.audio/audio.mp3
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
        <tr>
            <td>
                detecta_caixa
                <span class="optional">Opcional</span>
            </td>
            <td>
                Caso identificado caixa, a ligação sera durrubada antes que a ligação seja atendida. Esse serviço tem um custo adicional.
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

## Buscar áudio

> Definição

```text
GET https://api2.totalvoice.com.br/audio/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://api2.totalvoice.com.br/audio/ID-Audio'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->audio->buscaAudio(id-audio);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.audio.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Audio.Buscar(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'api2.totalvoice.com.br')
response = client.audio.get_by_id("123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Audio audio = new Audio(client);

JSONObject response = audio.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
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

##### Request

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

##### Response

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

## Relatório áudio 

> Definição

```text
GET https://api2.totalvoice.com.br/audio/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://api2.totalvoice.com.br/audio/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->audio->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.audio.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Audio.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
from totalvoice.cliente import Cliente


client = Cliente("seu-token", 'api2.totalvoice.com.br')
response = client.audio.get_relatorio("2017-12-08T11:00:32-02:00", "2017-12-08T11:00:32-02:00")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Audio audio = new Audio(client);

JSONObject response = audio.relatorio(dataInicial, dataFinal);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
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
                Posição para seleção dos dados do relatorio - começa na posição 0. Também chamado de offset.            
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
                Retorna um array com objetos <a href="#objeto-audio">áudio</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
