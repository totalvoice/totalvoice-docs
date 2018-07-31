# Composto

> Composto Endpoint

```text
https://api.totalvoice.com.br/composto
```

A funcionalidade de **Envio de Composto**, permite que você envie mensagens de voz por telefone misturando gravações de áudio MP3 com TTS e também realize algumas outras funções de central telefônica como coletar DTMF e transferir.

Exemplo: Envie uma mensagem para confirmar uma consulta ou transferir a pessoa para o reagendamento: "Você possui uma consulta agendada para amanhã 18h. Aperte 1 para confirmar ou 2 para ser remarcar". Quando o usuário pressionar a opção 2, ele já é transferido para o telefone de remarcação.
JSON DADOS do exemplo:


```json
[
	{
		acao: composto,
		acao_dados: {
						url_composto: http://fooooo.bar/composto.mp3
					}
	},
	{
		acao: tts,
		acao_dados: {
						"mensagem": "Você possui uma consulta agendada para amanhã 18h. Aperte 1 para confirmar ou 2 para ser remarcar",
						"velocidade": "-4",
						"resposta_usuario": "true",
						"tipo_voz": "br-Ricardo"
					}
	},
	{
		acao: transferir,
		opcao: 2,
		acao_dados: {
						"numero_telefone": "1132830151",
						 "bina": "1132830152" 
					}
	} 
]

```

O composto aceita um JSON com as seguintes opções:
- composto
- tts
- transferir

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
    "url_gravacao": "http://fooooo.bar/gravacao.mp3"
	
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
<br>
1. telefone não existe<br>
2. sem rota para a rede de destino<br>
3. sem rota para o destino<br>
4. prefixo incorreto<br>
6. canal inaceitavel<br>
7. chamada sendo entregue em canal ja estabelecido<br>
8. call peemption<br>
14. telefone portado para outra operadora<br>
16. normal<br>
17. ocupado<br>
18. sem resposta<br>
19. sem resposta - mas chamou<br>
20. assinante ausente<br>
21. chamada rejeitada<br>
22. este numero mudou<br>
23. redirecionado para novo destino<br>
26. atendido em outro lugar<br>
27. destino nao esta funcionando<br>
28. formato invalido de numero<br>
29. rejeitado<br>
30. resposta para status enquiry<br>
31. normal, nao especificado<br>
34. sem canal disponivel<br>
38. rede com problema<br>
41. falha temporaria<br>
42. equipamento congestionado<br>
44. canal requisitado nao esta disponivel<br>
50. nao cadastrado<br>
52. chamada sainte barrada<br>
54. chamada entrante barrada<br>
57. capacidade nao autorizada<br>
58. erro de midia ou parametros incompativeis<br>
65. capacidade do portador nao implementada<br>
66. tipo de canal nao implementado<br>
69. nao implementado<br>
81. valor de referencia invalido<br>
88. destino incompativel<br>
95. mensagem invalida nao especificada<br>
96. informacao obrigatoria nao presente<br>
97. mensagem nao implementada<br>
98. mensagem nao compativel com o estado da chamada ou nao existente ou nao implementada<br>
99. elemento nao existente ou nao implementada<br>
100. informacao invalida no conteudo dos elementos<br>
101. mensagem nao compativel com o estado da chamada<br>
102. timeout<br>
111. erro de protocolo<br>
127. erro de conectividade<br>

            </td>
        </tr>


    </tbody>
</table>



## Criar um Composto 

> Definição

```text
POST https://api.totalvoice.com.br/composto
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
			 --header 'Accept: application/json' \
			 --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
			 -d '{"numero_destino":"1132830151","dados":[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}],"bina":"4832830151","gravar_composto":false,"tags":"clienteX"}' \
			 'https://api.totalvoice.com.br/composto'
```


```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$dados	= '[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]';
$bina	= '11987654321';
$tags	= 'clienteY';

$response = $client->composto->enviar('NUMERO-DESTINO', $dados, $bina, $tags);
```


```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.composto.enviar("NUMERO-DESTINO", '[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Composto.Enviar("NUMERO-DESTINO", '[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.composto.enviar("NUMERO-DESTINO", '[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Composto composto = new Composto(client);

JSONObject response = composto.enviar("NUMERO-DESTINO", '[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags');
```

```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.composto.enviar("NUMERO-DESTINO", '[{"acao":"composto","acao_dados":{"url_composto":"http://fooooo.bar/composto.mp3"}},{"acao":"tts","acao_dados":{"mensagem":"lendo este texto","velocidade":"-4","resposta_usuario":"true","tipo_voz":"br-Ricardo"}},{"acao":"transferir","opcao":1,"acao_dados":{"numero_telefone":"4832830151","bina":"4832830152"}}]','11987654321' , 'tags')
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
                Número do telefone que irá receber a chamada, formato DDD + Número exemplo: 4832830151
             </td>
        </tr>
        <tr>
            <td>
                dados
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Objeto JSON com a estrutura de TTS, áudio e transferir
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
                gravar_composto
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
                Campo de texto que será atrelado à ligação e devolvio no momento da ocnsulta.  Ex.: "clienteY"
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




## Buscar Composto 

> Definição

```text
GET https://api.totalvoice.com.br/composto/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://api.totalvoice.com.br/composto/1'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->composto->buscaCompost(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.composto.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Composo.Buscar(123)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.composto.get_by_id(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
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
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3"
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
GET https://api.totalvoice.com.br/composto/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://api.totalvoice.com.br/composto/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$response = $client->composto->relatorio($dataInicial, $dataFinal);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.composto.relatorio(data_inicial, data_final)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
 response, err := client.Audio.Relatorio.Gerar(dataInicial, dataFinal)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.composto.get_relatorio(data_inicio, data_fim)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
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
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3"
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
	    "url_gravacao": "http://fooooo.bar/gravacao.mp3"

      }

    ]
  }
}
```


Você pode consultar os composto enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-composto">composto</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

