const db = require("./app/models");
const userController = require("./app/controllers/user.controller");
const bootcampController = require("./app/controllers/bootcamp.controller");
const run = async () => {
  // Crear un Usuario
  const userOne = await userController.createUser({
    firstName: "Mateo",
    lastName: "Díaz",
    email: "mateo.diaz@correo.com",
  });

  const userTwo = await userController.createUser({
    firstName: "Santiago",
    lastName: "Mejias",
    email: "santiago.mejias@correo.com",
  });

  const userThree = await userController.createUser({
    firstName: "Lucas",
    lastName: "Rojas",
    email: "lucas.rojas@correo.com",
  });

  const userFour = await userController.createUser({
    firstName: "Facundo",
    lastName: "Fernández",
    email: "facundo.fernandez@correo.com",
  });

  // Crear un Bootcamp
  const bootcampOne = await bootcampController.createBootcamp({
    title: "Introduciendo El Bootcamp De React",
    cue: 10,
    description:
      "React es la librería más usada en JavaScript para el desarrollo de interfaces",
  });

  const bootcampTwo = await bootcampController.createBootcamp({
    title: "Bootcamp Desarrollo Web Full Stack",
    cue: 12,
    description:
      "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS",
  });

  const bootcampThree = await bootcampController.createBootcamp({
    title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
    cue: 12,
    description:
      "Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning",
  });

  // Agregando usuarios a los Bootcamp
  await bootcampController.addUser(bootcampOne.id, userOne.id);
  await bootcampController.addUser(bootcampOne.id, userTwo.id);
  await bootcampController.addUser(bootcampTwo.id, userOne.id);
  await bootcampController.addUser(bootcampThree.id, userOne.id);
  await bootcampController.addUser(bootcampThree.id, userThree.id);
  await bootcampController.addUser(bootcampThree.id, userThree.id);
  await bootcampController.addUser(bootcampThree.id, userFour.id);

  // Consultando el bootcamp por id incluyendo los usuarios
  const requestBootcamp = await bootcampController.findById(bootcampOne.id);
  console.log(" Bootcamp:  ", JSON.stringify(requestBootcamp, null, 2));

  // Consultado  todos los bootcamp
  const requestBootcamps = await bootcampController.findAll();
  console.log(" Bootcamps: ", JSON.stringify(requestBootcamps, null, 2));

  // Consultado los usuarios por id incluyendo los bootcamp
  const requestUser = await userController.findUserById(userOne.id);
  console.log(" User: ", JSON.stringify(requestUser, null, 2));

  // Listar todos los usuarios con sus bootcamp
  const requestUsers = await userController.findAllUsers();
  console.log(" Users: ", JSON.stringify(requestUsers, null, 2));

  // Actualización de usuario por id
  const updateUser = await userController.updateUserById(
    userOne.id,
    "Pedro",
    "Sánchez"
  );
  const searchUser = await userController.findUserById(userOne.id);
  console.log(" UserOne: ", JSON.stringify(searchUser, null, 2));

  //Eliminar un usuario por id
  //const deleteUser = await userController.deleteUserById(userOne.id);
};

db.sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Sincronizando tabla intermedia");
    run();
  });
