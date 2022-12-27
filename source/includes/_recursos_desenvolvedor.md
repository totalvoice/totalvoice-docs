# Recursos de desenvolvedor

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



## Autenticação

Este tópico explica como obter e configurar a autorização de **token de acesso** com a API de Voz, principal e única forma de autenticação que aplicamos. 

Esta é a maneira como as APIs de Voz da Zenvia garantem que os dados sejam protegidos.

Sua utilização permite que desenvolvedores legitimem sua conta, acessem as APIs para obter informações e realizem as demais requisições desejadas. 



### Sobre Tokens de Acesso

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

> <b>IMPORTANTE:</b> Não esqueça de alterar o Access-Token de exemplo pelo seu token.

A autorização do token de acesso permite que você, desenvolvedor, acesse as APIs para obter informações da sua conta e realize as chamadas que desejar, bastando apenas utilizar o código como parâmetro. 

Exemplo de Access-Token:

`testeM68PU1Izmb9chEdLzep7IwRymWO`


### Geração do Access-Token
Após criar a sua conta na plataforma, você pode realizar o login [aqui](https://voice-app.zenvia.com/painel/login.php) e ter acesso ao seu token da API. 

No canto inferior esquerdo da tela inicial, clique no ícone de *Copiar* em *Access Token*. 

![Como encontrar Access-Token](/images/access-token-caminho.gif "Como encontrar Access-Token")

**Importante:** Lembre-se de copiar e colar o token em um local seguro e mantê-lo em segredo. Recomendamos também não utilizá-lo em código público e nem compartilhá-lo com ninguém fora da sua organização.  


### Requisições 

O código de autenticação retornado na etapa anterior servirá como um ticket de acesso para os serviços disponíveis nas nossas APIs.

Dessa forma, o Token será validado sempre que uma requisição for feita e você deve utilizar o mesmo para cada uma delas. 

💡 Lembre-se que as requisições podem ser para áudios, centrais telefônicas, chamadas, entre outras.


### Solicitações

As APIs da Zenvia são baseadas no padrão REST e formato JSON para receber e retornar os dados. Esses recursos são acessados através de solicitações HTTP por meio do seguinte caminho:


#### Cabeçalho de solicitação de autorização HTTP

O token deve ser enviado nas requisições através do header padrão do protocolo HTTP. 

Toda e qualquer requisição precisa conter em seu cabeçalho ([header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header#:~:text=An%20HTTP%20header%20is%20a,format%20of%20the%20returned%20body)) o seu código de autenticação (Access-Token), que será utilizado para identificação na plataforma.

💡 Desenvolvedores não necessitam lidar com as complexidades relacionadas à autenticação.  As bibliotecas disponibilizadas pela ZenAPI já fazem a autenticação na requisição HTTP de forma transparente e automática. 

🔐 Mantenha seu Token em segredo, tome muito cuidado, não deixe ele exposto em um código público e nunca compartilhe com ninguém fora da sua organização.



## Respostas de API

> <b>Exemplo JSON de retorno</b>

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "áudio criado com sucesso",
  "dados": {
    "id": 4921
  }
}
```

As respostas das APIs vêm em formato JSON contendo:

- Cabeçalho padrão;
- Cabeçalho com as informações sobre a requisição;
- Dados próprios da resposta, localizado no campo dados.

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                status
                <span class="attribute">integer</span>
            </td>
            <td>
                <a href="#codigos-http">Código HTTP</a> da resposta.
             </td>
        </tr>
        <tr>
            <td>
                sucesso
                <span class="attribute">boolean</span>
            </td>
            <td>
                Sucesso ou falha da requisição.
             </td>
        </tr>
        <tr>
            <td>
                motivo
                <span class="attribute">integer</span>
            </td>
            <td>
                <a href="#codigos-de-motivos">Código do motivo</a> da falha ou sucesso.
             </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="attribute">string</span>
            </td>
            <td>
                Mensagem de resposta contendo mensagem sucesso ou motivo de falha. 
             </td>
        </tr>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Objeto de resposta variável em cada função da API.
             </td>
        </tr>
    </tbody>
</table>


### Códigos HTTP

> <b>Códigos HTTP utilizados</b>
> <table>
    <tr>
        <td>200</td>
        <td>Os dados foram retornados com sucesso.</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Formato do JSON enviado é inválido.</td>
    </tr>
    <tr>
        <td>402</td>
        <td>Sua conta não tem saldo suficiente.</td>
    </tr>
    <tr>
        <td>403</td>
        <td>Sua conta não tem permissão para realizar esse procedimento.</td>
    </tr>
    <tr>
        <td>404</td>
        <td>Objeto de sua pesquisa não foi encontrado.</td>
    </tr>
    <tr>
        <td>405</td>
        <td>Algum dos parâmetros enviados está inválido</td>
    </tr>
    <tr>
        <td>429</td>
        <td>Limite de Requisições por segundo excedido</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Alguma coisa aconteceu internamente.</td>
    </tr>
    <tr>
        <td>501</td>
        <td>Ainda não implementamos essa funcionalidade (?).</td>
    </tr>
</table>

As respostas das requisições realizadas para a API de Voz utilizam os códigos convencionais HTTP.

Elas podem indicar sucesso ou falha, onde: 

- O código 200 responde pelo sucesso;
- Códigos que iniciam por 4xx respondem pelas falhas.
- Códigos começando com 5xx respondem pelas falhas internas.


### Códigos de Motivos

> <b>Códigos de Motivos</b>
> <table>
    <tr>
        <td>0</td>
        <td>Os dados foram retornados com sucesso.</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Sua conta não tem permissão para realizar esse procedimento.</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Sua conta não tem saldo suficiente.</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Você não enviou todos os parâmetros obrigatórios.</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Algum dos parâmetros enviados está inválido.</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Erro porque o registro ficaria duplicado.</td>
    </tr>
    <tr>
        <td>30</td>
        <td>Esta funcionalidade ainda não foi implementada. (Entre em contato)</td>
    </tr>
    <tr>
        <td>40</td>
        <td>Houve uma falha na autenticação, seu Token está correto?</td>
    </tr>
    <tr>
        <td>50</td>
        <td>Erro interno dentro do nosso sistema.</td>
    </tr>
    <tr>
        <td>60</td>
        <td>Não encontramos o elemento que você está procurando.</td>
    </tr>
    <tr>
        <td>70</td>
        <td>A chamada requisitada não contém uma gravação.</td>
    </tr>
    <tr>
        <td>80</td>
        <td>A chamada solicitada não está ativa.</td>
    </tr>
    <tr>
        <td>90</td>
        <td>O caminho não foi encontrado.</td>
    </tr>
    <tr>
        <td>100</td>
        <td>A requisição solicitada é inválida.</td>
    </tr>
</table>

Um dos parâmetros padrões que vêm em toda resposta da API é o motivo. É nele onde detalhamos o motivo pelo qual a sua requisição falhou (ou deu certo).

Ao lado, a tabela detalha a lista de motivos possíveis e mais detalhes seguem no campo mensagem do cabeçalho.

**💡 Utilize o atributo *sucesso* se for apenas para identificar se a requisição deu certo ou não.**


### Status para Chamada

> <b>Status para Chamada</b>
> <table>
    <tr>
        <td>atendida</td>
        <td>A ligação foi atendida.</td>
    </tr>
    <tr>
        <td>sem resposta</td>
        <td>O número não atendeu a ligação.</td>
    </tr>
    <tr>
        <td>ocupado</td>
        <td>A operadora retornou que o número estava ocupado.</td>
    </tr>
    <tr>
        <td>congestionado</td>
        <td>Houve algum problema nas linhas de conexões. (Entre em contato)</td>
    </tr>
    <tr>
        <td>falha</td>
        <td>Não foi possível realizar a ligação.</td>
    </tr>
    <tr>
        <td>cancelada</td>
        <td>A ligação foi cancelada.</td>
    </tr>
    <tr>
        <td>não existe</td>
        <td>O número desta ligação não existe.</td>
    </tr>
</table>

Ao fim de toda ligação, a chamada terá um *status*. 

Ao lado, a tabela detalha a lista dos possíveis status. Caso encontre um status diferente dos mapeados, entre em contato com a nossa equipe.


### Status Perna de Ligação

> <b>Status Perna de Ligação</b>
> <table>
    <tr>
        <td>preparando</td>
        <td>A ligação para esta perna ainda não foi iniciada.</td>
    </tr>
    <tr>
        <td>chamando</td>
        <td>O telefone/ramal desta perna está chamando mas não atendeu.</td>
    </tr>
    <tr>
        <td>atendida</td>
        <td>A perna atendeu a ligação.</td>
    </tr>
    <tr>
        <td>ocupado</td>
        <td>A operadora retornou que o número estava ocupado no momento.</td>
    </tr>
    <tr>
        <td>desconhecido</td>
        <td>Houve alguma falha, entrar em contato com o suporte.</td>
    </tr>
</table>

Este caso geralmente se refere às ligações de duas pernas, onde primeiramente é disparada uma chamada para perna A (origem) e, quando esta perna atende, a ligação é disparada a para perna B (destino). 

Este parâmetro é retornado nos objetos que representam algum lado (perna) de uma ligação que foi realizada.
 
**Por exemplo:** em um Objeto de um Áudio haverá um único atributo deste que representa o status do número que ele foi enviado. Por outro lado, em uma Chamada você terá um status para cada uma das pernas dela. 



## Testes

Com uma conta criada, é possível realizar testes em nossa plataforma utilizando nosso playground ou em um software para teste de requisições de API, como Postman e Insomnia. 

Veja mais detalhes sobre: 

- [Playground](https://voice-app.zenvia.com/doc/): Utilize o token da sua conta e faça envios para nossa API. Para isso, basta preencher um formulário com os parâmetros necessários. 
- [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/): Para utilizar o software de testes, será necessário que você envie as seguintes informações:
    1. Header: 
        - **Access-Token** - exemplotesteM68PU1Izmb9chEdLzep7IwRymWO
        - **Content-Type** - application/json
    2. Body:
        - No corpo da requisição você deve enviar um **JSON** (para requisições POST/PUT)

- Para testar os retornos enviados via webhooks, indicamos os seguintes sites:
    1. [webhook.site](https://webhook.site/)
    2. [requestbin.com](https://requestbin.com/)
