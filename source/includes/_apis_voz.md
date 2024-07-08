# APIs de Voz

>À medida em que for rolando para baixo nesta documentação, você verá todas as amostras de código de cada API. Verá também exemplos de solicitações e respostas.

Desenvolva soluções de comunicação personalizadas com as APIs de Voz apresentadas a
seguir. 

Tendo uma plataforma web e móvel, será possível implementar nossos recursos
rápidos e seguros para uma experiência que conecta empresa e cliente.

- Experiências de chamadas;
- Notificações automáticas de voz;
- Identificação de padrões de chamada;
- Comunicações de voz text-to-speech;
- Mensagens de texto transformadas em voz;
- Chamadas com maior qualidade e confiança.

Logo abaixo você encontrará uma lista de todos os métodos disponíveis para a API de Voz. 

❗ É necessário criar uma conta para usar as APIs. Clique <a href="https://totalvoice.github.io/totalvoice-docs/#guia-de-inicio-inscreva-se-para-uma-conta">aqui</a> para este primeiro passo. 

**URL base:**

<a href="https://voice-api.zenvia.com">https://voice-api.zenvia.com</a>

Escolha qual API melhor atende sua necessidade de integração e implemente com total confiança: 

1. APIs de Central
2. APIs de Contas
3. APIs de Ligações
4. APIs de Torpedos

## Verificação (2FA)

> <b>Verificação (2FA) Endpoint</b>

```text
https://voice-api.zenvia.com/verificacao
```

A funcionalidade de verificação ou Two Factor Authentication(2FA) envia um código para um número de telefone e, em seguida, você pode verificar se o código informado pelo usuário é válido.

Esse código (apenas números) pode ser enviado via SMS (formato de texto), ou então TTS onde você nos passa a mensagem que o usuário que atender a ligação irá ouvir. 

Exemplos:

- **Mensagem enviada:** Seu código de verificação nome_produto é: 1234

- **Observação:** O código enviado para o número de telefone expira em 1 hora.

### Enviar código 

> Definição

```text
POST https://voice-api.zenvia.com/verificacao
```

> Request

```shell--curl
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             --header 'Access-Token: seu-token' \
             -d '{"numero_destino":"+5510999999999","nome_produto":"ZenAPI de Voz","tts":"true"}' \
             'https://voice-api.zenvia.com/verificacao'
```
```php
<?php
require_once "vendor/autoload.php";
use TotalVoice\Client as TotalVoiceClient;

$client = new TotalVoiceClient('seu-token');
$response = $client->verificacao->enviar('+5510999999999', 'ZenAPI de Voz');
```
```javascript--node
const totalvoice = require('totalvoice-node');
const client = new totalvoice("seu-token");

client.verificacao.enviar("+5510999999999", "ZenAPI de Voz")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
```
```go
client := totalvoice.NewTotalVoiceClient("seu-token")
 response, err := client.verificacao.enviar("+5510999999999", "ZenAPI de Voz", false, "")
```
```python
client = Cliente("seu-token", 'voice-api.zenvia.com')
response = client.verificacao.enviar("+5510999999999", "ZenAPI de Voz")
```
```java
TotalVoiceClient client = new TotalVoiceClient("seu-token");
Verificacao verificacao = new Verificacao(client);

JSONObject response = verificacao.enviar("+5510999999999", "ZenAPI de Voz");
```
```ruby
require 'totalvoice-ruby'
include TotalVoice

@client = TotalVoice::API.new("seu-token")
puts @client.verificacao.enviar("+5510999999999", "ZenAPI de Voz")
```
> Response

```json
{
    "status": 200,
    "sucesso": true,
    "motivo": 0,
    "mensagem": "dados retornados com sucesso",
    "dados": {
        "id": 12345
    }
}
```

Para enviar um código, basta informar o número de destino seguindo o exemplo de requisição ao lado. Utilize os campos abaixos para informar à nossa API os dados que irá enviar:

**POST:** <a href="https://voice-api.zenvia.com/verificacao">https://voice-api.zenvia.com/verificacao</a>

**REQUEST:**

- **Headers**

**Content-Type:** application/json
**Authorization:** Access-Token: seu-token

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                numero_destino
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Número do telefone que irá receber o código, via sms ou tts.
             </td>
        </tr>
        <tr>
            <td>
                nome_produto
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nome do produto que será substituído na mensagem. 
            </td>
        </tr>
        <tr>
            <td>
                tamanho
                <span class="optional">Opcional</span>
            </td>
            <td>
                Tamanho do código que será enviado. Mínimo 4 e máximo 10, o código possui apenas números. Caso não seja informado, é utilizado o valor default = 4.
            </td>
        </tr>
        <tr>
            <td>
                tts
                <span class="optional">Opcional</span>
            </td>
            <td>
                Para que o código de verificação seja enviado por uma ligação (TTS) ao invés de um SMS, basta enviar esse parâmetro como "true". Quando o parâmetro não for enviado, é considerado o valor default "false".
            </td>
        </tr>
    </tbody>
</table>

#### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Retorna o ID de verificação do código enviada.
             </td>
        </tr>
    </tbody>
</table>

### Consultar código 

> Definição


```text
GET https://voice-api.zenvia.com/verificacao
```

> Request

```shell--curl
curl -X GET --header 'Content-Type: application/json' \
            --header 'Accept: application/json' \
            --header 'Access-Token: seu-token' 'https://voice-api.zenvia.com/verificacao/?id=1234&pin=36355'
```
```php
<?php
Em Construção
```
```javascript--node
Em Construção
```
```go
Em Construção
```
```python
Em Construção
```
```java
Em Construção
```
```ruby
Em Construção
```
> Response

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "dados retornados com sucesso",
  "dados": {
    "resultado": "valido"
  }
}
```

Após o envio do código, você pode pedir para o usuário inserir na sua plataforma o código recebido para que você possa validar o número dele.

Utilize os campos abaixos para informar à nossa API os dados que irá enviar:

**GET:** <a href="https://voice-api.zenvia.com/verificacao">https://voice-api.zenvia.com/verificacao</a>

**REQUEST:**

- **Headers**

**Content-Type:** application/json
**Authorization:** Access-Token: seu-token

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                ID da verificação enviada
             </td>
        </tr>
        <td>
                pin
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Código informado
             </td>
        </tr>
    </tbody>
</table>

##### Response

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna o 'resultado' da verificação, o resultado pode ser 'válido' ou 'inválido'
             </td>
        </tr>
    </tbody>
</table>

## Webhooks

As notificações de Webhooks são enviadas para seu Endpoint cadastrado no nosso <a href="https://voice-app.zenvia.com/painel/login.php">Painel de Voz</a>. A cada evento ocorrido, uma notificação é disparada. 

O método utilizado para o envio dos Webhooks é HTTP POST e as informações referentes ao evento vão no corpo da requisição em formato JSON.

<aside class="notice">Obs: A requisição GET para visualizar os webhooks cadastrados irá trazer apenas aqueles que possuem URL. Caso a conta seja uma subconta e não tenha URL de webhook, serão buscados webhooks default configurados na conta principal.</aside>

### Configurar webhook

1. Para configurar o Webhook, siga os seguintes passos:
2. Entre no <a href="https://voice-app.zenvia.com/painel/login.php">Painel de Voz</a> com a conta administradora;
3. Acesse o menu Desenvolvedores na barra superior;
4. Escolha Configurações da API
5. Preencha os campos solicitados na criação de cada Webhook.

<aside class="notice">Poderá levar até 20 minutos após a configuração no Painel para começar o envio das notificações para o endereço escolhido.</aside>

### Webhooks disponíveis

A seguir, você terá acesso às documentações dos Webhooks disponíveis. São eles:

- <a href="#eventos-em-tempo-real-de-chamada">Eventos em Tempo Real de Chamada</a>
- <a href="#eventos-em-tempo-real-de-ramal">Eventos em Tempo Real de Ramal</a>
- <a href="#eventos-em-tempo-real-de-chamada-did">Eventos em Tempo Real de Chamada DID</a>
- <a href="#eventos-em-tempo-real-de-conferências">Eventos em Tempo Real de Conferências</a>
- <a href="#envio-de-sms">Envio de SMS</a>
- <a href="#resposta-de-sms">Resposta de SMS</a>
- <a href="#aviso-de-saldo">Aviso de saldo</a>
- <a href="#novo-voicemail">Novo Voicemail</a>
- <a href="#status-tempo-real">Status Tempo Real</a>
- <a href="#tts-fim-de-chamada">TTS - Fim de chamada</a>
- <a href="#chamada-fim">Chamada- Fim</a>
- <a href="#did-fim-de-chamada">DID- Fim de Chamada</a>
- <a href="#composto-fim-de-chamada">Composto- Fim de Chamada</a>
- <a href="#audio-fim-de-chamada">Áudio- Fim de chamada</a>

### Eventos em Tempo Real das Chamadas 

> JSON

```json
\\Chamando Perna A

{
  "data_criacao": "2019-09-06T17:21:33",
  "origem": {
    "data_inicio": "2019-09-06T14:21:33",
    "tipo": "movel",
    "ativo": false,
    "data_criacao": "2019-09-06T14:21:34",
    "numero": "+55108888888888",
    "status": "chamando"
  },
  "gravar_audio": false,
  "id": 37794869,
  "destino": {
    "tipo": "movel",
    "numero": "+55108888888888"
  },
  "cliente_id": 2150,
  "tags": ""
}
```

Esse Webhook é enviado sempre que uma das pernas de uma chamada muda de estado. 

<aside class="notice">Este dispositivo se refere apenas ligações realizadas pela API ou através do Webphone/Softphone/Dispositivo de chamada conectado ao nosso sistema.</aside>

Os atributos são:

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que a ligação foi criada.
            </td>
        </tr>
        <tr>
            <td>
                gravar_audio
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se a chamada foi gravada ou não.
             </td>
        </tr>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único desta Chamada.
            </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único (na ZenAPI) do cliente que realizou a Chamada.
            </td>
        </tr> 
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Campo de tags que pode ser utilizado pelo cliente na hora da criação da Chamada.
            </td>
        </tr>
        <tr>
            <td>
                origem
                <span class="attribute">object</span>
            </td>
            <td>
                Objeto da perna de <b>origem</b> da Chamada.
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="attribute">object</span>
            </td>
            <td>
                Objeto da perna de <b>destino</b> da Chamada.
            </td>
        </tr>
    </tbody>
</table>

### Eventos em Tempo Real de Ramal 

> JSON

```json
{
  "data_atendimento": "2019-09-06T14:37:03",
  "duracao_falada_segundos": 10,
  "ativo": false,
  "data_criacao": "2019-09-06T14:36:55",
  "tipo": "ramal",
  "motivo_desconexao": "indefinido",
  "id": "37806158",
  "ramal": 9000,
  "status": "atendida",
  "duracao_segundos": 18
}

```

Esse Webhook é enviado a cada mudança de status de alguma chamada de um Ramal, enviando seus dados de chamada.

Os atributos são:

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que a ligação para o Ramal foi criada.
            </td>
        </tr>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único desta ligação.
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                O tipo do telefone desta perna, vem sempre <b><i>ramal</b></i>.
             </td>
        </tr>
        <tr>
            <td>
                ativo
                <span class="attribute">boolean</span>
            </td>
            <td>
                Informa se a chamada está ativa, caso true, o ramal atendeu e a ligação ainda está conectada.
            </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="attribute">integer</span>
            </td>
            <td>
                O número do Ramal desta ligação.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Representa o <a href="#status-perna-de-ligacao">status atual</a> desta perna na ligação.
            </td>
        </tr>
        <tr>
            <td>
                data_atendimento
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora do momento em que a ligação foi atendida, caso a ligação não tenha sido atendida este atributo não vem.
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração total em segundos da ligação, desde a criação até o encerramento (seja por desligar ou por não atender).
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em segundos contados a partir do momento que o ramal atendeu a ligação, até o momento em que foi desligada.
            </td>
        </tr>
        <tr>
            <td>
                motivo_desconexao
                <span class="attribute">String</span>
            </td>
            <td>
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em motivos de desconecção.
            </td>
        </tr>
    </tbody>
</table>

### Eventos em Tempo Real de Chamada DID

> JSON

```json
{
  "data_atendimento": "2019-09-06T14:37:03",
  "duracao_falada_segundos": 0,
  "ativo": true,
  "data_criacao": "2019-09-06T14:36:55",
  "tipo": "ramal",
  "id": "37806158",
  "ramal": 9000,
  "status": "atendida",
  "duracao_segundos": 7
}
```

Esse Webhook é enviado a cada mudança de status de alguma chamada recebida por um DID, enviando os dados da chamada e do Ramal que atendeu (caso algum tenha atendido).

Os atributos são:

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único desta Chamada.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que a ligação foi criada.
            </td>
        </tr>
        <tr>
            <td>
                data_atendimento
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora do momento em que a ligação foi atendida pelo DID.
            </td>
        </tr>
        <tr>
            <td>
                ativo
                <span class="attribute">boolean</span>
            </td>
            <td>
                Informa se a chamada está ativa.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Representa o <a href="#status-perna-de-ligacao">status atual</a> desta chamada para o DID.
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração total da chamada em segundos, desde a criação até o encerramento (seja por desligar ou por não atender).
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em segundos contados a partir do momento que o DID atendeu a ligação até o momento em que foi desligada.
            </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="attribute">object</span>
            </td>
            <td>
                Caso a ligação para este DID caia em algum ramal, este campo vem preenchido com informações da perna do ramal.
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">String</span>
            </td>
            <td>
                Tipo de telefone: fixo, móvel ou ramal.
            </td>
        </tr>
    </tbody>
</table>

### Eventos em Tempo Real de Conferências 

```json
\\Entrada de número na conferência.

{
  "data_criacao": "2019-09-06T18:48:05",
  "evento_conferencia": "Entrou",
  "numero": "+55108888888888",
  "gravar_audio": false,
  "conferencia_id": 42874,
  "chamada_id": "37823279",
  "cliente_id": 2150
}
```

Esse Webhook é enviado a cada mudança dentro de uma conferência.

Exemplos: quem entrou ou saiu da conferência, id da chamada, id da conferência e número que entrou.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que a conferência foi criada.
            </td>
        </tr>
        <tr>
            <td>
                gravar_audio
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se a chamada foi gravada ou não.
             </td>
        </tr>
        <tr>
            <td>
                evento_conferencia
                <span class="attribute">String</span>
            </td>
            <td>
                Informa ação do número/pessoa referente à conferência.
            </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único (na Zenvia) do cliente que executou determinada ação na conferência.
            </td>
        </tr> 
        <tr>
            <td>
                numero
                <span class="attribute">String</span>
            </td>
            <td>
                Número do telefone que executou determinada ação na conferência, formato DDD + Número. Exemplo: +5510999999999.
            </td>
        </tr> 
        <tr>
            <td>
                conferencia_id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único da conferência.
            </td>
        </tr> 
        <tr>
            <td>
                chamada_id
                <span class="attribute">String</span>
            </td>
            <td>
                Identificador único da chamada realizada para a conferência.
            </td>
        </tr> 
    </tbody>
</table>

### Envio de SMS

> JSON

```json

{
  "id": "37787430",
  "numero_destino": "+55108888888888",
  "data_criacao": "2019-09-06T14:00:38-03:00",
  "mensagem": "Olá ZenAPI",
  "preco": 0.09,
  "status_envio": "entregue",
  "data_status": "2019-09-06T14:01:13-03:00",
  "resposta_usuario": false,
  "respostas": []
}
```

Esse Webhook informa se o SMS foi enviado ou se houve falha. 

Os atributos são:

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que o SMS foi criado.
            </td>
        </tr>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único deste SMS.
            </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do telefone que irá receber o SMS, formato DDD + Número. Exemplo: +5510999999999.
            </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="attribute">string</span>
            </td>
            <td>
                Mensagem que será enviada para o número. 
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado pelo envio
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado pelo envio
            </td>
        </tr>
        <tr>
            <td>
                status_envio
                <span class="attribute">float</span>
            </td>
            <td>
                Situação do envio do SMS.
            </td>
        </tr>
        <tr>
            <td>
                data_status
                <span class="attribute">datatime</span>
            </td>
            <td>
                Data e hora que o status foi alterado.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Aguarda a resposta do usuário: sim ou não
            </td>
        </tr>
        <tr>
            <td>
                respostas
                <span class="attribute">boolean</span>
            </td>
            <td>
                Array contendo os objetos de resposta.
            </td>
        </tr>
    </tbody>
</table>

### Resposta de SMS

> JSON

```json

{ 
   "id":16347,
   "sms_id":133830,
   "resposta":"SIM",
   "data_resposta":"2016-10-17T18:02:20-02:00"
}
```

Esse Webhook informa quando um usuário responde um SMS.

Os atributos são:

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de Resposta.
             </td>
        </tr>
        <tr>
            <td>
                sms_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do SMS vinculado a resposta.
             </td>
        </tr>
        <tr>
            <td>
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Texto com a resposta do usuário
            </td>
        </tr>
        <tr>
            <td>
                data_resposta
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi respondido pelo usuário
            </td>
        </tr>
    </tbody>
</table>

### Aviso de Saldo 

```json
   {
   "saldo":"56.8616"
   }
```

Esse Webhook informa quando o valor do saldo for inferior ao configurado no "Aviso de Saldo".

Os atributos são:

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                saldo
                <span class="attribute">float</span>
            </td>
            <td>
                Saldo atual da sua conta
            </td>
        </tr>
    </tbody>
</table>

### Novo Voicemail

```json
  {
  "id": 1411,
  "ramal_id": 87787,
  "ramal": "9561",
  "numero_telefone": "6136271444",
  "data_mensagem": "2019-09-06T17:05:18-03:00",
  "duracao_segundos": 0,
  "url_gravacao": "https://api.evoline.com.br/recvm/?id=1411&x=094bba9d3a&cid=2150"
  }
```

Esse Webhook informa quando houver um novo voicemail (mensagem de voz) na caixa postal.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único deste voicemail.
            </td>
        </tr>
        <tr>
            <td>
                ramal_id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal, o qual irá receber o voicemail.
            </td>
        </tr> 
        <tr>
            <td>
                numero_telefone
                <span class="attribute">string</span>
            </td>
            <td>
                Número do telefone que irá enviar o voicemail para o ramal, formato DDD + Número. Exemplo: +5510999999999.
            </td>
        </tr>
        <tr>
            <td>
                data_mensagem
                <span class="attribute">datatime</span>
            </td>
            <td>
                Data e hora em que o voicemail foi recebido.
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração total do voicemail em segundos.
            </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                Quando enviado a opção Gravar Áudio = true, este campo disponibilizará uma URL contendo o áudio da gravação da ligação.
            </td>
        </tr>
    </tbody>
</table>

### Status Tempo Real

> JSON

```json

\\Chamando

{
  "id": 37785949,
  "data_criacao": "2019-09-06T13:48:19-03:00",
  "ativa": true,
  "url_gravacao": null,
  "cliente_id": 91227,
  "conta_id": 91227,
  "ramal_id_origem": 86453,
  "tags": null,
  "status_geral": "curso",
  "origem": {
    "data_inicio": null,
    "numero": "4000",
    "tipo": "ramal",
    "status": "chamando",
    "duracao_segundos": 10,
    "duracao": "00:00:10",
    "duracao_cobrada_segundos": null,
    "duracao_cobrada": null,
    "duracao_falada_segundos": null,
    "duracao_falada": null,
    "preco": null,
    "motivo_desconexao": "indefinido"
  },
  "destino": {
    "data_inicio": null,
    "numero": "+55108888888888",
    "tipo": "movel",
    "status": "preparando",
    "duracao_segundos": 9,
    "duracao": "00:00:09",
    "duracao_cobrada_segundos": null,
    "duracao_cobrada": null,
    "duracao_falada_segundos": null,
    "duracao_falada": null,
    "preco": null,
    "motivo_desconexao": "indefinido"
  },
  "gravacoes_parciais": []
}
```

Durante uma chamada, este webhook é acionado sempre que o status mudar (de "chamando" para "atendido", por exemplo). 

<aside class="notice">Limitado em 1 request a cada 2s por chamada ativa.</aside>

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
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de criação do registro da chamada. Data e Hora no formato UTC.
            </td>
        </tr>
        <tr>
            <td>
                ativa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Identifica se a chamada está ativa ou não.
             </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                URL com áudio da gravação da chamada.
             </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação do cliente referente a chamada.
            </td>
        </tr>
        <tr>
            <td>
                conta_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação da Conta referente a chamada.
            </td>
        </tr>
       	<tr>
            <td>
                ramal_id_origem
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal que originou a chamada referente a ligação, se houver. 
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Informação adicional que pode ser retornada no objeto, como um ID Externo por exemplo. Você consegue enviar essa informação no Post da Chamada e recuperar posteriormente nessa consulta. 
            </td>
        </tr>
        <tr>
            <td>
                status_geral
                <span class="attribute">string</span>
            </td>
            <td>
                Status geral da Chamada. 
                <ul>
                    <li>criada: chamada foi criada</li>
                    <li>curso: está em andamento</li>
                    <li>finalizada: chamada foi finalizada</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                origem / destino
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna os objetos <a href="#objeto-origem-destino">origem/destino</a>
            </td>
        </tr>
    </tbody>
</table>

### TTS - Fim de Chamada 

> JSON

```json

{
  "id": 37784550,
  "numero_destino": "+55108888888888",
  "data_criacao": "2019-09-06T13:34:57.000-03:00",
  "data_inicio": "2019-09-06T13:34:58.000-03:00",
  "tipo": "movel",
  "status": "atendida",
  "duracao_segundos": 17,
  "duracao": "00:00:17",
  "duracao_cobrada_segundos": 60,
  "duracao_cobrada": "00:01:00",
  "duracao_falada_segundos": 10,
  "duracao_falada": "00:00:10",
  "preco": 0.35,
  "resposta_usuario": false,
  "resposta": "",
  "motivo_desconexao": "16. normal",
  "mensagem": "Ôôôôoooooooolááaaaaaaaaaa"
}
```

Esse Webhook é enviado ao fim de toda chamada TTS, enviando detalhes como duração e status. 

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro do TTS.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário que foi enviado o TTS.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi criado o registro.
            </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi iniciado o processamento do TTS.
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                Tipo de telefone: fixo, móvel ou ramal.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status do registro.
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração total em <i>segundos</i> da chamada, desde o início do processamento.
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
                Duração em <i>segundos</i> para fins de cobrança.
            </td>
        </tr>
        <tr>
            <td>
                duracao_cobrada
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração considerada para fins de cobrança.
            </td>
        </tr>
                <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em <i>segundos</i> da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado pela chamada.
            </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="attribute">float</span>
            </td>
            <td>
                Mensagem em forma de texto que você nos enviou.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Valor enviado identificando se aceita a resposta do usuário.
            </td>
        </tr>
        <tr>
            <td>
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Se você enviou resposta_usuario = true, quando o usuário executa alguma ação no teclado númerico do dispositivo, o valor será exibido neste campo (DTMF).
            </td>
        </tr>
        <tr>
            <td>
                motivo_desconexao
                <span class="attribute">string</span>
            </td>
            <td>
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em <a href="#codigos-de-motivos">motivos de desconecção</a>
            </td>
        </tr>
    </tbody>
</table>

### Chamada - Fim

> JSON

```json

{
  "id": 37721262,
  "data_criacao": "2019-09-06T11:19:11-03:00",
  "ativa": false,
  "url_gravacao": "https://api.evoline.com.br/rec/?id=37721262&x=7a8718b28b&cid=2150",
  "cliente_id": 2150,
  "conta_id": 2150,
  "ramal_id_origem": 62291,
  "tags": null,
  "status_geral": "finalizada",
  "origem": {
    "data_inicio": null,
    "numero": "9998",
    "tipo": "ramal",
    "status": null,
    "duracao_segundos": 0,
    "duracao": "00:00:00",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "motivo_desconexao": "indefinido"
  },
  "destino": {
    "data_inicio": "2019-09-06T11:19:11-03:00",
    "numero": "+55108888888888",
    "tipo": "movel",
    "status": "atendida",
    "duracao_segundos": 24,
    "duracao": "00:00:24",
    "duracao_cobrada_segundos": 60,
    "duracao_cobrada": "00:01:00",
    "duracao_falada_segundos": 14,
    "duracao_falada": "00:00:14",
    "preco": 0.35,
    "motivo_desconexao": "16. normal"
  },
  "gravacoes_parciais": []
}
```

Esse Webhook é enviado ao fim de toda chamada, enviando detalhes como duração e preço. 

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
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de criação do registro da chamada. Data e Hora no formato UTC.
            </td>
        </tr>
        <tr>
            <td>
                ativa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Identifica se a chamada está ativa ou não.
             </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                URL com áudio da gravação da chamada.
             </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação do cliente referente a chamada.
            </td>
        </tr>
        <tr>
            <td>
                conta_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação da Conta referente a chamada.
            </td>
        </tr>
       	<tr>
            <td>
                ramal_id_origem
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal que originou a chamada referente a ligação, se houver. 
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Informação adicional que pode ser retornada no objeto, como um ID Externo por exemplo. Você consegue enviar essa informação no Post da Chamada e recuperar posteriormente nessa consulta. 
            </td>
        </tr>
        <tr>
            <td>
                status_geral
                <span class="attribute">string</span>
            </td>
            <td>
                Status geral da Chamada. 
                <ul>
                    <li>criada: chamada foi criada</li>
                    <li>curso: está em andamento</li>
                    <li>finalizada: chamada foi finalizada</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                origem / destino
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna os objetos <a href="#objeto-origem-destino">origem/destino</a>
            </td>
        </tr>
    </tbody>
</table>

### DID - Fim de Chamada

> JSON

```json

{
  "id": 37721125,
  "data_criacao": "2019-09-06T11:18:20-03:00",
  "ativa": false,
  "url_gravacao": "https://api.evoline.com.br/rec/?id=37721125&x=7a020a1a16&cid=2150",
  "cliente_id": 2150,
  "conta_id": 2150,
  "ramal_id_origem": 62291,
  "tags": null,
  "status_geral": "finalizada",
  "origem": {
    "data_inicio": null,
    "numero": "9998",
    "tipo": "ramal",
    "status": null,
    "duracao_segundos": 0,
    "duracao": "00:00:00",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "motivo_desconexao": "indefinido"
  },
  "destino": {
    "data_inicio": "2019-09-06T11:18:19-03:00",
    "numero": "+55108888888888",
    "tipo": "movel",
    "status": "ocupado",
    "duracao_segundos": 31,
    "duracao": "00:00:31",
    "duracao_cobrada_segundos": 0,
    "duracao_cobrada": "00:00:00",
    "duracao_falada_segundos": 0,
    "duracao_falada": "00:00:00",
    "preco": 0,
    "motivo_desconexao": "indefinido"
  },
  "gravacoes_parciais": []
}
```

Esse Webhook é enviado ao fim de toda chamada recebida (DID), enviando detalhes como duração e status. 

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
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de criação do registro da chamada. Data e Hora no formato UTC.
            </td>
        </tr>
        <tr>
            <td>
                ativa
                <span class="attribute">boolean</span>
            </td>
            <td>
                Identifica se a chamada está ativa ou não.
             </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                URL com áudio da gravação da chamada.
             </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação do cliente referente a chamada.
            </td>
        </tr>
        <tr>
            <td>
                conta_id
                <span class="attribute">integer</span>
            </td>
            <td>
               Identificação da Conta referente a chamada.
            </td>
        </tr>
       	<tr>
            <td>
                ramal_id_origem
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do ramal que originou a chamada referente a ligação, se houver. 
            </td>
        </tr>
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Informação adicional que pode ser retornada no objeto, como um ID Externo por exemplo. Você consegue enviar essa informação no Post da Chamada e recuperar posteriormente nessa consulta. 
            </td>
        </tr>
        <tr>
            <td>
                status_geral
                <span class="attribute">string</span>
            </td>
            <td>
                Status geral da Chamada. 
                <ul>
                    <li>criada: chamada foi criada</li>
                    <li>curso: está em andamento</li>
                    <li>finalizada: chamada foi finalizada</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                origem / destino
                <span class="attribute">object</span>
            </td>
            <td>
                Retorna os objetos <a href="#objeto-origem-destino">origem/destino</a>
            </td>
        </tr>
    </tbody>
</table>

### Composto - Fim de Chamada 

> JSON

```json

{
  "id": 37850704,
  "numero_destino": "+55108888888888",
  "data_criacao": "2019-09-06T16:38:50.000-03:00",
  "data_inicio": "2019-09-06T16:38:55.000-03:00",
  "tipo": "movel",
  "status": "atendida",
  "duracao_segundos": 51,
  "duracao": "00:00:51",
  "duracao_cobrada_segundos": 60,
  "duracao_cobrada": "00:01:00",
  "duracao_falada_segundos": 42,
  "duracao_falada": "00:00:42",
  "preco": 0.38,
  "resposta_usuario": false,
  "resposta": null,
  "motivo_desconexao": "16. normal",
  "url_gravacao": null,
  "tags": "clienteX"
}
```

Ao fim de toda chamada do tipo Composto, um callback é feito para este endereço, enviando detalhes como duração e status.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de Áudio.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário que foi enviado o áudio.
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
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi iniciado o processamento do áudio
            </td>
        </tr>
		<tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                Tipo de telefone: fixo, móvel ou ramal
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status do registro
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em segundos (inteiro) do total da chamada desde o início do processamento
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
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Aguarda a resposta do usuário: sim ou não
            </td>
        </tr>
        <tr>
            <td>
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Quando o usuário executa alguma ação no teclado do dispositivo, o valor será exibido neste campo (DTMF).
            </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                Quando enviado a opção Gravar Áudio = true, este campo disponibilizará uma URL contendo o áudio da gravação da ligação.
            </td>
        </tr>
		<tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Parâmetro de integração - informado no post e retornado no get. Ex: "clienteX"
            </td>
        </tr>
		<tr>
            <td>
                motivo_desconexao
                <span class="attribute">string</span>
            </td>
            <td>
                Um dos motivos de desconexão:
                <ul>
                    <li>1. telefone não existe</li>
                    <li>2. sem rota para a rede de destino</li>
                    <li>3. sem rota para o destino</li>
                    <li>4. prefixo incorreto</li>
                    <li>6. canal inaceitável</li>
                    <li>7. chamada sendo entregue em canal já estabelecido</li>
                    <li>8. call peemption</li>
                    <li>14. telefone portado para outra operadora</li>
                    <li>16. normal</li>
                    <li>17. ocupado</li>
                    <li>18. sem resposta</li>
                    <li>19. sem resposta - mas chamou</li>
                    <li>20. assinante ausente</li>
                    <li>21. chamada rejeitada</li>
                    <li>22. este número mudou</li>
                    <li>23. redirecionado para novo destino</li>
                    <li>26. atendido em outro lugar</li>
                    <li>27. destino não está funcionando</li>
                    <li>28. formato inválido de número</li>
                    <li>29. rejeitado</li>
                    <li>30. resposta para status enquiry</li>
                    <li>31. normal, não especificado</li>
                    <li>34. sem canal disponível</li>
                    <li>41. falha temporária</li>
                    <li>42. equipamento congestionado</li>
                    <li>44. canal requisitado não está disponível</li>
                    <li>50. não cadastrado</li>
                    <li>52. chamada sainte barrada</li>
                    <li>54. chamada entrante barrada</li>
                    <li>57. capacidade não autorizada</li>
                    <li>58. erro de mídia ou parâmetros incompatíveis</li>
                    <li>65. capacidade do portador não implementada</li>
                    <li>66. tipo de canal não implementado</li>
                    <li>69. não implementado</li>
                    <li>81. valor de referência inválido</li>
                    <li>88. destino incompatível</li>
                    <li>95. mensagem inválida não especificada</li>
                    <li>96. informação obrigatória não presente</li>
                    <li>97. mensagem não implementada</li>
                    <li>98. mensagem não compatível com o estado da chamada ou não existente ou não implementada</li>
                    <li>97. mensagem não implementada</li>
                    <li>99. elemento não existente ou não implementado</li>
                    <li>97. mensagem não implementada</li>
                    <li>100. informação inválida no conteúdo dos elementos</li>
                    <li>101. mensagem não compatível com o estado da chamada</li>
                    <li>102. timeout</li>
                    <li>111. erro de protocolo</li>
                    <li>127. erro de conectividade</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Áudio - Fim de Chamada 

> JSON

```json

{
  "id": 37785542,
  "numero_destino": "+55108888888888",
  "data_criacao": "2019-09-06T13:44:52.000-03:00",
  "data_inicio": "2019-09-06T13:44:52.000-03:00",
  "tipo": "movel",
  "status": "atendida",
  "duracao_segundos": 44,
  "duracao": "00:00:44",
  "duracao_cobrada_segundos": 60,
  "duracao_cobrada": "00:01:00",
  "duracao_falada_segundos": 25,
  "duracao_falada": "00:00:25",
  "preco": 0.35,
  "resposta_usuario": false,
  "resposta": "",
  "motivo_desconexao": "16. normal",
  "url_gravacao": null,
  "url_audio": "https://65381g.ha.azioncdn.net/7/7/b/3/daniellimaofficial-never-enough-72a13242.mp3"
}
```

Ao fim de toda chamada de áudio, um callback é feito para este endereço, enviando detalhes como duração e status.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro de Áudio.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">string</span>
            </td>
            <td>
                Número do destinatário que foi enviado o áudio.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi criado o registro.
            </td>
        </tr>
        <tr>
            <td>
                data_inicio
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora que foi iniciado o processamento do áudio.
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                Tipo de telefone: fixo, móvel ou ramal.
            </td>
        </tr>
        <tr>
            <td>
                status
                <span class="attribute">string</span>
            </td>
            <td>
                Status do registro.
            </td>
        </tr>
        <tr>
            <td>
                duracao_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em total em <i>segundos</i>, da chamada, desde o início do processamento.
            </td>
        </tr>
        <tr>
            <td>
                duracao
                <span class="attribute">String</span>
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
                Duração em <i>segundos</i> para fins de cobrança.
            </td>
        </tr>
        <tr>
            <td>
                duracao_cobrada
                <span class="attribute">String</span>
            </td>
            <td>
                Duração considerada para fins de cobrança.
            </td>
        </tr>
                <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em <i>segundos</i> da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada
                <span class="attribute">String</span>
            </td>
            <td>
                Duração da chamada desde que o destino atendeu.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
                Valor cobrado pela chamada.
            </td>
        </tr>
        <tr>
            <td>
                url_audio
                <span class="attribute">string</span>
            </td>
            <td>
                URL do Áudio enviado para a chamada.
            </td>
        </tr>
        <tr>
            <td>
                resposta_usuario
                <span class="attribute">boolean</span>
            </td>
            <td>
                Valor enviado identendificando se aceita a resposta do usuário.¹
            </td>
        </tr>
        <tr>
            <td>
                resposta
                <span class="attribute">string</span>
            </td>
            <td>
                Se você enviou resposta_usuario = true, quando o usuário executa alguma ação no teclado númerico do dispositivo, o valor será exibido neste campo (DTMF).¹
            </td>
        </tr>
        <tr>
            <td>
                motivo_desconexao
                <span class="attribute">string</span>
            </td>
            <td>
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em <a href="#codigos-de-motivos">motivos de desconexão</a>
            </td>
        </tr>
        <tr>
            <td>
                url_gravacao
                <span class="attribute">string</span>
            </td>
            <td>
                Quando enviado a opção Gravar Áudio = true, este campo disponibilizará uma URL contendo o áudio da gravação da ligação.
            </td>
        </tr>
    </tbody>
</table>