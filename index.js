const { client, RichEmbed } =
require('discord.js');

const client = new client();

client.on('ready', () => {
	console.log('Bot now connected!');
	console.log('Logged in as', client.user.tag)
	client.user.setStatus('online'); // online, idle, invisible, dnd

console.log('Bot status: ',client.user.presence.status);

//Bot sending a Message to a text channel called test

const testChannel = client.channels.find(x => x.name === 'test')
		console.log(testChannel)
		// client.channels.find(c => c.name === 'test').send('Hello Server!')
    
 
