# Webphone

> Webphone End Point

```text
https://api.totalvoice.com.br/webphone
```

Webphone é uma maneira de conectar à um Ramal diretamente de um computador, todo ramal tem uma URL na qual
pode acessar o Webphone sem precisar se conectar ao site da TotalVoice, muito utilizado em integrações,
para implementar ligações diretamente em um software ou sistema de uma maneira fácil.

Há três tipos de Webphone:

- **Floating**: Quando você vai abrir o Webphone em uma popup;
- **Embedded**: Se o Webphone ficará embutido no site / sistema;
- **Hidden**: Sem interface, apenas funções Javascript.

Um webphone é vinculado diretamente com um Ramal.

## Consultar URL Webphone

> Definição

```text
GET https://api.totalvoice.com.br/webphone
```

Consulta a URL do Webphone de um determinado Ramal enviando os parâmetros para pré-configuração do webphone, a URL
gerada vem com um código único para acesso daquele Webphone sem ser necessário login na TotalVoice.

> <br/>Request

```shell--curl
curl 'https://api.totalvoice.com.br/webphone?ramal=4000' \
    -X GET \
    --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');

$webphone_dados = array("ramal" => 4000);
$response = $client->central->webphone($webphone_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

var webphone_dados = { 
    ramal: 4000
};
client.central.webphone(webphone_dados)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")

m := map[interface{}]interface{}{}
m["ramal"] = 4000

response, err := client.Ramal.Webphone(m)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.webphone.get_webphone("floating", None, 4000)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Central central = new Central(client);

JSONObject webphone_dados = new JSONObject();
webphone_dados.put("ramal", 4000);

JSONObject response = central.webphone(webphone_dados);
```

> <br/>Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "url webphone",
    "dados": {
        "url": "https://api.totalvoice.com.br/w3/?key=XXXXXXXXXXXXXXXXXXXXXX83b3420&pop=1"
    }
}
```

> <br/><br/><br/>

##### Request Query

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
               Identificador único do Ramal que você deseja pegar o Webphone, obrigatório caso não for informar o campo ramal.
            </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
               Número do Ramal que você deseja buscar o Webphone, obrigatório caso não for informar o campo id_ramal.
            </td>
        </tr>
        <tr>
            <td>
                ligar_para
                <span class="optional">Opcional</span>
            </td>
            <td>
               Se você deseja que o Webphone já disque automaticamente para algum número quando abrir, deverá informar o número neste campo.
            </td>
        </tr>
        <tr>
            <td>
                fechar_fim
                <span class="optional">Opcional</span>
            </td>
            <td>
                Se você quiser que o Webphone feche ao fim da ligação, colocar esse campo como true;
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="optional">Opcional</span>
            </td>
            <td>
                Tipo do Webphone, poderá ser: floating, embedded, hidden, por padrão irá o Floating.
            </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                url
                <span class="attribute">string</span>
            </td>
            <td>
                Retorna a URL completa do Webphone do Ramal desejado. 
             </td>
        </tr>
    </tbody>
</table>
