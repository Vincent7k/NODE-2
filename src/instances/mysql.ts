import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

//Importando uma constante que será a nossa conexão
//com o DB
export const sequelize = new Sequelize(
    //aqui vamos receber os parâmetrospara nos
    //banco de dados
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT as string)
    }
)