/**
 * conf.json中打包日期自动替换
 */
const fs = require('fs');
const OuputReplaceWebpackPlugin = require('ouput-replace-webpack-plugin');
const formatDate = require('./formatDate');

class OuputReplaceAppConfigWebpackPlugin {
  constructor () {
    return new OuputReplaceWebpackPlugin(
      {
        replaces: [{
          file: 'conf.json',
          match: /\d+\.\d+\.\d+/g,
          conent: formatDate(new Date(), 'yyyy.MM.ddhhmm')
        }, {
          file: 'conf.json',
          match: /\d+\/\d+\/\d+/g,
          conent: formatDate(new Date(), 'yyyy-MM-dd~hh:mm:ss')
        }]
      }
    );
  }
}

module.exports =  OuputReplaceAppConfigWebpackPlugin;
