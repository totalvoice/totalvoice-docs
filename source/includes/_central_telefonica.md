# Central Telefônica

### Objeto Chamada Ramal

> <br>

> JSON

```json
{
    "id": 1,
    "data_inicio": "2018-09-03T10:35:50-03:00",
    "url_gravacao": "https://url-gravavao/rec/?id=1",
    "numero_origem": "4811111111",
    "status": "atendida",
    "duracao_segundos": 193,
    "duracao": "00:03:13",
    "preco": "0.00",
    "ramal": {
      "id": 1,
      "ramal": "4000",
      "login": "teste@teste.com.br"
    }
}
```
Definição do objeto Chamada Ramal

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
                 preco
                 <span class="attribute">float</span>
             </td>
             <td>
                 Valor cobrado pela chamada
             </td>
         </tr>
         <tr>
              <td>
                  ramal
                  <span class="attribute">object</span>
              </td>
              <td>
                  id: ID do ramal vinculado ao DID
                  ramal: número do ramal
                  login: e-mail utilizado pelo ramal
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

## Relatório Chamadas Recebidas Ramal

> Definição

```text
GET https://api.totalvoice.com.br/ramal/{id}/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Accept: application/json' \
            --header 'Access-Token: testeM68PU1Izmb9chEdLzep7IwRymWO' \
            'https://api.totalvoice.com.br/ramal/1/relatorio?data_inicio=2018-03-14&data_fim=2018-03-15'
```
```php
<?php
$client = new TotalVoiceClient('testeM68PU1Izmb9chEdLzep7IwRymWO');
$response = $client->central->relatorioChamadas($id, $dataInicial, $dataFinal, $filtros);
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("testeM68PU1Izmb9chEdLzep7IwRymWO");

client.central.relatorioChamadas(id, dataInicial, dataFinal, filtros)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO")
response, err := client.Ramal.RelatorioChamadas.Gerar(id, dataInicial, dataFinal, filtros)
```
```python
client = Cliente("testeM68PU1Izmb9chEdLzep7IwRymWO", 'api.totalvoice.com.br')
response = client.ramal.get_relatorio_chamadas(id, data_inicio, data_fim, filtros)
```
```java
TotalVoiceClient client = new TotalVoiceClient("testeM68PU1Izmb9chEdLzep7IwRymWO");
Central central = new Central(client);
JSONObject response = central.relatorioChamadas(id, dataInicial, dataFinal, filtros);
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("testeM68PU1Izmb9chEdLzep7IwRymWO")
puts @client.ramal.relatorioChamadas(id, data_inicial, data_final, filtros)
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "total": 26,
    "posicao": 0,
    "limite": "100",
    "relatorio": [
      {
        "id": 1,
        "data_inicio": "2018-09-03T10:35:50-03:00",
        "url_gravacao": "https://url-gravavao/rec/?id=1",
        "numero_origem": "4811111111",
        "status": "atendida",
        "duracao_segundos": 193,
        "duracao": "00:03:13",
        "preco": "0.00",
        "ramal": {
          "id": 1,
          "ramal": "4000",
          "login": "teste@teste.com.br"
        }
      }
    ]
  }
}
```

Você pode consultar as Chamadas recebidas por um Ramal. Basta informar o período desejado e o ID do Ramal desejado para que a API retorne os dados.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID do Ramal que será consultado
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
                Quantidade de chamadas que retornou na consulta.
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