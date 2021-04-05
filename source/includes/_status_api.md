# Tabela Status API

<aside class="notice">
Nesta seção, você poderá visualizar a tabela com os status que são retornados pela nossa API.
</aside>

Local | Código | Tipo | Significado
----- | ----------- | ---- | ------------
api	| 403 | FALHA_AUTH | “access token inválido”
api	| 403 |	SEM_PERMISSAO |	 “conta desativada”
api	| 402 |	SALDO_INSUFICIENTE |	 “saldo insuficiente”
api	| 501 |	NAO_IMPLEMENTADO |	 “não implementado”
audio |	404 |	PARAMETRO_OBRIGATORIO |	 “qual audio? informar ID /audio/ID”
audio |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “audio não encontrado”
audio |	200 |	SUCESSO |	dados retornados com sucesso
audio |	405 |	PARAMETRO_INVALIDO |	 “numero_destino inválido, formato DDD + Número”
audio |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro url_audio é obrigatório”
audio |	405 |	PARAMETRO_INVALIDO |	 “o parametro url_audio é inválido, formato esperado http://foooo.bar/audio.mp3”
audio |	200 |	SUCESSO |	audio criado com sucesso
chamada |	404 |	PARAMETRO_OBRIGATORIO |	 “qual chamada? informar ID /chamada/ID”
chamada |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “chamada não encontrada”
chamada |	404 |	CHAMADA_SEM_GRAVACAO |	 “chamada sem gravação solicitada”
chamada |	200 |	SUCESSO |	dados retornados com sucesso
chamada |	405 |	PARAMETRO_INVALIDO |	 “numero_origem inválido, formato DDD + Número ex: 4832830151”
chamada |	405 |	PARAMETRO_INVALIDO |	 “numero_destino inválido, formato DDD + Número ex: 4832830151”
chamada |	200 |	SUCESSO |	chamada criada com sucesso
chamada |	405 |	PARAMETRO_INVALIDO |	 “numero inválido, formato DDD + Número ex: 4832830151”
chamada |	405 |	PARAMETRO_INVALIDO |	 “modo inválido: 1=escuta, 2=sussurro, 3=conferência”
chamada |	404 |	CHAMADA_NAO_ATIVA |	 “a chamada não está ativa”
chamada |	200 |	SUCESSO |	escuta criada com sucesso
chamada |	200 |	SUCESSO |	 “encerrando chamada”
chamada |	404 |	CHAMADA_NAO_ATIVA |	 “a chamada não está ativa”
chamada |	405 |	PARAMETRO_INVALIDO |	 “parametro inválido, informe perna ‘origem’ ou ‘destino'”
chamada |	405 |	PARAMETRO_INVALIDO |	 “numero inválido, formato DDD + Número ex: 4832830151”
chamada |	200 |	SUCESSO |	transferindo chamada
chamada |	404 |	CHAMADA_NAO_ATIVA |	a chamada não está ativa
chamada |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “chamada não encontrada”
chamada |	200 |	SUCESSO |	dados retornados com sucesso
chamada |	200 |	SUCESSO |	dados retornados com sucesso
conta |	403 |	SEM_PERMISSAO |	 “sem permissão para leitura de contas”
conta |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “conta não encontrada”
conta | 200 |   SUCESSO |	dados retornados com sucesso
conta |	403 |	SEM_PERMISSAO |	 “sem permissão para leitura de contas”
conta |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “conta não encontrada”
conta |	200 |	SUCESSO |	dados retornados com sucesso
conta |	200 |	SUCESSO |	dados retornados com sucesso
conta |	200 |	SUCESSO |	dados retornados com sucesso
conta |	403 |	SEM_PERMISSAO |	 “sem permissão para atualizar contas”
conta |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “conta não encontrada”
conta |	200 |	SUCESSO |	 “Conta Removida com sucesso.”
conta |	403 |	SEM_PERMISSAO |	 “sem permissão para atualizar contas”
conta |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “conta não encontrada”
conta |	405 |	PARAMETRO_INVALIDO |	 “o parametro login deve ser um endereço de email”
conta |	405 |	PARAMETRO_INVALIDO |	 “o parametro senha deve conter pelo menos 6 caracteres”
conta |	409 |	REGISTRO_DUPLICADO |	 “login duplicado”
conta |	403 |	SEM_PERMISSAO |	 “sem permissão para atualizar utilizar contas pós pago”
conta |	409 |	SEM_PERMISSAO |	 “Impossível atualizar pós para pré, consulte o suporte”
conta |	200 |	SUCESSO |	 “dados atualizados com sucesso”
conta |	403 |	SEM_PERMISSAO |	 “sem permissão para criar contas”
conta |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro nome é obrigatório”
conta |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro login é obrigatório”
conta |	405 |	PARAMETRO_INVALIDO |	 “o parametro login deve ser um endereço de email”
conta |	405 |	PARAMETRO_INVALIDO |	 “o parametro senha deve conter pelo menos 6 caracteres”
conta |	409 |	REGISTRO_DUPLICADO |	 “login duplicado”
conta |	200 |	SUCESSO |	conta criada com sucesso
conta |	403 |	SEM_PERMISSAO |	 “sem permissão”
conta |	200 |	SUCESSO	| “crédito inserido com sucesso”
ramal |	404 |	PARAMETRO_OBRIGATORIO |	 “qual ramal? informar ID /ramal/ID”
ramal |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “ramal não encontrado”
ramal |	200 |	SUCESSO |	dados retornados com sucesso
ramal |	200 |	SUCESSO |	dados retornados com sucesso
ramal |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “ramal não encontrado”
ramal |	200 |	SUCESSO |	 “Ramal Removido”
ramal |	404 |	CHAMADA_NAO_ATIVA |	 “a chamada não está ativa”
ramal |	405 |	PARAMETRO_INVALIDO |	 “ramal inválido, informe o ramal com 3 ou 4 dígitos”
ramal |	405 |	PARAMETRO_INVALIDO |	 “login inválido”
ramal |	405 |	PARAMETRO_INVALIDO |	 “senha inválida”
ramal |	405 |	PARAMETRO_INVALIDO |	 “número da bina inválido, informar segundo o exemplo: 4832830151”
ramal |	405 |	PARAMETRO_INVALIDO |	 “login duplicado. Ja existe este login.”
ramal |	405 |	PARAMETRO_INVALIDO |	 “ramal inválido, já existe um ramal {ramal} cadastrado”
ramal |	200 |	SUCESSO |	ramal criado com sucesso
ramal |	405 |	PARAMETRO_INVALIDO |	 “atenção, informe o id do ramal a ser atualizado /ramal/{id}”
ramal |	405 |	PARAMETRO_INVALIDO |	 “ramal inválido, informe o ramal com 3 ou 4 dígitos”
ramal |	405 |	PARAMETRO_INVALIDO |	 “login inválido”
ramal |	405 |	PARAMETRO_INVALIDO |	 “senha inválida”
ramal |	405 |	PARAMETRO_INVALIDO |	 “número da bina inválido, formato DDD + Número ex: 4832830151”
ramal |	405 |	PARAMETRO_INVALIDO |	 “não é possível alterar o login do ramal administrador”
ramal |	405 |	PARAMETRO_INVALIDO |	 “não é possível alterar a senha do ramal administrador”
ramal |	405 |	PARAMETRO_INVALIDO |	 “nada para atualizar”
ramal |	405 |	PARAMETRO_INVALIDO |	 “login e senha inválidos, tente novamente com outros dados”
ramal |	405 |	PARAMETRO_INVALIDO |	 “ramal inválido, já existe um ramal {ramal} cadastrado”
ramal |	200 |	SUCESSO |	 “dados atualizados com sucesso”
saldo |	200 |	SUCESSO |	saldo atual
sms |	404 |	PARAMETRO_OBRIGATORIO |	 “qual sms? informar ID /sms/ID”
sms |	200 |	SUCESSO |	dados retornados com sucesso
sms |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “sms não encontrado”
sms |	200 |	SUCESSO |	dados retornados com sucesso
sms |	405 |	PARAMETRO_INVALIDO |	 “numero_destino {numero} inválido, formato DDD + Número”
sms |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro mensagem é obrigatório”
sms |	405 |	PARAMETRO_INVALIDO |	 “o parametro mensagem não pode conter mais de 160 caracteres”
sms |	405 |	PARAMETRO_INVALIDO |	“o parametro mensagem não pode conter mais de 16000 caracteres”
sms |	405 |	PARAMETRO_INVALIDO |	“Mensagem bloqueada por SPAM.”
sms |	403 |	SEM_PERMISSAO |	“Limite diário de 50 atingido. Ative sua conta no painel para enviar sem limites.”
sms |	403 |	SEM_PERMISSAO |	“Limite diario de SMS esgotado. Caso precise aumentar seu número máximo de envios de SMS diários, entre em contato com suporte.voz@zenvia.com.”
sms |	200 |	SUCESSO |	sms criado com sucesso
tts |	404 |	PARAMETRO_OBRIGATORIO |	 “qual tts? informar ID /tts/ID”
tts |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “tts não encontrado”
tts |	200 |	SUCESSO |	dados retornados com sucesso
tts |	200 |	SUCESSO |	dados retornados com sucesso
tts |	200 |	SUCESSO |	dados retornados com sucesso
tts |	405 |	PARAMETRO_INVALIDO |	 “numero_destino {numero} inválido, formato DDD + Número”
tts |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro mensagem é obrigatório”
tts |	200 |	SUCESSO |	tts criado com sucesso
webhook |	200 |	SUCESSO |	dados retornados com sucesso
webhook |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro webhook é obrigatório”
webhook |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro url é obrigatório”
webhook |	405 |	PARAMETRO_INVALIDO |	 “o parametro url é inválido, informar ex: http://foooo.bar/x/y”
webhook |	405 |	PARAMETRO_INVALIDO |	 “o parametro webhook é inválido. Webhooks válidos: {lista_webhooks}”
webhook |	200 |	SUCESSO |	 “webhook atualizado com sucesso”
webhook |	405 |	PARAMETRO_OBRIGATORIO |	 “o parametro webhook é obrigatório”
webhook |	405 |	PARAMETRO_INVALIDO |	 “o parametro webhook é inválido. Webhooks válidos: {lista_webhooks}”
webhook |	200 |	SUCESSO |	 “webhook apagado com sucesso”
webphone |	405 |	PARAMETRO_INVALIDO |	 “Parâmetro ligar_para inválido, formato DDD + Número ex: 4832830151”
webphone |	200 |	SUCESSO |	url webphone
webphone |	200 |	SUCESSO |	url webphone
webphone |	200 |	SUCESSO |	url webphone
webphone |	404 |	ELEMENTO_NAO_ENCONTRADO |	 “ramal não encontrada”
widget |	200 |	SUCESSO |	código widget
