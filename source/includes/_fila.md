# Fila

> Fila Endpoint

```text
https://voice-api.zenvia.com/fila
```

A funcionalidade de filas permite a automatização e manipulação de filas de atendimentos

## Objeto Fila

> <br>

> JSON

```json
{
    "id": 432,
    "nome": "Suporte",
    "chamadas": 0,
    "completado": 0,
    "cancelado": 0,
    "tempo_falado": "00:00:00",
    "tempo_espera": "00:00:00",
    "ramais": [
      {
         "id": 17,
         "nome": "Teste Atendimento",
         "ramal": "4000",
         "login": "ramal@empresa.com.br",
         "prioridade": "0",
         "qtd_ligacao_atendida": "0",
         "ultima_chamada": "0",
         "em_ligacao": false,
         "status": "indisponivel",
         "em_pausa": false,
         "razao_pausa": "",
         "bina": null,
         "tempo_status": "04:38:36"     
      }
    ]
}
```

Definição do objeto Fila

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro da Fila.
             </td>
        </tr>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da fila.
            </td>
        </tr>
        <tr>
            <td>
                chamadas
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de chamadas da fila.
            </td>
        </tr>
        <tr>
            <td>
                completado
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de chamadas completadas.
            </td>
        </tr>
        <tr>
            <td>
                cancelado
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de chamadas canceladas.
            </td>
        </tr>
        <tr>
            <td>
                tempo_falado
                <span class="attribute">string</span>
            </td>
            <td>
                Total de tempo falado da fila.
            </td>
        </tr>
        <tr>
            <td>
                tempo_espera
                <span class="attribute">string</span>
            </td>
            <td>
                Total de tempo de ramais em espera na fila.
            </td>
        </tr>
        <tr>
            <td>
                ramais
                <span class="attribute">array</span>
            </td>
            <td>
                Lista de ramais pertencentes a fila
            </td>
        </tr>
    </tbody>
</table>

## Criar uma fila

> Definição

```text
POST https://voice-api.zenvia.com/fila
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"nome":"Suporte","estrategia_ring":"Multiplo", "timeout_ring": "60"}' \
             'https://voice-api.zenvia.com/fila'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->criar('Suporte', 'Multiplo', '60');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.enviar("Suporte", "Multiplo", "60")
    .then(function(data) {  
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Fila.Criar("Suporte", "Multiplo", 60)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.fila.criar("Suporte", "Multiplo", "60")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Fila fila = new Fila(client);

JSONObject response = fila.enviar("Suporte", "Multiplo")
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.fila.criar("Suporte", "Multiplo", "60")
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "fila criada com sucesso",
    "dados": {
        "id": 4921
    }
}
```
Basta informar o nome da fila e a estratégia de ring.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nome da fila a ser criada.
             </td>
        </tr>
        <tr>
            <td>
                estrategia_ring
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Distribuidor = Toca um ramal por vez, DistribuidorParalelo = Toca um ramal por vez com encaminhamento paralelo ou Multiplo = Toca todos ramais ao mesmo tempo.
            </td>
        </tr>
        <tr>
            <td>
                timeout_ring
                <span class="optional">Opcional</span>
            </td>
            <td>
                Segundos que vai ficar tocando na fila
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
                Retorna o ID da Fila
             </td>
        </tr>
    </tbody>
</table>

## Buscar fila

> Definição

```text
GET https://voice-api.zenvia.com/fila/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-api.zenvia.com/fila/1'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->buscar(123);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.buscar(123)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Fila.Buscar(123)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.fila.get_fila(123)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Fila fila = new Fila(client);

JSONObject response = fila.buscar(123);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.fila.buscar(123)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 1,
    "nome": "Suporte",
    "chamadas": 0,
    "completado": 0,
    "cancelado": 0,
    "tempo_falado": "00:00:00",
    "tempo_espera": "00:00:00",
    "ramais": [
      {
        "id": 17,
        "nome": "Teste Atendimento",
        "ramal": "4000",
        "login": "ramal@empresa.com.br",
        "prioridade": "0",
        "qtd_ligacao_atendida": "0",
        "ultima_chamada": "0",
        "em_ligacao": false,
        "status": "indisponivel",
        "em_pausa": false,
        "razao_pausa": "",
        "bina": null,
        "tempo_status": "04:38:36"
      }
    ]
  }
}
```

Após a criação de uma fila, você poderá realizar a busca do registro pelo seu ID.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da Fila para recuperar os dados
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
                Retorna o objeto <a href="#objeto-fila">fila</a>
             </td>
        </tr>
    </tbody>
</table>

## Editar fila

> Definição

```text
PUT https://voice-api.zenvia.com/fila/{id}
```

> Request

```shell--curl
curl 'https://voice-api.zenvia.com/fila/1' \
    -X PUT \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
    -d '{"nome":"Suporte","estrategia_ring":"Multiplo", "timeout_ring": "60"}'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->atualizarFila("Suporte", "Multiplo", "60");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.atualizarFila("Suporte", "Multiplo", "60")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Fila.Atualizar("Suporte", "Multiplo", "60")
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.fila.editar("Suporte", "Multiplo", "60")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Fila fila = new Fila(client);

JSONObject response = fila.atualizar("Suporte", "Multiplo");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("{{access-token}}")
puts @client.fila.atualizar("Suporte", "Multiplo", "60")
```
> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "dados atualizados com sucesso",
    "dados": null
}
```

Altera as informações da sua fila.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="optional">Opcional</span>
            </td>
            <td>
                Novo nome da fila.
             </td>
        </tr>
        <tr>
            <td>
                estrategia_ring
                <span class="optional">Opcional</span>
            </td>
            <td>
                Distribuidor = Toca um ramal por vez, DistribuidorParalelo = Toca um ramal por vez com encaminhamento paralelo ou Multiplo = Toca todos ramais ao mesmo tempo.
            </td>
        </tr>
        <tr>
            <td>
                timeout_ring
                <span class="optional">Opcional</span>
            </td>
            <td>
                Segundos que vai ficar tocando na fila
            </td>
        </tr>
    </tbody>
</table>

#### Response
<br/>
Retorna o objeto <a href="#respostas-da-api">resposta padrão</a> da API com sucesso ou falha.
<br>

<br>
<br>

## Adicionar um ramal na fila

> Definição

```text
POST https://voice-api.zenvia.com/fila/{id}
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"ramal_id":"111"}' \
             'https://voice-api.zenvia.com/fila/123'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->addRamal("ID_FILA", "RAMAL_ID");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.addRamal("ID_FILA", "RAMAL_ID")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Fila.AdicionarRamalFila("ID_FILA", "RAMAL_ID");
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.fila.add_ramal("ID_FILA", "RAMAL_ID")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Fila fila = new Fila(client);

JSONObject response = fila.adicionaRamalFila("ID_FILA", "RAMAL_ID");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.fila.adiciona_ramal("ID_FILA", "RAMAL_ID")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Ramal adicionado com sucesso na fila",
  "dados": {
    "id": 4921
  }
}
```
Basta informar o id da fila e por parâmetro o id do ramal.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ramal_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do ramal para ser adicionado
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

## Deletar um ramal da fila

> Definição

```text
DELETE https://voice-api.zenvia.com/fila/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/fila/111/111'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->excluirRamalFila("ID_FILA", "RAMAL_ID");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.excluirRamalFila("ID_FILA", "RAMAL_ID")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Fila.ExcluirRamalFila("ID_FILA", "RAMAL_ID")
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.fila.deleta_ramal("ID_FILA", "RAMAL_ID")
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.fila.excluir_ramal("ID_FILA", "RAMAL_ID")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Ramal removido da fila com sucesso"
}
```
Basta informar o id da fila e por parâmetro o id do ramal para ser removido.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ramal_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do ramal para ser removido
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>

## Busca um ramal da fila

> Definição

```text
GET https://voice-api.zenvia.com/fila/{id-fila}/{id-ramal}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' 'https://voice-api.zenvia.com/fila/id-fila/id-ramal'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->buscarFilaRamal("ID_FILA", "RAMAL_ID")
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.fila.buscarRamalFila("ID_FILA", "RAMAL_ID")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.Fila.BuscarRamalFila("ID_FILA", "RAMAL_ID")
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.fila.get_fila_ramal("ID_FILA", "RAMAL_ID")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Fila fila = new Fila(client);

JSONObject response = fila.buscar("ID_FILA", "RAMAL_ID");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.fila.buscar_ramal("ID_FILA", "RAMAL_ID")
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 1,
    "nome": "Suporte",
    "chamadas": 0,
    "completado": 0,
    "cancelado": 0,
    "tempo_falado": "00:00:00",
    "tempo_espera": "00:00:00",
    "ramais": [
      {
        "id": 17,
        "nome": "Teste Atendimento",
        "ramal": "4000",
        "login": "ramal@empresa.com.br",
        "prioridade": "0",
        "qtd_ligacao_atendida": "0",
        "ultima_chamada": "0",
        "em_ligacao": false,
        "status": "indisponivel",
        "em_pausa": false,
        "razao_pausa": "",
        "bina": null,
        "tempo_status": "04:38:36"
      }
    ]
  }
}
```
Basta informar o id da fila e o id do ramal.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da fila.
             </td>
        </tr>
        <tr>
            <td>
                ramal_id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do ramal.
             </td>
        </tr>        
    </tbody>
</table>

## Relatório chamadas de uma fila 

> Definição

```text
GET https://voice-api.zenvia.com/fila/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/fila/{id-fial}/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->fila->relatorioChamadas($id_fila,$dataInicial, $dataFinal);
```
```javascript--node
Em construção
```
```go
Em construção
```
```python
Em construção
```
```java
Em construção
```
```ruby
Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 8,
    "posicao": 0,
    "limite": 100,
    "relatorio": [
      {
        "id": 1324567,
        "numero_destino": "+5510999999999",
        "numero_origem": "4712344321",
        "data_inicio": "2019-07-15T08:32:34.000-03:00",
        "status": "Não atendida",
        "atendida": false,
        "ativa": 0,
        "duracao_segundos": 237,
        "duracao": "00:03:57",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "tempo_espera": 225,
        "preco": 0,
        "url_gravacao": "https://api.evoline.com.br/rec/?id=123sd213",
        "fila": {
          "id": 430,
          "data_inicio": "2019-07-15T08:31:47.000-03:00"
        },
        "ramal": {}
      },
      {
        "id": 43211234,
        "numero_destino": "+5510999999999",
        "numero_origem": "+5510999999999",
        "data_inicio": "2019-07-15T09:02:47.000-03:00",
        "status": "Atendida",
        "atendida": true,
        "ativa": 0,
        "duracao_segundos": 296,
        "duracao": "00:04:56",
        "duracao_cobrada_segundos": 286,
        "duracao_cobrada": "00:04:46",
        "duracao_falada_segundos": null,
        "duracao_falada": null,
        "tempo_espera": null,
        "preco": 0,
        "url_gravacao": "https://api.evoline.com.br/rec/?id=691325",
        "fila": {
          "id": 430,
          "data_inicio": "2019-07-15T09:02:47.000-03:00"
        },
        "ramal": {
          "id": 12342454,
          "ramal": "4099",
          "login": "suporte.voz@zenvia.com"
        }
      }
    ]
  }
}
```

Você pode consultar os áudios enviados posteriormente. Basta informar o período desejado para que a API retorne os dados.

#### Request

<table class="table-parameters">
    <tbody>
        <td>
                id
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Id da fila que deseja consultar as ligações
            </td>
        </tr>
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
                <span class="required">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de origem da ligação recebida
            </td>
        </tr>
            <td>
                destino
                <span class="required">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de destino da ligação recebida
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
                Retorna um array com objetos chamadas recebidas 
             </td>
        </tr>
    </tbody>
</table>

<b>Exemplo:</b> Se você tiver um relatório com 350 chamadas, na primeira página será retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

<br>
<br>
