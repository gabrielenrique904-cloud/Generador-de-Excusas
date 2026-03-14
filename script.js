
  let first = "Wey, no me lo vas a creer pero... ";

  // ¡Añadi nuevas palabras!
  // son arrays porque tienen los corchetes a los lados y tienen muchos valores ordenados por un index.com
  // adj[2]
  let adj = ["un radiactivo ", "un gigante ", "un invisible ", "un místico "];
  let noun = ["repartidor de pizza ", "político ", "fantasma ", "influencer "];
  let action = ["secuestró mi ", "clonó mi ", "usó como escudo mi ", "confundió con un juguete mi "];
  let possetion = ["título universitario ", "cepillo de dientes ", "sándwich de mortadela ", "control del televisor "];
  let where = ["en el medio de la nada", "en un concierto de reggaetón", "en el área 51", "en el sótano","En el ataud"];
  let time = ["justo cuando iba a salir ", "en el eclipse de ayer ", "mientras parpadeé "];
console.log(adj.length)
  // Lógica de aleatoriedad


  //mathrandom es un numero al azar del 0 al 1 con decimales. 
  // un numero del 0 al 1 lo multiplicas por un numero de los lengths de los arrays. 0 al lenght del array. 
  //math random el array length seria 4 es decir math.random quiere que vaya desde 0 hasta 4, y viene math floor y dice que numero me queda
  // mas cerca y es el 3 y viene y lo guardo como rdm1 que sea igual a el resultado de estas opeaciones. 


  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);
  let rdm6 = Math.floor(Math.random() * time.length);

  // he unido todo y (He quitado el ";" que sobraba antes de "time")
  document.querySelector("#excuse").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5] + " " + time[rdm6];
 //math random es un numero del 0 al 1 y viene mathfloor le quita el decimal y lo añade a la variable es ir con calma y viendolo. git