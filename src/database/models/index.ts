
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("atlp", "postgres", "Munezero25", {
    dialect:"postgres"
})

export default sequelize;