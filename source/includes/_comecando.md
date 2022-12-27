# Começando

## Visão geral da plataforma

> <b>API Endpoint</b>

```text
https://voice-api.zenvia.com/
```

A plataforma de desenvolvedor da API de Voz da Zenvia fornece tudo o que desenvolvedores precisam para começar a usar as APIs e ampliar a estratégia de comunicação utilizando nossos recursos de voz para efetuar e receber chamadas ou enviar torpedos. 

Os guias aqui disponibilizados fornecem ferramentas, recursos, dados e produtos de API para você integrar e estender seus resultados de pesquisas e campanhas.

Links rápidos:

 - [Inscreva-se para uma conta](https://voice-app.zenvia.com/painel/signup.php)
 - [Permissões de conta](#permissoes-de-conta)
 - [Descubra as APIs que funcionam melhor para você](#em-breve)
 - [Realize seu primeiro teste](#testes)


### Por que usar nossas APIs?

A solução de voz da Zenvia é destinada para desenvolvedores que precisam de uma comunicação automatizada e principalmente integrada com as ferramentas que a sua empresa já possui.

Nossas APIs de fácil utilização oferecem interações e soluções para chamadas e torpedos de voz através de programação direta. Com elas, você tem: 

![Soluções API de voz](/images/solucoes-api-banner.png "Soluções API de voz")


### Como a plataforma está organizada

A plataforma de desenvolvedor é organizada por APIs diferentes de acordo com a necessidade de integração. 

Reunimos uma seção de introdução diferente para cada uma contendo todas as suas especificidades. Atualmente, nossas APIs são:

<h4>Áudio</h4>

Essa API permite que você envie um torpedo de voz ou mensagens de voz do tipo áudio para determinados números. 

<h4>Central Telefônica</h4>

Na central telefônica você poderá fazer configurações e retirar relatórios de ramal e URAs.

<h4>Fila</h4>

A funcionalidade de filas permite a automatização e manipulação de filas de atendimento.

<h4>Chamadas</h4>

Essa API permite que você crie chamadas, podendo gravar as ligações, agendar e binar o seu próprio número. Também permite gerar relatório de chamadas, derrubar chamadas em andamento, transferir chamadas e avaliar de chamadas.

<h4>Composto</h4>

A funcionalidade de Envio de Composto, permite que você envie mensagens de voz por telefone misturando gravações de áudio MP3 com TTS e também realize algumas outras funções de central telefônica como coletar DTMF e transferir.

<h4>Conferências</h4>

Essa API permite criar e receber um ID para realizar chamadas que, ao serem atendidas, conectam-se a essa conferência. 

<h4>DIDs</h4>

<aside class="notice"> 
Antes era possível consultar os números de DIDs disponíveis e comprá-los automaticamente. Atualmente é necessário entrar em contato com o time de suporte da equipe de voz da Zenvia pelo email <a href="email:suporte.voz@zenvia.com">suporte.voz@zenvia.com</a>
</aside>

A funcionalidade DID (Número de telefone para recebimento de chamadas) permite que você gerencie, adquira ou remova um DID da sua Conta

<h4>Gerenciar Contas</h4>

Com essa API você pode criar, consultar, alterar e deletar contas filhas, sendo as contas filhas exatamente iguais a qualquer outra conta na Zenvia. 

<h4>Minha Conta</h4>

Essa funcionalidade permite que você visualize seu saldo, monitore suas contas e suas recargas, edite suas contas e configure e visualize seus webhooks.

<h4>Bina</h4>

Este endpoint permite que você cadastre e valide suas binas para utilizá-las em chamadas e torpedos de voz com o intuito de identificar ao destino que a ligação é sua, independente do número que estiver sendo utilizado para realizar a chamada.

<h4>SMS</h4>

O SMS permite que você envie mensagens de texto pela nossa API. 

<h4>TTS Leitura de Texto</h4>

A funcionalidade de TTS permite que você nos envie uma mensagem de texto e nosso torpedo de voz irá transformar em áudio.

<h4>Verificação (2FA)</h4>

A funcionalidade de verificação ou Two Factor Authentication(2FA), envia um código para um número de telefone e depois você pode verificar se o código informado pelo usuário é válido.

<h4>Webphone</h4>

Consulta a URL do Webphone de um determinado Ramal enviando os parâmetros para pré-configuração



## Bibliotecas

Em nosso [GitHub](https://github.com/totalvoice) você encontra bibliotecas de cliente e de código aberto que podem ajudá-lo a integrar nossas APIs ao seu sistema de forma mais rápida. 

- [PHP](https://github.com/totalvoice/totalvoice-php)
- [Node](https://github.com/totalvoice/totalvoice-node)
- [GO](https://github.com/totalvoice/totalvoice-go)
- [C#](https://github.com/totalvoice/totalvoice-csharp)
- [Python](https://github.com/totalvoice/totalvoice-python)
- [Java](https://github.com/totalvoice/totalvoice-java)
- [Ruby](https://github.com/totalvoice/totalvoice-ruby)



## Suporte

Caso você não encontre algum material ou tenha alguma dúvida técnica que não esteja na documentação, entre em contato conosco pelos nossos canais de suporte.

 - E-mail: suporte.voz@zenvia.com.
 - Chat: na plataforma de Voz da Zenvia.



### Visite as páginas específicas de cada API para obter mais informações sobre como começar a utilizá-las.
<table class="table-with-textual-content">
    <tbody>
        <tr>
            <td><a href="#audio">Áudio</a></td>
            <td><a href="#gerenciar-contas">Gerenciar Contas</a></td>
        </tr>
        <tr>
            <td><a href="#central-telefonica">Central Telefônica</a></td>
            <td><a href="#minha-conta">Minha Conta</a></td>
        </tr>
        <tr>
            <td><a href="#fila">Fila</a></td>
            <td><a href="#bina">Bina</a></td>
        </tr>
        <tr>
            <td><a href="#chamadas">Chamadas</a></td>
            <td><a href="#sms">SMS</a></td>
        </tr>
        <tr>
            <td><a href="#composto">Composto</a></td>
            <td><a href="#tts-leitura-de-texto">TTS Leitura de Texto</a></td>
        </tr>
        <tr>
            <td><a href="#conferencias">Conferências</a></td>
            <td><a href="#verificacao-2fa">Verificação (2FA)</a></td>
        </tr>
        <tr>
            <td><a href="#dids">DIDs</a></td>
            <td><a href="#webphone">Webphone</a></td>
        </tr>
    </tbody>
</table>  