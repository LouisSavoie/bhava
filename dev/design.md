Create a combat by inviting or pulling, start the combat to begin attacking, casting, or using abilities, combat ends when half the users in the combat attempt to flee or all but one is dead. If you die you are removed from combat and can respawn.

<option> = not required
*<option> = required
(*)<option> = required for some subcommands

(create a new respond module to shorten and DRY command res methods and other modules such as checks)
(create new checks inCombat and inStartedCombat for commands to deny if they are true, like preventing moving from the combat zone after accepting an invite or pulling)
(create some kind of death penalty)

/combat
command file contains command and response as normal, but sub commands call execute of sub command files

/combat info <user> (displays info about a combat that the mentioned user is in)

(this functionality could be put into /combat invite & /pull, does not need to exist on it's own)
/combat new (creates a new combat to invite other users to)
spawn check
Server check
check if user is already in a combat, if so, respond ephemeral and end (create a new check, inCombatCheck(user, server) returns false if not in a combat, returns the combat key if in combat)
else, add new combat to Server with user as owner and combatant and respond ephemeral prompting to invite or pull

/combat invite *<user> (invites user to a combat)
(reference /combat new and add that functionality to this command)
spawn check
Server check
check if user is already in a combat (inCombatCheck), if so, add mentioned user to invited in combat and respond mentioning the mentioned user prompting to move to the combats zone and /acceptcombat mentioning the owner

/combat accept *<user> (accepts an invite to combat)
spawn check
Server check
check if user is in the zone where the combat is (create new check for this)
check if user is already in a combat (inCombatCheck), if so, respond ephemeral return combat key, if not add user to combat respond mentioning the ower that the user accepted

/pull *<monster> (pulls a monster into combat from the background of a zone)
(reference /combat new and add that functionality to this command)
spawn check
Server check
check if monster is in the zone (create new check for this)
check if user is already in a combat, if so, add monster to combatants if user is owner (create a new check, isCombatOwnerCheck(user, server) returns false if not in a combat, returns the combat key if in combat and is owner, respond ephemeral and return 'not owner' if in combat but not owner)
else, add new combat to Server with user as owner and combatant and monster as combatant

/combat start (starts the owners combat, allowing for attacking, casting, abilities, rolling initiative and determining turn order, and disallowing for other actions such as crafting and gathering)

/attack *<target> (user tries to attack the target)

/cast 'spell' (*)<target> (user tries to cast a spell, some spells with a friendly or hostile target)

/abilities 'ability' (user tries to use an ability)

/combat flee (adds the user to the combats flee property and checks if more than half the party has voted to flee, if so the combat is over)

/respawn <hardcore> (respawns your char, if hardcore option is chosen you respawn as a new char)
check if char health <= 0
