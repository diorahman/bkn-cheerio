var profileOf = require ('./');

describe ('BKN', function(){
  it('should get pak handoko', function(done){
    profileOf ('196805071987121001', function(err, obj) {
      if (err) return done(err);
      obj.Nama.should.equal('LAKSANA TRI HANDOKO'); 
      done(); 
    });
  });

  it('should return an empty object', function(done){
    profileOf ('196805071987121', function(err, obj) {
      if (err) return done(err);
      Object.keys(obj).length.should.equal(0);
      done();
    });
  });
});

