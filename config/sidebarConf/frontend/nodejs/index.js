const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.frontend.nodejs;

module.exports = [
  genSidebar('Nodejs', children, false),
];