import { DataResolver } from "discord.js";
import fs from 'fs';

function mandar_cumpleaños(client){
  /*fs.readFile("cumpleaños.json",'utf8', function(err ,data){
      if (err){
          console.log("no puedo leer")
          return;
      }
      let tokens = data.split("\n");
      tokens.forEach( token => {
      let aux = JSON.parse(token);
      console.log(aux);
     let channel= client.guilds.cache.get(aux.channel);
     channel.send(`Feliz cum <@${aux.user}> el dia de ${aux.fecha}`);
      })
  })
  */
}

function agregar_cumple(message){
    let tokens = message.content.split(" ");
    if( tokens.length != 3 ){
        return
    }
    if(!(tokens[2].length < 3 && tokens[2] > 5) ){
    let dates = tokens[2].split("/");
    let fecha = new Date();
    fecha.setDate(dates[0]);
    fecha.setMonth(dates[1]);
    let mencionados = [];
    message.mentions.users.forEach(element => {
        mencionados.push(element.id)
    });;
    console.log(message.guild);
    console.log(message.guild.id);
    let save = { "user": mencionados[0],
                "fecha":fecha,
                "channel": message.channel.id
                };
    let string_json = JSON.stringify(save);
    string_json.append("\n");
    console.log(string_json);
    fs.writeFile(`cumpleaños.json` , string_json , function(err, result) {
        if(err) console.log('error', err);} )
    }
}


export {agregar_cumple , mandar_cumpleaños}