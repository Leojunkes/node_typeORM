# Criando uma aplicação Node
## primeira aula:

## aos 58.01 minutos
professora falou que devemos iniciar o typescript com o comando:

```yarn tsc --init```

E alterar o tsconfig para "strict":false

## aos 59.01 minutos ela falou que devemos instalar o ts-node-dev

# criando Rotas

GET = Buscas |
POST = criação |
PUT = Alteração |
DELETE = deletar |
PATCH = Alterar uma infomação especifica

# utilizar Insomnia

criar um workspace
utilizar esta aplicação para método POST

# tecnologias boas de serem utilizadas

queryBuilders - KNEX.JS - funções que facilitam na escrita do nosso código backend.(porém, nesta aplicação não usaremos.)

## aula2

# Tecnologias que vamos utilizar:

framework TYPEORM => vai nos ajudar na integração da aplicação com o nosso banco de dados.

## Migrations - são os históricos de tudo o que é feito em nosso banco de dados.

Connections:
PK=primary key:Id
UUID
FK=Chave estrangeira:exemplo id que esta em users , pode ser utilizada em outra tabela.

# migrations

public UP - executar uma migration
public DOWN -se precisar reverter a estrutura.
criar tabela-registrar migration.
manter o banco de dados atualizados.
históricos de tudo o que é feito no nosso banco de dados.

Em nosso projeto vão ter as tabelar/migrations que vamos utilizar:

### Como criar Migrations

```yarn typeorm migration:create -n CreateNomeMigration```

cria uma migration com public up - toda a estrutura vai ali em up. e public down

Connections

Users

Messages

Settings

Após as migrations criadas, por ela para funcionar:

```yarn typeorm migration:run```

# Entidades ou Entities

uma Entidade possui atributos
Cada entidade é uma tabela, e cada atributo é cada uma das colunas dessas tabelas.

# repositórios

Manipulam dados da nossa aplicação
forma de deixar a aplicação mais separada/dividida.

## Tipos de parâmetros

Routes Params - de rotas
query Params - filtros de buscas
body Params - c