# APIs de Ligações

## Chamadas

Usando esse recurso, será possível criar chamadas perna A e perna B, podendo gravar as ligações, agendar e binar o seu próprio número. 

Além disso, também permite:

- Gerar relatório de chamadas;
- Derrubar chamadas em andamento;
- Transferir chamadas;
- Obter avaliação de chamadas.


### Objeto Chamadas

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
O objeto é um modelo JSON que retorna informações sobre as chamadas. 

É necessário conter os parâmetros solicitados abaixo na tabela Atributos para, ao final, a API fazer o retorno.


**Endpoint:** <a href = "https://voice-api.zenvia.com/chamada">https://voice-api.zenvia.com/chamada</a>

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

### Objeto Origem/Destino

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

O objeto é um modelo JSON que retorna informações sobre a **origem** de quem originou a ligação e o **destino** de quem recebeu. 

Nestes dois objetos você encontrará as informações sobre **duração das chamadas, status** e **preço** que foi cobrado por cada perna. 

É necessário conter os parâmetros solicitados abaixo na tabela Atributos para, ao final, a API fazer o retorno.

**Endpoint:** <a href = "https://voice-api.zenvia.com/chamada">https://voice-api.zenvia.com/chamada</a>

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

### Criar Chamada

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
                    "numero_origem":"4811111111",
                    "numero_destino":"4811111112",
                    "data_criacao":"2021-04-08T17:21:20Z",
                    "gravar_audio":"true",
                    "bina_origem":"4832830151",
                    "bina_destino":"4832830152",
                    "tags":"clienteUm",
                    "detecta_caixa_origem":"true"
                 }' 
             'https://voice-api.zenvia.com/chamada'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');

$response = $client->chamada->ligar('4811111111', '4811111112');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.ligar("4811111111", "4811111112")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Chamada.Criar("4811111111", "4811111112", nil)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.enviar("4811111111", "4811111112")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);

JSONObject response = chamada.ligar("4811111111", "4811111112");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.ligar("4811111111", "4811111112")
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

Para criar uma chamada, basta informar o número de origem e o destino. 

**POST:**  <a href = "https://voice-api.zenvia.com/chamada">https://voice-api.zenvia.com/chamada</a>

**REQUEST:**

- **Headers**

1. **Content-Type:** application/json
2. **Authorization:** Access-Token: seu-token

Veja ao lado um exemplo de requisição. Utilize os campos abaixo para informar à nossa API as informações que irá enviar:


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
                Número origem (perna A), recebe a chamada primeiro do número destino. Exemplo: 4832830151
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
                <span class="attribute">string</span>
            </td>
            <td>
               Número destino (perna B), recebe a chamada após o número origem atender. Exemplo: 4832830151
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
                Número de BINA que será apresentado na chamada para o número origem (perna A). Formato DDD + Número, exemplo: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                bina_destino
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Número de BINA que será apresentado na chamada para o número destino (perna B). Formato DDD + Número, exemplo: 4832830151
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

### Desligar Chamada

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
puts @client.chamada.encerrar("4811111111", "http://foo.bar/audio.mp3")
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

Para desligar uma chamada, basta informar o ID da mesma.

Método utilizado: 

**POST** <a href = "https://voice-api.zenvia.com/chamada/{id}">https://voice-api.zenvia.com/chamada/{id}</a>

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


### Buscar Chamada
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
       "bina_origem" : "+27921815114"
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
       "bina_destino" : "+73970934836"
     }
  }
}
```

Para buscar uma chamada, basta informar o ID da mesma após o seu envio.

Método utilizado: 

**GET**  <a href = "https://voice-api.zenvia.com/chamada/{id}">https://voice-api.zenvia.com/chamada/{id}</a>

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

### Buscar gravação da Chamada

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

Para buscar uma gravação e realizar o download do áudio da chamada, é preciso antes setar a opção **"Gravar Audio" igual a True** no momento da criação da chamada. 

Método utilizado: 

**GET**  <a href = "https://voice-api.zenvia.com/chamada/{id}/gravacao">https://voice-api.zenvia.com/chamada/{id}/gravacao</a>

Veja ao lado um exemplo de requisição. Os campos são: 

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

### Relatório Chamadas

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
          "bina_origem" : "+27921815114"
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
          "bina_destino" : "+73970934836"

        }
      }
    ]
  }
}
```

Para consultar as chamadas enviadas,, basta informar o período desejado para que a API retorne os dados.

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
                origem
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de origem para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de destino para filtrar. Ex.: 4832830151
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

### Escutar Chamadas

> Definição

```text
GET https://voice-api.zenvia.com/chamada/{id}/escuta
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero":"4811111111", "modo": 1}' \
             'https://voice-api.zenvia.com/chamada/123/escuta'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->chamada->escutar(123, '4811111111', 1);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.escutar(123, "4811111111", 1)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Escutar(123, "4811111111", 1)
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.escuta_chamada("123", '4811111111',"1")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.escutar(123, "4811111111", 1);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.escutar(123, "4811111111", 1)
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

Para realizar uma escuta para uma chamada que está ativa, basta informar o ID da mesma.

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/chamada/{id}/escuta">https://voice-api.zenvia.com/chamada/{id}/escuta</a>

Veja ao lado um exemplo de requisição. Os campos são: 

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

### Transferir Chamadas

> Definição

```text
POST https://voice-api.zenvia.com/chamada/{id}/transfer
```

> Request

```shell--curl
curl -X POST --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            -d '{"numero":"4811111111", "perna": "destino"}' \
            'https://voice-api.zenvia.com/chamada/123/transfer'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->chamada->transferir(123, '4811111111', 'destino');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.chamada.transferir(123, "4811111111", "destino")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.Chamada.Transferir(123, "4811111111", "destino")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.chamada.transferir("123", "4811111111", "destino")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.transferir(123, "4811111111", "destino");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.chamada.transferir(123, "4811111111", "destino")
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

Para transferir a origem ou destino para outro telefone e desconectar a outra perna (Beta), basta informar o ID da chamada.

Método utilizado: 

**POST**  <a href = "https://voice-api.zenvia.com/chamada/{id}/transfer">https://voice-api.zenvia.com/chamada/{id}/transfer</a>

Veja ao lado um exemplo de requisição. Os campos são: 

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


###  Avaliar Chamadas

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

Para avaliar a chamada e obter estatísticas de qualidade de seus clientes, basta informar o ID da chamada.

Método utilizado: 

**GET**  <a href = "https://voice-api.zenvia.com/chamada/{id}/avaliar">https://voice-api.zenvia.com/chamada/{id}/avaliar</a>

Veja ao lado um exemplo de requisição. Os campos são: 

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

## Conferências

> Conferência Endpoint

```text
https://voice-api.zenvia.com/conferencia
```

Usando esse recurso, você poderá criar salas privadas e receber um ID para ser utilizado ao realizar chamadas. Ao serem atendidas, estas chamadas se conectam com as conferências. 

### Objeto Conferências

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
                  "numero": "4832830151",
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

O objeto é um modelo JSON que retorna a lista de chamadas da conferência. 

Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:**  <a href = "https://voice-api.zenvia.com/conferencia">https://voice-api.zenvia.com/conferencia</a>


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

### Objeto Chamada da Conferência

> JSON

```json
{
    "id": 46132,
    "conferencia_id" : 432,
    "url_gravacao": "http://fooooo.bar/gravacao.mp3",
    "numero": "4832830151",
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

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:**  <a href = "https://voice-api.zenvia.com/conferencia">https://voice-api.zenvia.com/conferencia</a>

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

### Criar Conferência 

> Definição

```text
POST https://voice-api.zenvia.com/conferencia
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"numero_destino":"4811111111","url_conferencia":"http://foo.bar/conferencia.mp3"}' \
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

client.conferencia.enviar("4811111111", "http://foo.bar/conferencia.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Conferencia.Enviar("4811111111", "http://foo.bar/conferencia.mp3", false, "")
```
```python
from totalvoice.cliente import Cliente

client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.conferencia.cria_conferencia()

```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Conferencia conferencia = new Conferencia(client);

JSONObject response = conferencia.enviar("4811111111", "http://foo.bar/conferencia.mp3");
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

Para criar uma conferência, basta chamar o método cria_conferencia para criar o id da mesma. 

**POST:**   <a href = "https://voice-api.zenvia.com/conferencia">https://voice-api.zenvia.com/conferencia</a>

**REQUEST:**

- **Headers**

1. **Content-Type:** application/json
2. **Authorization:** Access-Token: {{access-token}} 

Veja ao lado um exemplo de requisição. No campo ID, o response retorna o ID da conferência. 


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

### Buscar Conferência

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
        "url_conferencia": "http://fooooo.bar/conferencia.mp3",
        "resposta_usuario": true,
        "resposta": "8"
    }
}
```

Caso deseje, após o envio de mensagens de conferência, você poderá realizar a busca do registro pelo seu ID. 

Para buscar, é necessário o envio da chave da fila na URL da requisição seguido da autenticação Acess Token no Header. 

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET**  <a href = "https://voice-api.zenvia.com/conferencia/{id}">https://voice-api.zenvia.com/conferencia/{id}</a>

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

### Encerrar Conferência

Para encerrar uma conferência, basta informar o período desejado e, por parâmetro, o ID da conferência que deseja encerrar.

**Método utilizado:** 

**DELETE**  <a href = "https://voice-api.zenvia.com/conferencia/{id}">https://voice-api.zenvia.com/conferencia/{id}</a>

### Relatório Conferência

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
        "url_conferencia": "http://fooooo.bar/conferencia.mp3",
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
        "url_conferencia": "http://fooooo.bar/conferencia.mp3",
        "resposta_usuario": true,
        "resposta": null
      }
    ]
  }
}
```

Para consultar as conferências, basta informar o período desejado para que a API retorne os dados.

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
                Retorna um array com objetos <a href="#objeto-conferencia">conferência</a>
             </td>
        </tr>
    </tbody>
</table>

## Webphone

> Webphone End Point

```text
https://voice-api.zenvia.com/webphone
```

Webphone é uma maneira de se conectar a um Ramal diretamente por um computador. Todo ramal tem uma URL pela qual é possível acessar o Webphone sem precisar se conectar à plataforma da ZenAPI. 

Ele é muito utilizado em integrações para implementar ligações diretamente em um software ou sistema de uma maneira fácil.

Há três tipos de Webphone:

1. Floating: quando você vai abrir o Webphone em um popup;
2. Embedded: se o Webphone ficará embutido no site / sistema;
3. Hidden: sem interface, apenas funções Javascript.

Um webphone é vinculado diretamente a um Ramal.

### Consultar URL Webphone

> Definição

```text
GET https://voice-api.zenvia.com/webphone
```

Para consultar a URL do Webphone de um determinado Ramal, basta enviar os parâmetros para pré-configuração do webphone. 

A URL gerada vem com um código único para acesso daquele Webphone, sem ser necessário login na plataforma da ZenAPI.


> <br/>Request

```shell--curl
curl 'https://voice-api.zenvia.com/webphone?ramal=4000' \
    -X GET \
    --header 'Access-Token: Seu_Token'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');

$webphone_dados = array("ramal" => 4000);
$response = $client->central->webphone($webphone_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

var webphone_dados = { 
    ramal: 4000
};
client.central.webphone(webphone_dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("Seu_Token")

m := map[interface{}]interface{}{}
m["ramal"] = 4000

response, err := client.Ramal.Webphone(m)
```
```python
client = Cliente("Seu_Token", 'voice-api.zenvia.com')
response = client.webphone.get_webphone("floating", None, 4000)
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
Central central = new Central(client);

JSONObject webphone_dados = new JSONObject();
webphone_dados.put("ramal", 4000);

JSONObject response = central.webphone(webphone_dados);
```

> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "url webphone",
    "dados": {
        "url": "https://voice-api.zenvia.com/w3/?key=XXXXXXXXXXXXXXXXXXXXXX83b3420&pop=1"
    }
}
```

##### Request Query

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
               Identificador único do Ramal que você deseja usar no Webphone, obrigatório caso não for informar o campo ramal.
            </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
               Número do Ramal que você deseja buscar o Webphone, obrigatório caso não for informar o campo id_ramal.
            </td>
        </tr>
        <tr>
            <td>
                ligar_para
                <span class="optional">Opcional</span>
            </td>
            <td>
               Se você deseja que o Webphone já disque automaticamente para algum número quando abrir, deverá informar o número neste campo.
            </td>
        </tr>
        <tr>
            <td>
                fechar_fim
                <span class="optional">Opcional</span>
            </td>
            <td>
                Se você quiser que o Webphone feche ao fim da ligação deve colocar esse campo como true;
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="optional">Opcional</span>
            </td>
            <td>
                Tipo do Webphone, poderá ser: floating, embedded, hidden, por padrão irá o Floating.
            </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                url
                <span class="attribute">string</span>
            </td>
            <td>
                Retorna a URL completa do Webphone do Ramal desejado. 
             </td>
        </tr>
    </tbody>
</table>

### Criar Webphone

Para criar um webphone, utilize nosso exemplo localizado em <a href = "https://github.com/totalvoice/webphone-js">Exemplo Webphone</a>.

#### Funções do Webphone

```javascript
function conectar(){
                webphone.contentWindow.postMessage({message : 'conectar'}, '*');
            }
```



```javascript
function desconectar(){
                webphone.contentWindow.postMessage({message : 'desconectar'}, '*');
            }
```



```javascript
function chamaNumero(numero) {
                webphone.contentWindow.postMessage({
                    message: 'chamaNumero',
                    'numero': numero
                }, '*');
            }
```



```javascript
function atender() {
                webphone.contentWindow.postMessage({
                    message: 'answer'
                }, '*');
            }
```



```javascript
function desligaChamada() {
                webphone.contentWindow.postMessage({
                    message: 'hangup'
                }, '*');
            }
```



```javascript
function enviaDTMF(meuDTMF) {
                webphone.contentWindow.postMessage({
                    message: 'enviaDTMF',
                    'dtmf': meuDTMF
                }, '*');
            }
```



```javascript
function mute() {
                webphone.contentWindow.postMessage({
                    message: 'mute'
                }, '*');
            }
```



```javascript
function transferir(numeroTelefone) {
                webphone.contentWindow.postMessage({
                    message: 'transferir',
                    'numeroTelefone': numeroTelefone
                }, '*');
            }
```



```javascript
function transferirConsulta(numeroTelefone) {
                webphone.contentWindow.postMessage({
                    message: 'transferirConsulta',
                    'numeroTelefone': numeroTelefone
                }, '*');
            }
```



```javascript
function recstart() {
                webphone.contentWindow.postMessage({
                    message: 'recStart'
                }, '*');
            }
```



```javascript
function recstop() {
                webphone.contentWindow.postMessage({
                    message: 'recStop'
                }, '*');                
            }
```

```javascript
function pausarNaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'pausarNaFila',
                filaId: filaId
                }, '*');
            }
```

```javascript
function despausarNaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'despausarNaFila',
                filaId: filaId
                }, '*');
            }
```

```javascript
function entrarNaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'entrarNaFila',
                filaId: filaId
                }, '*');
            }
```

```javascript
function sairDaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'sairDaFila',
                filaId: filaId
                }, '*');
            }
```

<table class="table-parameters">
    
    <tbody>
        <tr>
            <td>
                <b>conectar()<b>
            </td>
            <td>
                Conecta o webphone
            </td>
        </tr>
        

        <tr>
             <td>
                <b>desconectar()<b>
            </td>
            <td>
                Desconecta o webphone
            </td>
        </tr>
        

        <tr>
            <td>
                <b>chamaNumero(numero)<b>
            </td>
            <td>
                Telefona para o número/ramal destino
            </td>
        </tr>
        <tr>
            <td>
                <b>atender()<b>
            </td>
            <td>
                Atender chamada
            </td>
        </tr>
        <tr>
            <td>
                <b>desligaChamada()<b>
            </td>
            <td>
                Encerra chamada ativa
            </td>
        </tr>
        <tr>
            <td>
                <b>enviaDTMF(meuDTMF)<b>
            </td>
            <td>
                Envia um DTMF(número ou caracter) através de uma tecla. Números de 0 à 9, Asterisco(*) ou Sustenido(#).
            </td>
        </tr>
        <tr>
            <td>
                <b>mute()<b>
            </td>
            <td>
                Microfone fica mudo
            </td>
        </tr>
        <tr>
            <td>
                <b>transferir(numeroTelefone)<b>
            </td>
            <td>
                Transferir ligação sem consulta
            </td>
        </tr>
        <tr>
            <td>
                <b>transferirConsulta(numeroTelefone)<b>
            </td>
            <td>
                Transferir ligação com consulta
            </td>
        </tr>
        <tr>
            <td>
                <b>recstart()<b>
            </td>
            <td>
                Inicia a gravação parcial de uma chamada
            </td>
        </tr>
        <tr>
            <td>
                <b>recstop()<b>
            </td>
            <td>
                Encerra a gravação parcial da chamada
            </td>
        </tr>

        <tr>
            <td>
                <b>pausarNaFila(filaId)<b>
            </td>
            <td>
                Pausa um ramal na fila `filaId` ou em todas as filas caso nenhum valor seja passado
            </td>
        </tr>

        <tr>
            <td>
                <b>despausarNaFila(filaId)<b>
            </td>
            <td>
                Despausa um ramal na fila `filaId` ou em todas as filas caso nenhum valor seja passado
            </td>
        </tr>

        <tr>
            <td>
                <b>entrarNaFila(filaId)<b>
            </td>
            <td>
                Insere o ramal na fila definida em `filaId`
            </td>
        </tr>

        <tr>
            <td>
                <b>sairDaFila(filaId)<b>
            </td>
            <td>
                Remove o ramal na fila definida em `filaId`
            </td>
        </tr>
    </tbody>
</table>

### Eventos do Webphone

Caso queira adicionar um evento, veja abaixo na tabela a lista de todos os disponíveis e, ao lado, o exemplo de requisições. 

```javascript

if (e.data.message == 'chegandoChamada') {
    alert('Chegando Chamada de ' + e.data.numeroChegando + ' para: ' + 
    e.data.numeroDestino + ' chamada_recebida_id: ' + e.data.chamadaRecebidaId);
}


if (e.data.message == 'status') {
    alert('Status: ' + e.data.status);
}


if (e.data.message == 'chamada_id') {
    alert('Chamada_id: ' + e.data.chamada_id);
}


if (e.data.message == 'status_erro') {
    alert('Sem Permissão: ' + e.data.status_erro);
}

                
if (e.data.message == 'stats_webphone') {
    alert('Internet: ' + e.data.internet + ' e computador: ' + e.data.computador);
}

if (e.data.message == 'entrou_na_fila') {
    alert('Ramal entrou na fila');
}

if (e.data.message == 'saiu_da_fila') {
    alert('Ramal saiu da fila');
}

if (e.data.message == 'pausou_na_fila') {
    alert('Ramal foi pausado na fila');
}

if (e.data.message == 'despausou_na_fila') {
    alert('Ramal foi despausado na fila');
}
```

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                <b>chegandoChamada<b>
            </td>
            <td>
                Ao receber uma chamada é disparado uma mensagem com o número de envio(e.data.numeroChegando), número de destino(e.data.numeroDestino) e o ID da chamada( e.data.chamadaRecebidaId).
            </td>
        </tr>
        <tr>
             <td>
                <b>status<b>
            </td>
            <td>
                Dispara uma mensagem ao ser alterado o status da chamada(e.data.status), que são exemplos de status: <b>conectado<b>, <b>desconectado<b>, <b>chamando<b>, <b>encerrada<b>, <b>conversando<b>.
            </td>
        </tr>
        <tr>
            <td>
                <b>chamada_id<b>
            </td>
            <td>
                Ao ser iniciada a chamada é disparado esse evento que retorna o identificador único da chamada(e.data.chamada_id), o ID é único e pode ser utilizado na api para recuperação de mais informações (get na api ou webhooks). 
            </td>
        </tr>
        <tr>
            <td>
                <b>status_erro<b>
            </td>
            <td>
                Ao ocorrer um erro(e.data.status_erro) durante a efetuação da chamada é disparado esse evento.
            </td>
        </tr>
        <tr>
            <td>
                <b>stats_webphone<b>
            </td>
            <td>
                Recebe o status da qualidade de conexão(Diagnóstico do Ping e Jitter) e computador(Uso da CPU) para verificar a qualidade da ligação.
            </td>
        </tr>
        <tr>
            <td>
                <b>pausou_na_fila<b>
            </td>
            <td>
                É chamado quando o ramal é pausado em alguma fila.
            </td>
        </tr>
        <tr>
            <td>
                <b>despausou_na_fila<b>
            </td>
            <td>
                É chamado quando o ramal é despausado em alguma fila.
            </td>
        </tr>
        <tr>
            <td>
                <b>entrou_na_fila<b>
            </td>
            <td>
                É chamado quando o ramal entra em alguma fila.
            </td>
        </tr>
        <tr>
            <td>
                <b>saiu_da_fila<b>
            </td>
            <td>
                É chamado quando o ramal sai de alguma fila.
            </td>
        </tr>
    </tbody>
</table>