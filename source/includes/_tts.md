# TTS Leitura de Texto

> <b>Tts Endpoint</b>

```text
https://api2.totalvoice.com.br/tts
```
A funcionalidade de **Tts**, permite que você nos envie uma mensgem de tts e nosso torpedo de voz ira tranformar em áudio.

Assim quando o número detino atende, o mesmo ira escutar uma voz falando a mensagem que você escreveu.

Você poderá enviar algumas opções adicionais, tais como, aguardar uma resposta do usuário, gravar o áudio da ligação ou colocar um número bina que aparecerá no momento da ligação.

## Objeto Tts

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
    "preco": 0.35,
    "mensagem": "Olá, se você gostaria de utilizar a totalvoice, digite 1.",
    "velocidade": 0,
    "resposta_usuario": true,
    "resposta": "1",
    "motivo_desconexao": null,
    "url_gravacao": "https://api2.totalvoice.com.br/rec/123456789"
}
```

Definição do objeto Tts

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro do Tts.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário que foi enviado o Tts.
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
                Data e hora que foi iniciado o processamento do tts.
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
                mensagem
                <span class="attribute">float</span>
            </td>
            <td>
                Mensagem em forma de texto que você nos enviou.
            </td>
        </tr>
        <tr>
            <td>
                velocidade
                <span class="attribute">float</span>
            </td>
            <td>
                Velocidade em que foi lida a mensagem.
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
                motivo_desconexao
                <span class="attribute">string</span>
            </td>
            <td>
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em <a href="#codigos-de-motivos">motivos de desconeção</a>
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

## Criar um Tts

> Definição

```text
POST https://api2.totalvoice.com.br/tts
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero_destino":"4811111111","mensagem":"Olá"}' \
             'https://api2.totalvoice.com.br/tts'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->tts->enviar('4811111111', 'Olá, essa é a minha mensagem');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.tts.enviar("4811111111", "Olá, essa é a minha mensagem")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Tts.Enviar("4811111111", "Olá, essa é a minha mensagem", false, "")
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.tts.enviar("4811111111", "Olá, essa é a minha mensagem")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Tts tts = new Tts(client);

JSONObject response = tts.enviar("4811111111", "Olá, essa é a minha mensagem");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.tts.enviar("4811111111", "Olá, essa é a minha mensagem")
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "tts criado com sucesso",
    "dados": {
        "id": 1234
    }
}
```


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
                mensagem
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Mensagem que será falada quando o número destino atender a ligação, exemplo: Olá, essa é a minha mensagem
            </td>
        </tr>
        <tr>
            <td>
                velocidade
                <span class="optional">Opcional</span>
            </td>
            <td>
                Velocidade em que será lida a mensagem, vai de -1 a 10. Quando menor mais lento e quanto maior o número mais rápido.
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
                tipo_voz
                <span class="optional">Opcional</span>
            </td>
            <td>
                Idioma em que a mensagem deve ser lida e também o tipo da voz¹
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
                gravar_audio
                <span class="optional">Opcional</span>
            </td>
            <td>
                Gravar a ligação
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
                Retorna o ID do Tts criado
             </td>
        </tr>
    </tbody>
</table>

## Buscar Tts

> Definição

```text
GET https://api2.totalvoice.com.br/tts/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://api2.totalvoice.com.br/tts/ID-Audio'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->tts->buscaAudio(id-audio);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.tts.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.tts.Buscar(123)
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.tts.get_by_id(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Tts tts = new Tts(client);

JSONObject response = tts.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.tts.enviar("NUMERO-DESTINO", "MENSAGEM")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 123453,
    "numero_destino": "4832830151",
    "data_criacao": "2019-07-09T10:59:42.000-03:00",
    "data_inicio": "2019-07-09T10:59:43.000-03:00",
    "tipo": "movel",
    "status": "atendida",
    "duracao_segundos": 45,
    "duracao": "00:00:45",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "mensagem": "Olá moço",
    "velocidade": 0,
    "resposta_usuario": true,
    "resposta": 2,
    "motivo_desconexao": "16. normal",
    "url_gravacao": ""
  }
}
```

Após o envio do Tts, você poderá realizar a busca do registro pelo seu ID.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do Tts para recuperar os dados
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
                Retorna o objeto <a href="#objeto-tts">Tts</a>
             </td>
        </tr>
    </tbody>
</table>

## Relatório Tts 

> Definição

```text
GET https://api2.totalvoice.com.br/tts/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://api2.totalvoice.com.br/tts/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->tts->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.tts.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.tts.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.tts.get_relatorio(data_inicio, data_fim)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Tts tts = new Tts(client);

JSONObject response = audio.relatorio(dataInicial, dataFinal);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.tts.enviar("NUMERO-DESTINO", "MENSAGEM")
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
        "id": 12345679,
        "numero_destino": "4832830151",
        "data_criacao": "2019-07-09T10:59:42.000-03:00",
        "data_inicio": "2019-07-09T10:59:43.000-03:00",
        "tipo": "movel",
        "status": "atendida",
        "duracao_segundos": 45,
        "duracao": "00:00:45",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "mensagem": "Olá, tudo bem?",
        "velocidade": 0,
        "resposta_usuario": false,
        "resposta": null,
        "motivo_desconexao": "16. normal",
        "url_gravacao": ""
      },
      {
        "id": 13246578,
        "numero_destino": "4832830151",
        "data_criacao": "2019-07-09T15:33:01.000-03:00",
        "data_inicio": "2019-07-09T15:33:01.000-03:00",
        "tipo": "movel",
        "status": "ocupado",
        "duracao_segundos": 33,
        "duracao": "00:00:33",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "mensagem": "Olá esse é uma mensagem enviada por tts",
        "velocidade": 2,
        "resposta_usuario": false,
        "resposta": null,
        "motivo_desconexao": "17. ocupado",
        "url_gravacao": ""
      }
    ]
  }
}
```

Você pode consultar os Tts enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-audio">Tts</a>
             </td>
        </tr>
    </tbody>
</table>

<b>Exemplo:</b> Se você tiver um relatorio com 350 Tts, na primeira página sera retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

<br>
<br>
