import { DataTypes, Model, Optional, UUIDV4 } from "sequelize";
import sequelize from ".";

interface ProductAttributes {
  id: string;
  name: string;
  price: number;
  category: "FASHION" | "OLD SCHOOL";
  quantity: number;
}
export interface ProductInput extends Optional<ProductAttributes, "id"> {}

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  public id!: string;
  public name!: string;
  public price!: number;
  public category!: "FASHION" | "OLD SCHOOL";
  public quantity!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("FASHION", "OLD SCHOOL"),
      defaultValue: "FASHION",
    },
    quantity: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
  }
);

export default Product;
