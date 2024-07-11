# Haxball Bot Builder


| Event | About | Corresponding  | 
| -------- | -------- | -------- | 
| Join | Runs when user logs in | onPlayerJoin | 
| Leave | Runs when user logs out | onPlayerLeave | 
| Chat | Works when chat is typed | onPlayerChat | 
| Kicked | Runs when user is kicked | onPlayerChat | 
| BallKick | when the ball is kicked | onPlayerBallKick | 
| Start | when the game starts | onGameStart | 
| Stop | when the game stops | onGameStop | 
| Pause | when the game pauses | onGamePause | 
| Unpause | when the game unpauses | onGameUnpause |
| Tick | ... | onGameTick |
| Activity | ... | onPlayerActivity |
| TeamChange | ... | onPlayerTeamChange |
| PositionsReset | ... | onPositionsReset |
| TeamVictory | ... | onTeamVictory |
| TeamGoal | ... | onTeamGoal |
| StadiumChange | ... | onStadiumChange |
| RoomLink | ... | onRoomLink |

### Set up
```js
const bot = new Haxball('room name', 'bot name')

new Haxball(roomName, botName, {
    maxPlayer,
    roomPublic,
    geo,
    noPlayer,
})

If no data is entered, by default:
maxPlayer: 5,
roomPublic: false,
geo: { code: 'TR', lat: 40.9, lon: 29.1 },
noPlayer: false,
```

### Action
```js
bot.on(Events.?, ()=>{})

// example
bot.on(Events.Join, (player)=>{
    console.log(`${player} adlı oyuncu giriş yaptı!`)
})
```

### Provide direct access
```js
bot.room
```

## HaxballUtils class
```js

const hxb = new HaxballUtils(boot.room)

// example use:
hxb.Announcement(text, props)

// other funcs
Message(text, props)

Kick(playerId, text, isBan?) // isBan = true-false
SetAdmin(playerId, isAdmin?) // isAdmin = true-false
SetPlayerAvatar(playerId, avatar, props)

StartGame()
StopGame()
PlayerList()
ClearBans()

SetScoreLimit(limit)
SetTimeLimit(limit)
GetScores()

SetCustomStadium(stadium)
SetDefaultStadium(stadium)

SetPassword(password)
SetTeamsLock(isLock?) // true-false
SetTeamColors(...props)

GetBallPosition()
StartRecording()
```