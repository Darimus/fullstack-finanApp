import { Connection, createConnection, getConnectionOptions } from 'typeorm';

//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/CreateCategories

export default async (host = "DBAppFinan"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
    })
  )
}


// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "docker",
//   password: "1234",
//   database: "DBAppFinan",
//   entities: [Users],
//   migrations: ["src/database/migrations/*.ts"],
// })

