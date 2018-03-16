# Autenticação

> Exemplo de autenticação

```shell--curl
$ curl https://api.totalvoice.com.br/sms \
    --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO'
```

```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
```

```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("{{access-token}}");
```

```go
client := totalvoice.NewTotalVoiceClient("{{access-token}}")
```

```python
from totalvoice.cliente import Cliente
cliente = Cliente("{{access-token}}", 'api.totalvoice.com.br')
```

```java
TotalVoiceClient client = new TotalVoiceClient("{{access-token}}");
```

> Não esqueça de alterar o Token de exemplo pelo seu Token.

A TotalVoice utiliza um Token de Acesso para realizar a autenticação de sua conta, você deve incluir o Access-Token 
na requisição HTTP através do cabeçalho, ou pela *Query String*. 

Exemplo de Access-Token:

`testeM68PU1Izmb9chEdLzep7IwRymWO`


As bibliotecas disponibilizadas pela TotalVoice já fazem a autenticação na requisição HTTP transparentemente. 

<aside class="warning">
 Seu Token deverá ser mantido em segredo, tome muito cuidado, não deixe ele exposto em um código público e nunca
 compartilhe com ninguém fora da sua organização.
</aside>
