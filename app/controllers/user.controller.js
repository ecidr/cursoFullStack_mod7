const db = require("../models");
const Bootcamp = db.bootcamps;
const User = db.users;

exports.createUser = async (user) => {
  try {
    const createdUser = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    console.log(
      `>> Se ha creado el usuario: ${JSON.stringify(createdUser, null, 4)}`
    );
    return createdUser;
  } catch (err) {
    console.log(`>> Error al crear el usuario: ${err}`);
    throw err;
  }
};

exports.findUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return user;
  } catch (err) {
    console.log(`>> Error mientras se encontraba el usuario: ${err}`);
    throw err;
  }
};

exports.findAllUsers = async () => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return users;
  } catch (err) {
    console.log(">> Error buscando los usuarios: ", err);
    throw err;
  }
};

exports.updateUserById = async (userId, fName, lName) => {
  try {
    const updatedUser = await User.update(
      {
        firstName: fName,
        lastName: lName,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    console.log(
      `>> Se ha actualizado el usuario: ${JSON.stringify(updatedUser, null, 4)}`
    );
    return updatedUser;
  } catch (err) {
    console.log(`>> Error mientras se actualizaba el usuario: ${err}`);
    throw err;
  }
};

exports.deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: userId,
      },
    });

    console.log(
      `>> Se ha eliminado el usuario: ${JSON.stringify(deletedUser, null, 4)}`
    );
    return deletedUser;
  } catch (err) {
    console.log(`>> Error mientras se eliminaba el usuario: ${err}`);
    throw err;
  }
};
