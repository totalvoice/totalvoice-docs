# DIDs

> Chamada Endpoint

```text
https://api.totalvoice.com.br/did
```

A funcionalidade **DID** permite que você gerencie, adquire ou remova um DID da sua Conta. Também será possível extrair relatórios dos DIDs adquiridos
e as chamadas recebidas por um número em específico da sua Conta.

### Objeto Chamada DID

> <br>

> JSON

```json
{
    "id": 1,
    "ativa": false,
    "url_gravacao": "https://url-gravacao/rec/?id=1",
    "data_inicio": "2018-09-27T16:35:15-03:00",
    "numero_destino": "554811111111",
    "numero_origem": "554811111111",
    "status": "ocupado",
    "duracao_segundos": 15,
    "duracao": "00:00:15",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "ramal_id": 1231313
}
```
Definição do objeto Chamada

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro da chamada.
             </td>
        </tr>
        <tr>
            <td>
                ativa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Identifica se a chamada está ativa ou não
             </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                URL com áudio da gravação da chamada
             </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de ínicio do registro da chamada. Data e Hora no formato UTC
            </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número de destino da ligação
             </td>
        </tr>
        <tr>
            <td>
                numero_origem
                <span class="attribute">string</span>
            </td>
            <td>
                Número que originou a ligação.
             </td>
        </tr>
        <tr>
             <td>
                 status
                 <span class="attribute">string</span>
             </td>
             <td>
                 Status da ligação na Origem/Destino:
                 <ul>
                     <li>atendida</li>
                     <li>sem resposta</li>
                     <li>ocupado</li>
                     <li>congestionado</li>
                     <li>falha</li>
                     <li>cancelada</li>
                     <li>não existe</li>
                 </ul>
             </td>
        </tr>
         <tr>
             <td>
                 duracao_segundos
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração em segundos (inteiro) total da chamada desde o início do processamento
             </td>
         </tr>
         <tr>
             <td>
                 duracao
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração total da chamada desde o início do processamento
             </td>
         </tr>
         <tr>
             <td>
                 duracao_cobrada_segundos
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração em segundos para fins de cobrança
             </td>
         </tr>
         <tr>
             <td>
                 duracao_cobrada
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração considerada para fins de cobrança
             </td>
         </tr>
                 <tr>
             <td>
                 duracao_falada_segundos
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração em segundos da chamada desde que o destino atendeu
             </td>
         </tr>
         <tr>
             <td>
                 duracao_falada
                 <span class="attribute">integer</span>
             </td>
             <td>
                 Duração da chamada desde que o destino atendeu
             </td>
         </tr>
         <tr>
             <td>
                 preco
                 <span class="attribute">float</span>
             </td>
             <td>
                 Valor cobrado pela chamada
             </td>
         </tr>
         <tr>
              <td>
                  ramal_id
                  <span class="attribute">integer</span>
              </td>
              <td>
                  ID do ramal vinculado ao DID
              </td>
          </tr>
    </tbody>
</table>

## Criar um 

> post audio

## Buscar um 

> Exemplo

## Editar um

> Exemplo

## Listar todos os 

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

## Relatório Chamadas Recebidas DID

> Definição

```text
GET https://api.totalvoice.com.br/did/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
            'https://api.totalvoice.com.br/chamada/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->did->relatorioChamadas($id, $dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.did.relatorioChamadas(id, dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
response, err := client.Chamada.RelatorioChamadas.Gerar(id, dataInicial, dataFinal, filtros)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.chamada.get_relatorio_chamadas(id, data_inicio, data_fim, filtros)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Chamada chamada = new Chamada(client);
JSONObject response = chamada.relatorioChamadas(id, dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.chamada.relatorioChamadas(id, data_inicial, data_final, filtros)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 3,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "ativa": false,
        "url_gravacao": "https://url-gravacao/rec/?id=1",
        "data_inicio": "2018-09-27T16:35:15-03:00",
        "numero_destino": "554811111111",
        "numero_origem": "554811111111",
        "status": "ocupado",
        "duracao_segundos": 15,
        "duracao": "00:00:15",
        "duracao_cobrada_segundos": 0,
        "duracao_cobrada": "00:00:00",
        "duracao_falada_segundos": 0,
        "duracao_falada": "00:00:00",
        "preco": 0,
        "ramal_id": 1231313
      }
    ]
  }
}
```

Você pode consultar as Chamadas recebidas por um DID. Basta informar o período desejado e o ID do DID para que a API retorne os dados.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do DID que será consultado
            </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Data inicial para consulta dos dados no relatório
            </td>
        </tr>
        <tr>
            <td>
                data_fim
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Data final para consulta dos dados no relatório
            </td>
        </tr>
        <tr>
            <td>
                origem
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de origem para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número de telefone de destino para filtrar. Ex.: 4832830151
            </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Posição para seleção dos dados do relatorio - começa na posição 0. Também chamado de offset.
            </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="optional">Opcional</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Quantidade de chamadas a retornar na consulta. O limite padrão é 100 e o máximo é 200.
            </td>
        </tr>
    </tbody>
</table>

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                total
                <span class="attribute">integer</span>
            </td>
            <td>
                Retorna a quantidade total de registros
             </td>
        </tr>
        <tr>
            <td>
                posicao
                <span class="attribute">integer</span>
            </td>
            <td>
                Posição para seleção dos dados do relatorio - começa na posição 0. Também chamado de offset.
             </td>
        </tr>
        <tr>
            <td>
                limite
                <span class="attribute">integer</span>
            </td>
            <td>
                Quantidade de chamadas a retornar na consulta. O limite padrão é 100 e o máximo é 200.
             </td>
        </tr>
        <tr>
            <td>
                relatorio
                <span class="attribute">array</span>
            </td>
            <td>
                Retorna um array com objetos <a href="#objeto-chamada-did">chamada DID</a>
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>