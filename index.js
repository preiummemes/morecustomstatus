var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "FAST DELIVERY!",
assets : {
large_image : "dog_smoking_1024x1024",
large_text : "I like pousssyy"
},
buttons : [{label : "SHOPPY" , url : "https://shoppy.gg/@Novasales"},{label : "DISCORD" , url : "https://discord.gg/Ab39PWx6uJ"}]
}
})
})
client.login({ clientId : "867738895529541632" }).catch(console.error);
