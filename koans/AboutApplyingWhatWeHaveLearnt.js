var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      _(products).filter(function(pizza) {
        if(pizza.containsNuts === false) {
          var hasMush;
          _(pizza.ingredients).any(function(ingredient) {
            if(ingredient === "mushrooms") {
              hasMush = true;
            }
          });
          if(!hasMush) productsICanEat.push(pizza);
        }
      });

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(sum);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = _.chain(_.range(0, 1000, 1))
              .filter(function(n) {
                if(n % 3 === 0 || n % 5 === 0) return n;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0)
              .value();

              /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    _.chain(products)
      .map(function(pizza) {
         return pizza.ingredients;
      })
      .flatten()
      .reduce(function(a, b) {
        return ingredientCount[b] = (ingredientCount[b] || 0) + 1;
      }, 0)
      .value();


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  
  it("should find the largest prime factor of a composite number", function () {
    function getLargestPrimeFactor(num) {
      var largestPrimeFactor,
          divisor = 2;
      
      while (num > 1) {
        if (num % divisor === 0) {
          largestPrimeFactor = divisor;
          num = num / divisor;
          while (num % divisor === 0) {
            num = num / divisor;
          }
        }
        divisor += (divisor === 2) ? 1 : 2;
      }
      return largestPrimeFactor;
    }

    expect(getLargestPrimeFactor(10001)).toBe(137);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    // Not happy with this.  Assumes values hold the same numbers.
    function largestPalindrome(num1, num2) {
      var arr = [num1, num2];
  
      arr = arr.map(function(num) {
        return num.toString().split("").sort().join("");
      });
      
      arr[0] = arr[0].toString().split("").reverse().join("");
      
      return arr[0] + arr[1];
    }

    expect(largestPalindrome(987, 879)).toBe('987789');
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  
});
