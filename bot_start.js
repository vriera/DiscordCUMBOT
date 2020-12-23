console.log("cum");

const fechas_string = '\*\*\*\`\`\`markdown\n\n#Fechas del server\n\n<7 de enero> - dia del rugbier\n\n<20 de enero> - día de azul salió de la casa\n\n<24 de marzo> - cumpleaños del server\n\n<11 de abril> - sábados de ewje\n\n<28 de abril> - día de Gonzalo la concha de tu madre\n\n<7 de mayo> - día en el que Sugaton me abandonó por el Dead by Deadlight\n\n<27 de mayo> - día de gonzalo la no concha de tu madre\n\n<25 de junio> - cumpleaños de Azul\n\n<8 de julio> - día de Lu con pene\n\n<22 de julio> - día fasil\n\n<20 de septiembre> - día del mongo\n\n<4 de noviembre> - Ozuna en DIRT 5\n\n<9 de diciembre> - día del remisero\`\`\`\*\*\*';
const reglas_string = '*\*\`\`\`markdown\n\n#Reglas del servidor\n\n<Regla Numero 1> - Medir más de 1,60 [Nauel es una excepción](Roma también)\n\n<Regla Numero 2> - No ponerla en los ultimos 5 meses [Tener pareja no cuenta](si es menor tampoco)\n\n<Regla Numero 3> - Sacala que me cago\n\n<Regla Numero 4> - En este servidor no hay amor propio ni amor mutuo\n\n<Regla Numero 5> - Gaso escabiado [Los viernes](sabados,domingos,lunes,martes,miercoles,jueves...)\n\n<Regla Numero 6> - @seb#1780 \n\n<Regla Numero 7> - Estudiar programación o economía [Ingeniería también vale](El admin es una excepción)\n\n<Regla Numero 8> - Ser de Mar del Plata [La Patagonia tambien vale](El norte también, y Capital a veces)\n\n<Regla Numero 9> - Loncopué?\n\n<Regla Numero 10> - Habrá chicas que les guste el hentai? 👉👈\n\n<Regla Numero 11> - ESTOY TILTEAO\n\n<Regla Numero 12> - No canten padoru por favor 🙏\n\n<Regla Numero 13> - Mutear a Luca\`\`\`\*\*';


const prompt = 'coño ';
const pattern = /^coño */;
const pattern_no = /(^lol| lol)/;
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready' , () => {
    console.log('Ready!');
});

client.on('message' , message => {
    if(pattern.test(message.content)){
        switch ( message.content ){
            case prompt + 'cum':
                message.channel.send( `Tremenda cummeada de @${message.author.tag}`);
                break;
            case prompt + 'fechas':
                if( message.author.tag === 'Prompt#5377'){
                    message.channel.send(fechas_string);
                }
                break;
            case prompt + 'ozuna':
                    message.channel.send('trabajando');
            
                break;
            case prompt + 'reglas':
                if( message.author.tag === 'Prompt#5377'){
                    message.channel.send(reglas_string);
                }
                break;
            case prompt + 'stroke':

                break;
            case prompt + 'coño':
                message.channel.send('coñito');
                break;   
            default:
                message.channel.send('comando no reconocido'); 
        }
    }
    if(pattern_no.test(message.content)){
        message.reply('no');
    }
});




client.login('NzkxMTc3MzExODAxMTgwMjAw.X-LXSg.ujgBSInNFWuWSsDAPtvxTm9efOo');

