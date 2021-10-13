# Autenticação

> <b>Exemplo de autenticação</b>

```shell--curl
$ curl https://voice-api.zenvia.com/sms \
    --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO'
```

```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
```

```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");
```

```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
```

```python
from totalvoice.cliente import Cliente
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'voice-api.zenvia.com')
```

```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
```

> <b>IMPORTANTE:</b> Não esqueça de alterar o Token de exemplo pelo seu Token.

A API de Voz utiliza um Token de Acesso para realizar a autenticação de sua conta, você deve incluir o Access-Token 
na requisição HTTP através do cabeçalho, ou pela *Query String*. 

Exemplo de Access-Token:

`testeM68PU1Izmb9chEdLzep7IwRymWO`


As bibliotecas disponibilizadas pelo ZenAPI já fazem a autenticação na requisição HTTP de forma transparente. 

<aside class="notice">
 Mantenha seu Token em segredo, tome muito cuidado, não deixe ele exposto em um código público e nunca
 compartilhe com ninguém fora da sua organização.
</aside>
