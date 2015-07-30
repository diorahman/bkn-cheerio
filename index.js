var request = require ('request');
var cheerio = require ('cheerio');
var URL = 'http://www.bkn.go.id/profil-pns';

function parse (html) {
  var $ = cheerio.load(html);
  var obj = {};
  $('.pns-row').each(function(){
    var label = $(this).find('.label').text().trim();
    var value = $(this).find('.value').text().trim();
    obj[label] = value.split(':').pop().trim();
  });
  return obj;
}

module.exports = function(number, cb) {
  var options = {
    url: URL,
    method: 'POST',
    body: 'nip=' + number,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  request(options, function(err, res, data){
    if (err)
      return cb(err);
    if (res.statusCode != 200)
      return cb(new Error('Something is wrong'));
    cb(null, parse(data));
  });
}
