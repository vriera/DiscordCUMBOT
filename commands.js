import { set_galletita } from "./galletita.js";
import{ randomInt }  from 'crypto';
import { set_ruleta } from "./ruletarusa.js";
const  prompt = 'cum ';
async function handle_cum_commands( message){
    let num = randomInt(60 , 80);
    console.log(num);
    if(num === 69 ){
        message.reply('https://ih1.redbubble.net/image.832929109.6327/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg');
    }
    switch ( message.content ){
        case prompt + 'cum':
            message.reply( `Tremenda cummeada ${message.author.username}`);
            break;
        case prompt + 'beto':
                message.channel.send('mbeh');
            break;
        case prompt + 'papi':
            if( message.author.tag === 'valcharriera#6901'){
                message.reply('si sos');
            }else 
            if ( randomInt(1 , 100 ) === 69 ){
                message.reply('por ahi podemos hacer que funcione');
            }else if (message.author.tag === 'nauel#7157'){
                message.reply('Nauel gil yo soy tu papi ahora');
                            }else{
            message.reply('te falta chubut');
            }
            message.channel.sendTyping();
            break;
        case prompt + 'stroke':
            let i;
            message.channel.send('VOY A CUMMEAR');
            for( i = 1 ; i < 10 ; i++){
                if( i % 3 == 0 ){
                    message.channel.send('cum 💦');
                }else {
                    message.channel.send('AAAAAAAAAAAAAAAAAAAAAAAA');
                }
                if(i % 9 === 0 && message.guildId === '885526769141178399'){
                    message.channel.send('cum stroke');
                }
            }
            break;
        case prompt + 'help':
            message.channel.send(comandos);
            break;
        case prompt + 'a todos':
                //conectarse(message);
            break;
        case prompt + 'no puedo parar': 
            message.reply('https://i.imgur.com/TbSHcKZ.jpeg').then(message.reply("es su culpa"));
            break;
        case prompt + 'galletita':
            set_galletita(message);
            break;
        case prompt + 'ruleta':
            set_ruleta(message);
        default:
            /*var messages = message.content.split( prompt.length );
            if ( message.channel.guildMembers.fetch(messages[1]) ){
                message.channel.send(`Ja te cummearon ${messages[1]}`);
            }*/
        break;
    }
};

export {handle_cum_commands};