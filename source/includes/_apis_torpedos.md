# APIs de Torpedos

AS APIs de Torpedo viabilizam a entrega de mensagens para os clientes. Nossa documentação possui as amostras de código para você iniciar o disparo de mensagens com leitura de texto TTS e envios de torpedo de voz. 

#### APIs de Torpedo:
- Áudio
- Composto
- TTS: leitura de texto


## Áudio

> <b>Áudio Endpoint</b>

```text
https://voice-api.zenvia.com/audio
```

Usando esse recurso, você pode enviar um torpedo de voz ou mensagens de voz como áudio para o destino através de um arquivo **MP3** ou  **.wav.** Poderá também enviar algumas opções adicionais. São elas:

- Aguardar uma resposta do usuário;
- Gravar o áudio da ligação;
- Colocar um número bina que aparecerá no momento da ligação.

#### Observações:

1. Os arquivos de áudio devem estar disponíveis em uma URL pública direcionando para um arquivo de áudio MP3 ou um .wav;
2. O tamanho máximo é de 5MB.
3. O formato de envio no campo numero_destino é DDD + 9 +  número. (Ex. p/ SP: 11912341234).

### Objeto Áudio

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
    "url_gravacao": "https://voice-api.zenvia.com/rec/123456789",
    "bina": "+5548988888888"
}
```

O objeto é um modelo JSON que contém o arquivo de áudio. 

Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:** https://voice-api.zenvia.com/audio

No atributo “status”, os seguintes valores podem ser retornados:

- Preparando
- Chamando
- Atendida
- Ocupado
- Sem resposta
- Congestionado
- Falha
- Cancelada
- Desconhecido 

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
                <span class="attribute">String</span>
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
                <span class="attribute">String</span>
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
                <span class="attribute">String</span>
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
                motivo_desconexao
                <span class="attribute">string</span>
            </td>
            <td>
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em <a href="#codigos-de-motivos">motivos de desconexão</a>
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
        <tr>
              <td>
                  bina
                  <span class="attribute">string</span>
              </td>
              <td>
                    Número de telefone que aparece no identificador de quem recebe a chamada
              </td>
          </tr>
        <tr>
    </tbody>
</table>
<br>

### Criar Áudio

> Definição

```text
POST https://voice-api.zenvia.com/audio
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero_destino":"+5548988881111", "bina": "+554811111111" ,"url_audio":"http://sua.url.audio/audio.mp3"}' \
             'https://voice-api.zenvia.com/audio'
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

client = Cliente("seu-token", 'voice-api.zenvia.com')
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

Para criar um áudio, basta informar o número de destino válido e a URL pública do
arquivo.

**POST:**  https://voice-api.zenvia.com/audio

**REQUEST:**

- **Headers**

1. **Content-Type:** application/json
2. **Authorization:** Access-Token: seu-token

Veja ao lado um exemplo de requisição. Os campos são:

#### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone que irá receber a chamada, formato DDD + Número, exemplo: 4832830151.
             </td>
        </tr>
        <tr>
            <td>
                url_audio
                <span class="required">Obrigatório</span>
            </td>
            <td>
                URL do áudio, exemplo: http://sua.url.audio/audio.mp3.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="optional">Opcional</span>
            </td>
            <td>
                Aguardar uma resposta do destinário.
            </td>
        </tr>
        <tr>
            <td>
                gravar_audio
                <span class="optional">Opcional</span>
            </td>
            <td>
                Gravar a ligação.
            </td>
        </tr>
        <tr>
            <td>
                bina
                <span class="optional">Opcional</span>
            </td>
            <td>
                Número de telefone que aparecerá no identificador de quem receber a chamada, formato DDD + Número, exemplo: 4832830151.
            </td>
        </tr>
        <tr>
            <td>
                detecta_caixa
                <span class="optional">Opcional</span>
            </td>
            <td>
                Caso identificado caixa, a ligação será derrubada antes que a ligação seja atendida. Esse serviço tem um custo adicional.
            </td>
        </tr>
        <tr>
            <td>
                bina_inteligente
                <span class="optional">Opcional</span>
            </td>
            <td>
                Quando o valor for true, ao enviar o torpedo o número de telefone que aparecerá para o destino será um número com DDD de sua região. Veja <a href="https://centraltotalvoice.freshdesk.com/support/solutions/articles/35000132235-bina-inteligente-torpedo-de-voz">DDDs disponíveis</a>.
            </td>
        </tr>
    
    </tbody>
</table>

### Buscar Áudio

> Definição

```text
GET https://voice-api.zenvia.com/audio/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/audio/ID-Audio'
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

client = Cliente("seu-token", 'voice-api.zenvia.com')
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
        "resposta": "8",
        "motivo_desconexao": null,
        "url_gravacao": "",
        "bina": "+5548988888888"
    }
}
```

Caso deseje, após o envio de mensagens de áudio você poderá realizar a busca do registro
pelo seu ID. 

Para buscar, é necessário o envio da chave do áudio na URL da requisição seguido da autenticação Acess Token no Header. 

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET** https://voice-api.zenvia.com/audio/{id}

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
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

### Relátorio Áudio

> Definição

```text
GET https://voice-api.zenvia.com/audio/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/audio/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
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


client = Cliente("seu-token", 'voice-api.zenvia.com')
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
        "resposta": "8",
        "motivo_desconexao": null,
        "url_gravacao": "",
        "bina": "+5548988888888"
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
        "resposta": "",
        "motivo_desconexao": null,
        "url_gravacao": "",
        "bina": "+5548988888888"
      }
    ]
  }
}
```

Para consultar os áudios enviados, basta informar o período desejado para que a API
retorne os dados.

Veja ao lado um exemplo de requisição. Os campos são:

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
                Data inicial para consulta dos dados no relatório.
            </td>
        </tr>
        <tr>
            <td>
                data_fim
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Data final para consulta dos dados no relatório.
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
                Retorna um array com objetos <a href="#objeto-audio">áudio</a>
             </td>
        </tr>
    </tbody>
</table>

## Composto

> Composto Endpoint

```text
https://voice-api.zenvia.com/composto
```

```json
[
	{
		"acao": "audio",
		"acao_dados": {
						"url_audio": "http://fooooo.bar/composto.mp3"
					}
	},
	{
		"acao": "tts",
		"acao_dados": {
						"mensagem": "Você possui uma consulta agendada para amanhã 18h. Aperte 1 para confirmar ou 2 para ser remarcar",
						"resposta_usuario": "true",
						"tipo_voz": "br-Ricardo"
					}
	},
	{
		"acao": "transferir",
		"opcao": 2,
		"acao_dados": {
						"numero_telefone": "1132830151",
						 "bina": "1132830152" 
					}
	} 
]

```

Usando esse recurso, você poderá enviar mensagens de voz por telefone misturando gravações de áudio MP3 com TTS. Além disso, será possível também realizar outras funções de central telefônica, como coletar e transferir DTMF. 

**Por exemplo:** envie uma mensagem para confirmar uma consulta ou transferir a pessoa para o reagendamento: "Você possui uma consulta agendada para amanhã às 18h. Pressione 1 para confirmar ou 2 para ser remarcado". Quando o usuário pressionar a opção 2, será transferido para o telefone de remarcação. 

O composto aceita um JSON com as seguintes opções: 

- Áudio; 
- TTS;
- Transferir; 
- URA; 

#### Observações:

- Os arquivos de áudio são aceitos nos formatos **MP3** ou um **.wav**;
- O tamanho máximo é de **5MB**.


### Objeto Composto 

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
    "resposta_usuario": true,
    "resposta": "8",
	"tags": "clienteX",
    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
    "bina": "+5548988888888"
}
```

O objeto é um modelo JSON que contém o arquivo de composto. 

Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:** https://voice-api.zenvia.com/composto

No atributo “status”, os seguintes valores podem ser retornados:

- Preparando
- Chamando
- Atendida
- Ocupado
- Sem resposta
- Congestionado
- Falha
- Cancelada
- Desconhecido 

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
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                Quando enviado a opção Gravar Áudio = true, este campo disponibilizará uma URL contendo o áudio da gravação da ligação.
            </td>
        </tr>
		<tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Parâmetro de integração - informado no post e retornado no get. Ex: "clienteX"
            </td>
        </tr>
		<tr>
            <td>
                motivo_desconexao
                <span class="attribute">string</span>
            </td>
            <td>
                Um dos motivos de desconexão:
                <ul>
                    <li>1. telefone não existe</li>
                    <li>2. sem rota para a rede de destino</li>
                    <li>3. sem rota para o destino</li>
                    <li>4. prefixo incorreto</li>
                    <li>6. canal inaceitável</li>
                    <li>7. chamada sendo entregue em canal já estabelecido</li>
                    <li>8. call peemption</li>
                    <li>14. telefone portado para outra operadora</li>
                    <li>16. normal</li>
                    <li>17. ocupado</li>
                    <li>18. sem resposta</li>
                    <li>19. sem resposta - mas chamou</li>
                    <li>20. assinante ausente</li>
                    <li>21. chamada rejeitada</li>
                    <li>22. este número mudou</li>
                    <li>23. redirecionado para novo destino</li>
                    <li>26. atendido em outro lugar</li>
                    <li>27. destino não está funcionando</li>
                    <li>28. formato inválido de número</li>
                    <li>29. rejeitado</li>
                    <li>30. resposta para status enquiry</li>
                    <li>31. normal, não especificado</li>
                    <li>34. sem canal disponível</li>
                    <li>41. falha temporária</li>
                    <li>42. equipamento congestionado</li>
                    <li>44. canal requisitado não está disponível</li>
                    <li>50. não cadastrado</li>
                    <li>52. chamada sainte barrada</li>
                    <li>54. chamada entrante barrada</li>
                    <li>57. capacidade não autorizada</li>
                    <li>58. erro de mídia ou parâmetros incompatíveis</li>
                    <li>65. capacidade do portador não implementada</li>
                    <li>66. tipo de canal não implementado</li>
                    <li>69. não implementado</li>
                    <li>81. valor de referência inválido</li>
                    <li>88. destino incompatível</li>
                    <li>95. mensagem inválida não especificada</li>
                    <li>96. informação obrigatória não presente</li>
                    <li>97. mensagem não implementada</li>
                    <li>98. mensagem não compatível com o estado da chamada ou não existente ou não implementada</li>
                    <li>97. mensagem não implementada</li>
                    <li>99. elemento não existente ou não implementado</li>
                    <li>97. mensagem não implementada</li>
                    <li>100. informação inválida no conteúdo dos elementos</li>
                    <li>101. mensagem não compatível com o estado da chamada</li>
                    <li>102. timeout</li>
                    <li>111. erro de protocolo</li>
                    <li>127. erro de conectividade</li>
                </ul>
            </td>
        </tr>
        <tr>
              <td>
                  bina
                  <span class="attribute">string</span>
              </td>
              <td>
                    Número de telefone que aparece no identificador de quem recebe a chamada
              </td>
          </tr>
        <tr>
    </tbody>
</table>


### Criar Composto

> Definição

```text
POST https://voice-api.zenvia.com/composto
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
			 --header 'Accept: application/json' \
			 --header 'Access-Token: seu-token' \
			 -d '{
                "numero_destino":"+551132830151",
                "bina": "+5548988881111",
                "dados":[
                    {  
                        "acao":"audio",
                        "acao_dados":{  
                            "url_audio":"https://instaud.io/_/3K3k.mp3"
                        }
                    },
                    {  
                        "acao":"tts",
                        "acao_dados":{  
                            "mensagem":"lendo este texto",
                            "resposta_usuario":"true",
                            "tipo_voz":"br-Ricardo"
                        }
                    },
                    {  
                        "acao":"transferir",
                        "opcao":1,
                        "acao_dados":{  
                            "numero_telefone":"4832830151",
                            "bina":"4832830152"
                        }
                    },
                        {  
                        "acao":"ura",
                        "opcao":2,
                        "acao_dados":{  
                            "ura_id":"1234"
                        }
                    }' \
			 'https://voice-api.zenvia.com/composto'
```


```php
<?php
$client = new TotalVoiceClient('seu-token');

$dados	= '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]';
$bina	= '11987654321';
$tags	= 'clienteY';

$response = $client->composto->enviar('NUMERO-DESTINO', $dados, $bina, $tags);
```


```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.composto.enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Composto.Enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
dados =[  
   {  
      "acao":"audio",
      "acao_dados":{  
         "url_audio":"https://instaud.io/_/3K3k.mp3"
      }
   },
   {  
      "acao":"tts",
      "acao_dados":{  
         "mensagem":"lendo este texto",
         "resposta_usuario":"true",
         "tipo_voz":"br-Ricardo"
      }
   },
   {  
      "acao":"transferir",
      "opcao":1,
      "acao_dados":{  
         "numero_telefone":"4832830151",
         "bina":"4832830152"
      }
   },
    {  
      "acao":"ura",
      "opcao":2,
      "acao_dados":{  
         "ura_id":"1234"
      }
   }
]
response = client.composto.enviar("NUMERO-DESTINO", dados ,'BINA' , 'TAGS')
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Composto composto = new Composto(client);

JSONObject response = composto.enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags');
```

```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.composto.enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "composto criado com sucesso",
    "dados": {
        "id": 4921
    }
}
```

Para criar um Composto, basta informar o número de destino válido e um JSON com o composto. 

**POST:**  https://voice-api.zenvia.com/composto

**REQUEST:**

- **Headers**
1. Content-Type: application/json
2. Authorization: Access-Token: seu-token

Veja ao lado um exemplo de requisição. Os campos são:

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
                dados
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Objeto JSON com a estrutura de TTS, áudio, transferir e URA ¹
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="optional">Opcional</span>
            </td>
            <td>
                Aguardar uma resposta do destinatário
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
                tags
                <span class="optional">Opcional</span>
            </td>
            <td>
                Campo de texto que será atrelado à ligação e devolvido no momento da consulta.  Ex.: "clienteY"
            </td>
        </tr>
        <tr>
            <td>
                bina_inteligente
                <span class="optional">Opcional</span>
            </td>
            <td>
                Quando o valor for true, ao enviar o torpedo o número de telefone que aparecerá para o destino será um número com DDD de sua região. Veja <a href="https://centraltotalvoice.freshdesk.com/support/solutions/articles/35000132235-bina-inteligente-torpedo-de-voz">DDDs disponíveis</a>. 
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
                Retorna o ID do Composto
             </td>
        </tr>
    </tbody>
</table>

### Buscar Composto 

> Definição

```text
GET https://voice-api.zenvia.com/composto/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-api.zenvia.com/composto/1'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->composto->buscaCompost(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.composto.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Composo.Buscar(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.composto.get_by_id("123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Composto composto = new Composto(client);

JSONObject response = composto.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.composto.enviar("NUMERO-DESTINO", "URL-AUDIO")
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
	    "resposta_usuario": true,
	    "resposta": "8",
	    "tags": "clienteX",
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
        "bina": "+5548988888888"
    }
}
```

Caso deseje, após o envio de mensagens composto, você poderá realizar a busca do registro
pelo seu ID. 

Para buscar, é necessário o envio da chave do composto na URL da requisição seguido da autenticação Acess Token no Header.

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET** https://voice-api.zenvia.com/composto/{id}

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do Composto para recuperar os dados
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
                Retorna o objeto <a href="#objeto-composto">composto</a>
             </td>
        </tr>
    </tbody>
</table>

### Relatório Composto 

> Definição

```text
GET https://voice-api.zenvia.com/composto/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/composto/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->composto->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.composto.relatorio(data_inicial, data_final)
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

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.composto.get_relatorio("2017-12-08T11:00:32-02:00", "2017-12-08T11:00:32-02:00")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Audio composto = new Audio(client);

JSONObject response = composto.relatorio(dataInicial, dataFinal);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.composto.enviar("NUMERO-DESTINO", "URL-AUDIO")
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
	    "resposta_usuario": true,
	    "resposta": "8",
	    "tags": "clienteX",
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
        "bina": "+5548988888888"
      },
      {
	    "id": 433,
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
	    "resposta_usuario": true,
	    "resposta": "8",
	    "tags": "clienteX",
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
        "bina": "+5548988888888"
      }
    ]
  }
}
```

Para consultar os compostos enviados, basta informar o período desejado para que a API
retorne os dados.

Veja ao lado um exemplo de requisição. Os campos são:

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
                Retorna um array com objetos <a href="#objeto-composto">composto</a>
             </td>
        </tr>
    </tbody>
</table>

##  TTS: Leitura de Texto

> <b>TTS Endpoint</b>

```text
https://voice-api.zenvia.com/tts
```

Usando esse recurso, você pode converter uma mensagem de texto em fala. 

Dessa forma, quando o número de destino inserido atender, escutará uma voz falando a mensagem escrita por você. 

Algumas opções adicionais podem ser também enviadas:

- Aguardar uma resposta do usuário;
- Gravar o áudio da ligação;
- Inserir um número bina que aparecerá no momento da ligação.

### Objeto TTS:

> <b>TTS Endpoint</b>

```text
https://voice-api.zenvia.com/tts
```

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
    "mensagem": "Olá, se você gostaria de utilizar a zenvia, digite 1.",
    "resposta_usuario": true,
    "resposta": "1",
    "motivo_desconexao": null,
    "url_gravacao": "https://voice-api.zenvia.com/rec/123456789",
    "bina": "+5548988888888"
}
```

O objeto é um modelo JSON que contém a mensagem de texto enviada para ser convertida em uma mensagem de voz. 

Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

No atributo “status”, os seguintes valores podem ser retornados:

- Preparando
- Chamando
- Atendida
- Ocupado
- Sem resposta
- Congestionado
- Falha
- Cancelada
- Desconhecido 

#### Atributos
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro do TTS.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário que foi enviado o TTS.
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
                Data e hora que foi iniciado o processamento do TTS.
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
                Duração total em <i>segundos</i> da chamada, desde o início do processamento.
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
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Valor enviado identificando se aceita a resposta do usuário.¹
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
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em <a href="#codigos-de-motivos">motivos de desconecção</a>
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
        <tr>
              <td>
                  bina
                  <span class="attribute">string</span>
              </td>
              <td>
                    Número de telefone que aparece no identificador de quem recebe a chamada
              </td>
          </tr>
        <tr>
    </tbody>
</table>

### Criar TTS

> Definição

```text
POST https://voice-api.zenvia.com/tts
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero_destino":"+554888881111", "bina": "+554811111111", "mensagem":"Olá"}' \
             'https://voice-api.zenvia.com/tts'
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
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

Para criar um TTS, basta informar o número de destino válido e a mensagem que será falada quando o mesmo atender a ligação. 

**POST:** https://voice-api.zenvia.com/tts

**REQUEST:**

- **Headers**

1. **Content-Type:** application/json
2. **Authorization:** Access-Token: seu-token

Veja ao lado um exemplo de requisição. Os campos são:

#### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone que irá receber a chamada, formato DDD + Número. Exemplo: 4832830151.
             </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Mensagem que será falada quando o número destino atender a ligação. Exemplo: Olá, essa é a minha mensagem.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="optional">Opcional</span>
            </td>
            <td>
                Aguardar uma resposta do destinatário.
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
                Número de telefone que aparecerá no identificador de quem receber a chamada, formato DDD + Número. Exemplo: 4832830151
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
                Caso seja identificado caixa postal a ligação será derrubada antes que inicie a mensagem para a caixa postal. Esse serviço tem um custo adicional.
            </td>
        </tr>
        <tr>
            <td>
                bina_inteligente
                <span class="optional">Opcional</span>
            </td>
            <td>
                Quando o valor for true, ao enviar o torpedo o número de telefone que aparecerá para o destino será um número com DDD de sua região. Veja <a href="https://centraltotalvoice.freshdesk.com/support/solutions/articles/35000132235-bina-inteligente-torpedo-de-voz">DDDs disponíveis</a>. 
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
                Retorna o ID do TTS criado
             </td>
        </tr>
    </tbody>
</table>
¹ Lista de vozes disponíveis.
<ul>
    <li>br-Camila</li>
    <li>br-Vitoria</li>
    <li>br-Ricardo</li>
    <li>en-Joey</li>
    <li>en-Joanna</li>
    <li>fre-Celine</li>
    <li>fre-Mathieu</li>
    <li>ger-Vicki</li>
    <li>ger-Hans</li>
    <li>ita-Carla</li>
    <li>ita-Giorgio</li>
    <li>jap-Mizuki</li>
    <li>pol-Jan</li>
    <li>rus-Tatyana</li>
    <li>rus-Maxim</li>
    <li>esp-Conchita</li>
    <li>esp-Enrique</li>
</ul> 

## Buscar TTS

> Definição

```text
GET https://voice-api.zenvia.com/tts/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/tts/id-tts'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->tts->buscaTTS(id-tts);
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
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
    "mensagem": "Mensagem de teste",
    "resposta_usuario": true,
    "resposta": 2,
    "motivo_desconexao": "16. normal",
    "url_gravacao": "",
    "bina": "+5548988888888"
  }
}
```

Caso deseje, após o envio do TTS, você poderá realizar a busca do registro
pelo seu ID. 

Para buscar, é necessário o envio da chave do TTS na URL da requisição seguido da autenticação Acess Token no Header. 

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET** https://voice-api.zenvia.com/tts/{id}

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do TTS para recuperar os dados
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
                Retorna o objeto <a href="#objeto-tts">TTS</a>
             </td>
        </tr>
    </tbody>
</table>

## Relatório TTS

> Definição

```text
GET https://voice-api.zenvia.com/tts/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/tts/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
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
client = Cliente("seu-token", 'voice-api.zenvia.com')
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
        "resposta_usuario": false,
        "resposta": null,
        "motivo_desconexao": "16. normal",
        "url_gravacao": "",
        "bina": "+5548988888888"
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
        "resposta_usuario": false,
        "resposta": null,
        "motivo_desconexao": "17. ocupado",
        "url_gravacao": "",
        "bina": "+5548988888888"
      }
    ]
  }
}
```

Para consultar os TTSs enviados, basta informar o período desejado para que a API
retorne os dados.

Veja ao lado um exemplo de requisição. Os campos são:


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
        <tr>
            <td>
                destino
                <span class="required">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de destino da chamada.
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
                Retorna um array com objetos <a href="#objeto-audio">TTS</a>
             </td>
        </tr>
    </tbody>
</table>