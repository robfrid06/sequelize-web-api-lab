'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const date = new Date()

    await queryInterface.bulkInsert('Positions', [{
      title: 'Data Scientist',
      description: 'In this newly created role, the Principal Data Scientist will will be responsible for applying business process knowledge and predictive modeling to develop, recommend, and communicate timely.',
      deadline: date,
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Positions', null, {})
  }
};
