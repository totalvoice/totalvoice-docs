# Respostas da API

> Exemplo JSON de retorno

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

Toda resposta retornada pela API, vem em formato JSON contendo um cabeçalho padrão,
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
                Código HTTP da resposta.
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
                Código do motivo da falha ou sucesso.
             </td>
        </tr>
        <tr>
            <td>
                mensagem
                <span class="attribute">string</span>
            </td>
            <td>
                Mensagem de resposta contendo sucesso ou motivo de falha. 
             </td>
        </tr>
        <tr>
            <td>
                dados
                <span class="attribute">object</span>
            </td>
            <td>
                Dados da resposta atribuídos a cada requisição.
             </td>
        </tr>
    </tbody>
</table>

### Códigos HTTP

>Códigos HTTP utilizados

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
        <td>500</td>
        <td>Alguma coisa aconteceu internamente.</td>
    </tr>
    <tr>
        <td>501</td>
        <td>Ainda não implementamos essa funcionalidade (?).</td>
    </tr>
</table>

As respostas das requisições realizadas para a API TotalVoice utilizam os códigos convencionais HTTP, indicando sucesso ou falha,
sendo que o código 200 responde pelo sucesso e os iniciando 4xx pelas falhas, também utilizamos os códigos começando com 500 para apresentar falhas internas.

<br style="margin-top: 280px;"/>  

### Códigos de Motivos

 >Códigos de Motivos
 
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
         <td>Algum dos parâmetros enviados está inválido</td>
     </tr>
     <tr>
         <td>20</td>
         <td>Erro pois o registro iria ficar duplicado.</td>
     </tr>
     <tr>
         <td>30</td>
         <td>Esta funcionalidade ainda não foi implementada. (Avise-nos)</td>
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
 
 Um dos parâmetros padrões que vem em toda resposta da API, é o motivo, onde detalhamos o motivo pelo qual a sua requisição
 falhou (ou deu certo), na tabela ao lado temos a lista de motivos possíveis, e mais detalhes seguem no campo mensagem 
 do cabeçalho.
 
 Utilize o atributo **sucesso** se for apenas para identificar se a requisição deu certo ou não.