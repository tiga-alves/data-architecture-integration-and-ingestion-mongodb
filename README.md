# data-architecture-integration-and-ingestion-mongodb

1. Primeiro, certifique-se de que você tem o Docker instalado em sua máquina. Se não tiver, você pode baixá-lo e instalá-lo a partir do site oficial do Docker. [Acesse](https://www.docker.com/products/docker-desktop/)


2. Criar e executar o container MongoDB. Abra um terminal e execute o seguinte comando:
```docker
docker run -d --name sapataria -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senha123 mongo
```
Este comando cria um container chamado "sapataria", executa-o em modo detached (-d). 


3. Verifique se o container está rodando: 
```docker
docker ps
```

4. Acesse o shell MongoDB: Isso abrirá o shell MongoDB dentro do container.
```docker
docker exec -it sapataria mongosh -u admin -p senha123
```

5. Execute os scripts: Agora você pode copiar e colar os scripts disponíveis neste repositório diretamente no shell MongoDB. Comece com o script de criação do banco de dados:

```mongodb
use sapataria
```

6. Depois de criar o schema, você pode executar os scripts abaixo para criar as collections:

```mongodb
db.createCollection("clientes")
db.createCollection("pedidos")
db.createCollection("produtos")
```



7. Verifique se os dados foram inseridos corretamente: Você pode executar algumas consultas para verificar se os dados foram inseridos corretamente. Por exemplo:


8. Saia do shell MongoDB: Quando terminar, você pode sair do shell MongoDB digitando exit.

9. Para parar o container (quando não precisar mais dele):
```docker
docker stop sapataria
```
10. Para remover o container (se não precisar mais dele):
```docker
docker rm sapataria
```
