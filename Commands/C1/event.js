module.exports ={
name:"event",
category: "misc",
description: "Hosts an event.",
usage: "+event <type>", 
aliases:["party"],
code:`
 $onlyif[$message!=;> :information_source: **Choose event to host - \`Youtube\` | \`Poker\` | \`Betrayal\` | \`Chess\` | \`Fishington\` | \`Lettertile\` | \`Wordsnack\` | \`Doodlecrew\` | \`Spellcast\` | \`Awkword\` | \`Puttyparty\`.**]

$if[$message==Youtube;Error]
 Starting Youtube $djseval[
 const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
$endif
$if[$message==Poker;Error]
Starting Poker $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'poker').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
$endif
$if[$message==Betrayal;Error]
Starting Betrayal $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'betrayal').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
$if[$message==Chess;Error]
Starting Chess $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'chess').then(async invite => {
 return message.channel.send(invite.code);
 });
 ] 
 $endif
 $if[$message==Fishington;Error]
 Starting Fishington $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'fishing').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Lettertile;Error]
Starting Letter tile $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'lettertile').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Wordsnack;Error]
Starting Word snack $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'wordsnack').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Doodlecrew;Error]
Starting Doodle crew $djseval[
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'doodlecrew').then(async invite => {
 return message.channel.send(invite.code);
 });
 ] 
 $endif
 $if[$message==Spellcast;error]
Starting Spell cast $djseval[
const aoijs = require('aoi.js');
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'spellcast').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Awkword;Error]
Starting Awkword $djseval[
const aoijs = require('aoi.js');
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'awkword').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Puttyparty;error]
Starting putty party $djseval[
const aoijs = require('aoi.js');
const client = new aoijs.Bot({
   token: process.env['CT1']
   intents: "all"
 })
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'puttyparty').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif`
}
