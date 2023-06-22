function generatePasswords() {
    const allPasswords = []; //? almacena todas las contraseñas que se vayan creando
    
    function generaterPass() {
      var numAmount = parseInt(document.getElementById("num_amount").value);
    //?   caracteres que quiero

      if (numAmount < 4 || numAmount > 24) return alert("no puede .....");
      let password = "";
      const characterTypes = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
        special: "!@#$%^&*_+~</-=|:?>"
      };
  
      const selectRandomTypes = [ // ?
        "lowercase",
        "lowercase",
        "lowercase",
        "lowercase",
        "lowercase",
        "uppercase",
        "uppercase",
        "number",
        "number",
        "number",
        "special",
      ];

      const generatedCharacterTypes = { //? arranca en falsa, cuando se crea en el array nuevo cambia a true
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      };

      let orderCharacterTypesResult = []; //? Objetivo: que lo recorra de manera random y que lo vaya "llenando"
      let numRef = numAmount; //? cantidad de caracteres que voy a necesitar

      while (numRef > 0) {
        const selectChar = 
          selectRandomTypes[Math.floor(Math.random() * selectRandomTypes.length)];
      //? De este array toma la posicion
      //?                  Ayuda a redondear * la posicion hasta la que quiero, va a generar un numero x del array
        orderCharacterTypesResult.push(selectChar);
      //? Pushea los selectores
        generatedCharacterTypes[selectChar] = true;
  
        if (
          numRef === 1 &&
          (!generatedCharacterTypes.lowercase ||
            !generatedCharacterTypes.uppercase ||
            !generatedCharacterTypes.number ||
            !generatedCharacterTypes.special)
        ) {
          numRef = numAmount;
          orderCharacterTypesResult = [];
          for (const key in generatedCharacterTypes) {
            generatedCharacterTypes[key] = false;
          }
        } else {
          numRef--; //? para que se salga de ahi
        }
      }

      const resultPass = orderCharacterTypesResult.map((element) => {
        return characterTypes[element][
          Math.floor(Math.random() * characterTypes[element].length)
        ];
      });

      password = resultPass.join("");

      // ? return password;
      if (allPasswords.includes(password)) {
        return generaterPass(numAmount);
      } else {
        allPasswords.push(password);
      }
  
      var passwordList = document.getElementById("passwordList");
      passwordList.innerHTML = "";
  
      document.getElementById("password").innerHTML = password;
  
      allPasswords.map((element) => {
        var li = document.createElement("li");
        li.innerText = element;
        passwordList.appendChild(li);
      });
  
      return allPasswords;
    }
    return generaterPass;
  }
  
  const generator = generatePasswords();
  var button_generator = document.getElementById("button_generator");
  button_generator.addEventListener("click", generator);
  
  console.log(testPass(8));
  console.log(testPass(8));
  console.log(testPass(5));
  
  /*
  f(data){}
  *RECURSION   {{{{}}}}   [[[[]]]]
  *class STACK QUEUE
  *Diccionarios HashDicctionary  {a:2} <---- data
  
  */
