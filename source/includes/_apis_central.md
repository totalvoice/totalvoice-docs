# Central

As APIs de Central viabilizam a criação de uma operação de telefonia básica para empresas. 

Isso significa que nossas soluções permitem **elaborar uma estrutura de telefonia com base nos setores**, onde cada um pode possuir um ramal específico, por exemplo. 

Além disso, outras funcionalidades são:

- Criar URA para receber ligação;
- Formar grupos de atendimentos (filas);
- Cadastrar e configurar telefones para BINA.

APIs de Central:

- Fila
- Bina
- Número de telefone (DIDs)

💡Inicie o teste rápido <a href = "https://voice-app.zenvia.com/doc/">aqui</a>

## Bina

> Bina Endpoint

```text
https://voice-api.zenvia.com/bina
```

Usando esse recurso, será possível utilizar números de telefone específicos para suas chamadas e torpedos de voz. 

Você poderá se identificar ao destino confirmando que a ligação é sua, independente do número ou ramal que estiver sendo utilizado para realizar a chamada.

💡 Bina é o número identificador do telefone de origem e que aparece no telefone do destino. 

Para utilizar uma bina específica, é necessário realizar a contratação de um número com a Zenvia.

### Objeto Bina

> JSON

```json
{
    "id": 432,
    "numero_telefone": "+5548911111111",
    "data_criacao": "2018-03-18T00:51:22.000Z",
    "fixo": false,
    "confirmado": true
}
```

O objeto é um modelo JSON que retorna com o status da sua bina cadastrada. 

Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:** <a href = "https://voice-app.zenvia.com/bina">https://voice-app.zenvia.com/bina</a>

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de Bina
             </td>
        </tr>
        <tr>
            <td>
                numero_telefone
                <span class="attribute">string</span>
            </td>
            <td>
                Número do telefone que será binado
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
                fixo
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se o número da bina se refere a um telefone fixo
            </td>
        </tr>
        <tr>
            <td>
                confirmado
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se está confirmado que o número de telefone da bina pertence a você
            </td>
        </tr>
    </tbody>
</table>

### Buscar Bina

> Definição

```text
GET https://voice-api.zenvia.com/bina/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \ 
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina/1'
```

Caso deseje, após a contratação de uma bina você poderá realizar a busca do registro
pelo seu ID. 

Para buscar, é necessário o envio da chave da bina na URL da requisição seguido da autenticação Access Token no Header. 

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET** <a href = "https://voice-api.zenvia.com/bina/{id}">https://voice-api.zenvia.com/bina/{id}</a>

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da Bina para recuperar os dados
             </td>
        </tr>
    </tbody>
</table>

#### Response

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Dados retornados com sucesso",
  "dados": {
    "id": 1,
    "numero_telefone": "+5548988888888",
    "data_criacao": "2018-03-18T00:51:22.000Z",
    "fixo": false,
    "confirmado": true
  }
}
```

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
               Retorna o objeto <a href="#objeto-bina">Bina</a>
             </td>
        </tr>
    </tbody>
</table>

### Deletar Bina

> Definição

```text
DELETE https://voice-api.zenvia.com/bina/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \ 
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina/1'
```

Para deletar um número de telefone (Bina) cadastrado na sua conta, basta informar o ID da bina. 

**Importante:** isso não cancela a contratação do número de telefone, para isso é necessário entrar em contato com a Zenvia. 
O método “delete” apenas impede que o número seja utilizado como bina. Porém, ele continua disponível para uso em outras features.

**Método utilizado:** 

**DELETE** <a href = "https://voice-api.zenvia.com/bina/{id}">https://voice-api.zenvia.com/bina/{id}</a>

<aside class="notice">
Caso a Bina esteja vinculada ao Caller ID Default, será necessário desvincular via painel de voz, antes de deletar.
</aside>

### Relatório Bina

> Definição

```text
GET https://voice-api.zenvia.com/bina/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \ 
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina/relatorio'
```

Para buscar os telefones (Bina) cadastrados na Conta, basta realizar a chamada utilizando um HTTP GET para o endereço de definição da API.

**GET** <a href = "https://voice-api.zenvia.com/bina/relatorio">https://voice-api.zenvia.com/bina/relatorio</a>

## Central Telefônica

Usando esse recurso, você poderá fazer configurações e retirar relatórios de ramal e URAs. 

<aside class="notice">
Caso você deseje utilizar a API de Voz da ZenAPI para ligações receptivas, entre em contato conosco para a contratação de um número receptivo(DID).
</aside>

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
    "tags": ""
}
```

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos.  

**Endpoint:** <a href = "https://voice-api.zenvia.com/ramal">https://voice-api.zenvia.com/ramal</a>

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
    </tbody>
</table>

### Criar ramal

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
    "tags": null
  }
}
```

Para criar um ramal nenhum campo é obrigatório, mas indicamos que você passe os parâmetros ramal e login para controlar melhor os ramais criados.

**POST:**  https://voice-api.zenvia.com/chamada

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

### Buscar Ramal

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
    "tags": ""
  }
}
```

Para buscar um ramal e suas informações, basta informar o ID da mesma após o seu envio.

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/ramal/{id}">https://voice-api.zenvia.com/ramal/{id}</a>

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

###  Editar Ramal

> Definição

```text
PUT https://voice-api.zenvia.com/ramal/{id}
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

Para alterar as informações do ramal, o método de solicitação deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

**PUT** <a href = "https://voice-api.zenvia.com/ramal/{id}">https://voice-api.zenvia.com/ramal/{id}</a>

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
                Caso tenha um valor aqui, ao telefonar para este número de ramal, vai cair em uma URA ao invés de chamar o usuário. Caso queira desvincular uma URA basta passar o valor 'null' neste campo.
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

### Editar Ramal na fila

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

Para alterar as informações de um ramal na fila, o método de solicitação também deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

Lembre-se apenas que o ID informado na URL do endpoint é aquele que será modificado. 

**PUT** <a href = "https://voice-api.zenvia.com/ramal/{id}">https://voice-api.zenvia.com/ramal/{id}</a>

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

### Deletar Ramal

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

Para deletar um ramal, basta informar o ID do mesmo.

Método utilizado: 

**DELETE** <a href = "https://voice-api.zenvia.com/ramal/{id}">https://voice-api.zenvia.com/ramal/{id}</a>

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

### Listar Ramais criados

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
        "tags": ""
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
        "tags": ""
      }
    ]
  }
}
```

Para listar os ramais criados, basta informar a data de início e fim que deseja buscar.

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/ramal/relatorio">https://voice-api.zenvia.com/ramal/relatorio</a>

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

### Listar pausas do ramal

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

Para listar as pausas dos ramais criados, basta informar o ID do ramal, a data de início e fim que deseja buscar. 

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/ramal/{id}/pausas">https://voice-api.zenvia.com/ramal/{id}/pausas</a>

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

<aside class="notice">
Importante: Se você tiver um relatório com 350 pausas do ramal, na primeira página será retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201..
</aside>

### Listar ligações do ramal

> Definição

Lista as ligações <u>recebidas</u> por um ramal no período desejado.

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

Para listar as ligações recebidas por um ramal, basta informar o ID do ramal, a data de início e fim que deseja buscar. 

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/ramal/{id}/relatorio">https://voice-api.zenvia.com/ramal/{id}/relatorio</a>

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

## Fila

> Fila Endpoint

```text
https://voice-api.zenvia.com/fila
```

Usando esse recurso, será possível automatizar e manipular as filas de atendimento.

Nossa API oferece a solução para o **gerenciamento de filas de espera**, desde a chegada do cliente até a conclusão, auxiliando empresas a ressaltar a qualidade do atendimento.  

Será viável também: 

- Monitorar o tempo de espera;
- Obter informações detalhadas como tempo médio de espera, atendimento e qualidade. 

### Objeto Fila

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

O objeto é um modelo JSON que retorna as filas cadastradas em sua conta. 

Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:** <a href = "https://voice-api.zenvia.com/fila">https://voice-api.zenvia.com/fila</a>

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

### Criar Fila

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

Para criar uma fila, basta informar o nome da mesma e a estratégia de ring, que pode ser de três tipos:

- Múltiplo;
- Distribuidor;
- Distribuidor/Paralelo.


**POST:** <a href = "https://voice-api.zenvia.com/fila">https://voice-api.zenvia.com/fila</a>

**REQUEST:**

- **Headers**

1. **Content-Type:** application/json
2. **Authorization:** Access-Token: {{access-token}} 

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

### Buscar Fila

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

Caso deseje, após a criação de uma fila você poderá realizar a busca do registro
pelo seu ID. 

Para buscar, é necessário o envio da chave da fila na URL da requisição seguido da autenticação Acess Token no Header. 

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET** <a href = "https://voice-api.zenvia.com/fila/{id}">https://voice-api.zenvia.com/fila/{id}</a>

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

### Editar Fila 

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

Para alterar as informações da sua fila, o método de solicitação deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

**PUT** <a href = "https://voice-api.zenvia.com/fila/{id}">https://voice-api.zenvia.com/fila/{id}</a>

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

### Adicionar ramal 

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

Para adicionar um ramal na fila, basta informar o ID da mesma e, por parâmetro, o ID do ramal que deseja adicionar. 

Método utilizado: 

**POST** <a href = "https://voice-api.zenvia.com/fila/{id}">https://voice-api.zenvia.com/fila/{id}</a>

### Deletar ramal 

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

Para deletar um ramal na fila, basta informar o ID da mesma e, por parâmetro, o ID do ramal que deseja remover.

Método utilizado: 

**DELETE** <a href = "https://voice-api.zenvia.com/fila/{id}">https://voice-api.zenvia.com/fila/{id}</a>

### Buscar ramal 

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

Para buscar um ramal na fila, basta informar o ID da mesma e, por parâmetro, o ID do ramal que deseja buscar.

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/fila/{id-fila}/{id-ramal}">https://voice-api.zenvia.com/fila/{id-fila}/{id-ramal}</a>

### Relatório Fila 

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
        "numero_destino": "554831810323",
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
        "numero_destino": "554831810323",
        "numero_origem": "4840421210",
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

Para consultar os áudios das chamadas de uma fila, basta informar o período desejado para que a API retorne os dados.

Veja ao lado um exemplo de requisição. Os campos são:

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

## Números de telefone (DID)

DID são mais conhecidos como “números virtuais” e possibilitam receber chamadas utilizando a conexão com a internet.

Usando esse recurso, será possível automatizar o gerenciamento de números de telefone por meio das funcionalidades:

- Gerenciar, adquirir ou remover um DID da sua Conta. 
- Extrair relatórios dos DIDs adquiridos e das chamadas recebidas por um número específico da sua conta. 

### Objeto DID

> Did Endpoint

```text
https://voice-api.zenvia.com/did
```

> JSON

```json 
    {
    "id": 4844577,
    "cidade": "Rio de Janeiro",
    "estado": "RJ",
    "numero": "552120182293"
    }
```

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos.  

**Endpoint:** <a href = "https://voice-api.zenvia.com/did">https://voice-api.zenvia.com/did</a>

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do DID(Número receptivo)
             </td>
        </tr>
        <tr>
            <td>
                cidade
                <span class="attribute">string</span>
            </td>
            <td>
                Cidade do número de telefone(DID)
            </td>
        </tr>
        <tr>
            <td>
                estado
                <span class="attribute">string</span>
            </td>
            <td>
                Estado/Região do DID
            </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="attribute">datetime</span>
            </td>
            <td>
                Número completo do DID
            </td>
        </tr>
    </tbody>
</table>
<br>

### Consultar DIDs

> Did Endpoint

```text
https://voice-api.zenvia.com/did
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/did'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');

$response = $client->central->listaEstoque("id-ramal");
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
    "dids": [
      {
        "id": 123454,
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "numero": "552120128207"
      }
    ]
  }
}
```

Você poderá realizar a consulta da lista de todos os DIDs da sua conta. 

Para requisitar, não é necessário passar nenhum parâmetro. Basta realizar a chamada para obter os dados utilizando um HTTP GET para o endereço de definição da API.

**GET** <a href = "https://voice-api.zenvia.com/did">https://voice-api.zenvia.com/did</a>

### Atualizar DID

> Definição

```text
PUT https://voice-api.zenvia.com/did/{id}
```

> Request

```shell--curl
curl -X PUT --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"ura_id":"4321789"}' \
             'https://voice-api.zenvia.com/did/{id}'
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

Em construção
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

Para atualizar os dados de um DID, o método de solicitação deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

**PUT** <a href = "https://voice-api.zenvia.com/did/{id}">https://voice-api.zenvia.com/did/{id}</a>

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
                ura_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID da URA, a qual irá atender a ligação no momento em que o número receber uma ligação.¹
            </td>
        </tr>
        <tr>
            <td>
                ramal_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal, o qual irá atender a ligação no momento em que o número receber uma ligação.¹
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

<aside class="notice">
Você só pode passar uma das opções: <strong>ura_id</strong> ou um <strong>ramal_id</strong>.
</aside>

### Estoque de DIDs

> Did Endpoint

```text
https://voice-api.zenvia.com/did/estoque
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/did/estoque'
```
```php
<?php
Em construção
```
```javascript--node
Em construção<aside class="notice"> Antes era possível consultar os números de DIDs disponíveis e comprá-los automaticamente. Atualmente é necessário entrar em contato com o time de suporte da equipe de voz da Zenvia pelo email  <a href="">suporte.voz@zenvia.com</a>
</aside>

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
    "dids": [
      {
        "id": 12341,
        "cidade": "SAO PAULO",
        "estado": "SP",
        "numero": "5511203729395"
      },
      {
        "id": 12341,
        "cidade": "Campinas",
        "estado": "SP",
        "numero": "5519350128096"
      }
    ]
  }
}
```

<aside class="notice">Antes era possível consultar os números de DIDs disponíveis e comprá-los automaticamente. Atualmente é necessário entrar em contato com o time de suporte da equipe de voz da Zenvia pelo email  <a href="">suporte.voz@zenvia.com</a>
</aside>


<p style="color:#5A5A5A;"><b>Nota:</b> Para adquirir um DID você deve ter o cartão de crédito cadastrado na plataforma.</p>

Método utilizado: 

**GET** <a href = "https://voice-api.zenvia.com/did/estoque">https://voice-api.zenvia.com/did/estoque</a>

##### Request

<p style="color:#5A5A5A;">Não precisa passar nenhum parâmetro.<p>

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td style="color:#5A5A5A;">
                relatorio
                <span class="attribute">array</span>
            </td>
            <td style="color:#5A5A5A;">
                Retorna um array com objetos <a href="#objeto-did">DIDs</a> disponíveis.
             </td>
        </tr>
    </tbody>
</table>

### Comprar DID

> Did Endpoint

```text
https://voice-api.zenvia.com/did/
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            d '{"did_id":"123"}' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/did/'
```
```php
Em construção
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
    "dids": [
      {
        "id": 12341,
        "cidade": "SAO PAULO",
        "estado": "SP",
        "numero": "5511203729395"
      },
      {
        "id": 12341,
        "cidade": "Campinas",
        "estado": "SP",
        "numero": "5519350128096"
      }
    ]
  }
}
```

<aside class="notice">Antes era possível consultar os números de DIDs disponíveis e comprá-los automaticamente. Atualmente é necessário entrar em contato com o time de suporte da equipe de voz da Zenvia pelo email  <a href="">suporte.voz@zenvia.com</a>
</aside>


<p style="color:#5A5A5A;">Para adquirir um DID você deve ter um cartão de crédito cadastrado na plataforma.<p>

Método utilizado: 

**POST** <a href = "https://voice-api.zenvia.com/did/">https://voice-api.zenvia.com/did/</a>

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td style="color:#5A5A5A;">
                did_id
                <span class="required" >Obrigatório</span>
            </td>
            <td style="color:#5A5A5A;">
                Id do DID que será comprado
             </td>
        </tr>
    </tbody>
</table>

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td style="color:#5A5A5A;">
                dados
                <span class="attribute">object</span>
            </td>
            <td style="color:#5A5A5A;">
                Retorna o id do DID adquirido.
             </td>
        </tr>
    </tbody>
</table>

### Deletar DID

Para deletar um número de telefone (DID) cadastrado na sua conta, basta informar o ID do mesmo. 

Método utilizado: 

**DELETE** <a href = "https://voice-api.zenvia.com/did/{id}">https://voice-api.zenvia.com/did/{id}</a>

### Objeto Chamada DID

> Chamada Recebidas Endpoint

```text
https://voice-api.zenvia.com/did/chamada/{id}
```

> <br>

> JSON

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "id": 21344543,
    "ativa": false,
    "url_gravacao": "https://api.evoline.com.br/rec/sua-gravacao.mp3",
    "data_inicio": "2019-07-10T09:45:49-03:00",
    "numero_destino": "552120182097",
    "numero_origem": "4831810323",
    "status": "sem resposta",
    "duracao_segundos": 18,
    "tags": null,
    "duracao": "00:00:18",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "ramal_id": 34484,
    "ramal": "2000",
    "gravacoes_parciais": []
  }
}
```

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos.  

**Endpoint:** <a href = "https://voice-api.zenvia.com/did/chamada/{id}">https://voice-api.zenvia.com/did/chamada/{id}</a>

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
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de início do registro da chamada. Data e Hora no formato UTC
            </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número de destino da ligação
             </td>
        </tr>
        <tr>
            <td>
                numero_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número que originou a ligação.
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
                  ramal_id
                  <span class="attribute">integer</span>
              </td>
              <td>
                  ID do ramal vinculado ao DID
              </td>
          </tr>
    </tbody>
</table>

### Buscar chamada recebida

> Definição

```text
GET https://voice-api.zenvia.com/did/chamada/{id-chamada}
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/did/chamada/{id-chamada}'
```
```php
Em Construção
```
```javascript--node
Em Construção
```
```go
Em Construção
```
```python
Em Construção
```
```java
Em Construção
```
```ruby
Em Construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Você poderá consultar as chamadas recebidas por um DID. 

Para requisitar, basta informar o período desejado e o ID do DID para que a API retorne os dados. 

**GET** <a href = "https://voice-api.zenvia.com/did/chamada/{id-chamada}">https://voice-api.zenvia.com/did/chamada/{id-chamada}</a>

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da chamada recebida a ser consultada
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
                Dados da chamada recebida.
             </td>
        </tr>
    </tbody>
</table>

### Relatório chamadas recebidas por DID

> Definição

```text
GET https://voice-api.zenvia.com/did/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/did/1/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->did->relatorioChamadas($id, $dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.did.relatorioChamadas(id, dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.DID.RelatorioChamadas.Gerar(id, dataInicial, dataFinal, filtros)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.did.get_relatorio_chamadas(id, data_inicio, data_fim, filtros)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Did did = new Did(client);
JSONObject response = did.relatorioChamadas(id, dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.did.relatorioChamadas(id, data_inicial, data_final, filtros)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Para consultar as chamadas recebidas por um DID, basta informar o período desejado e o ID do DID para que a API retorne os dados.

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
                ID do DID que será consultado
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
                total
                <span class="attribute">integer</span>
            </td>
            <td>
                Retorna a quantidade total de registros
             </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="attribute">integer</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
             </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="attribute">integer</span>
            </td>
            <td>
                Quantidade de chamadas que retornou na consulta.
             </td>
        </tr>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-chamada-did">chamada DID</a>
             </td>
        </tr>
    </tbody>
</table>

### Relatório de todas as chamadas 

> Definição

```text
GET https://voice-api.zenvia.com/did/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://voice-api.zenvia.com/did/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
$response = $client->did->relatorioChamadas($dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.did.relatorioChamadas(dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
response, err := client.DID.RelatorioChamadas.Gerar(dataInicial, dataFinal, filtros)
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.did.get_relatorio_chamadas(data_inicio, data_fim, filtros)
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Did did = new Did(client);
JSONObject response = did.relatorioChamadas(dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.did.relatorioChamadas(data_inicial, data_final, filtros)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Para consultar todas as chamadas recebidas por todos os DIDs, basta informar o período desejado e o ID do DID para que a API retorne os dados.

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
                total
                <span class="attribute">integer</span>
            </td>
            <td>
                Retorna a quantidade total de registros
             </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="attribute">integer</span>
            </td>
            <td>
                Posição para seleção dos dados do relatório - começa na posição 0. Também chamado de offset.
             </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="attribute">integer</span>
            </td>
            <td>
                Quantidade de chamadas que retornou na consulta.
             </td>
        </tr>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-chamada-did">chamada DID</a>
             </td>
        </tr>
    </tbody>
</table>

## URA

Usando esse recurso, será possível otimizar e automatizar suas chamadas com URAs (Unidade de Resposta Audível).

Uma URA possui uma estrutura de atendimento e, em nossa API, você tem diversas possibilidades. 

### Objeto URA

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

O objeto é um modelo JSON. Para realizar a chamada, é necessário que esta contenha os parâmetros solicitados abaixo na tabela Atributos. Ao final, a API fará o retorno.

**Endpoint:** <a href = "https://voice-api.zenvia.com/ura">https://voice-api.zenvia.com/ura</a>

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

### Parâmetros da estrutura da URA

Na tabela abaixo, você encontra todos os Parâmetros que podem ser utilizados. 

Observações importantes: O nome da "acao" é o maior e o que deve estar dentro do array "acao_dados" é o que vem logo abaixo. Veja o exemplo ao lado.

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

### Criar URA

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

Para criar uma URA, veja a lista de opções dos dados que podem ser utilizadas em Parâmetros da  estrutura da URA 


**POST:** <a href = "https://voice-api.zenvia.com/ura">https://voice-api.zenvia.com/ura</a>

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

### Buscar URA

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

Caso deseje, após a criação de uma URA você poderá realizar a busca do registro
pelo seu ID. 

Para buscar, é necessário o envio da chave da fila na URL da requisição seguido da autenticação Acess Token no Header. 

A chamada para obter os dados da consulta deve ser realizada utilizando um HTTP GET para o endereço de definição da API.

**GET** <a href = "https://voice-api.zenvia.com/ura/{id}">https://voice-api.zenvia.com/ura/{id}</a>

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

### Editar URA

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

Para alterar as informações de uma URA, o método de solicitação deve ser HTTP PUT. Ele criará um novo recurso e substituirá as antigas informações. 

**PUT** <a href = "https://voice-api.zenvia.com/ura/{id}">https://voice-api.zenvia.com/ura/{id}</a>

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

### Deletar URA

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

Para deletar uma URA, basta informar o ID da mesma que deseja remover.

Método utilizado: 

**DELETE** <a href = "https://voice-api.zenvia.com/ura/{id}">https://voice-api.zenvia.com/ura/{id}</a>

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


### Relatório URA

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

Para consultar sua lista de URAs e suas estruturas, o método de solicitação deve ser HTTP GET. Ele retornará um array com as URAs e seus IDs. 

**GET** <a href = "https://voice-api.zenvia.com/ura/relatorio">https://voice-api.zenvia.com/ura/relatorio</a>

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