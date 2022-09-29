/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cards', [{
      title: 'Пуэр',
      location: 'Китай',
      lng: '44.8146',
      lat: '44.8146',
      description: 'Постферментированный чай, который «дозревает» после обычной ферментации естественным (шен пуэр) или ускоренным (шу пуэр) образом. Окончательная ферментация происходит благодаря специальным микроорганизмам (aspergillus acidus). Темные пуэры становятся красно-коричневым настоем, иногда имеют землистый привкус. Светлые пуэры дают разный настой – от желто-зеленого до светло-коричневого.',
      image: 'https://besttea.ru/images/watermarked/1/detailed/31/BT-044_2.jpg',
    },
    {
      title: 'Улун',
      location: 'Китай',
      lng: '44.8146',
      lat: '44.8146',
      description: 'Полуферментированный чай, занимающий среднее положение между черным и зеленым. По степени окисления делится на сильноферментированные (ближе к черному чаю) и слабоферментированные (ближе к зеленому) сорта. Улуны дают настой от светло-желтого до светло-коричневого цвета, вкус насыщенный и яркий.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Oolong.JPG',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
