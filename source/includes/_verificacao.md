# Verificação (2FA)

> <b>Verificação (2FA) Endpoint</b>

```text
https://api2.totalvoice.com.br/verificacao
```
A funcionalidade de **verificacao** ou Two Factor Authentication(2FA), envia um código para um número de telefone, e depois você pode verificar se o código informado pelo usuário é válido.

Esse código(apenas números) pode ser enviado via SMS (formato de texto) ou então TTS, onde você nos passa a mensagem que o usuário que atender a ligação irá ouvir.

<b>Mensagem enviada:</b> Seu codigo de verificacao *nome_produto* e: 1234

## Enviar um código

> Definição

```text
POST https://api2.totalvoice.com.br/verificacao
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero_destino":"4811111111","nome_produto":"TotalVoice App"}' \
             'https://api2.totalvoice.com.br/verificacao'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->verificacao->enviar('4811111111', 'TotalVoice App');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.verificacao.enviar("4811111111", "TotalVoice App")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.verificacao.enviar("4811111111", "TotalVoice App", false, "")
```
```python
client = Cliente("seu-token", 'api.totalvoice.com.br')
response = client.verificacao.enviar("4811111111", "TotalVoice App")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Verificacao verificacao = new Verificacao(client);

JSONObject response = verificacao.enviar("4811111111", "TotalVoice App");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.verificacao.enviar("4811111111", "TotalVoice App")
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "dados retornados com sucesso",
    "dados": {
        "id": 12345
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
                Número do telefone que irá receber o código, via sms ou tts.
             </td>
        </tr>
        <tr>
            <td>
                nome_produto
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nome do produto que sera substituido na mensagem. 
            </td>
        </tr>
        <tr>
            <td>
                tamanho
                <span class="optional">Opcional</span>
            </td>
            <td>
                Tamanho do código que sera enviado. Minimo 4 e máximo 10, o código possui apenas números.
            </td>
        </tr>
        <tr>
            <td>
                tts
                <span class="optional">Opcional</span>
            </td>
            <td>
                Caso você deseje que o número receba uma ligação invés de um sms, basta enviar esse parâmetro como 'true'.
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
                Retorna o ID do do verificação de código enviada.
             </td>
        </tr>
    </tbody>
</table>

## Consultar código

> Definição


```text
GET https://api2.totalvoice.com.br/verificacao
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://api2.totalvoice.com.br/verificacao/?id=1234&pin=36355'
```
```php
<?php
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
    "resultado": "valido"
  }
}
```

Após o envio do código, você pode pedir para o usuário inserir na sua platarforma o código recebido para que você possa validar o número dele.



##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da verificação enviada
             </td>
        </tr>
        <td>
                pin
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Código informado
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
                Retorna o 'resultado' da verificação, o resultado pode ser 'valido' ou 'invalido'
             </td>
        </tr>
    </tbody>
</table>