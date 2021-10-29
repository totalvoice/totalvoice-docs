# Central Telefônica

Na central telefônica você poderá fazer configurações e retirar relatórios de ramal e URAs.

Caso você deseje utilizar a API de Voz da ZenAPI para ligações receptivas, entre em [contato](#introducao) conosco para a contratação de um número receptivo(DID).

### Objeto Ramal

> <br>

> JSON

```json
{
    "id": 76498,
    "ramal": "3333",
    "login": "testee@zenvia.com",
    "bina": "48999999999",
    "webphone_key": "213kbbncs324454ASDcxzln123",
    "ligacao_externa": true,
    "ligacao_celular": true,
    "gravar_audio": true,
    "acesso_gravacoes": true,
    "webphone": false,
    "ura_id": null,
    "voicemail": false,
    "tags": "",
    "motivo_vcall": {
        "id": 53,
        "motivo": "Estamos retornando a sua solicitação"
    }        
}
```
Definição do objeto Ramal

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal
             </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="attribute">integer</span>
            </td>
            <td>
                Número do ramal
             </td>
        </tr>
        <tr>
            <td>
                login
                <span class="attribute">string</span>
            </td>
            <td>
                E-mail de login do ramal
            </td>
        </tr>
        <tr>
             <td>
                 bina
                 <span class="attribute">string</span>
             </td>
             <td>
                 Número que aparece quando o ramal faz ligações
             </td>
        </tr>
         <tr>
             <td>
                 webphone_key
                 <span class="attribute">string</span>
             </td>
             <td>
                 Chave para utilização de webphones integrados
             </td>
         </tr>
         <tr>
             <td>
                 ligacao_externa
                 <span class="attribute">boolean</span>
             </td>
             <td>
                 Permite fazer ligações externas
             </td>
         </tr>
         <tr>
             <td>
                 ligacao_celular
                 <span class="attribute">boolean</span>
             </td>
             <td>
                 Permite fazer ligações para números de celular
             </td>
         </tr>
         <tr>
              <td>
                  gravar_audio
                  <span class="attribute">boolean</span>
              </td>
              <td>
                 Grava as ligações deste ramal
              </td>
          </tr>
          <tr>
              <td>
                  motivo_vcall
                  <span class="attribute">objeto</span>
              </td>
              <td>
                 Objeto do tipo <a href="#objeto-motivo-vcall">Motivos VCall</a>
              </td>
          </tr>
    </tbody>
</table>

### Criar um ramal

> Definição

```text
POST https://voice-api.zenvia.com/ramal
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"ramal":"","login":"","senha":""}' \
             'https://voice-api.zenvia.com/ramal'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$dados = [
    "ramal"=>"1358",
    "login"=>"logindeteste231@totalvoice.com.br"
];
$response = $client->central->criarRamal($dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

const dados = {
    ramal: '1358', 
    login: 'logindeteste231@totalvoice.com.br', 
    senha: '123456'
};

client.central.criarRamal(dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "ramal criado com sucesso",
  "dados": {
    "id": 1234,
    "ramal": 4000,
    "login": "123teste231@zenvia.com",
    "senha": "123teste23122",
    "bina": null,
    "webphone_key": "123teste231224d549e0408e123teste23122",
    "ligacao_externa": false,
    "ligacao_celular": false,
    "gravar_audio": false,
    "acesso_gravacoes": false,
    "webphone": true,
    "ura_id": null,
    "voicemail": false,
    "tags": null,
    "motivo_vcall": null
  }
}
```
Nenhum campo é obrigatório, mas indicamos que você passe os parâmetros ramal e login para controlar melhor os ramais criados.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ramal
                <span class="attribute">integer</span>
            </td>
            <td>
                Número do ramal
                </td>
        </tr>
        <tr>
            <td>
                login
                <span class="attribute">string</span>
            </td>
            <td>
                E-mail de login do ramal
            </td>
        </tr>
        <tr>
            <td>
                senha
                <span class="attribute">string</span>
            </td>
            <td>
                Senha do ramal. (Deve conter 8 caracteres, sendo pelo menos 1 maiúsculo e 1 minúsculo)
                </td>
        </tr>
        <tr>
                <td>
                    bina
                    <span class="attribute">string</span>
                </td>
                <td>
                    Número que aparece quando o ramal faz ligações
                </td>
        </tr>
        <tr>
            <td>
                ligacao_externa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite fazer ligações externas
            </td>
        </tr>
        <tr>
            <td>
                ligacao_celular
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite fazer ligações para números de celular
            </td>
        </tr>
        <tr>
            <td>
                gravar_audio
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite a gravação de áudio
            </td>
        </tr>
        <tr>
            <td>
                acesso_gravacoes
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite o usuário deste ramal ver gravações
            </td>
        </tr>
        <tr>
            <td>
                webphone
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite o usuário utilizar webphone
            </td>
        </tr>
        <tr>
            <td>
                ura_id
                <span class="attribute">integer</span>
            </td>
            <td>
                Caso tenha um valor aqui ao telefonar para este número de ramal, vai cair em uma URA ao invés de chamar o usuário
            </td>
        </tr>
        <tr>
            <td>
                voicemail
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se esse valor for igual a true, ao ligar para esse ramal ele será encaminhado para uma caixa postal que gravará recados. (Não irá chamar no usuário)
            </td>
        </tr>
        <tr>
            <td>
                motivo_vcall
                <span class="attribute">integer</span>
            </td>
            <td>
                Id do motivo vcall
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
                Retorna o objeto com os dados do ramal criado
             </td>
        </tr>
    </tbody>
</table>

## Buscar um ramal

> Definição

```text
GET https://voice-api.zenvia.com/ramal/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://voice-api.zenvia.com/ramal/{id}'
```
```php
<?php

require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$response = $client->central->buscaRamal("id-ramal");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.buscaRamal('id-ramal')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

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
    "id": 1234,
    "ramal": "4000",
    "login": "teste@zenvia.com",
    "bina": "48999999999",
    "webphone_key": "testefd3b268b3de8cateste44968",
    "ligacao_externa": true,
    "ligacao_celular": true,
    "gravar_audio": true,
    "acesso_gravacoes": true,
    "webphone": false,
    "ura_id": null,
    "voicemail": false,
    "tags": "",
    "motivo_vcall": null
  }
}
```
Após o ramal ser criado, você pode consultar suas informações

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal
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
                Retorna o objeto do ramal </a>
             </td>
        </tr>
    </tbody>
</table>

## Editar um Ramal

> Definição

```text
PUT https://voice-api.zenvia.com/ramal/{id}/fila
```

> Request

```shell--curl
curl -X PUT --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"senha":"4321789"}' \
             'https://voice-api.zenvia.com/ramal/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$dados = [
    "ramal"=>"1358",
    "login"=>"logindeteste231@totalvoice.com.br"
];

$response = $client->central->atualizarRamal("id-ramal", $dados);

```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

const dados = {
    login: 'logindeteste456@totalvoice.com.br', 
    senha: '12345678'
};

client.central.atualizarRamal('id-ramal', dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados atualizados com sucesso",
  "dados": null
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Id do ramal que será modificado(O id é passado na URL do endpoint) 
                </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="attribute">integer</span>
            </td>
            <td>
                Número do ramal
                </td>
        </tr>
        <tr>
            <td>
                login
                <span class="attribute">string</span>
            </td>
            <td>
                E-mail de login do ramal
            </td>
        </tr>
        <tr>
            <td>
                senha
                <span class="attribute">string</span>
            </td>
            <td>
                Senha do ramal (Deve conter 8 caracteres, sendo pelo menos 1 maiúsculo e 1 minúsculo)
                </td>
        </tr>
        <tr>
                <td>
                    bina
                    <span class="attribute">string</span>
                </td>
                <td>
                    Número que aparece quando o ramal faz ligações
                </td>
        </tr>
        <tr>
            <td>
                ligacao_externa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite fazer ligações externas
            </td>
        </tr>
        <tr>
            <td>
                ligacao_celular
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite fazer ligações para números de celular
            </td>
        </tr>
        <tr>
            <td>
                gravar_audio
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite a gravação de áudio
            </td>
        </tr>
        <tr>
            <td>
                acesso_gravacoes
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite o usuário deste ramal ver gravações
            </td>
        </tr>
        <tr>
            <td>
                webphone
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite o usuário utilizar webphone
            </td>
        </tr>
        <tr>
            <td>
                ura_id
                <span class="attribute">integer</span>
            </td>
            <td>
                Caso tenha um valor aqui, ao telefonar para este número de ramal, vai cair em uma URA ao invés de chamar o usuário
            </td>
        </tr>
        <tr>
            <td>
                voicemail
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se esse valor for igual a true, ao ligar para esse ramal ele será encaminhado para uma caixa postal que gravará recados.(Não irá chamar no usuário)
            </td>
        </tr>
         <tr>
            <td>
                motivo_vcall
                <span class="attribute">integer</span>
            </td>
            <td>
                Id do motivo vcall
            </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                status
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o status da requisição</a>
             </td>
        </tr>
    </tbody>
</table>

## Editar um ramal na fila

> Definição

```text
PUT https://voice-api.zenvia.com/ramal/{id}/fila
```

> Request

```shell--curl
curl -X PUT --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"status_pausa":true, "fila":41}' \
             'https://voice-api.zenvia.com/ramal/{id}/fila'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$dados = [
    "status_pausa"=>true,
    "fila"=>41
];

$response = $client->central->atualizarRamalFila("id-ramal", $dados);

```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.atualizarRamalFila(ramal_id, data)
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.RamalFila.Atualizar(ramal_id, data)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
client.ramal.editarRamalFila(ramal_id, data)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Central central = new Central(client);
JSONObject response = central.atualizarRamalFila(ramal_id, data);
```
```ruby
@client = TotalVoice::API.new("9754aac7641722789c80c237f9afb4b1", "voice-api.zenvia.com")
puts @client.ramal.atualizar_ramal_fila(ramal_id, data)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Ramal pausado com sucesso na fila 41",
  "dados": [
    {
      "ramal_id": 16,
      "pausado": true,
      "fila": 41
    }
  ]
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Id do ramal que será modificado(O id é passado na URL do endpoint) 
                </td>
        </tr>
        <tr>
            <td>
                status_pausa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Pausa (true) ou despausa (false)
            </td>
        </tr>
        <tr>
            <td>
                fila
                <span class="attribute">integer</span>
            </td>
            <td>
                Id da fila que você quer pausar o ramal
            </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                status
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o status da requisição</a>
             </td>
        </tr>
    </tbody>
</table>

## Deletar um ramal

> Definição

```text
DELETE https://voice-api.zenvia.com/ramal/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://voice-api.zenvia.com/ramal/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$response = $client->central->excluirRamal("id-ramal");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.excluirRamal('id-ramal')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Ramal Removido",
  "dados": null
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal
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
                 Retorna o status da requisição </a>
             </td>
        </tr>
    </tbody>
</table>

## Listar ramais criados

> Definição

```text
GET https://voice-api.zenvia.com/ramal/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/ramal/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.relatorio()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
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
    "relatorio": [
      {
        "id": 1234,
        "ramal": "4000",
        "login": "teste@totalTeste.com.br",
        "bina": "48999999999",
        "webphone_key": "totalTesteb8af64668997totalTeste",
        "ligacao_externa": true,
        "ligacao_celular": true,
        "gravar_audio": true,
        "acesso_gravacoes": false,
        "webphone": true,
        "ura_id": null,
        "voicemail": false,
        "tags": "",
        "motivo_vcall": {
            "id": 53,
            "motivo": "Estamos retornando a sua solicitação"
        }
      },
      {
        "id": 4567,
        "ramal": "4001",
        "login": "teste1@totalTeste.com.br",
        "bina": "48999999999",
        "webphone_key": "teste18e990a500a059a78teste1",
        "ligacao_externa": true,
        "ligacao_celular": true,
        "gravar_audio": true,
        "acesso_gravacoes": true,
        "webphone": true,
        "ura_id": null,
        "voicemail": false,
        "tags": "",
        "motivo_vcall": null
      }
    ]
  }
}
```

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
                Retorna um array com objetos ramal</a>
             </td>
        </tr>
    </tbody>
</table>

<b>Importante:</b> Se você tiver um relatório com 350 ramais, na primeira página será retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

## Listar pausas do ramal

> Definição

```text
GET https://voice-api.zenvia.com/ramal/{id}/pausas
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/ramal/{id}/pausas?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$response = $client->central->relatorioPausasRamal("id-ramal", "2019-02-20T11:11:19-03:00", "2019-02-20T11:12:26-03:0");
```
```javascript--node 
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.relatorioPausas('id-ramal')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
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
    "total": 1,
    "duracao_total": "00:00:07",
    "duracao_total_segundos": 7,
    "ramal": "4000",
    "posicao": 0,
    "limite": 100,
    "relatorio": [
      {
        "pausa_inicio": "2019-06-15T11:14:41-03:00",
        "pausa_fim": "2019-06-15T11:14:48-03:00",
        "tempo_segundos": 7,
        "tempo": "00:00:07"
      }
    ]
  }
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
                <span class="required">integer</span>
            </td>
            <td>
                Id do ramal que será modificado(O id é passado na URL do endpoint) 
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
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o objeto com os dados de pausa do ramal
             </td>
        </tr>
    </tbody>
</table>

<b>Importante:</b> Se você tiver um relatório com 350 pausas do ramal, na primeira página será retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

## Listar ligações de um ramal

> Definição

Lista as ligações <u>recebidas</u> por um ramal no périodo desejado.

```text
GET https://voice-api.zenvia.com/ramal/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/ramal/{id}/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.relatorio('id-ramal')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
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
    "total": 2,
    "posicao": 0,
    "limite": 100,
    "relatorio": [
      {
        "id": 123456,
        "data_inicio": "2019-05-07T15:28:13-03:00",
        "url_gravacao": "https://api.evoline.com.br/rec/?id=123445&x=12345&cid=1",
        "numero_origem": "48999999999",
        "status": "atendida",
        "duracao_segundos": 369,
        "duracao": "00:06:09",
        "preco": "0.00",
        "ramal": {
          "id": 60679,
          "ramal": "4000",
          "login": "teste@totaltestevoice.com.br"
        }
      },
      {
        "id": 123456,
        "data_inicio": "2019-05-08T13:16:02-03:00",
        "url_gravacao": "https://api.evoline.com.br/rec/?id=123456&x=12345&cid=1",
        "numero_origem": "48999999999",
        "status": "atendida",
        "duracao_segundos": 596,
        "duracao": "00:09:56",
        "preco": "0.00",
        "ramal": {
          "id": 1234,
          "ramal": "4000",
          "login": "teste@totaltestevoice.com.br"
        }
      }
    ]
  }
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
                <span class="required">integer</span>
            </td>
            <td>
                Id do ramal que será modificado(O id é passado na URL do endpoint) 
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
                Retorna um array com objetos de chamadas atendidas</a>
             </td>
        </tr>
    </tbody>
</table>

<b>Importante:</b> Se você tiver um relatório com 350 pausas do ramal, na primeira página será retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

## Objeto URA

> <br>

> JSON

```json
{
    "id": 78910,
    "nome": "Exemplo de URA",
    "dados": [
        {
            "timeout": 6,
            "menu": "menu 1",
            "opcao": "",
            "acao": "tts",
            "acao_dados": {
                "mensagem": "Voce ligou para Zenvia. Aperte 1 para ser atendido."
            }
        },
        {
            "timeout_fila": 600,
            "menu": "menu 1",
            "opcao": "1",
            "acao": "fila",
            "acao_dados": {
                "fila_id": "1234"
            }
        },
        {
            "timeout": 2,
            "menu": "menu 8",
            "opcao": "8",
            "acao": "digiteramal",
            "acao_dados": {
                "mensagem": "Digite o ramal desejado"
            }
        }
    ]
}
```
Uma URA possui uma estrutura de atendimento, em nossa api você tem diversas possibilidades. Após os atributos, iremos apresentar todos os Parâmetros que podem ser utilizados.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da URA
             </td>
        </tr>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da URA
             </td>
        </tr>
        <tr>
            <td>
                dados
                <span class="attribute">string</span>
            </td>
            <td>
                Dentro de dados você consegue visualizar a estrutura de atendimento da sua URA.
            </td>
        </tr>
    </tbody>
</table>

#### Parâmetros da estrutura da URA(dados)
O nome da "acao" é o maior e o que deve estar dentro do array "acao_dados" é o que vem logo abaixo. Veja o exemplo ao lado.
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                audio
                <span class="attribute">url_audio</span>
            </td>
            <td>
                Toca o áudio que consta na url. A url deve ser pública para que nosso sistema possa buscar.
             </td>
        </tr>
        <tr>
            <td>
                tts
                <span class="attribute">mensagem</span>
            </td>
            <td>
                Toca a mensagem escrita em formato de áudio com uma voz simulada.
             </td>
        </tr>
        <tr>
            <td>
                transfer
                <span class="attribute">numero_telefone</span>
            </td>
            <td>
                Transfere para um ramal ou número externo. Transferência para número externo tem o valor de uma ligação efetuada.
            </td>
        </tr>
        <tr>
            <td>
                fila
                <span class="attribute">fila_id</span>
            </td>
            <td>
                Transfere para a <a href="https://centraltotalvoice.freshdesk.com/a/solutions/articles/35000108391-como-funcionam-as-filas-de-atendimento">fila de atendimento</a> referente ao seu ID.
            </td>
        </tr>
        <tr>
            <td>
                webhook
                <span class="attribute">url</span>
            </td>
            <td>
                Envia um webhook com as informações da chamada para o endpoint passado no parâmetro "url".
            </td>
        </tr>
        <tr>
            <td>
                gotomenu
                <span class="attribute">menu</span>
            </td>
            <td>
                Vai para um próximo menu da mesma ura, exemplo "menu 2".
            </td>
        </tr>
        <tr>
            <td>
                dinamico
                <span class="attribute">url</span>
            </td>
            <td>
                Encaminha a chamada para uma <a href="https://centraltotalvoice.freshdesk.com/solution/articles/35000118467-criando-uma-ura-din%C3%A2mica-simples">URA Dinâmica</a>. Coloca-se a URL para onde será enviado um HTTP POST para solicitar a URA à ser carregada.
            </td>
        </tr>
        <tr>
            <td>
                digiteramal
                <span class="attribute">mensagem</span>
            </td>
            <td>
               Mensagem que será reproduzida em formato de áudio ao cliente para solicitar a digitação de um ramal. A chamada será direcionada para o ramal informado.
            </td>
        </tr>
        <tr>
            <td>
                fim
            </td>
            <td>
               Derruba a ligação, não tem acao_dados e geralmente é usada seguido de uma outra ação. Se não tiver essa informação, a URA irá ficar até que o outro usuário desligue ou a ligação caia.
            </td>
        </tr>                     
    </tbody>
</table>

#### Opções adicionais para ação
<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                opcao
                <span class="attribute">string</span>
            </td>
            <td>
                Caso você tenha adicionado uma 'opcao' na etapa da URA ela só será chamada caso o usuário digite o número dela. As opções vão de 1 à 9.
             </td>
        </tr>
        <tr>
            <td>
                menu
                <span class="attribute">string</span>
            </td>
            <td>
                Indica a qual menu pertence essa etapa da URA.
             </td>
        </tr>
        <tr>
            <td>
                timeout
                <span class="attribute">string</span>
            </td>
            <td>
                Este é o tempo de espera para que a ligação seja derrubada ou a URA vá para a próxima ação, ele começa a conta após a sua ação acabar. Exemplo: assim que acabar o texto do seu TTS.
             </td>
        </tr>
        <tr>
            <td>
                coletar_dtmf
                <span class="attribute">string</span>
            </td>
            <td>
                Isso indica que essa etapa da ação irá esperar no máximo a quantidade de caracteres que você passar. Por exemplo:
                {"coletar_dtmf":"11"}. Quando atingido o máximo de DTMF(ou acabar o timeout) será executada a próxima ação.
             </td>
        </tr>
        <tr>
            <td>
                queue_fail_timeout
                <span class="attribute">string</span>
            </td>
            <td>
                Quando você utiliza a ação 'fila' você pode usar esse parâmetro passando o tempo máximo de espera da fila, após o término do tempo a próxima ação será executada.
             </td>
        </tr>
    </tbody>
</table>

## Criar uma URA

> Definição

```text
POST https://voice-api.zenvia.com/ura
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"nome":"Nome URA","dados":[{"acao":"tts","acao_dados":{"mensagem":"Essa é uma mensagem de Exemplo"}}]}' \
             'https://voice-api.zenvia.com/ura'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$dados = array (
    0 => array (
      'acao' => 'tts',
      'menu' => 'menu 1',
      'acao_dados' => array (
          'mensagem' => 'Olá! Isso é um teste.'
      ),
    )
    );

$response = $client->central->criarUra("Teste TotalVoice-001", $dados);

```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

const dados = [{
    acao: "tts",
    opcao: "1",
    menu: "menu 2",
    acao_dados: {
        mensagem: "Mensagem de teste"
    }
}];

client.central.criarUra("nome-ura", dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "ura criada com sucesso",
  "dados": {
    "id": 1234
  }
}
```
Veja a lista de opções dos dados/estrutura da URA que podem ser utilizadas.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da URA
             </td>
        </tr>
        <tr>
            <td>
                dados
                <span class="attribute">string</span>
            </td>
            <td>
                Dentro de dados você consegue passar a estrutura de atendimento da sua URA.
            </td>
        </tr>
    </tbody>
</table>

##### Response

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

## Buscar uma URA

> Definição

```text
GET https://voice-api.zenvia.com/ura/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://voice-api.zenvia.com/ura/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.buscaUra('id-ura')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

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
    "id": 12345,
    "nome": "Atendimento ZenAPI",
    "dados": [
      {
        "timeout": 6,
        "menu": "menu 1",
        "opcao": "",
        "acao": "audio",
        "acao_dados": {
          "url_audio": "https://seuaud.io/1234.mp3"
        }
      },
      {
        "timeout_fila": 600,
        "menu": "menu 1",
        "opcao": "1",
        "acao": "fila",
        "acao_dados": {
          "fila_id": "123456"
        }
      }
    ]
  }
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da URA
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
                Retorna o objeto da URA
             </td>
        </tr>
    </tbody>
</table>

## Editar uma URA

> Definição

```text
PUT https://voice-api.zenvia.com/ura/{id}
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"nome":"Nome URA","dados":[{"acao":"tts","acao_dados":{"mensagem":"Essa é uma mensagem de Exemplo 2"}}]}' \
             'https://voice-api.zenvia.com/ura/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$dados = array (
    0 => array (
      'acao' => 'tts',
      'menu' => 'menu 1',
      'acao_dados' => array (
          'mensagem' => 'Olá! Isso é um teste.'
      ),
    )
    );

$response = $client->central->atualizarUra("123456", "Teste ZenAPI-001", $dados);

```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

const dados = {
    timeout: 10
};

client.central.atualizarUra('id-ura', 'nome-ura', dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "ura atualizada com sucesso",
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
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome da URA
             </td>
        </tr>
        <tr>
            <td>
                dados
                <span class="attribute">string</span>
            </td>
            <td>
                Estrutura de atendimento da URA.
            </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                status
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o status da requisição
             </td>
        </tr>
    </tbody>
</table>


## Deletar uma URA

> Definição

```text
DELETE https://voice-api.zenvia.com/ura/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://voice-api.zenvia.com/ura/{id}'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$response = $client->central->excluirUra("id");
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.excluirUra('id-ura')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Em construção
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

Em construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "URA Removida",
  "dados": null
}
```

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da URA
            </td>
        </tr>
    </tbody>
</table>


##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                status
                <span class="attribute">object</span>
            </td>
            <td>
                 Retorna o status da requisição </a>
             </td>
        </tr>
    </tbody>
</table>

## Relatório de URA

> Definição

Retorna a sua lista de URAs e suas estruturas

```text
GET https://voice-api.zenvia.com/ura/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/ura/relatorio'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.central.relatorioUra()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
Em construção
```
```java
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
    "relatorio": [
      {
        "id": 12345,
        "nome": "Teste Geral",
        "dados": [
          {
            "timeout": 6,
            "menu": "menu 1",
            "opcao": "",
            "acao": "tts",
            "acao_dados": {
              "mensagem": "Olá, seja bem vindo a melhór startap da Palhóça. Digite 1 para ser atendido."
            }
          },
          {
            "timeout_fila": 45,
            "menu": "menu 1",
            "opcao": "",
            "acao": "fila",
            "acao_dados": {
              "fila_id": "123456"
            }
          },
          {
            "timeout_fila": 9000,
            "menu": "menu 1",
            "opcao": "1",
            "acao": "fila",
            "acao_dados": {
              "fila_id": "745896"
            }
          }
        ]
      }
    ]
  }
}
```
#### Response

<table class="table-parameters">
     <tbody>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com as URAs e seus IDs e para cada uma um array com sua estrutura
             </td>
        </tr>
    </tbody>
</table>
<br>
<br>
