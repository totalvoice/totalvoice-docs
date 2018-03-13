# Áudio

### Criar um áudio

> Exemplo Requisição

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: ACCESS_TOKEN' \
             -d '{"numero_destino":"NUMERO_DESTINO","url_audio":"http://foo.bar/audio.mp3"}' \
             'https://api.totalvoice.com.br/audio'
```
```php
<?php
$response = $client->audio->enviar('NUMERO-DESTINO', 'http://foo.bar/audio.mp3');
```
```javascript--node
var response = client.audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3")
```
```go
 response, err := client.Audio.Enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3", false, "")
```
```python
response = client.audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3")
```
```java
Audio audio = new Audio(client);
JSONObject result = audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3");
```
> Exemplo Resposta

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
Possibilita o envio de mensagens de voz (audio) / torpedos de voz para um determinado número.

#### Atributos

<table>
    <tbody>
        <tr>
            <td>
                Número Destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone que irá receber a chamada, formato DDD + Número exemplo: 4832830151
             </td>
        </tr>
        <tr>
            <td>
                URL áudio
                <span class="required">Obrigatório</span>
            </td>
            <td>
                URL do audio formato MP3, exemplo: http://foo.bar/audio.mp3
            </td>
        </tr>
        <tr>
            <td>
                Resposta do Usuário
                <span class="required">Opcional</span>
            </td>
            <td>
                Aguardar uma resposta do destinário
            </td>
        </tr>
        <tr>
            <td>
                Gravar Áudio
                <span class="required">Opcional</span>
            </td>
            <td>
                Gravar a ligação
            </td>
        </tr>
        <tr>
            <td>
                Bina
                <span class="required">Opcional</span>
            </td>
            <td>
                Número de telefone que aparecerá no identificador de quem receber a chamada, formato DDD + Número exemplo: 4832830151
            </td>
        </tr>
    </tbody>
</table>

### Recuperar áudio

Busca uma mensagem de áudio pelo seu ID

> Exemplo Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Access-Token: ACCESS_TOKEN' 'https://api.totalvoice.com.br/audio/1'
```
```php
<?php
$response = $client->audio->buscaAudio(123);
```
```javascript--node
var response = client.audio.buscar(123)
```
```go
 response, err := client.Audio.Buscar(123)
```
```python
response = client.audio.get_by_id(123)
```
```java
Audio audio = new Audio(client);
JSONObject result = audio.buscar(123);
```
> Exemplo Response

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
    "resposta": "8"
  }
}
```

### Editar um áudio

> Exemplo

### Listar áudios 

> Exemplo

```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
```

```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("{{access-token}}");

client.chamada.ligar("4832830151", "4811111111")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });
```

```go
package main

import (
	"fmt"

	"github.com/totalvoice/totalvoice-go"
)

func main() {
    client := totalvoice.NewTotalVoiceClient("{{access-token}}")
    response, err := client.Chamada.Criar("4811111111", "4822222222", nil)
   
    if err != nil {
		panic(err)
	}
	fmt.Println(response)
}
```

```python
from totalvoice.cliente import Cliente

cliente = Cliente("{{access-token}}", 'HOST') #ex: api.totalvoice.com.br

#Cria chamada
numero_origem = "48999999999"
numero_destino = "48900000000"
response = cliente.chamada.enviar(numero_origem, numero_destino)
print(response)
```

```java
package br.com.totalvoice;

import br.com.totalvoice.api.Chamada;
import org.json.JSONObject;

public class Main {
    
    public static void main(String args[]) {
        
        try {
            TotalVoiceClient client = new TotalVoiceClient("{{access-token}}");
            Chamada chamada = new Chamada(client);

            JSONObject result = chamada.ligar("NUMEROA", "NUMEROB");
            System.out.println(result);

        } catch(Exception ex) {
            System.out.println(ex.getMessage());
        }
    }
}
```

Para autenticar sua conta você deve incluir na requisição HTTP o cabeçalho **Access-Token**, 
colocando no valor o token disponibilizado na sua Dashboard da TotalVoice, tome sempre cuidado, não forneça seu token
para ninguém e nem deixe ele exposto no código, seu token contém muitos privilégios. 

`Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO`

As bibliotecas disponibilizadas pela TotalVoice já fazem a autenticação no cabeçalho HTTP transparentemente. 