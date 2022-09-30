/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Sonya',
      email: 'sonya@sonya',
      password: '123',
      roles: 'admin',
    },
    {
      name: 'Angelina',
      email: 'angelina@angelina',
      password: '123',
      roles: 'admin',
    },
    {
      name: 'Vadim',
      email: 'vadim@vadim',
      password: '123',
      roles: 'admin',
    },
    {
      name: 'Pavel',
      email: 'pavel@pavel',
      password: '123',
      roles: 'admin',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {

  },
};
