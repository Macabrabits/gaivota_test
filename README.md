## Iniciando

Para inicializar a aplicação, basta ter o Docker e o Docker Composer instalados, e rodar o seguinte comando:

```console
docker-compose up
```

## Endpoints

Utilize o Insomnia para importar o insomnia.json na raiz do projeto.

## Autenticação

A importação do insomnia tem configuração para se autenticar automaticamente, basta fazer uma requisição para o endpoint "signup" com o corpo já configurado para cadastrar um usuário, o insomnia se autentica automaticamente de acordo com o body no endpoint "signin".

exemplo:

```console
{
	"email": "development@gmail.com",
	"password": "0000"	
}
```
