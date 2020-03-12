# Webhooks

Também conhecidos como Callbacks ou Reverse API, os Webhooks são notificações que enviamos para alguma URL (End Point) sua que é configurada 
no ###PANEL_NAME###, a notificação é enviada assim que determinados eventos acontecem.

Todos os Webhooks enviados vão por HTTP POST, sendo que as informações referentes ao evento vão no corpo da requisição em formato JSON.

<i>Obs: Na requisição GET para visualizar os webhooks cadastrados ele irá trazer apenas os que possuem URL. Caso a conta seja uma subconta e não tiver URL de webhook, irá buscar os webhooks default configurados na conta principal.</i>


## Configuração

Entre no ###PANEL_NAME### com a conta administradora, vá até o menu Minha Conta e escolha Configurações da API, lá terão todos os campos para preencher em cada Webhook.

<i>Poderá levar até 20 minutos após a configuração no Painel para começar o envio das notificações para o endereço escolhido.</i>

## Eventos em Tempo Real de Chamada 

Sempre que uma das pernas de uma chamada muda de estado este webhook é enviado, entram nessas condições apenas ligações realizadas pela API e pelo Webphone/Softphone/Dispositivo de chamada conectado ao nosso sistema.

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
    "numero": "48988888888",
    "status": "chamando"
  },
  "gravar_audio": false,
  "id": 37794869,
  "destino": {
    "tipo": "movel",
    "numero": "48966663333"
  },
  "cliente_id": 2150,
  "tags": ""
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
                Identificador único (###IN_BRAND_NAME###) do cliente que realizou a Chamada.
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

## Envio de SMS

Informa se o SMS foi enviado ou houve falha.

> JSON

```json

{
  "id": "37787430",
  "numero_destino": "48988888888",
  "data_criacao": "2019-09-06T14:00:38-03:00",
  "mensagem": "Olá ###BRAND_NAME###",
  "preco": 0.09,
  "status_envio": "entregue",
  "data_status": "2019-09-06T14:01:13-03:00",
  "resposta_usuario": false,
  "respostas": []
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
                Número do telefone que irá receber o SMS, formato DDD + Número. Exemplo: 4832830151.
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


## Resposta de SMS

Informa quando um usuário responde um SMS.

> JSON

```json

{ 
   "id":16347,
   "sms_id":133830,
   "resposta":"SIM",
   "data_resposta":"2016-10-17T18:02:20-02:00"
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

## Eventos em Tempo Real de Ramal

A cada mudança de status de alguma chamada de algum Ramal, este Webhook é disparado, enviando os dados da chamada do Ramal.

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

## Eventos em Tempo Real de Chamada DID

A cada mudança de status de alguma chamada recebida por um DID, este Webhook é disparado, enviando os dados da chamada e do Ramal que atendeu (se algum ramal atendeu).

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

## Aviso de saldo

Notifica quando o valor do saldo for inferior ao configurado no "Aviso de Saldo".

```json
   {
   "saldo":"56.8616"
   }
```

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

## Novo Voicemail

Notifica quando houver um novo voicemail / nova mensagem de voz na caixa postal.

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
                Número do telefone que irá enviar o voicemail para o ramal, formato DDD + Número. Exemplo: 4832830151.
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


## Eventos em Tempo Real de Conferências

A cada mudança dentro de uma conferência você recebe informações, quem entrou e quem saiu da conferência, id da chamada, id da conferência, número que entrou.

```json
\\Entrada de número na conferência.

{
  "data_criacao": "2019-09-06T18:48:05",
  "evento_conferencia": "Entrou",
  "numero": "48988888888",
  "gravar_audio": false,
  "conferencia_id": 42874,
  "chamada_id": "37823279",
  "cliente_id": 2150
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
                Identificador único (na TotalVoice) do cliente que executou determinada ação na conferência.
            </td>
        </tr> 
        <tr>
            <td>
                numero
                <span class="attribute">String</span>
            </td>
            <td>
                Número do telefone que executou determinada ação na conferência, formato DDD + Número. Exemplo: 4832830151.
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

## Valida Número

A cada chamada de validação de numero finalizada enviamos se o número é valido ou inválido.

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


## TTS Fim

Ao fim de toda chamada TTS, um callback é feito para este endereço, enviando detalhes como duração e status.

> JSON

```json

{
  "id": 37784550,
  "numero_destino": "48988888888",
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

## Status Tempo Real

Durante uma chamada, este webhook é acionado sempre que o status mudar (de "chamando" para "atendido", por exemplo). Limitado em 1 request a cada 2s por chamada ativa.

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
    "numero": "48988888888",
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

## Fim Chamada

Ao fim de toda chamada, um callback é feito para este endereço, enviando detalhes como duração e preço.

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
    "numero": "48988888888",
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

<br>
<br>
<br>
<br>
<br>
<br>

## DID Fim Chamada

Ao fim de toda chamada recebida(DID), um callback é feito para este endereço, enviando detalhes como duração e status.

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
    "numero": "48988888888",
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

<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Composto Fim Chamada

Ao fim de toda chamada do tipo Composto, um callback é feito para este endereço, enviando detalhes como duração e status.

> JSON

```json

{
  "id": 37850704,
  "numero_destino": "48988888888",
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

## Áudio Fim

Ao fim de toda chamada de áudio um callback é feito para este endereço, enviando detalhes como duração e status.

> JSON

```json

{
  "id": 37785542,
  "numero_destino": "48988888888",
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
                Aqui é informado o motivo do derrubamento da ligação, você pode ver mais em <a href="#codigos-de-motivos">motivos de desconeção</a>
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

<br>
<br>
<br>
<br>
<br>
<br>
<br>




