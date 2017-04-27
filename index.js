 'use strict'

const {resolve} = require('path')


// ---------------------------- ENV ----------------------------- //

const env = Object.assign({}, process.env), 
  secretsFile = resolve(process.env.HOME, `.travelapp.env.json`)


console.log('this is the secretsFile****', secretsFile)



module.exports = {
  env,
  secretsFile: require(secretsFile)
};