# Composto

> Composto Endpoint

```text
https://voice-api.zenvia.com/composto
```

A funcionalidade de **Envio de Composto**, permite que você envie mensagens de voz por telefone misturando gravações de áudio MP3 com TTS e também realize algumas outras funções de central telefônica como coletar DTMF e transferir.

Exemplo: Envie uma mensagem para confirmar uma consulta ou transferir a pessoa para o reagendamento: "Você possui uma consulta agendada para amanhã às 18h. Pressione 1 para confirmar ou 2 para ser remarcado". Quando o usuário pressionar a opção 2, ele já é transferido para o telefone de remarcação.
JSON DADOS do exemplo:


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
						"numero_telefone": "+5510999999999",
						 "bina": "+5510888888888" 
					}
	} 
]

```

O composto aceita um JSON com as seguintes opções:
<ul>
    <li>audio</li>
    <li>tts</li>
    <li>transferir</li>
    <li>ura</li>
</ul>

Você pode ver como funciona o envio de dados vendo a utlização em <a href="#criar-um-composto">curl</a>

As regras para o arquivo de áudio são as mesmas:

####Formatos aceitos:
- .mp3
- .wav

####Tamanho máximo:
- 5MB

## Objeto Composto

> <br>

> JSON

```json
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
    "resposta_usuario": true,
    "resposta": "8",
	"tags": "clienteX",
    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
    "bina": "+55108888888888"
}
```

Definição do objeto Composto

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



## Criar um Composto 

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
                "numero_destino":"+5510999999999",
                "bina": "+5510888888888",
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
                            "numero_telefone":"+5510999999999",
                            "bina":"+5510888888888"
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

$dados	= '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"+5510999999999","bina":"+5510888888888"}}]';
$bina	= '11987654321';
$tags	= 'clienteY';

$response = $client->composto->enviar('NUMERO-DESTINO', $dados, $bina, $tags);
```


```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.composto.enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"+5510999999999","bina":"+5510888888888"}}]','11987654321' , 'tags')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Composto.Enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"+5510999999999","bina":"+5510888888888"}}]','11987654321' , 'tags')
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
         "numero_telefone":"+5510999999999",
         "bina":"+5510888888888"
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

JSONObject response = composto.enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"+5510999999999","bina":"+5510888888888"}}]','11987654321' , 'tags');
```

```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.composto.enviar("NUMERO-DESTINO", '[{"acao":"audio","acao_dados":{"url_audio":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"+5510999999999","bina":"+5510888888888"}}]','11987654321' , 'tags')
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
Basta informar o número de destino válido e um JSON com o composto

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone que irá receber a chamada, formato E.164: [+][DDI][DDD][Número] exemplo: +5510999999999
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
                Número de telefone que aparecerá no identificador de quem receber a chamada, formato E.164: [+][DDI][DDD][Número] exemplo: +5510999999999
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

¹ Você pode ver como funciona o envio de dados vendo a utlização em <a href="#criar-um-composto">curl</a>


## Buscar Composto 

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
	    "resposta_usuario": true,
	    "resposta": "8",
	    "tags": "clienteX",
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
        "bina": "+55108888888888"
    }
}
```

Após o envio de mensagens composto, você poderá realizar a busca do registro pelo seu ID.

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


## Relatório composto

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
	    "resposta_usuario": true,
	    "resposta": "8",
	    "tags": "clienteX",
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
        "bina": "+55108888888888"
      },
      {
	    "id": 433,
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
	    "resposta_usuario": true,
	    "resposta": "8",
	    "tags": "clienteX",
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
        "bina": "+55108888888888"
      }
    ]
  }
}
```


Você pode consultar os compostos enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

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

<br>
<br>
