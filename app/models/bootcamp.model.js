module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define("bootcamp", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El campo 'title' es requerido",
        },
      },
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El valor de CUE debe ser un número entero.",
        },
        min: {
          args: [5],
          msg: "El valor de CUE debe ser como mínimo 5.",
        },
        max: {
          args: [20],
          msg: "El valor de CUE debe ser como máximo 20.",
        },
        notEmpty: {
          args: true,
          msg: "El campo 'cue' es requerido",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El campo 'description' es requerido",
        },
      },
    },
  });

  return Bootcamp;
};
