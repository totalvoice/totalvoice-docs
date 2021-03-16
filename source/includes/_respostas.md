# Respostas da API

> <b>Exemplo JSON de retorno</b>

```json
{
  "status": 200,
  "sucesso": true,
  "motivo": 0,
  "mensagem": "audio criado com sucesso",
  "dados": {
    "id": 4921
  }
}
```

Toda resposta retornada pela API vem em formato JSON contendo um cabeçalho padrão,
o cabeçalho contém as informações sobre a requisição e os dados próprios da resposta, que ficam dentro do campo **dados**.

#### Atributos da Resposta

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

## Códigos HTTP

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

As respostas das requisições realizadas para a API de Voz da ZenAPI utilizam os códigos convencionais HTTP, indicando sucesso ou falha,
sendo que o código 200 responde pelo sucesso e os que iniciam por 4xx pelas falhas, também utilizamos os códigos começando com 500 para apresentar falhas internas.

<br style="margin-top: 280px;"/>  

## Códigos de Motivos

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
 
 Um dos parâmetros padrões que vem em toda resposta da API é o motivo, onde detalhamos o motivo pelo qual a sua requisição
 falhou (ou deu certo), na tabela ao lado temos a lista de motivos possíveis, e mais detalhes seguem no campo mensagem 
 do cabeçalho.
 
 Utilize o atributo **sucesso** se for apenas para identificar se a requisição deu certo ou não.

## Status para Chamada

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
 
Ao fim de toda ligação a chamada terá um status, ao lado você tem uma lista dos possíveis status.
<br>
Caso encontre um status diferente dos mapeados, favor entrar em [contato](#introducao).


## Status Perna de Ligação

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
 
 Este caso geralmente se refere às ligações de duas pernas, onde primeiramente é disparada uma chamada para perna A (origem) e quando esta perna atende é disparada a ligação para perna B (destino).

 Este parâmetro é retornado nos objetos que representam algum lado (perna) de uma ligação que foi realizada, 
 por exemplo, em um Objeto de um Áudio haverá um único atributo deste que representa
 o status do número que o áudio foi enviado, já em uma Chamada você terá um status para cada uma das pernas dela.

