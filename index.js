const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`gen!pls`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === 'gen!hentai') {

        var ImageArray = [
            `https://www.hentaisex.tv/wp-content/uploads/2018/06/1676.jpg`,
            `https://www.animeporn.tube/wp-content/uploads/2018/10/339.jpg`,
            `https://tbib.org//images/3066/606bc1ad4d1d76cc8f83be1b215c80ca40c8e72a.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLk651gW47Ry2B4zC0-VOuhGGmVHbndTx8fjjKXy6iOw919R8YQcTIyfU1LSDqLYmGYWo&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVV7cJWs9iBzmwTzyTLBT7EFpQGNzUBTAVwVmpU9LcvAM_Cc9XBpB9TJIh3XRhc8QpGI&usqp=CAU`,
            `https://31.media.tumblr.com/985d465d6090bfc65f5f5e1014882e06/tumblr_n6xjbsbrMn1rig3vvo1_500.gif`,
            `http://i.imgur.com/0VDtvnX.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCNJyPHmP7JQABAuSqw__esXIvTYnqlpMS4wS_JRGIy-_SuUyQzv9URWLcSey5UGAu1M&usqp=CAU`,
            `http://www.hentairider.com/media/images/3/cartoon-hentai-toons/cartoon-hentai-toons-37068.gif`,
            `https://tbib.org//images/984/c1a5df843ed0d5538539fe8c8b3832a61a03ac16.gif`,
            `https://i.imgur.com/mlJpAwh.gif`,
            `https://69.media.tumblr.com/0ae0e4654f231712141f09afe260061b/tumblr_ncl4xgE98H1tieaolo5_250.gif`,
            `https://31.media.tumblr.com/3b36fe2127f618a3e80dd01f5f10c7ff/tumblr_ol964ydoX41uao6a1o1_500.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5oxRDKU5YGGWGxOBBdLl2OACpomzCnyMVo8pDXuilfDzIzuQ8hTcCvddz5fNLj5Tq08&usqp=CAU`,
            `https://64.media.tumblr.com/1094ce4aa5ea93fda2a56e67887bcd3a/tumblr_o16yjdx1xy1uql0f0o3_400.gifv`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNI21UNBChlEEXITzb9SuLbRaLZe60E5BQP9zJIy_6UEqpuDxLvCUjJXL2uRW4woNFxs&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRTcJKDxmF2vwjKZFDKXfKJLNSC_tjp_vfgiTch-3H3gMRPsMsygD8KY2aXf5_6Xw51Y&usqp=CAU`,
            `https://78.media.tumblr.com/c3341e80874fa8a28286417f327898c8/tumblr_oqa0uttYJm1v401opo1_500.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh0prIPFxjxR91X0hAsnjmVC3xWQVizPezQ9EnqyPWAtpEs6WoT_W3XYdNHLAFAM_dVc&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUYvVd5ZoH5338mApGTwO7ObHxbGVdsWi17Dg5Hygi5MSXOtEO_-KONT2ZQPfGHslwtY&usqp=CAU`,

        ];

        let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]

        message.author.send(`${RandomImage}`);
    };
});

client.on('message', message => {
    if (message.content === 'gen!pls' ) {
      const embed = new MessageEmbed()
      .setTitle('📥 NEED ANY HELP?')
      .setColor('RANDOM')
      .setDescription('**THIS ARE MY CMDS**\n \n**!HELP** ```gen!pls```\n**!PING** \n ```gen!ping```\n**!ANIME**\n ```gen!hentai , gen!boob , gen!nudeboob , gen!opboobs```\n **!REAL** \n```gen!nfsw , gen!boob , gen!bra``` \n ```gen!random``` \n I WILL DM YOU THE IMAGE NOT HERE!!')
      .setImage(`https://mllirhn8nbfr.i.optimole.com/z7QMDKY-w7Nqcrrm/w:auto/h:auto/q:90/https://waveripperofficial.com/wp-content/uploads/2020/12/hot-anime-girls-by-waveripperofficial.jpg`)
     message.reply(embed)
    }
  });

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content === 'gen!nfsw') {

        var ImageArray = [
            `https://media.giphy.com/media/X6LwUQyrhlqcE/giphy.gif`,
            `https://media.giphy.com/media/mPT9ea5bNMRIdX8R18/giphy.gif`,
            `https://media.giphy.com/media/Mwd58ZQ0WmOWkseDbi/giphy.gif`,
            `https://media.giphy.com/media/lbKEVM9KwOTnKBwQFP/giphy.gif`,
            `https://media.giphy.com/media/v90ONn4A6f4Bi/giphy.gif`,
            `https://media.giphy.com/media/GJ6IRhT3V8vm0/giphy.gif`,
            `https://media.giphy.com/media/1gSyupxviVSKh5bKk3/giphy.gif`,
            `https://media.giphy.com/media/ma8qqEBTSGur7c2WTT/giphy.gif`,
            `https://media.giphy.com/media/7vhjVDac8C5EvnACqO/giphy.gif`,
            `https://media.giphy.com/media/7Y1A12nMLnK2J0BlxN/giphy.gif`,
            `https://media.giphy.com/media/BryDlgoAFfNzG/giphy.gif`,
            `https://media.giphy.com/media/Jc6VJEDywkVWM/giphy.gif`,
            `https://media.giphy.com/media/o3tCY9WjNgJX72ILqw/giphy.gif`,
            `https://media.giphy.com/media/8Hqyt7FNSUM82OQ0xa/giphy.gif`,
            `https://media.giphy.com/media/5LhLUJu92dtHfggI6K/giphy.gif`,
            `https://media.giphy.com/media/i4GBggbdEWgkej9kMQ/giphy.gif`,
            `https://media.giphy.com/media/4a4kP1jqEwI5FHZwYs/giphy.gif`,
            `https://media.giphy.com/media/blf2ZqOkDNpeEPVgjW/giphy.gif`,
            `https://media.giphy.com/media/vFWAp5POJelhuTYOUA/giphy.gif`,
            `https://media.giphy.com/media/4ooW6lpLjnFeKLCiQD/giphy.gif`,
        ];

        let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]

        message.author.send(`${RandomImage}`);
    };
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === 'gen!boob') {

        var ImageArray = [
            `https://c.tenor.com/I9yjcAGMizcAAAAM/boobs-anime.gif`,
            `https://c.tenor.com/JxjQISHrSrEAAAAM/boobs-ecchi.gif`,
            `https://c.tenor.com/rJH1bgY-V14AAAAM/anime-boobs.gif`,
            `https://c.tenor.com/sWA5RiksQa4AAAAM/anime-boob.gif`,
            `https://c.tenor.com/VLZDY5R4FA4AAAAM/boobs-just-for-my-eyes.gif`,
            `https://c.tenor.com/fF0cUZqk6okAAAAM/anime-funny-anime-boob.gif`,
            `https://c.tenor.com/NMckrBALJH8AAAAM/kirha.gif`,
            `https://c.tenor.com/H7NGv4lJScMAAAAM/oppai-anime.gif`,
            `https://c.tenor.com/EMnh21qab5cAAAAM/anime-boobs-anime.gif`,
            `https://c.tenor.com/yw5IF1WhLdMAAAAM/high-school-dxd.gif`,
            `https://c.tenor.com/k7fHq1e_lcwAAAAM/redo-of-healer-redo-of-a-healer.gif`,
            `https://c.tenor.com/-nJxZ9B3wHgAAAAM/anime-boobs.gif`,
            `https://c.tenor.com/5-ARUwItxmsAAAAM/anime-tits.gif`,
            `https://c.tenor.com/7i_CpC7tXFgAAAAM/that-time-i-got-reincarnated-as-a-slime-tensura.gif`,
            `https://c.tenor.com/F-m1NoIyUeQAAAAM/anime-boobs.gif`,
            `https://c.tenor.com/OA44pAEp2nQAAAAM/anime-cute.gif`,
            `https://c.tenor.com/kmr7MdW60jQAAAAM/anime-boobs.gif`,
            `https://c.tenor.com/IzVC12EATA4AAAAM/big-anime.gif`,
            `https://c.tenor.com/ox3OPdK9e2YAAAAM/wet-anime.gif`,
            `https://c.tenor.com/Jb_F2aFPQEkAAAAM/grip-death-grip.gif`,
            `https://c.tenor.com/WTPtuWe_TpAAAAAM/taking-order.gif`,
            `https://c.tenor.com/yYpsyTNE8MQAAAAM/hanime-anime.gif`,
            `https://c.tenor.com/c4GTDidm5SoAAAAM/anime-girl.gif`,
            `https://c.tenor.com/F9-AgR_L8EkAAAAM/boobs-anime.gif`,
            `https://c.tenor.com/wtt0wSvH3bwAAAAM/anime-anime-boobs.gif`,
            `https://c.tenor.com/BJVTJAaBo2kAAAAM/high-school-of-the-dead-anime.gif`,
        ];

        let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]

        message.author.send(`${RandomImage}`);
    };
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === 'gen!nudeboob') {

        var ImageArray = [
            `https://i.pinimg.com/originals/4a/84/71/4a847102961936182e2449f083ad29ce.gif`,
            `https://sexdicted.com/wp-content/uploads/2019/07/lesbian_an-8069.gif`,
            `http://xxxpicss.com/xxx/female-anime-girls-porn-gifs-naked-anime-women-sex-gif-sexy-anime-kiss-gif.gif`,
            `https://media.discordapp.net/attachments/955421275919110216/955421285071077426/9k.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421522162516008/OGC.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421563350564864/OGC.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421651619696671/OGC.png?width=740&height=555`,
            `https://media.discordapp.net/attachments/955421275919110216/955421652156571688/OGC.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421988468449330/OGC.png?width=987&height=556`,
            `https://media.discordapp.net/attachments/955421275919110216/955421988724297768/OGC.png`,
            `https://th.bing.com/th/id/OIP.qYhsDieKOcB2opzM0M64SwHaEK?w=325&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
            `https://cdnio.luscious.net/masterfap123/30/lusciousnet_lusciousnet_big-boobs-anime-awesome-hentai-gif-p_867679082.gif`,
            `https://media.discordapp.net/attachments/955421275919110216/955422521069551636/OGC.png?width=987&height=556`,
            `https://www.bing.com/th/id/OGC.920733062bc5774582d753ffc0a65e90?pid=1.7&rurl=http%3a%2f%2f38.media.tumblr.com%2f94e5a522aaf7deed4b5b795b05d63915%2ftumblr_nhqepywVzp1tvu7x7o1_1280.gif&ehk=4evSM5sewtNwHdVD%2bcxbo2Cs2UiM7r7ur%2fb8yav9uoE%3d`,
            `https://th.bing.com/th/id/OIP.dWfaHI7bAu_qguAOoS76CQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
            `https://th.bing.com/th/id/OIP.ucLaTiKn_ZJAk-WMdiTozAHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
            `https://www.bing.com/th/id/OGC.001b43891d6b4333fc797c4cc6abe4f7?pid=1.7&rurl=https%3a%2f%2fthumb-p0.xhcdn.com%2fa%2fw8MCiOiS_f55MgmgUk3AiQ%2f000%2f136%2f481%2f510_1000.gif&ehk=jz7xwbJs3QCl%2fjMuKlw8%2bXInEo0%2bqsNihapdRQjYIFM%3d`,
            `https://www.bing.com/th/id/OGC.4c8e4758d1d2cbd2c641ec0c4cd52abc?pid=1.7&rurl=https%3a%2f%2fcdnio.luscious.net%2fLustfulAngel%2f765%2flusciousnet_lusciousnet_15_627566499.gif&ehk=cqC0%2by6VteAnGTn3wBtNaln%2baL0O%2bsnosKM4rLo98bY%3d`,
            `https://www.bing.com/th/id/OGC.68eb3510cd687e106e18610cff649b3e?pid=1.7&rurl=https%3a%2f%2fthumb-p0.xhcdn.com%2fa%2fxfyy8Qmls2CtEIFw0aS6Sg%2f000%2f157%2f351%2f190_1000.gif&ehk=%2bclYN5DVvGNQtVfYRagCA1Jq1H7L0w1gzyLwcUTrqBs%3d`,
            `https://www.bing.com/th/id/OGC.3c0169209f1b5391aa9b069a0b6d4293?pid=1.7&rurl=https%3a%2f%2f33.media.tumblr.com%2f399984dc6081ce5e423a5c4dccb77a27%2ftumblr_n9pdtiB6FN1tcvn9fo3_500.gif&ehk=6%2b%2f93csqmy7IfaQzBrSG8r0WPM9umEOWmHB3fetwtk8%3d`,
            `https://www.bing.com/th/id/OGC.5dd9c32f449ee8c76efbe33c982d3054?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2fac4b09d650c4512e12c8e9edbad7764f%2ftumblr_n72smkCL5q1tv92xoo1_400.gifv&ehk=EL3ERTUHCetVLPxHbxMvqQQ6%2bay0tPycEaao5eyALWo%3d`,
            `https://www.bing.com/th/id/OGC.7303644c5a0d3983d4628c9765640d52?pid=1.7&rurl=http%3a%2f%2f78.media.tumblr.com%2fd42e162b0314d1b0f0d2838585a00106%2ftumblr_n9bp6sqv9Q1rwixf9o1_500.gif&ehk=fAFtB8fowJGwjpqK5WM5jFIu8iDCD97KJCLogwZQ7m4%3d`,
            `https://www.bing.com/th/id/OGC.faf67fae0a30ce3aba7524776b0801b2?pid=1.7&rurl=http%3a%2f%2fahegao.online%2fwp-content%2fuploads%2f2016%2f08%2fezgif-2859086892.gif&ehk=%2bIIdcKR5NfiLr2ANuFJA9P796RN8eRzwcZ0vDkV5oi8%3d`,
            `https://www.bing.com/th/id/OGC.0db113acefbe0b3f2b350875031d5bbf?pid=1.7&rurl=https%3a%2f%2fcdnio.luscious.net%2f477%2flusciousnet_09_80245302.gif&ehk=gfmllRfdq1J2AxM%2bURPGtaFVGMyxZDO%2fLnrNqilAM2g%3d`,
            `https://www.bing.com/th/id/OGC.82eb31e6a0f5794ff57cceb5074fe136?pid=1.7&rurl=https%3a%2f%2f66.media.tumblr.com%2fa57acbee9df39ed92eb8927fc06f5f2c%2ftumblr_npscuhLSrf1tba6omo1_400.gif&ehk=cqFfLSVEoHfSvD8e8fGH2jmAPfiC5Zw5PTJGizqETeo%3d`,
            `https://www.bing.com/images/search?view=detailV2&ccid=nZ2mFsdf&id=4E0A1E8C7C9FAFBF014F2590AC79BDBC11A5FA71&thid=OIP.nZ2mFsdfUhnY9xARxYvzFAAAAA&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f2c1bee95f302173e9fd20f58cb0201f3%2ftumblr_n4q9gbnflG1t2codgo1_400.gif&exph=281&expw=400&q=Huge+Anime+Boobs+Naked+Gifs&simid=608001738257608880&FORM=IRPRST&ck=C7E580F6EE1BC1789F903F1D29AAFC7E&selectedIndex=134&adtq=1`,
            `https://www.bing.com/images/search?view=detailV2&ccid=mx9h6SmG&id=7CFCFE2CA51698B7CF916C8D35742C3D9B9F3215&thid=OIP.mx9h6SmGNymJ2wTB5GQWSAAAAA&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f22658c15b94e417cd09bfedc03b441a7%2ftumblr_onjw63KS4Q1sg8uefo4_400.gif&exph=222&expw=400&q=Huge+Anime+Boobs+Naked+Gifs&simid=608002485572357691&FORM=IRPRST&ck=ACF084E214B07940E6889301621A588B&selectedIndex=122&adtq=1`,
            `https://www.bing.com/images/search?view=detailV2&ccid=oHRYZNG%2b&id=B4CA173CA0A467578B78FBE66313CBEF59556485&thid=OIP.oHRYZNG-ECuJlyoNANQYwgHaEK&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f9e0144e0804aec66b0ec9adaa6031201%2ftumblr_oc0tz7Uner1v2hfg0o10_640.gif&exph=360&expw=640&q=Huge+Anime+Boobs+Naked+Gifs&simid=608020876628067839&FORM=IRPRST&ck=4DFC5D9293B4B6947A16D4E8BB8534D1&selectedIndex=113&adtq=1`,
            `https://www.bing.com/images/search?view=detailV2&ccid=quK6TBVO&id=C2F94206D75BC0427B547FFD01183FAEB3C65517&thid=OIP.quK6TBVOcajdUxk8I89F_QHaE7&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f5e4cc5dcb2d509d9d41d74dea770b380%2ftumblr_nwhvyfd5gq1rbi7o1o1_500.gif&exph=333&expw=500&q=Huge+Anime+Boobs+Naked+Gifs&simid=608016190823876824&FORM=IRPRST&ck=18B831685DEF8434B748590A8114BA01&selectedIndex=125&adtq=1`,
        ];

        let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]

        message.author.send(`${RandomImage}`);
    };
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === 'gen!random') {

        var ImageArray = [
            `https://c.tenor.com/I9yjcAGMizcAAAAM/boobs-anime.gif`,
            `https://c.tenor.com/JxjQISHrSrEAAAAM/boobs-ecchi.gif`,
            `https://c.tenor.com/rJH1bgY-V14AAAAM/anime-boobs.gif`,
            `https://c.tenor.com/sWA5RiksQa4AAAAM/anime-boob.gif`,
            `https://c.tenor.com/VLZDY5R4FA4AAAAM/boobs-just-for-my-eyes.gif`,
            `https://c.tenor.com/fF0cUZqk6okAAAAM/anime-funny-anime-boob.gif`,
            `https://c.tenor.com/NMckrBALJH8AAAAM/kirha.gif`,
            `https://c.tenor.com/H7NGv4lJScMAAAAM/oppai-anime.gif`,
            `https://c.tenor.com/EMnh21qab5cAAAAM/anime-boobs-anime.gif`,
            `https://c.tenor.com/yw5IF1WhLdMAAAAM/high-school-dxd.gif`,
            `https://c.tenor.com/k7fHq1e_lcwAAAAM/redo-of-healer-redo-of-a-healer.gif`,
            `https://c.tenor.com/-nJxZ9B3wHgAAAAM/anime-boobs.gif`,
            `https://c.tenor.com/5-ARUwItxmsAAAAM/anime-tits.gif`,
            `https://c.tenor.com/7i_CpC7tXFgAAAAM/that-time-i-got-reincarnated-as-a-slime-tensura.gif`,
            `https://c.tenor.com/F-m1NoIyUeQAAAAM/anime-boobs.gif`,
            `https://c.tenor.com/OA44pAEp2nQAAAAM/anime-cute.gif`,
            `https://c.tenor.com/kmr7MdW60jQAAAAM/anime-boobs.gif`,
            `https://c.tenor.com/IzVC12EATA4AAAAM/big-anime.gif`,
            `https://c.tenor.com/ox3OPdK9e2YAAAAM/wet-anime.gif`,
            `https://c.tenor.com/Jb_F2aFPQEkAAAAM/grip-death-grip.gif`,
            `https://c.tenor.com/WTPtuWe_TpAAAAAM/taking-order.gif`,
            `https://c.tenor.com/yYpsyTNE8MQAAAAM/hanime-anime.gif`,
            `https://c.tenor.com/c4GTDidm5SoAAAAM/anime-girl.gif`,
            `https://c.tenor.com/F9-AgR_L8EkAAAAM/boobs-anime.gif`,
            `https://c.tenor.com/wtt0wSvH3bwAAAAM/anime-anime-boobs.gif`,
            `https://c.tenor.com/BJVTJAaBo2kAAAAM/high-school-of-the-dead-anime.gif`,
            `https://i.pinimg.com/originals/4a/84/71/4a847102961936182e2449f083ad29ce.gif`,
            `https://sexdicted.com/wp-content/uploads/2019/07/lesbian_an-8069.gif`,
            `http://xxxpicss.com/xxx/female-anime-girls-porn-gifs-naked-anime-women-sex-gif-sexy-anime-kiss-gif.gif`,
            `https://media.discordapp.net/attachments/955421275919110216/955421285071077426/9k.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421522162516008/OGC.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421563350564864/OGC.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421651619696671/OGC.png?width=740&height=555`,
            `https://media.discordapp.net/attachments/955421275919110216/955421652156571688/OGC.png`,
            `https://media.discordapp.net/attachments/955421275919110216/955421988468449330/OGC.png?width=987&height=556`,
            `https://media.discordapp.net/attachments/955421275919110216/955421988724297768/OGC.png`,
            `https://th.bing.com/th/id/OIP.qYhsDieKOcB2opzM0M64SwHaEK?w=325&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
            `https://cdnio.luscious.net/masterfap123/30/lusciousnet_lusciousnet_big-boobs-anime-awesome-hentai-gif-p_867679082.gif`,
            `https://media.discordapp.net/attachments/955421275919110216/955422521069551636/OGC.png?width=987&height=556`,
            `https://www.bing.com/th/id/OGC.920733062bc5774582d753ffc0a65e90?pid=1.7&rurl=http%3a%2f%2f38.media.tumblr.com%2f94e5a522aaf7deed4b5b795b05d63915%2ftumblr_nhqepywVzp1tvu7x7o1_1280.gif&ehk=4evSM5sewtNwHdVD%2bcxbo2Cs2UiM7r7ur%2fb8yav9uoE%3d`,
            `https://th.bing.com/th/id/OIP.dWfaHI7bAu_qguAOoS76CQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
            `https://th.bing.com/th/id/OIP.ucLaTiKn_ZJAk-WMdiTozAHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
            `https://www.bing.com/th/id/OGC.001b43891d6b4333fc797c4cc6abe4f7?pid=1.7&rurl=https%3a%2f%2fthumb-p0.xhcdn.com%2fa%2fw8MCiOiS_f55MgmgUk3AiQ%2f000%2f136%2f481%2f510_1000.gif&ehk=jz7xwbJs3QCl%2fjMuKlw8%2bXInEo0%2bqsNihapdRQjYIFM%3d`,
            `https://www.bing.com/th/id/OGC.4c8e4758d1d2cbd2c641ec0c4cd52abc?pid=1.7&rurl=https%3a%2f%2fcdnio.luscious.net%2fLustfulAngel%2f765%2flusciousnet_lusciousnet_15_627566499.gif&ehk=cqC0%2by6VteAnGTn3wBtNaln%2baL0O%2bsnosKM4rLo98bY%3d`,
            `https://www.bing.com/th/id/OGC.68eb3510cd687e106e18610cff649b3e?pid=1.7&rurl=https%3a%2f%2fthumb-p0.xhcdn.com%2fa%2fxfyy8Qmls2CtEIFw0aS6Sg%2f000%2f157%2f351%2f190_1000.gif&ehk=%2bclYN5DVvGNQtVfYRagCA1Jq1H7L0w1gzyLwcUTrqBs%3d`,
            `https://www.bing.com/th/id/OGC.3c0169209f1b5391aa9b069a0b6d4293?pid=1.7&rurl=https%3a%2f%2f33.media.tumblr.com%2f399984dc6081ce5e423a5c4dccb77a27%2ftumblr_n9pdtiB6FN1tcvn9fo3_500.gif&ehk=6%2b%2f93csqmy7IfaQzBrSG8r0WPM9umEOWmHB3fetwtk8%3d`,
            `https://www.bing.com/th/id/OGC.5dd9c32f449ee8c76efbe33c982d3054?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2fac4b09d650c4512e12c8e9edbad7764f%2ftumblr_n72smkCL5q1tv92xoo1_400.gifv&ehk=EL3ERTUHCetVLPxHbxMvqQQ6%2bay0tPycEaao5eyALWo%3d`,
            `https://www.bing.com/th/id/OGC.7303644c5a0d3983d4628c9765640d52?pid=1.7&rurl=http%3a%2f%2f78.media.tumblr.com%2fd42e162b0314d1b0f0d2838585a00106%2ftumblr_n9bp6sqv9Q1rwixf9o1_500.gif&ehk=fAFtB8fowJGwjpqK5WM5jFIu8iDCD97KJCLogwZQ7m4%3d`,
            `https://www.bing.com/th/id/OGC.faf67fae0a30ce3aba7524776b0801b2?pid=1.7&rurl=http%3a%2f%2fahegao.online%2fwp-content%2fuploads%2f2016%2f08%2fezgif-2859086892.gif&ehk=%2bIIdcKR5NfiLr2ANuFJA9P796RN8eRzwcZ0vDkV5oi8%3d`,
            `https://www.bing.com/th/id/OGC.0db113acefbe0b3f2b350875031d5bbf?pid=1.7&rurl=https%3a%2f%2fcdnio.luscious.net%2f477%2flusciousnet_09_80245302.gif&ehk=gfmllRfdq1J2AxM%2bURPGtaFVGMyxZDO%2fLnrNqilAM2g%3d`,
            `https://www.bing.com/th/id/OGC.82eb31e6a0f5794ff57cceb5074fe136?pid=1.7&rurl=https%3a%2f%2f66.media.tumblr.com%2fa57acbee9df39ed92eb8927fc06f5f2c%2ftumblr_npscuhLSrf1tba6omo1_400.gif&ehk=cqFfLSVEoHfSvD8e8fGH2jmAPfiC5Zw5PTJGizqETeo%3d`,
            `https://www.bing.com/images/search?view=detailV2&ccid=nZ2mFsdf&id=4E0A1E8C7C9FAFBF014F2590AC79BDBC11A5FA71&thid=OIP.nZ2mFsdfUhnY9xARxYvzFAAAAA&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f2c1bee95f302173e9fd20f58cb0201f3%2ftumblr_n4q9gbnflG1t2codgo1_400.gif&exph=281&expw=400&q=Huge+Anime+Boobs+Naked+Gifs&simid=608001738257608880&FORM=IRPRST&ck=C7E580F6EE1BC1789F903F1D29AAFC7E&selectedIndex=134&adtq=1`,
            `https://www.bing.com/images/search?view=detailV2&ccid=mx9h6SmG&id=7CFCFE2CA51698B7CF916C8D35742C3D9B9F3215&thid=OIP.mx9h6SmGNymJ2wTB5GQWSAAAAA&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f22658c15b94e417cd09bfedc03b441a7%2ftumblr_onjw63KS4Q1sg8uefo4_400.gif&exph=222&expw=400&q=Huge+Anime+Boobs+Naked+Gifs&simid=608002485572357691&FORM=IRPRST&ck=ACF084E214B07940E6889301621A588B&selectedIndex=122&adtq=1`,
            `https://www.bing.com/images/search?view=detailV2&ccid=oHRYZNG%2b&id=B4CA173CA0A467578B78FBE66313CBEF59556485&thid=OIP.oHRYZNG-ECuJlyoNANQYwgHaEK&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f9e0144e0804aec66b0ec9adaa6031201%2ftumblr_oc0tz7Uner1v2hfg0o10_640.gif&exph=360&expw=640&q=Huge+Anime+Boobs+Naked+Gifs&simid=608020876628067839&FORM=IRPRST&ck=4DFC5D9293B4B6947A16D4E8BB8534D1&selectedIndex=113&adtq=1`,
            `https://www.bing.com/images/search?view=detailV2&ccid=quK6TBVO&id=C2F94206D75BC0427B547FFD01183FAEB3C65517&thid=OIP.quK6TBVOcajdUxk8I89F_QHaE7&mediaurl=https%3a%2f%2f66.media.tumblr.com%2f5e4cc5dcb2d509d9d41d74dea770b380%2ftumblr_nwhvyfd5gq1rbi7o1o1_500.gif&exph=333&expw=500&q=Huge+Anime+Boobs+Naked+Gifs&simid=608016190823876824&FORM=IRPRST&ck=18B831685DEF8434B748590A8114BA01&selectedIndex=125&adtq=1`,
            `https://www.hentaisex.tv/wp-content/uploads/2018/06/1676.jpg`,
            `https://www.animeporn.tube/wp-content/uploads/2018/10/339.jpg`,
            `https://tbib.org//images/3066/606bc1ad4d1d76cc8f83be1b215c80ca40c8e72a.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLk651gW47Ry2B4zC0-VOuhGGmVHbndTx8fjjKXy6iOw919R8YQcTIyfU1LSDqLYmGYWo&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVV7cJWs9iBzmwTzyTLBT7EFpQGNzUBTAVwVmpU9LcvAM_Cc9XBpB9TJIh3XRhc8QpGI&usqp=CAU`,
            `https://31.media.tumblr.com/985d465d6090bfc65f5f5e1014882e06/tumblr_n6xjbsbrMn1rig3vvo1_500.gif`,
            `http://i.imgur.com/0VDtvnX.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCNJyPHmP7JQABAuSqw__esXIvTYnqlpMS4wS_JRGIy-_SuUyQzv9URWLcSey5UGAu1M&usqp=CAU`,
            `http://www.hentairider.com/media/images/3/cartoon-hentai-toons/cartoon-hentai-toons-37068.gif`,
            `https://tbib.org//images/984/c1a5df843ed0d5538539fe8c8b3832a61a03ac16.gif`,
            `https://i.imgur.com/mlJpAwh.gif`,
            `https://69.media.tumblr.com/0ae0e4654f231712141f09afe260061b/tumblr_ncl4xgE98H1tieaolo5_250.gif`,
            `https://31.media.tumblr.com/3b36fe2127f618a3e80dd01f5f10c7ff/tumblr_ol964ydoX41uao6a1o1_500.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5oxRDKU5YGGWGxOBBdLl2OACpomzCnyMVo8pDXuilfDzIzuQ8hTcCvddz5fNLj5Tq08&usqp=CAU`,
            `https://64.media.tumblr.com/1094ce4aa5ea93fda2a56e67887bcd3a/tumblr_o16yjdx1xy1uql0f0o3_400.gifv`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNI21UNBChlEEXITzb9SuLbRaLZe60E5BQP9zJIy_6UEqpuDxLvCUjJXL2uRW4woNFxs&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRTcJKDxmF2vwjKZFDKXfKJLNSC_tjp_vfgiTch-3H3gMRPsMsygD8KY2aXf5_6Xw51Y&usqp=CAU`,
            `https://78.media.tumblr.com/c3341e80874fa8a28286417f327898c8/tumblr_oqa0uttYJm1v401opo1_500.gif`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh0prIPFxjxR91X0hAsnjmVC3xWQVizPezQ9EnqyPWAtpEs6WoT_W3XYdNHLAFAM_dVc&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUYvVd5ZoH5338mApGTwO7ObHxbGVdsWi17Dg5Hygi5MSXOtEO_-KONT2ZQPfGHslwtY&usqp=CAU`,
        ];

        let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]

        message.author.send(`${RandomImage}`);
    };
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === 'gen!opboobs') {

        var ImageArray = [
            `https://images-ext-2.discordapp.net/external/c6FoAhMCEIq5sg-Cf1p9y5ykEy5iN7d24iaBEnjUF-Q/https/nekocdn.com/images/2MDTw36i.gif`,
            `https://images-ext-1.discordapp.net/external/2rLnNKrMdbDIHp42YLegN_B6HDeMqYNIVjmTN6W8cog/https/nekocdn.com/images/KbKtuOr6.gif`,
            `https://images-ext-1.discordapp.net/external/BO4zEA-u07L2nuZsInfWiDg8yXlmvtdulIRuT4OYCsM/https/nekocdn.com/images/YFs3THnh.gif`,
            `https://images-ext-1.discordapp.net/external/ZU38YR3UA6PSCg_snVLK43DCdpGrefzMlKflVLdP4gg/https/nekocdn.com/images/a6QIw_JH.gif`,
            `https://images-ext-2.discordapp.net/external/ap3ddKUfCm3iDXaTc1kZxKxl6sKsZL-pYiguEe1PCUc/https/nekocdn.com/images/9p4UiRX8.gif`,
            `https://images-ext-2.discordapp.net/external/x0onlF0kjg22AiLZlIqH3aWgYN-d7CGAX0WRhUmWMuQ/https/nekocdn.com/images/E0jZUid4.gif`,
            `https://images-ext-1.discordapp.net/external/44oBb1yEjcBvA9IuHeYEafCy75drPS9qX-oqA3aVc_8/https/nekocdn.com/images/6RFfLyp4.gif`,
            `https://images-ext-1.discordapp.net/external/Y39QekQnjteeKn4Evu1C-TdIkdlHWsff-p9cZ66Cg40/https/nekocdn.com/images/ELy9tSPr.gif`,
            `https://images-ext-2.discordapp.net/external/EtQq_bo5KgijHqupcWSgSPlvrF7U_r2uIP7KSXac8Ec/https/nekocdn.com/images/s7hdWvnt.gif`,
            `https://images-ext-2.discordapp.net/external/yB251uA9KkEklgKe8pjuqgaO5ldhD0-GKufsAFdx380/https/nekocdn.com/images/g22wnFa4.gif`,
            `https://images-ext-1.discordapp.net/external/V3bs1osIPQs92IYHbThpKpTH8NR20Kkvtcd1CZvB7j4/https/nekocdn.com/images/IU3FvT27.gif`,
            `https://images-ext-1.discordapp.net/external/44oBb1yEjcBvA9IuHeYEafCy75drPS9qX-oqA3aVc_8/https/nekocdn.com/images/6RFfLyp4.gif`,
            `https://images-ext-2.discordapp.net/external/Vo32_gUINS4ZbC3kwi7rA8ljitdNZNbH3ZMpbCwSd5s/https/nekocdn.com/images/HY7TvT9w.gif`,
            `https://images-ext-2.discordapp.net/external/qsUdNOFXbIndDQDSiwno6DlF2-57KSJDxw2g7ecYLfs/https/nekocdn.com/images/zKR4F0AA.gif`,
            `https://images-ext-2.discordapp.net/external/H7xKGEaN9pnkBQy3vOOSH8c9rwnbpiMy25qZSI6aCVM/https/nekocdn.com/images/siwz_ABp.gif`,
            `https://images-ext-2.discordapp.net/external/pQVozO1kiiUhEigNeYMv2zL30zRXcD5Tlwl_e7ciMy4/https/nekocdn.com/images/qNgpsdB-.gif?width=462&height=499`,
            `https://images-ext-1.discordapp.net/external/WQQd-b-_PYuzU2tjovEpFRbzb2Z5IUB7qkx_fYpxCqM/https/nekocdn.com/images/NYgw4n4D.gif`,
            `https://images-ext-1.discordapp.net/external/7zBKyZ9bZzFjLXRBoFHOt8CuMqpPYhY4Xj7iUStPG1o/https/nekocdn.com/images/MMqHGi1h.gif`,
        ];

        let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]

        message.author.send(`${RandomImage}`);
    };

    client.on('message', message => {
        if (!message.guild) return;
        if (message.content === 'gen!bra') {
    
            var ImageArray = [
                `https://image.clovia.com/media/clovia-images/images/275x412/clovia-picture-cotton-non-padded-wirefree-lacy-full-cup-bra-blue-1-727002.jpg`,
                `https://i.pinimg.com/736x/b6/5c/50/b65c50aae10b1d1cc5d753ab9a13a950.jpg`,
                `https://rukminim2.flixcart.com/image/416/416/j1fb98w0/poster/q/k/z/medium-bk3142-bikrikendra-hot-sunny-leone-poster-4-poster-original-imaes7pmwqfqecgj.jpeg?q=70`,
                `https://i.pinimg.com/474x/7b/d1/14/7bd1148713cbf8c02fe079c251f5bafb.jpg`,
                `https://i.pinimg.com/564x/cc/8b/0b/cc8b0bbe5b8e775f71cd15191925f585--khalifa-college-girls.jpg`,
                `https://www.india.com/wp-content/uploads/2022/02/miakhalifa-lede.jpeg`,
                `https://img.mensxp.com/media/content/2017/Jan/mia-khalifa-trolls-fan-who-gets-her-face-inked-on-his-leg-500-1-1484722356.jpg`,
                `https://content.jjupdates.com/Angela_White-Bra_Busters_8/Angela-White-Jules-Jordan-Bra-Busters-8-2017-01-06-055.jpg`,
                `https://www.mypornstarbook.net/pornstars/a/angela_white/gallery137/images/01.jpg`,
                `https://pic.dezyred.com/pictures/ogkInKDb4TCN4HnTwrspx2ZyzVIlpfUa9zudlQYk.jpeg`,
                `https://i.pinimg.com/originals/d9/5a/67/d95a67a988ed91812d40ef3a94110ccf.jpg`,
                `https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/1b/f6/33/1bf63310c2ae5838556741d66c8bad37/1bf63310c2ae5838556741d66c8bad37.23.jpg`,
            ];
    
            let RandomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)]
    
            message.author.send(`${RandomImage}`);
        };
    });

client.login(token)
