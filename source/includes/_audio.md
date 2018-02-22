# Áudio

### Criar um 
Possibilita o envio de mensagens de voz (audio) / torpedos de voz

> Exemplo

```curl
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Access-Token: ACCESS_TOKEN' -d '{"numero_destino":"NUMERO_DESTINO","url_audio":"http://foo.bar/audio.mp3"}' 'https://api.totalvoice.com.br/audio'
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
response = cliente.audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3")
```
```java
Audio audio = new Audio(client);
JSONObject result = audio.enviar("NUMERO_DESTINO", "http://foo.bar/audio.mp3");
```

#### Atributos
| Nome           | Descrição      | Tipo           | Obrigatório
| -------------- | -------------- | -------------- | --------------
| Número Destino | Número do telefone que irá receber a chamada, formato DDD + Número exemplo: 4832830151 | String         | Sim
| URL áudio      | URL do audio formato MP3, exemplo: http://foooo.bar/audio.mp3 | String         | Sim
| Resposta Usuário | Flag para aguardar resposta do usuário | Boolean         | Não
| Bina           | Número de telefone que aparecerá no identificador de quem receber a chamada, formato DDD + Número exemplo: 4832830151 | String         | Não

### Recuperar os dados de 

> Exemplo

### Editar um

> Exemplo

### Listar todos os 

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