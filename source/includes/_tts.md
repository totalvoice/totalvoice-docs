# TTS Leitura de Texto

### Criar um 

> post audio

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