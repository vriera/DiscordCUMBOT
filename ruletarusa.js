const barril1 = "```       (💦)\n(  )          (  )\n         o\n(  )          (  )\n       (  )```"
const barril2 = "```       (  )\n(  )          (💦)\n         o\n(  )          (  )\n       (  )```"
const barril3 = "```       (  )\n(  )          (  )\n         o\n(  )          (💦)\n       (  )```"
const barril4 = "```       (  )\n(  )          (  )\n         o\n(  )          (  )\n       (💦)```"
const barril5 = "```       (  )\n(  )          (  )\n         o\n(💦)          (  )\n       (  )```"
const barril6 = "```       (  )\n(💦)          (  )\n         o\n(  )          (  )\n       (  )```"


const barriles = [ barril1 , barril2 , barril3 , barril4 , barril5 , barril6]
import exp from 'constants'
import{ randomInt }  from 'crypto';
const  ruleta = new Map();

   function shuffleArray(array){
       for (let i = array.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           const temp = array[i];
           array[i] = array[j];
           array[j] = temp;
       }
       return array;
   }

  function jugar_ruleta( id , message){
       let array = ruleta.get(id).players;
       array = shuffleArray(array);
       let position = randomInt(0 , 6);
       for( let i = 0 ; i < 6; i++){
                
               message.channel.send(`<@${array[i%array.length].id}> se dispara en lugar ${i+1}:`);
               message.channel.send(barriles[position %6]);
               if( position%6 == 0  ){
               message.channel.send(`<@${array[i%array.length].id}> se murió cummeado, alto gil`);
                break;
               }
               position++;
       }
       ruleta.delete(id); 
   } 


   
  function create_game(channel_id , author , message){
           ruleta.set(channel_id , {players: [ author ] } );
           message.channel.send("Se va a jugar a la ruleta rusa en 15 segundos, pongan todos cum ruleta para participar!");
   }

   function set_ruleta( message ){
       if ( !ruleta.has(message.channelID)){
           create_game(message.channelID , message.author , message);
           setTimeout( () => {jugar_ruleta(message.channelID , message )}, 15 * 1000);
       }else{
           let players = ruleta.get(message.channelID).players.find((value) => { return value.id === message.author.id });
           if(!players){
               ruleta.get(message.channelID).players.push(message.author);   
           }else{
               message.reply("Ya estas jugando campeon, tantas ganas de morir cumeado tenes?");
           }
       }
   }



export {set_ruleta }