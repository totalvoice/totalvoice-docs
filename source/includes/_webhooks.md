# Webhooks

> Configuração

```text
Entre no painel da TotalVoice com a conta administradora, 
vá até o menu Minha Conta e escolha Configurações da API, 
lá terão todos os campos para preencher em cada Webhook.
```

Também conhecidos como Callbacks ou Reverse API, os Webhooks são notificações que enviamos para alguma URL (End Point) sua que é configurada 
no painel da TotalVoice, a notificação é enviada assim que determinados eventos acontecem.

Todos os Webhooks enviados vão por HTTP POST, sendo que as informações referente ao evento vão no corpo da requisição em formato JSON.

<i>Poderá levar até 20 minutos após a configuração no Painel para começar o envio das notificações para o endereço escolhido.</i>

## Objeto Perna de Ligação

> JSON

```json
{
   "data_criacao":"2018-06-08T10:20:31",
   "tipo":"ramal",
   "ativo":true,
   "numero":"4000",
   "status":"atendida",
   "data_atendimento":"2018-06-08T10:20:34",
   "duracao_segundos":9,
   "duracao_falada_segundos":6
}
```

Este é um objeto comum que é incluido em alguns Webhooks, representa um conjunto de informações de um dos lados (perna / ponta) de uma ligação.

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que esta perna foi criada.
            </td>
        </tr>
        <tr>
            <td>
                tipo
                <span class="attribute">string</span>
            </td>
            <td>
                O tipo do telefone desta perna, podendo ser: <b><i>ramal, fixo</b></i> ou <b><i>movel</b></i>.
             </td>
        </tr>
        <tr>
            <td>
                ativo
                <span class="attribute">boolean</span>
            </td>
            <td>
                Informa se a chamada está ativa para esta perna, caso true, a perna atendeu e a ligação ainda está conectada.
            </td>
        </tr>
        <tr>
            <td>
                numero
                <span class="attribute">integer</span>
            </td>
            <td>
                Número do destinatário que foi conectado à conferência.
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
                Duração em segundos total da ligação desta perna, desde a criação até o encerramento (seja por desligar ou por não atender).
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em segundos contados a partir do momento que a perna atendeu a ligação, até o momento em que foi desligada.
            </td>
        </tr>
    </tbody>
</table>


## Fim de Ligação

Este Webhook é disparado toda vez que uma ligação realizada através da TotalVoice se encerra, seja ela um Áudio que foi enviado, 
uma chamada recebida por um DID ou uma chamada realizada pela API.

Neste Webhook a informação enviada é o objeto completo referente aquela ligação, por exemplo se é o fim de um áudio enviado, você irá receber o Objeto do Áudio no corpo da requisição.

#### Webhooks de Fim de Ligação Disponíveis
- <a href="#objeto-audio">Objeto Áudio</a>
- <a href="#objeto-chamada">Objeto Chamada</a>
- <a href="#objeto-composto">Objeto Composto</a>
- <a href="#objeto-tts">Objeto TTS</a>
- <a href="#objeto-conferencia">Objeto Conferência</a>
- <a href="#objeto-chamada-did">Objeto Chamada DID</a>

## Status de Chamada

Sempre que uma das pernas de uma chamada muda de estado, este webhook é enviado, entram nessas condições apenas ligações realizadas pela API e pelo Webphone/Softphone/Dispositivo de Chamada conectado ao nosso sistema.

> JSON

```json
{
   "data_criacao":"2018-06-08T13:20:29",
   "gravar_audio":false,
   "id":121947,
   "cliente_id":111111,
   "tags":"MINHA_TAG,CLIENTE_LEGAL",
   "origem":{
      "data_criacao":"2018-06-08T10:20:31",
      "tipo":"ramal",
      "ativo":true,
      "numero":"4000",
      "status":"atendida",
      "data_atendimento":"2018-06-08T10:20:34",
      "duracao_segundos":9,
      "duracao_falada_segundos":6
   },
   "destino":{
      "data_criacao":"2018-06-08T10:20:34",
      "tipo":"movel",
      "ativo":false,
      "numero":"489999999999",
      "status":"chamando"
   }
}
```

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
                Identificador único (na TotalVoice) do cliente que realizou a Chamada.
            </td>
        </tr> 
        <tr>
            <td>
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Campo de tags que pode ser utilizado pelo cliente na hora de criação da Chamada.
            </td>
        </tr>
        <tr>
            <td>
                origem
                <span class="attribute">object</span>
            </td>
            <td>
                <a href="#objeto-perna-de-ligacao">Objeto da perna</a> de <b>origem</b> da Chamada.
            </td>
        </tr>
        <tr>
            <td>
                destino
                <span class="attribute">object</span>
            </td>
            <td>
                <a href="#objeto-perna-de-ligacao">Objeto da perna</a> de <b>destino</b> da Chamada.
            </td>
        </tr>
    </tbody>
</table>

## Status do Envio do SMS

Este webhook é disparado sempre que uma mensagem SMS sofrer uma mudança de status.

A informação enviada no corpo da requisição é o própio <a href="#objeto-sms"> Objeto do SMS</a>.

## Resposta de um SMS

Sempre que uma resposta de SMS for recebida um webhook é disparado enviando os dados do <a href="#objeto-resposta-sms">Objeto Resposta SMS</a>.

## Status de Ramal

Toda vez que algum ramal da conta configurada com esse Webhook recebe/atende/desliga uma ligação um evento desse é disparado para a URL escolhida.

> JSON

```json
{
   "data_criacao":"2018-06-08T10:20:31",
   "id":121947,
   "tipo":"ramal",
   "ativo":true,
   "ramal":"4000",
   "numero_origem":4899999999,
   "status":"atendida",
   "data_atendimento":"2018-06-08T10:20:34",
   "duracao_segundos":9,
   "duracao_falada_segundos":6,
   "tags":"MINHA_TAG,CLIENTE_LEGAL"
}

```

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data e hora em que esta ligação para o Ramal foi criada.
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
                numero_origem
                <span class="attribute">integer</span>
            </td>
            <td>
                Número do telefone que está em ligação com este ramal.
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
                Duração em segundos total da ligação, desde a criação até o encerramento (seja por desligar ou por não atender).
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
                tags
                <span class="attribute">string</span>
            </td>
            <td>
                Campo de tags que pode ser utilizado pelo cliente na hora de criação da Chamada (caso seja uma chamada feita pela API).
            </td>
        </tr>
    </tbody>
</table>

## Status de DID

Um evento deste é disparado sempre que um DID (número de telefone) nosso de um cliente cadastrado com esse Webhook recebe uma ligação ou muda de status (transfere, termina, etc).

> JSON

```json
{
   "id":121947,
   "data_criacao":"2018-06-08T13:20:29",
   "gravar_audio":false,
   "cliente_id":111111,
   "numero_origem":"4822221111",
   "numero_destino":"4833332222",
   "data_atendimento":"2018-06-08T10:20:34",
   "ativo":true,
   "status":"atendida",
   "duracao_segundos":20,
   "duracao_falada_segundos":19,
   "ramal":{
      "ativo":true,
      "data_criacao":"2018-06-08T10:20:34",
      "numero":"4000",
      "status":"atendida",
      "duracao_segundos":9,
      "duracao_falada_segundos":6
   }
}
```

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
                gravar_audio
                <span class="attribute">boolean</span>
            </td>
            <td>
                Se a chamada foi/está sendo gravada ou não.
             </td>
        </tr>
        <tr>
            <td>
                cliente_id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único (na TotalVoice) do cliente desta chamada.
            </td>
        </tr>
        <tr>
            <td>
                numero_origem
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de telefone que está realizando a ligação para o DID.
            </td>
        </tr>
        <tr>
            <td>
                numero_destino
                <span class="attribute">integer</span>
            </td>
            <td>
                Número de telefone do DID que está recebendo a ligação.
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
                Duração em segundos total da chamada, desde a criação até o encerramento (seja por desligar ou por não atender).
            </td>
        </tr>
        <tr>
            <td>
                duracao_falada_segundos
                <span class="attribute">integer</span>
            </td>
            <td>
                Duração em segundos contados a partir do momento que o DID atendeu a ligação, até o momento em que foi desligada.
            </td>
        </tr>
        <tr>
            <td>
                ramal
                <span class="attribute">object</span>
            </td>
            <td>
                Caso a ligação para este DID caia em algum Ramal, este campo vem preenchido com <a href="#objeto-perna-de-ligacao">informaões da perna</a> do Ramal.
            </td>
        </tr>
    </tbody>
</table>

## Valida Número

```text
PUT https://api.totalvoice.com.br/webhook/valida-numero
```

Este Webhook é disparado toda vez que o <a href="_valida_numero.md#valida-número">Valida Número</a> é processado. Um Objeto Valida Número é enviado para a url cadastrada.

```json
{
    "id": 432,
    "numero_destino": "554811111111",
    "data_criacao": "2018-08-02T10:49:30-03:00",
    "preco": 0.1,
    "valido": true,
    "finalizado": true
}
```

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                ID do registro do valida número.
             </td>
        </tr>
        <tr>
            <td>
                numero_destino 
                <span class="attribute">string</span>
            </td>
            <td>
                Número a ser validado.
            </td>
        </tr>
        <tr>
            <td>
                data_criacao
                <span class="attribute">datetime</span>
            </td>
            <td>
                Data de criação do registro do valida número. Data e Hora no formato UTC.
            </td>
        </tr>
        <tr>
            <td>
                preco
                <span class="attribute">float</span>
            </td>
            <td>
               Valor cobrado no processo de validação do número.
            </td>
        </tr>
        <tr>
            <td>
                valido
                <span class="attribute">boolean</span>
            </td>
            <td>
                Resultado do teste de validação do número.
            </td>
        </tr>
        <tr>
            <td>
                finalizado
                <span class="attribute">boolean</span>
            </td>
            <td>
                Status do processo. 
                <ul>
                    <li>true - Finalizado </li>
                    <li>false - Processo de validação em andamento </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
