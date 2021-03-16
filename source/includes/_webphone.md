# Webphone

> Webphone End Point

```text
https://api2.totalvoice.com.br/webphone
```

Webphone é uma maneira de se conectar a um Ramal diretamente por um computador, todo ramal tem uma URL na qual
pode acessar o Webphone sem precisar se conectar a plataforma da ZenAPI, muito utilizado em integrações
para implementar ligações diretamente em um software ou sistema de uma maneira fácil.

Há três tipos de Webphone:

- **Floating**: Quando você vai abrir o Webphone em um popup;
- **Embedded**: Se o Webphone ficará embutido no site / sistema;
- **Hidden**: Sem interface, apenas funções Javascript.

Um webphone é vinculado diretamente a um Ramal.

## Consultar URL Webphone

> Definição

```text
GET https://api2.totalvoice.com.br/webphone
```

Consulta a URL do Webphone de um determinado Ramal enviando os parâmetros para pré-configuração do webphone, a URL
gerada vem com um código único para acesso daquele Webphone sem ser necessário login na plataforma da ZenAPI.

> <br/>Request

```shell--curl
curl 'https://api2.totalvoice.com.br/webphone?ramal=4000' \
    -X GET \
    --header 'Access-Token: Seu_Token'
```
```php
<?php
$client = new TotalVoiceClient('Seu_Token');

$webphone_dados = array("ramal" => 4000);
$response = $client->central->webphone($webphone_dados);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("Seu_Token");

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
client := totalvoice.NewTotalVoiceClient("Seu_Token")

m := map[interface{}]interface{}{}
m["ramal"] = 4000

response, err := client.Ramal.Webphone(m)
```
```python
client = Cliente("Seu_Token", 'api2.totalvoice.com.br')
response = client.webphone.get_webphone("floating", None, 4000)
```
```java
TotalVoiceClient client = new TotalVoiceClient("Seu_Token");
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
        "url": "https://api2.totalvoice.com.br/w3/?key=XXXXXXXXXXXXXXXXXXXXXX83b3420&pop=1"
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
               Identificador único do Ramal que você deseja usar no Webphone, obrigatório caso não for informar o campo ramal.
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
                Se você quiser que o Webphone feche ao fim da ligação deve colocar esse campo como true;
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

## Criar Webphone

Você pode criar um webphone utilizando nosso exemplo localizado em <a href = "https://github.com/totalvoice/webphone-js">Exemplo Webphone</a>.

## Funções do Webphone

```javascript
function conectar(){
                webphone.contentWindow.postMessage({message : 'conectar'}, '*');
            }
```



```javascript
function desconectar(){
                webphone.contentWindow.postMessage({message : 'desconectar'}, '*');
            }
```



```javascript
function chamaNumero(numero) {
                webphone.contentWindow.postMessage({
                    message: 'chamaNumero',
                    'numero': numero
                }, '*');
            }
```



```javascript
function atender() {
                webphone.contentWindow.postMessage({
                    message: 'answer'
                }, '*');
            }
```



```javascript
function desligaChamada() {
                webphone.contentWindow.postMessage({
                    message: 'hangup'
                }, '*');
            }
```



```javascript
function enviaDTMF(meuDTMF) {
                webphone.contentWindow.postMessage({
                    message: 'enviaDTMF',
                    'dtmf': meuDTMF
                }, '*');
            }
```



```javascript
function mute() {
                webphone.contentWindow.postMessage({
                    message: 'mute'
                }, '*');
            }
```



```javascript
function transferir(numeroTelefone) {
                webphone.contentWindow.postMessage({
                    message: 'transferir',
                    'numeroTelefone': numeroTelefone
                }, '*');
            }
```



```javascript
function transferirConsulta(numeroTelefone) {
                webphone.contentWindow.postMessage({
                    message: 'transferirConsulta',
                    'numeroTelefone': numeroTelefone
                }, '*');
            }
```



```javascript
function recstart() {
                webphone.contentWindow.postMessage({
                    message: 'recStart'
                }, '*');
            }
```



```javascript
function recstop() {
                webphone.contentWindow.postMessage({
                    message: 'recStop'
                }, '*');                
            }
```

```javascript
function pausarNaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'pausarNaFila',
                filaId: filaId
                }, '*');
            }
```

```javascript
function despausarNaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'despausarNaFila',
                filaId: filaId
                }, '*');
            }
```

```javascript
function entrarNaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'entrarNaFila',
                filaId: filaId
                }, '*');
            }
```

```javascript
function sairDaFila(filaId) {
                webphone.contentWindow.postMessage({
                message: 'sairDaFila',
                filaId: filaId
                }, '*');
            }
```

<table class="table-parameters">
    
    <tbody>
        <tr>
            <td>
                <b>conectar()<b>
            </td>
            <td>
                Conecta o webphone
            </td>
        </tr>
        

        <tr>
             <td>
                <b>desconectar()<b>
            </td>
            <td>
                Desconecta o webphone
            </td>
        </tr>
        

        <tr>
            <td>
                <b>chamaNumero(numero)<b>
            </td>
            <td>
                Telefona para o número/ramal destino
            </td>
        </tr>
        <tr>
            <td>
                <b>atender()<b>
            </td>
            <td>
                Atender chamada
            </td>
        </tr>
        <tr>
            <td>
                <b>desligaChamada()<b>
            </td>
            <td>
                Encerra chamada ativa
            </td>
        </tr>
        <tr>
            <td>
                <b>enviaDTMF(meuDTMF)<b>
            </td>
            <td>
                Envia um DTMF(número ou caracter) através de uma tecla. Números de 0 à 9, Asterisco(*) ou Sustenido(#).
            </td>
        </tr>
        <tr>
            <td>
                <b>mute()<b>
            </td>
            <td>
                Microfone fica mudo
            </td>
        </tr>
        <tr>
            <td>
                <b>transferir(numeroTelefone)<b>
            </td>
            <td>
                Transferir ligação sem consulta
            </td>
        </tr>
        <tr>
            <td>
                <b>transferirConsulta(numeroTelefone)<b>
            </td>
            <td>
                Transferir ligação com consulta
            </td>
        </tr>
        <tr>
            <td>
                <b>recstart()<b>
            </td>
            <td>
                Inicia a gravação parcial de uma chamada
            </td>
        </tr>
        <tr>
            <td>
                <b>recstop()<b>
            </td>
            <td>
                Encerra a gravação parcial da chamada
            </td>
        </tr>

        <tr>
            <td>
                <b>pausarNaFila(filaId)<b>
            </td>
            <td>
                Pausa um ramal na fila `filaId` ou em todas as filas caso nenhum valor seja passado
            </td>
        </tr>

        <tr>
            <td>
                <b>despausarNaFila(filaId)<b>
            </td>
            <td>
                Despausa um ramal na fila `filaId` ou em todas as filas caso nenhum valor seja passado
            </td>
        </tr>

        <tr>
            <td>
                <b>entrarNaFila(filaId)<b>
            </td>
            <td>
                Insere o ramal na fila definida em `filaId`
            </td>
        </tr>

        <tr>
            <td>
                <b>sairDaFila(filaId)<b>
            </td>
            <td>
                Remove o ramal na fila definida em `filaId`
            </td>
        </tr>
    </tbody>
</table>


## Eventos do Webphone

```javascript

if (e.data.message == 'chegandoChamada') {
    alert('Chegando Chamada de ' + e.data.numeroChegando + ' para: ' + 
    e.data.numeroDestino + ' chamada_recebida_id: ' + e.data.chamadaRecebidaId);
}


if (e.data.message == 'status') {
    alert('Status: ' + e.data.status);
}


if (e.data.message == 'chamada_id') {
    alert('Chamada_id: ' + e.data.chamada_id);
}


if (e.data.message == 'status_erro') {
    alert('Sem Permissão: ' + e.data.status_erro);
}

                
if (e.data.message == 'stats_webphone') {
    alert('Internet: ' + e.data.internet + ' e computador: ' + e.data.computador);
}

if (e.data.message == 'entrou_na_fila') {
    alert('Ramal entrou na fila');
}

if (e.data.message == 'saiu_da_fila') {
    alert('Ramal saiu da fila');
}

if (e.data.message == 'pausou_na_fila') {
    alert('Ramal foi pausado na fila');
}

if (e.data.message == 'despausou_na_fila') {
    alert('Ramal foi despausado na fila');
}
```

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                <b>chegandoChamada<b>
            </td>
            <td>
                Ao receber uma chamada é disparado uma mensagem com o número de envio(e.data.numeroChegando), número de destino(e.data.numeroDestino) e o ID da chamada( e.data.chamadaRecebidaId).
            </td>
        </tr>
        <tr>
             <td>
                <b>status<b>
            </td>
            <td>
                Dispara uma mensagem ao ser alterado o status da chamada(e.data.status), que são exemplos de status: <b>conectado<b>, <b>desconectado<b>, <b>chamando<b>, <b>encerrada<b>, <b>conversando<b>.
            </td>
        </tr>
        <tr>
            <td>
                <b>chamada_id<b>
            </td>
            <td>
                Ao ser iniciada a chamada é disparado esse evento que retorna o identificador único da chamada(e.data.chamada_id), o ID é único e pode ser utilizado na api para recuperação de mais informações (get na api ou webhooks). 
            </td>
        </tr>
        <tr>
            <td>
                <b>status_erro<b>
            </td>
            <td>
                Ao ocorrer um erro(e.data.status_erro) durante a efetuação da chamada é disparado esse evento.
            </td>
        </tr>
        <tr>
            <td>
                <b>stats_webphone<b>
            </td>
            <td>
                Recebe o status da qualidade de conexão(Diagnóstico do Ping e Jitter) e computador(Uso da CPU) para verificar a qualidade da ligação.
            </td>
        </tr>
        <tr>
            <td>
                <b>pausou_na_fila<b>
            </td>
            <td>
                É chamado quando o ramal é pausado em alguma fila.
            </td>
        </tr>
        <tr>
            <td>
                <b>despausou_na_fila<b>
            </td>
            <td>
                É chamado quando o ramal é despausado em alguma fila.
            </td>
        </tr>
        <tr>
            <td>
                <b>entrou_na_fila<b>
            </td>
            <td>
                É chamado quando o ramal entra em alguma fila.
            </td>
        </tr>
        <tr>
            <td>
                <b>saiu_da_fila<b>
            </td>
            <td>
                É chamado quando o ramal sai de alguma fila.
            </td>
        </tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
