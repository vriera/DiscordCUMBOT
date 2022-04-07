console.log("cum");

const TOKEN = 'TOKENHERE'
import { metaphone } from 'metaphone';
import{ randomInt }  from 'crypto';
import { Client, Intents, MessageAttachment } from 'discord.js';
import { handle_cum_commands } from './commands.js';
import { measureMemory } from 'vm';
import { agregar_cumple } from './cumpleaños.js';
import { mandar_cumpleaños } from './cumpleaños.js';
import { checkNumero } from './numeros.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] , disableEveryone: false });

const pattern = /^cum */;
const pattern_a = /^cum a */;
const pattern_no = /(^lol| lol)/;
const pattern_k = /(^$k)/;
const comandos = 'El prefijo para llamar al bot es cum\n Los comandos disponibles en el kumbot son:\n\t-cum : cumeas\n\t-papi: te dice si sos mi papi\n\tstroke: cummeo mucho\n\t-no puedo parar: te da la razon xq';
const pattern_2 = /cum/;



const drogas_message = ["si" , "dame" , "quiero" , "venga la droga" , "DRAGS"];





client.on('message' , async message => {
    message.content = message.content.toLowerCase();
    if(pattern_a.test(message.content) && message.author.id !== '885480631470010390'){
        message.react("💦");
        handle_cum_a(message);
    }else if(pattern.test(message.content) && message.author.id !== '885480631470010390'){
        message.react("💦");
        handle_cum_commands(message);
    }else if(pattern_2.test(message.content)){
        message.react("💦");
        let num = randomInt(60 , 80);
        console.log(num);
        if(num === 69  ){
            message.reply('https://ih1.redbubble.net/image.832929109.6327/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg');
        }
    }
    if(/^cumpleaños */.test(message.content) && message.content.split(" ").length == 3 ){
       // try{
        agregar_cumple(message);
       // }catch(e){
        //    console.log("oopsy doopsy");
        //}
    }
    if(pattern_no.test(message.content)){
        message.reply('no');
    }
    if(pattern_k.test(message.content)){
        message.reply('kakeras');
    }
    if ( /2011|chota|pito|pene|dick|luca/.test(message.content.toLowerCase())){
        message.react("2️⃣").then(message.react("0️⃣")).then(message.react("1️⃣")).then(message.react("🇮"));
    }

    if (/drogas|droga|drugs|drug|marihuana|falopa|brownie|weed/.test(message.content.toLowerCase()) && message.author.id !== '885480631470010390'){
        message.reply(drogas_message[randomInt(0 , drogas_message.length -1 )]);
    }
    let tokens = message.content.split(" ")
    let hit = false;
    let ans;
    for ( let i = 0 ; i < tokens.length ; i++ ){
        if(metaphone(tokens[i]) === metaphone('cum') && message.author.id !== '885480631470010390' ){            
            message.react("💦");
            break;
        }
        ans = checkNumero(tokens[i]);
        if (ans.hit){
            message.reply(ans.joke);
        }
        hit = hit | ans.hit;
    }
    if ( hit ){
        message.reply('te falta calle');
    }
    if ( message.guildId === '427157513234808842'){
        let num =randomInt(1 , 100 );
        console.log(num + ' shiny');
        if ( num === 69 ){
                message.reply('salió shiny');
                message.reply('https://cdn.discordapp.com/attachments/673769041541726256/885729613609861182/unknown.png');
        }
    }
});

client.once('ready' , () => {
    console.log('Ready!');  
    setTimeout(function(){ // in leftToEight() milliseconds run this:
        sendMessage(); // send the message once
        let dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds)
    }, leftToHour(9));
    //mandar_cumpleaños(client);
});








async function handle_cum_a( message){
    if( message.content === 'cum a todos'){
        let all = await message.guild.roles.fetch("@everyone");
        message.channel.send(`@everyone tomen su cum`)
    }else{
    let num = randomInt(60 , 80);
    console.log(num);
        if(num === 69  ){
            message.reply('https://ih1.redbubble.net/image.832929109.6327/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg');
        }
    console.log(`cummeando a alguien`);
    console.log(message.mentions);
    console.log(message.mentions.users);
    let usuarios = message.mentions.users
    usuarios.forEach(user => {
        if(user.id === message.author.id ){
          message.reply(`La autocum`);
        }else if( user.id === '438511711931203587' ){
            message.channel.send(`Imposible cummear a <@${user.id}>, zoe es muy pura`);
        }else {
        message.channel.send(`Te han cummeado <@${user.id}>`);
        }
    }
   ); }
};



function leftToHour(hora){
    let d = new Date();
    let date2 = new Date();
    console.log(d.getTime());
    date2.setHours(hora);
    date2.setMinutes(8);
    if ( d.getHours() > hora ){
        date2.setDate(date2.getDate() + 1 );
    }
    console.log(date2.getTime());
    return date2.getTime() - d.getTime();
}


function sendMessage(){
    console.log("xd");
   let guild = client.guilds.cache.get('885526769141178399');
    if(guild && guild.channels.cache.get('885526769141178402')){
        guild.channels.cache.get('885526769141178402').send("Feliz cum");
    }
}

function conectarse(message){
    const { voice } = message.member;
    if ( voice.channelID ){
        voice.channel.join();
    }else{
        message.reply('Metete a algun lado y volveme a llamar');
    }
}

client.on("guildMemberSpeaking", function(member, speaking){
    member.Client.channels.get(885526769141178402).send("a");
});



client.login(TOKEN);

