# Central Telefônica

Na central telefonica você podera fazer configurações e retirar relatorios de ramai e URAs

Caso você deseje utilizar a API da TotalVoice para ligações recepitivas, entre em [contato](#introducao) conosco para a contração de um número recepitivo(DID).

### Objeto Chamada Ramal

> <br>

> JSON

```json
{
    "id": 76498,
    "ramal": "3333",
    "login": "testee@TotalVoice.com.br",
    "senha": "123456assc",
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
Definição do objeto Chamada Ramal

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
                senha
                <span class="attribute">string</span>
            </td>
            <td>
                Senha do ramal
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
                 Permite faz ligações externas
             </td>
         </tr>
         <tr>
             <td>
                 ligacao_celular
                 <span class="attribute">boolean</span>
             </td>
             <td>
                 Permite faz ligações para números de celular
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

## Criar um ramal

> Definição

```text
POST https://api2.totalvoice.com.br/ramal
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"ramal":"","login":"","senha":""}' \
             'https://api2.totalvoice.com.br/ramal'
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
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
    "login": "123teste231@totalvoice.com.br",
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
Nenhum campo é obrigatorio, mas indicamos que você passe os parâmetros ramal, e login para controlar melhor os ramais criados.

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
                Senha do ramal
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
                Permite faz ligações externas
            </td>
        </tr>
        <tr>
            <td>
                ligacao_celular
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite faz ligações para números de celular
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
                Permite o usário deste ramal ver gravações
            </td>
        </tr>
        <tr>
            <td>
                webphone
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite o usário utilizar webphone
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
                Se esse valor for igual a true, ao ligar para esse ramal ele sera incaminhado para uma caixa postal que gravar recados.(Não ira chamar no usuário)
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
GET https://api2.totalvoice.com.br/ramal/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://api2.totalvoice.com.br/ramal/{id}'
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
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
    "login": "teste@totalvoiceteste.com.br",
    "senha": "1234ioYNua",
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
Após o ramal criado, você pode consultar suas informações

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

## Editar um

> Definição

```text
PUT https://api2.totalvoice.com.br/ramal/{id}
```

> Request

```shell--curl
curl -X PUT --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"senha":"4321789"}' \
             'https://api2.totalvoice.com.br/ramal/{id}'
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
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
                Id do ramal que sera modíficado(O id é passado na URL do endpoint) 
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
                Senha do ramal
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
                Permite faz ligações externas
            </td>
        </tr>
        <tr>
            <td>
                ligacao_celular
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite faz ligações para números de celular
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
                Permite o usário deste ramal ver gravações
            </td>
        </tr>
        <tr>
            <td>
                webphone
                <span class="attribute">boolean</span>
            </td>
            <td>
                Permite o usário utilizar webphone
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
                Se esse valor for igual a true, ao ligar para esse ramal ele sera incaminhado para uma caixa postal que gravar recados.(Não ira chamar no usuário)
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
                Retorna o status da requisição</a>
             </td>
        </tr>
    </tbody>
</table>

## Deletar um ramal

> Definição

```text
DELETE https://api2.totalvoice.com.br/ramal/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             'https://api2.totalvoice.com.br/ramal/{id}'
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
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
GET https://api2.totalvoice.com.br/ramal/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://api2.totalvoice.com.br/ramal/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
Em construção
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
        "senha": "1234TesteTotal",
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
        "senha": "1234TesteTotal",
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
                Retorna um array com objetos ramal</a>
             </td>
        </tr>
    </tbody>
</table>

<b>Importante:</b> Se você tiver um relatorio com 350 ramais, na primeira página sera retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

## Listar pausas do ramal

> Definição

```text
GET https://api2.totalvoice.com.br/ramal/{id}/pausas
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://api2.totalvoice.com.br/ramal/{id}/pausas?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
Em construção
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
                Id do ramal que sera modíficado(O id é passado na URL do endpoint) 
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
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o objeto com os dados de pausa do ramal
             </td>
        </tr>
    </tbody>
</table>

<b>Importante:</b> Se você tiver um relatorio com 350 pausas do ramal, na primeira página sera retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.

## Listar ligações de um ramal

> Definição

Lista as ligações <u>recebidas</u> por um ramal no périodo desejado.

```text
GET https://api2.totalvoice.com.br/ramal/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' \
            'https://api2.totalvoice.com.br/ramal/{id}/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('seu-token');
Em construção
```
```javascript--node
const totalvoice = require('totalvoice-node');
Em construção
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
Em construção
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
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
                Id do ramal que sera modíficado(O id é passado na URL do endpoint) 
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
                Retorna um array com objetos de chamadas atendidas</a>
             </td>
        </tr>
    </tbody>
</table>

<b>Importante:</b> Se você tiver um relatorio com 350 pausas do ramal, na primeira página sera retornado 200. Para pegar os dados da segunda página o valor da posição deve ser 201.


<br>
<br>