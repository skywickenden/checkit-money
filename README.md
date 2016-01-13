# checkit-money

A money / currency validator for [checkit](https://github.com/tgriesser/checkit)

### Installation

    npm install --save checkit-money
    
### Usage (ES6)

    import money from 'checkit-money';
    import Checkit from 'checkit';
    Checkit.Validator.prototype.money = money;
    
    const checkit = new Checkit({
      foo: ['money']
    });
    
    const test = {
      foo: 23.45
    };

    checkit.run(test).then(() => {
      console.log('validated');
    }).catch(Checkit.Error, function(err) {
      console.log(err.toJSON());
    });
    
By default a number with an optional 2 decimal palces is accepted. Strings and numbers are valid:

    34
    4.56
    0.34
    '65.34'
    
### Optional paramaters

To ensure that the vaule always has a decimal value:

    const checkit = new Checkit({
      foo: ['money:true']
    });
    
To allow the value to have an optional preceding symbol. EG '£34.56'

    const checkit = new Checkit({
      foo: ['money:false:true']
    });
