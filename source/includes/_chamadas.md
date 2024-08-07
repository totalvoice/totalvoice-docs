# Chamadas

> Chamada Endpoint

```text
https://voice-api.zenvia.com/chamada
```

A funcionalidade **Chamada** permite que você crie chamadas perna A e perna B, podendo gravar as ligações, agendar e binar o seu próprio número.
Permite gerar relatório de chamadas, derrubar chamadas em andamento, transferir chamadas e avaliação de chamadas.


### Objeto Chamada

> <br>

> JSON

```json
{
    "id": 123,
    "data_criacao": "2018-08-02T10:49:30-03:00",
    "ativa": false,
    "url_gravacao": "https://urlgravacao.com.br/rec/audio.mp3",
    "cliente_id": 1,
    "conta_id": 1,
    "ramal_id_origem": 1,
    "tags": "minha-tags",
    "status_geral": "finalizada",
    "origem": {
      "data_inicio": null,
      "numero": "4000",
      "tipo": "ramal",
      "status": "atendida",
      "duracao_segundos": 10,
      "duracao": "00:00:10",
      "duracao_cobrada_segundos": 10,
      "duracao_cobrada": "00:00:10",
      "duracao_falada_segundos": 10,
      "duracao_falada": "00:00:10",
      "preco": 0.1,
      "motivo_desconexao": "indefinido"
    },
    "destino": {
      "data_inicio": "2018-08-02T10:49:29-03:00",
      "numero": "4001",
      "tipo": "ramal",
      "status": "atendida",
      "duracao_segundos": 29,
      "duracao": "00:00:29",
      "duracao_cobrada_segundos": 60,
      "duracao_cobrada": "00:01:00",
      "duracao_falada_segundos": 28,
      "duracao_falada": "00:00:28",
      "preco": 0.1,
      "motivo_desconexao": "indefinido"
    }
 }
```
Definição do objeto Chamada

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro da chamada.
             </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de criação do registro da chamada. Data e Hora no formato UTC
            </td>
        </tr>
        <tr>
            <td>
                ativa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Identifica se a chamada está ativa ou não
             </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                URL com áudio da gravação da chamada
             </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação do cliente referente a chamada
            </td>
        </tr>
        <tr>
            <td>
                conta_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação da Conta referente a chamada
            </td>
        </tr>
       	<tr>
            <td>
                ramal_id_origem
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal que originou a chamada referente a ligação, se houver.
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Informação adicional que pode ser retornada no objeto, como um ID Externo por exemplo. Você consegue enviar essa informação no
                Post da Chamada e recuperar posteriormente nessa consulta.
            </td>
        </tr>
        <tr>
            <td>
                detecta_caixa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Caso identificado caixa, a ligação será derrubada antes que a ligação seja atendida. Esse serviço tem um custo adicional.
            </td>
        </tr>
        <tr>
            <td>
                status_geral
                <span class="attribute">string</span>
            </td>
            <td>
                Status geral da Chamada.
                <ul>
                    <li>criada: chamada foi criada</li>
                    <li>curso: está em andamento</li>
                    <li>finalizada: chamada foi finalizada</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                origem / destino
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna os objetos <a href="#objeto-origem-destino">origem/destino</a>
            </td>
        </tr>
    </tbody>
</table>

### Objeto Origem Destino

> <br>

> JSON

```json
{
  "data_inicio": "2018-08-02T10:49:29-03:00",
  "numero": "4000",
  "tipo": "ramal",
  "status": "atendida",
  "duracao_segundos": 29,
  "duracao": "00:00:29",
  "duracao_cobrada_segundos": 60,
  "duracao_cobrada": "00:01:00",
  "duracao_falada_segundos": 28,
  "duracao_falada": "00:00:28",
  "preco": 0,
  "motivo_desconexao": "indefinido"
}
```

Definição do objeto **Origem/Destino**: Estes objetos contêm basicamente a mesma estrutura de informações com relação às chamadas. A **Origem**, contém as informações de quem originou
a ligação e o **Destino** de quem recebeu a ligação. É nesses objetos que você irá encontrar as informações de duração das chamadas, status e o preço que foi cobrado por cada perna.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora de início da chamada na Origem/Destino.
             </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="attribute">string</span>
            </td>
            <td>
                Número que irá receber a ligação e será o número de Origem/Destino.
             </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                Tipo da ligação:
                <ul>
                    <li>ramal: ligação para um ramal</li>
                    <li>movel: ligação para um celular</li>
                    <li>fixo: ligação para um número fixo</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status da ligação na Origem/Destino:
                <ul>
                    <li>atendida</li>
                    <li>sem resposta</li>
                    <li>ocupado</li>
                    <li>congestionado</li>
                    <li>falha</li>
                    <li>cancelada</li>
                    <li>não existe</li>
                </ul>
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
                    <li>7. chamada sendo entregue em canal ja estabelecido</li>
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
                    <li>98. mensagem não compatível com o estado da chamada não existente ou não implementada</li>
                    <li>97. mensagem não implementada</li>
                    <li>99. elemento não existente ou não implementada</li>
                    <li>97. mensagem não implementada</li>
                    <li>100. informação inválida no conteúdo dos elementos</li>
                    <li>101. mensagem não compatível com o estado da chamada</li>
                    <li>102. timeout</li>
                    <li>111. erro de protocolo</li>
                    <li>127. erro de conectividade</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Criar uma chamada
> Definição

```text
POST https://voice-api.zenvia.com/chamada
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' 
             --header 'Accept: application/json' 
             --header 'Access-Token: seu-token' 
             -d '{
                    "numero_origem":"+5510999999999",
                    "numero_destino":"+5510999999999",
                    "data_criacao":"2021-04-08T17:21:20Z",
                    "gravar_audio":"true",
                    "bina_origem":"+5510888888888",
                    "bina_destino":"+5510888888888",
                    "tags":"clienteUm",
                    "detecta_caixa_origem":"true"
                 }' 
             'https://voice-api.zenvia.com/chamada'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->chamada->ligar('+5510999999999', '+5510999999999');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.ligar("+5510999999999", "+5510999999999")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Chamada.Criar("+5510999999999", "+5510999999999", nil)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.enviar("+5510999999999", "+5510999999999")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);

JSONObject response = chamada.ligar("+5510999999999", "+5510999999999");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.ligar("+5510999999999", "+5510999999999")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "chamada criada com sucesso",
  "dados": {
    "id": 123123
  }
}
```
Basta informar o número de origem e destino.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_origem
                <span class="required">Obrigatório</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Número origem (perna A), recebe a chamada primeiro do número destino. Exemplo: +5510999999999
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
                <span class="attribute">string</span>
            </td>
            <td>
               Número destino (perna B), recebe a chamada após o número origem atender. Exemplo: +5510999999999
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Informe uma data e hora para agendar a chamada. vazio = liga imediatamente. Data e Hora no formato UTC
            </td>
        </tr>
       	<tr>
            <td>
                gravar_audio
                <span class="optional">Opcional</span>
                <span class="attribute">boolean</span>
            </td>
            <td>
                Flag que indica se o áudio da ligação deve ser gravado
            </td>
        </tr>
        <tr>
            <td>
                bina_origem
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA que será apresentado na chamada para o número origem (perna A). Formato E.164: [+][DDI][DDD][Número], exemplo: +5510999999999
            </td>
        </tr>
        <tr>
            <td>
                bina_destino
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA que será apresentado na chamada para o número destino (perna B). Formato E.164: [+][DDI][DDD][Número], exemplo: +5510999999999
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Tags ou comentários sobre esta chamada
            </td>
        </tr>
        <tr>
            <td>
                detecta_caixa_origem
                <span class="optional">Opcional</span>
                <span class="attribute">boolean</span>
            </td>
            <td>
                Desconecta automaticamente em até 3s caso caia em caixa postal (vivo, claro, tim, oi)
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
                Retorna o ID da chamada
             </td>
        </tr>
    </tbody>
</table>

## Desligando uma chamada
> Definição

```text
POST https://voice-api.zenvia.com/chamada/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
               --header 'Accept: application/json' \
               --header 'Access-Token: seu-token' \
               'https://voice-api.zenvia.com/chamada/123'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->chamada->encerrar(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.encerrar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Encerrar(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.deletar("123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);

JSONObject response = chamada.encerrar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.encerrar("+5510999999999", "http://foo.bar/audio.mp3")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "encerrando chamada",
  "dados": null
}
```
Basta informar o id da chamada ativa

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da chamada ativa
             </td>
        </tr>
    </tbody>
</table>

## Buscar uma chamada

> Definição

```text
GET https://voice-api.zenvia.com/chamada/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/chamada/123'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->chamada->buscaChamada(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Chamada.Buscar(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.get_by_id("123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);

JSONObject response = chamada.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.buscar(123)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
     "id": 123,
     "data_criacao": "2018-08-02T10:49:30-03:00",
     "ativa": false,
     "url_gravacao": "https://urlgravacao.com.br/rec/audio.mp3",
     "cliente_id": 1,
     "conta_id": 1,
     "ramal_id_origem": 1,
     "tags": "minha-tags",
     "status_geral": "finalizada",
     "origem": {
       "data_inicio": null,
       "numero": "4000",
       "tipo": "ramal",
       "status": "atendida",
       "duracao_segundos": 10,
       "duracao": "00:00:10",
       "duracao_cobrada_segundos": 10,
       "duracao_cobrada": "00:00:10",
       "duracao_falada_segundos": 10,
       "duracao_falada": "00:00:10",
       "preco": 0.1,
       "motivo_desconexao": "indefinido",
       "bina_origem" : "+5510888888888 "
     },
     "destino": {
       "data_inicio": "2018-08-02T10:49:29-03:00",
       "numero": "4001",
       "tipo": "ramal",
       "status": "atendida",
       "duracao_segundos": 29,
       "duracao": "00:00:29",
       "duracao_cobrada_segundos": 60,
       "duracao_cobrada": "00:01:00",
       "duracao_falada_segundos": 28,
       "duracao_falada": "00:00:28",
       "preco": 0.1,
       "motivo_desconexao": "indefinido",
       "bina_destino" : "+5510888888888 "
     }
  }
}
```

Após o envio de chamadas, você poderá realizar a busca do registro pelo seu ID.

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada para recuperar os dados
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
                Retorna o objeto <a href="#objeto-chamada">chamada</a>
             </td>
        </tr>
    </tbody>
</table>


## Buscar gravação da chamada

> Definição

```text
GET https://voice-api.zenvia.com/chamada/{id}/gravacao
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/chamada/1/gravacao'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->chamada->downloadGravacao(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.downloadGravacao(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Chamada.DownloadGravacao(123)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.get_gravacao_chamada("123")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);

JSONObject response = chamada.downloadGravacao(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.download_gravacao(123)
```
> Response

```json
{
  "access-control-allow-origin": "*",
  "connection": "Keep-Alive",
  "content-length": "1",
  "content-type": "audio/mpeg",
  "date": "Thu, 02 Aug 2018 19:06:54 GMT",
  "keep-alive": "timeout=5, max=100"
}
```

Você poderá realizar o download do áudio da chamada. Esta funcionalidade estará disponível se você setou a opção "**Gravar Audio**" igual a True no momento da criação da chamada.

##### Request
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada para recuperar os dados da gravação
             </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                response
                <span class="attribute">header</span>
            </td>
            <td>
                Irá retornar um HTTP Response com Cabeçalho de Resposta: Content-Type: "audio/mpeg"
             </td>
        </tr>
    </tbody>
</table>

## Relatório Chamadas

> Definição

```text
GET https://voice-api.zenvia.com/chamada/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/chamada/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->chamada->relatorio($dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.relatorio(dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Relatorio.Gerar(dataInicial, dataFinal, filtros)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.get_relatorio("2017-12-08T11:00:32-02:00", "2017-12-08T11:00:32-02:00")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.relatorio(dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.relatorio(data_inicial, data_final, filtros)
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
        "id": 123,
        "data_criacao": "2018-08-02T10:32:22-03:00",
        "ativa": false,
        "url_gravacao": "https://urlgravacao.com.br/rec/audio.mp3",
        "cliente_id": 1,
        "conta_id": 1,
        "ramal_id_origem": 16,
        "tags": null,
        "status_geral": "finalizada",
        "origem": {
          "data_inicio": null,
          "numero": "4000",
          "tipo": "ramal",
          "status": null,
          "duracao_segundos": 0,
          "duracao": "00:00:00",
          "duracao_cobrada_segundos": 0,
          "duracao_cobrada": "00:00:00",
          "duracao_falada_segundos": 0,
          "duracao_falada": "00:00:00",
          "preco": 0,
          "motivo_desconexao": "indefinido",
          "bina_origem" : "++5510888888888 "
        },
        "destino": {
          "data_inicio": "2018-08-02T10:32:22-03:00",
          "numero": "4001",
          "tipo": "ramal",
          "status": "atendida",
          "duracao_segundos": 8,
          "duracao": "00:00:08",
          "duracao_cobrada_segundos": 60,
          "duracao_cobrada": "00:01:00",
          "duracao_falada_segundos": 8,
          "duracao_falada": "00:00:08",
          "preco": 0,
          "motivo_desconexao": "indefinido",
          "bina_destino" : "+5510888888888 "

        }
      }
    ]
  }
}
```

Você pode consultar as Chamadas enviadas. Basta informar o período desejado para que a API retorne os dados.

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
                origem
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de origem para filtrar. Formato E.164: [+][DDI][DDD][Número]. Ex.: +5510999999999
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de destino para filtrar. Formato E.164: [+][DDI][DDD][Número]. Ex.: +5510999999999
            </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
            </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="optional">Opcional</span>
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
                Retorna um array com objetos <a href="#objeto-chamada">chamada</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>



## Escuta de Chamadas

> Definição

```text
GET https://voice-api.zenvia.com/chamada/{id}/escuta
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero":"+5510999999999", "modo": 1}' \
             'https://voice-api.zenvia.com/chamada/123/escuta'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->chamada->escutar(123, '+5510999999999', 1);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.escutar(123, "+5510999999999", 1)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Escutar(123, "+5510999999999", 1)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.escuta_chamada("123", '+5510999999999',"1")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.escutar(123, "+5510999999999", 1);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.escutar(123, "+5510999999999", 1)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "escuta criada com sucesso"
}
```

Você pode realizar uma escuta para uma chamada que está **ativa** (Beta).

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada a ser escutada
            </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do seu telefone
            </td>
        </tr>
        <tr>
            <td>
                modo
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Modo de Escuta
                <ul>
                    <li>1 = escuta</li>
                    <li>2 = sussurro</li>
                    <li>3 = conferência</li>
                </ul>
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


## Transferência de Chamadas

> Definição

```text
POST https://voice-api.zenvia.com/chamada/{id}/transfer
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            -d '{"numero":"+5510999999999", "perna": "destino"}' \
            'https://voice-api.zenvia.com/chamada/123/transfer'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->chamada->transferir(123, '+5510999999999', 'destino');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.transferir(123, "+5510999999999", "destino")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Transferir(123, "+5510999999999", "destino")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.transferir("123", "+5510999999999", "destino")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.transferir(123, "+5510999999999", "destino");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.transferir(123, "+5510999999999", "destino")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "a chamada está sendo transferida"
}
```

Transfere a origem ou destino para outro telefone e desconecta a outra perna (Beta).

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada a ser transferida
            </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número ao qual a chamada será transferida
            </td>
        </tr>
        <tr>
            <td>
                perna
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Qual perna da chamada será transferida?
                <ul>
                    <li>origem</li>
                    <li>destino</li>
                </ul>
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


## Avaliação de Chamadas

> Definição

```text
GET https://voice-api.zenvia.com/chamada/{id}/avaliar
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            -d '{"numero":"5", "comentario": "muito boa"}' \
            'https://voice-api.zenvia.com/chamada/123/avaliar'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->chamada->avaliar(123, '5', 'muito boa');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.avaliar(123, "5", "muito boa")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Avaliar(123, "5", "muito boa")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.avaliar("123", "5", "muito boa")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.avaliar(123, "5", "muito boa");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.avaliar(123, "5", "muito boa")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "chamada avaliada com sucesso"
}
```

Avalie a Chamada para ter estatísticas de qualidade de seus clientes.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada a ser avaliada
            </td>
        </tr>
        <tr>
            <td>
                nota
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nota de 1 a 5
            </td>
        </tr>
        <tr>
            <td>
                comentario
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Texto de até 1000 caracteres com a avaliação.
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


