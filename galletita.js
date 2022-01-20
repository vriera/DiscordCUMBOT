
import{ randomInt }  from 'crypto';
const  galletita = new Map();

   function shuffleArray(array){
       for (let i = array.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           const temp = array[i];
           array[i] = array[j];
           array[j] = temp;
       }
       return array;
   }

  function jugar_galletita( id , message){
       let array = galletita.get(id).players;
       array = shuffleArray(array);
       let cum_time = randomInt(1 , 100);
       for( let i = 0 ; i < array.length; i++){
           if ( i !== array.length-1){
               message.channel.send(`<@${array[i].id}> cummeo en lugar ${i+1} en ${cum_time} segundos`);
               cum_time = randomInt(cum_time + 1 , cum_time + 50);
           }else{
               message.channel.send(`<@${array[i].id}> se comio la galletita con el cum de ${i} personas`);
           }
       }
       galletita.delete(id); 
   } 

   function create_game(channel_id , author , message){
           galletita.set(channel_id , {players: [ author ] } );
           message.channel.send("Se va a jugar a la galletita en 15 segundos, pongan todos cum galletita para participar!");
   }

   function set_galletita( message ){
       if ( !galletita.has(message.channelID)){
           create_game(message.channelID , message.author , message);
           setTimeout( function callback() {jugar_galletita(message.channelID , message )}, 15 * 1000);
       }else{
           let players = galletita.get(message.channelID).players.find(function(value){ return value.id === message.author.id });
           console.log(players);
           if(!players){
               galletita.get(message.channelID).players.push(message.author);   
           }else{
               message.reply("Ya estas jugando campeon, cuanto cum te pensas que tenes flaco");
           }
       }
   }

export { set_galletita };