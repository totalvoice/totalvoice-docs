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
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");
```

```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
```

```python
from totalvoice.cliente import Cliente
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
```

```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
```

> Não esqueça de alterar o Token de exemplo pelo seu Token.

A TotalVoice utiliza um Token de Acesso para realizar a autenticação de sua conta, você deve incluir o Access-Token 
na requisição HTTP através do cabeçalho, ou pela *Query String*. 

Exemplo de Access-Token:

`testeM68PU1Izmb9chEdLzep7IwRymWO`


As bibliotecas disponibilizadas pela TotalVoice já fazem a autenticação na requisição HTTP transparentemente. 

<aside class="warning">
 Mantenha seu Token em segredo, tome muito cuidado, não deixe ele exposto em um código público e nunca
 compartilhe com ninguém fora da sua organização.
</aside>
