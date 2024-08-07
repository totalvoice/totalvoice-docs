# Efetuando Ligações

Nesta seção você encontrará exemplos de como trabalhar com ligações com a API de Voz da ZenAPI.

`Access-Token: Token`

<aside class="notice">
 Você precisa substituir `access-token` pelo seu Token fornecido pela ZenAPI.
</aside>

### Realizando uma ligação

Para realizar uma ligação basta informar o número origem e o número destino, conforme os exemplos.

> Para realizar uma chamada telefônica, utilize este código:

```php
<?php
// Consideramos que já existe um autoloader compatível com a PSR-4 registrado

use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('{{access-token}}');
$response = $client->chamada->ligar('NUMERO-A', 'NUMERO-B');

echo $response->getContent();
```

```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("{{access-token}}");

client.chamada.ligar("+5510999999999", "+5510999999999")
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
    response, err := client.Chamada.Criar("+5510999999999", "+5510999999999", nil)
   
    if err != nil {
		panic(err)
	}
	fmt.Println(response)
}
```

```python
from totalvoice.cliente import Cliente

cliente = Cliente("{{access-token}}", 'HOST') #ex: voice-api.zenvia.com

#Cria chamada
numero_origem = "+5510999999999"
numero_destino = "+5510999999999"
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

> Você precisa substituir `{{access-token}}` pelo seu Token fornecido pela ZenAPI.

### HTTP Request

`POST http://voice-api.zenvia.com/chamada`
