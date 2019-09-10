# Permissões de Conta

Quando você cria uma nova conta na TotalVoice, ela é criada automaticamente como uma conta Trial,
tendo limitações que garantem a segurança do negócio, evitando que pessoas má intencionadas utilizem os serviços
da TotalVoice.

Após as validações solicitadas (confirmação de telefone fixo, e-mail e etc) a conta é aprovada instantaneamente, 
recebendo o acesso de conta Cliente, que retira algumas limitações, mantendo apenas as que evitam golpes e que utilizam para Spams.

Caso tenha interesse em ter acessos de funções exclusivas da TotalVoice (Centrais telefônicas, DIDs, Números Receptivos e criação de contas filhas), 
você precisa entrar em contato com nossa equipe, para podermos entender o cenário e auxiliar na escolha ideal de funcionalidades.  

## Contas Trial
> <b>TRIAL</b>
> <ul>
    <li>
        São limitadas ao envio das funções da API apenas números cadastrados (e devidamente confirmados) no painel.
    </li>
    <li>
        Não podem editar Ramais.
    </li>
    <li>
        Número maior de palavras bloqueadas no corpo do SMS.
    </li>
    <li>
        Limite de 50 SMSs enviados por dia.
    </li>
    <li>
       Só é possível utilizar o número BINA no parâmetro de torpedos de voz(Áudio, TTS, Composto) com os números cadastrados.
    </li>
    <li>
        Não tem acesso à Central Telefônica.
    </li>
</ul>

As contas Trial são contas que foram criadas e ainda não tiveram seus dados confirmados, como e-mail e telefone fixo (caso a pessoa
não tenha telefone fixo pode entrar em contato com a TotalVoice para ser validado), a conta trial tem o intuito apenas de testar
as funcionalidades da API, a validação e migração é feita de modo automático e a mudança de tipo de conta acontece na hora.

Veja como cadastrar um número <a href='https://centraltotalvoice.freshdesk.com/solution/articles/35000078983-cadastrando-um-n%C3%BAmero-como-bina-identificac%C3%A3o-de-chamada-'>clicando aqui</a>.

## Contas Cliente
><b>CLIENTE</b>
> <ul>
    <li>
        Não podem binar números que não sejam seus confirmados.
    </li>
    <li>
        Não podem criar e administrar contas filhas.
    </li>
    <li>
        Limite de 50 SMSs enviados por dia, que cresce de acordo com o uso (ou em simples contato com a equipe da TotalVoice).
    </li>
    <li>
        SMSs com algumas palavras proíbidas (referente à cobranças, instituições financeiras, links e etc).
    </li>
</ul>

Contas Clientes são aquelas que já passaram por um processo de validação, dando liberdade para utilização da API com apenas algumas limitações por questão
de segurança.

As contas Clientes:



## Conta Pai

Quando se tem a necessidade de criar e administrar outras contas, como em integrações com sistemas, revenda de serviços e
utilização por terceiros das funções de telefonia, você pode [solicitar uma permissão](#introducao) de conta Pai, 
onde você pode criar, deletar e alterar contas Filhas.

As contas Pais tem as mesmas limitações das contas Clientes, tendo apenas o diferencial de poder administrar subcontas. 



## Conta Filha

As contas Filhas são basicamente contas criadas através de outra conta, são parecidas com as contas Clientes, 
tendo os mesmos privilégios, sendo apenas vinculada a uma outra conta podendo ser [Alterada](#alterar-conta) ou [Removida](#deletar-conta) por sua conta Pai.