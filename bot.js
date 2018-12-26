const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.on("message", message => {
            if(message.content.startsWith("*تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل **' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة **' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل ستتفاعل فى السيرفر ماين كرافت ؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith("*روم1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("*قبول")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("*رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("*روم2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم القبول والرفض بنجاح**")
            }
})

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('***خرج من السيرفر***')
.addField('**الاسم**',`[ ${member} ]`)
.addField('**عدد الاعضاء**',`[ ${member.guild.memberCount} ]`,true)
.setColor('Random')
   
   var channel =member.guild.channels.find('name', 'welcome-‹‹')
   if (!channel) return;
         channel.send({embed : embed});
 
});

    client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`:rose:  ولكم نورت السيرفر :rose:
        :crown: اسم العضو  ${member}:crown:  
        انت العضو رقم ${member.guild.memberCount} `)
    }).catch(console.error)
})
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});
client.on("message", (message) => {
   if (message.content.startsWith("*new")) {     
        const reason = message.content.split(" ").slice(1).join(" ");     
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("*close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`*confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '*confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })   
                    .then((collected) => {
                        message.channel.delete();
                    })    
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});




client.on("message", message => {

            if (message.content.startsWith(prefix + "bc4")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message',async msg => {//Toxic Codes
  var p = "-";//Toxic Codes
  if(msg.content.startsWith(p + "setuser")) {//Toxic Codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **ليس لديك صلاحيه**');//Toxic Codes
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');//Toxic Codes
  msg.guild.createChannel(`Members : ◤ → ${client.users.size} ← ◢` , 'voice').then(time => {//Toxic Codes
    });//Toxic Codes

  }
 
});










client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
