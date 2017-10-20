describe('Insterting coockie into th site', function(){

  var coockie;

  before(function(){

      browser.url("Sainsburys.co.uk");

      coockie = {
        name: 'ctConfigName',
        value: 'devINT_SAIS-403'
    };

    browser.cookie('post', coockie);
  });


  it('Insert coockie', function(){

    /**
      enter flow here
    */

  });


});
