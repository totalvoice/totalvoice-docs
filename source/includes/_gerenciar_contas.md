# Gerenciar Contas

> Gerenciar Contas End Point

```text
https://api.totalvoice.com.br/conta
```
Com a funcionalidade de Gerente de Contas você pode criar, consultar, alterar e deletar contas filhas, sendo as contas filhas exatamente iguais à qualquer outra conta na TotalVoice,
apenas são vínculadas com uma conta pai que tem o controle sobre ela, tendo o intuíto de realizar integrações e automatizar processos de uso e revenda de serviços da API.

<aside class="warning">
A funcionalidade de Gerente de Contas, é um acesso especial que precisa ser liberado por nossa equipe, caso tenha interesse, entrar em contato por telefone com a equipe de Vendas.
</aside>

## Objeto Conta

> JSON

```json
{
    "id": 3132,
    "nome": "Total Voice Telecom",
    "cpf_cnpj": "00.000.000/0000-00",
    "login": "totalvoice@totalvoice.com.br",
    "saldo": 999.99,
    "telefone": "4832830151",
    "access_token": "testeM68PU1Izmb9chEdLzep7IwRymWO",
    "preco_fixo": "0.060",
    "preco_cel": "0.350",
    "preco_ramal": "0.000",
    "email_financeiro": "totalvoice@totalvoice.com.br",
    "nome_fantasia": "Total Voice",
    "metodo_pagamento": "prepago",
    "fatura_atual": 0.00
  }
```

Definição do objeto Conta

#### Atributos

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="attribute">integer</span>
            </td>
            <td>
                Identificador único da Conta.
             </td>
        </tr>
        <tr>
            <td>
                nome
                <span class="attribute">string</span>
            </td>
            <td>
                Nome cadastrado para a conta.
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="attribute">string</span>
            </td>
            <td>
                CPF ou CNPJ cadastrado da conta.
            </td>
        </tr>
        <tr>
            <td>
                login
                <span class="attribute">string</span>
            </td>
            <td>
                Login da conta, utilizado para entrar no painel da TotalVoice.
            </td>
        </tr>
        <tr>
            <td>
                saldo
                <span class="attribute">float</span>
            </td>
            <td>
                Saldo atual disponível para utilização na conta.
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="attribute">string</span>
            </td>
            <td>
                Telefone de contato cadastrado para a conta.
            </td>
        </tr>
        <tr>
            <td>
                access_token
                <span class="attribute">string</span>
            </td>
            <td>
                Token de acesso desta conta, utilizado para realizar a autenticação na API. 
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="attribute">string</span>
            </td>
            <td>
                Valor cobrado por minuto para realização de chamadas para telefones fixos através desta conta.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="attribute">string</span>
            </td>
            <td>
                Valor cobrado por minuto para realização de chamadas para telefones móveis através desta conta.
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="attribute">string</span>
            </td>
            <td>
                Valor cobrado por minuto para realização de chamadas entre Ramais desta mesma conta.
            </td>
        </tr>
                <tr>
            <td>
                email_financeiro
                <span class="attribute">string</span>
            </td>
            <td>
                E-mail de contato reponsável pelo financeiro desta conta, é utilizado para confirmação de transações, recargas e avisos.
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="attribute">string</span>
            </td>
            <td>
                Nome fantasia da empresa desta conta, quando atribuido, aparece nos logins e nas informações no lugar do nome principal.
            </td>
        </tr>
        <tr>
            <td>
                metodo_pagamento
                <span class="attribute">string</span>
            </td>
            <td>
                Método de pagamento desta conta, atualmente só existe o método Pré Pago.
            </td>
        </tr>
        <tr>
            <td>
                fatura_atual
                <span class="attribute">float</span>
            </td>
            <td>
                Valor da fatura atual da conta.
            </td>
        </tr>
    </tbody>
</table>

## Criar Conta

> Definição

```text
POST https://api.totalvoice.com.br/conta
```

Cria uma nova conta filha.

#### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                nome
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Nome para a nova conta filha.
             </td>
        </tr>
        <tr>
            <td>
                login
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Login para a nova conta, precisa ser um endereço de e-mail válido.
            </td>
        </tr>
        <tr>
            <td>
                senha
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Senha para esta nova conta, deve ter mais que 6 caracteres.
            </td>
        </tr>
        <tr>
            <td>
                cpf_cnpj
                <span class="optional">Opcional</span>
            </td>
            <td>
                CPF ou CNPJ desta conta, para fim de identificação e integração.
            </td>
        </tr>
        <tr>
            <td>
                telefone
                <span class="optional">Opcional</span>
            </td>
            <td>
                Número de telefone de contato desta conta, precisa ser um número de telefone válido.
            </td>
        </tr>
        <tr>
            <td>
                preco_fixo
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas à números fixos, deve ser maior ou igual ao da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                preco_cel
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamadas destinadas à números móveis, deve ser maior ou igual ao da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                preco_ramal
                <span class="optional">Opcional</span>
            </td>
            <td>
                O valor que será cobrado desta conta para chamada entre Ramais dentro dela mesma, deve ser maior ou igual ao valor da conta pai, por padrão vem o valor igual ao atual.
            </td>
        </tr>
        <tr>
            <td>
                email_financeiro
                <span class="optional">Opcional</span>
            </td>
            <td>
                E-mail de contato para assuntos financeiros da nova conta, por padrão vem o e-mail da conta pai.
            </td>
        </tr>
        <tr>
            <td>
                nome_fantasia
                <span class="optional">Opcional</span>
            </td>
            <td>
                Nome fantasia desta conta que será utilizado para exibição.
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
                Identificador único da conta criada.
             </td>
        </tr>
        <tr>
            <td>
                access_token
                <span class="attribute">string</span>
            </td>
            <td>
                Token que deverá ser utilizado por esta nova conta para acessar os serviços da API.
             </td>
        </tr>
    </tbody>
</table>

## Buscar Conta

> Definição

```text
GET https://api.totalvoice.com.br/conta/{id}
```

Busca os detalhes de uma conta filha.

##### Request

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                id
                <span class="required">Obrigatório</span>
            </td>
            <td>
                Identificador único da conta filha que você deseja buscar.
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
                Retorna o objeto <a href="#objeto-conta">Conta</a>
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
    "mensagem": "dados retornados com sucesso",
    "dados": {
        "id": 555,
        "nome": "Total Voice",
        "cpf_cnpj": "00.000.000/0000-00",
        "login": "totalvoice@totalvoice.com.br",
        "saldo": 99.01,
        "telefone": "4832830151",
        "access_token": "testeM68PU1Izmb9chEdLzep7IwRymWO",
        "preco_fixo": "0.060",
        "preco_cel": "0.350",
        "preco_ramal": "0.000",
        "email_financeiro": "contato@totalvoice.com.br",
        "nome_fantasia": null,
        "metodo_pagamento": "prepago",
        "fatura_atual": 0.00
    }
}
```

## Alterar Conta 

> Definição

```text
PUT https://api.totalvoice.com.br/conta/{id}
```

## Deletar Conta

> Definição

```text
DELETE https://api.totalvoice.com.br/conta/{id}
```

## Relatório de Contas

> Definição

```text
GET https://api.totalvoice.com.br/conta/relatorio
```