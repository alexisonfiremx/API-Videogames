const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('videogame', {
          id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING(1500),
            allowNull: false,
          },
          released: {
            type: DataTypes.STRING
          },
          rating: {
            type: DataTypes.DECIMAL(10,1)
          },
          createdAtDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          image: {
            type: DataTypes.STRING,
            
          },
    },
  {
    timestamps: false,
  }
  );
};
