module.exports ={
name:"cinfo",
category: "help",
description: "Returns the command description and usage.",
usage: "+help <command>", 
aliases:["help","commandinfo"],
code:`$author[1;Information about "$message[1]" command ;https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png]
$title[1;Command - $message[1]]
$addField[1;Description;$commandInfo[$message[1];description];no]
$addField[1;Usage;$commandInfo[$message[1];usage];yes]
$addField[1;Aliases;$commandInfo[$message[1];aliases];yes]
$addField[1;Category;$commandInfo[$message[1];category];yes]
$footer[Requested by $username[$authorID]]
$color[000000]
$onlyIf[$message[1]!=;]`
}
