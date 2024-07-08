# Bina

> Bina Endpoint

```text
https://voice-api.zenvia.com/bina
```

Bina é o número identificador do telefone de origem e que aparece no telefone do destino.

Este endpoint permite que você cadastre e valide suas binas para utilizá-las em chamadas e torpedos de voz com o intuito de identificar ao destino que a ligação é sua, independente do número que estiver sendo utilizado para realizar a chamada.


### Objeto Bina

> JSON

```json
{
    "id": 432,
    "numero_telefone": "+55108888888888",
    "data_criacao": "2018-03-18T00:51:22.000Z",
    "fixo": false,
    "confirmado": true
}
```

Definição do objeto Bina

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de Bina
             </td>
        </tr>
        <tr>
            <td>
                numero_telefone
                <span class="attribute">string</span>
            </td>
            <td>
                Número do telefone que será binado
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi criado o registro
            </td>
        </tr>
        <tr>
            <td>
                fixo
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se o número da bina se refere a um telefone fixo
            </td>
        </tr>
        <tr>
            <td>
                confirmado
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se está confirmado que o número de telefone da bina pertence a você
            </td>
        </tr>
    </tbody>
</table>


### Cadastrar uma Bina

> Definição

```text
POST https://voice-api.zenvia.com/bina
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: {{access-token}}' \
             -d '{"telefone":"+55108888888888", "mensagem_sms": "Teste SMS", "mensagem_tts": "Teste TTS"}' \
             'https://voice-api.zenvia.com/bina'
```

Envia um número de telefone para que receba um código via SMS (celular) ou TTS (fixo). Nossa API identificará automaticamente o tipo de número (fixo ou móvel) e enviará a mensagem com o código.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                telefone
                <span class="required">Obrigatório</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Número do telefone que irá receber a Chamada (fixo) ou SMS (móvel) com o código para validação
             </td>
        </tr>
        <tr>
            <td>
                mensagem_sms
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Mensagem customizada para validação da Bina para números móveis (SMS). Temos a opção de enviar uma mensagem customizada com formatação de String (%s)
            </td>
        </tr>
        <tr>
            <td>
                mensagem_tts
                <span class="optional">Opcional</span>
                <span class="attribute">string</span>
            </td>
            <td>
                Mensagem customizada para validação da Bina para números fixos (TTS). Temos a opção de enviar uma mensagem customizada com formatação de String (%s)
            </td>
        </tr>
    </tbody>
</table>

#### Response

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Código enviado com sucesso",
  "dados": null
}
```

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                Null
                <span class="attribute">Null</span>
            </td>
            <td>
                O retorno é nulo, apenas uma mensagem informando que o código foi enviado para o número fornecido
             </td>
        </tr>
    </tbody>
</table>

<br>
<br>
<br>
<br>

### Validar uma Bina

> Definição

```text
GET https://voice-api.zenvia.com/bina
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina?codigo=1234&telefone=+55108888888888'
```

Você deve informar o número do telefone e o código recebido no celular (SMS) ou telefone (TTS) informados no método POST, para realizarmos a validação

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                telefone
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Número do telefone que será validado
             </td>
        </tr>
        <tr>
            <td>
                codigo
                <span class="required">Obrigatório</span>
                <span class="type">Query String</span>
            </td>
            <td>
                Código que será validado
            </td>
        </tr>
    </tbody>
</table>

#### Response

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Verificação realizada com sucesso",
  "dados": {"valido": true, "id": 1}
}
```

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                valido
                <span class="attribute">booleano</span>
            </td>
            <td>
               Retorna true se o código e o número conferem. Caso contrário retorna false
             </td>
        </tr>
        <tr>
            <td>
                id
                <span class="attribute">Integer</span>
            </td>
            <td>
               Retorna o ID da bina cadastrada
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
<br>


### Buscar uma Bina

> Definição

```text
GET https://voice-api.zenvia.com/bina/{id}
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \ 
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina/1'
```

Após a criação de uma bina, você poderá realizar a busca do registro pelo seu ID

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da Bina para recuperar os dados
             </td>
        </tr>
    </tbody>
</table>

#### Response

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Dados retornados com sucesso",
  "dados": {
    "id": 1,
    "numero_telefone": "+55108888888888",
    "data_criacao": "2018-03-18T00:51:22.000Z",
    "fixo": false,
    "confirmado": true
  }
}
```

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
               Retorna o objeto <a href="#objeto-bina">Bina</a>
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
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Deletar uma Bina

> Definição

```text
DELETE https://voice-api.zenvia.com/bina/{id}
```

> Request

```shell--curl
curl -X DELETE --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \ 
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina/1'
```

Apaga o número de telefone (Bina) cadastrado na Conta. Você deve informar o ID da bina que deseja remover.

Caso a Bina esteja vinculada ao Caller ID Default, será necessário desvincular via painel de voz, antes de deletar.


#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                ID
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da Bina a ser removida
             </td>
        </tr>
    </tbody>
</table>

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Bina removida com sucesso",
  "dados": null
}
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Relatório Bina

> Definição

```text
GET https://voice-api.zenvia.com/bina/relatorio
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \ 
            --header 'Access-Token: {{access-token}}' \
            'https://voice-api.zenvia.com/bina/relatorio'
```

Busca os telefones (Bina) cadastrados na Conta


#### Response

> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "Dados retornados com sucesso",
  "dados": [
    {
        "id": 432,
        "numero_telefone": "++5510999999999",
        "data_criacao": "2016-03-27T15:12:44+03:00",
        "fixo": true,
        "confirmado": true
    }
  ]  
}
```


<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                dados
                <span class="attribute">array</span>
            </td>
            <td>
               Retorna um array de objetos <a href="#objeto-bina">Bina</a>
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
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>