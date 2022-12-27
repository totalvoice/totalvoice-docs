# Guia do usuário



## Introdução

Os documentos a seguir ajudarão você a interagir com a API REST e começar a utilizar nossos recursos de voz para efetuar ou receber chamadas e enviar torpedos. 

Utilizamos o JSON para estruturar nossos dados e um endereço único da API para identificar os serviços e seus respectivos códigos de respostas HTTP.  

💡 Usamos serviços de "cross-origin", aceitando interações de qualquer domínio seguro. Portanto, você pode realizar uma requisição para determinado recurso utilizando alguma API Client. 



## Guia de início: Inscreva-se para uma conta

Você deve começar criando uma conta em nosso site. A inscrição é necessária para testar APIs, integrá-las ao seu sistema ou aplicativo e usufruir dos recursos disponíveis. 

Inscreva-se [neste link](https://voice-app.zenvia.com/painel/signup.php) e siga os passos abaixo:

1. Preencha os dados solicitados e clique em Criar conta;
2. Valide seu cadastro através do e-mail e telefone;
3. Acesse o painel.

Na página principal da sua conta, você terá acesso ao **Access-Token** que será utilizado para autenticação no serviço. Ele estará disponível e localizado conforme sinalizado na imagem:

![Onde encontrar Access-Token](/images/access-token-painel.png "Onde encontrar Access-Token")


## Permissões de conta

O acesso às APIs de Voz da Zenvia possui uma hierarquia de contas onde cada uma contém suas especificidades. 

Ao criar uma nova conta, a mesma é criada automaticamente como Trial. Esse tipo possui limitações que garantem a segurança do negócio, evitando assim que pessoas mal intencionadas utilizem nossos serviços.

Por outro lado, após validar as informações solicitadas (telefone e e-mail), a conta é aprovada instantaneamente. A partir disso, é válido saber:

<table class="table-with-textual-content">
    <thead>
        <tr>
            <th>Tipo de conta</th>
            <th>Descrição</th>
            <th>Subconta</th>
            <th>Limitações</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Contas Trial</td>
            <td>São contas que ainda não tiveram seus dados confirmados, possuindo o intuito apenas de testar as funcionalidades da API.</td>
            <td class="center"><span class="text-wrong">X</span></td>
            <td>
                <ul>
                    <li>São limitados ao envio das funções da API apenas números cadastrados e confirmados no painel.</li>
                    <li>Não podem editar ramais.</li>
                    <li>Máximo de 50 SMS enviados por dias, com limitações de palavras bloqueadas por texto.</li>
                    <li>Função de BINA disponível apenas no torpedo de voz com números cadastrados.</li>
                    <li>Não possui acesso à central telefônica.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Contas Cliente</td>
            <td>Dá a liberdade para utilização da API com apenas algumas limitações por questão de segurança, como aquelas que evitam golpes ou usam spams.</td>
            <td class="center"><span class="text-wrong">X</span></td>
            <td>
                <ul>
                    <li>Não podem binar números não sejam seus confirmados.</li>
                    <li>Não podem criar e administrar contas filhas.</li>
                    <li>Máximo de 50 SMS enviados por dia, limite que cresce de acordo com o uso.</li>
                    <li>SMSs com algumas palavras proibidas (referente à cobranças, instituições financeiras, links, etc).</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Contas Pai</td>
            <td>São contas para quem possui a necessidade de criar e administrar outras contas, como em integrações com sistemas, revenda de serviços e utilização por terceiros das funções de telefonia.</td>
            <td class="center">Contas Filhas</td>
            <td>
                <ul>
                    <li>As contas Pais têm as mesmas limitações das contas Clientes, tendo apenas o diferencial de poder administrar subcontas.</li>
                    <li>As contas Filhas são basicamente contas criadas através de outra conta, são parecidas com as contas Clientes, tendo os mesmos privilégios, sendo apenas vinculada a uma outra conta, podendo ser <a href="#alterar-conta">Alterada</a> ou <a href="#deletar-conta">Removida</a> por sua conta Pai.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>