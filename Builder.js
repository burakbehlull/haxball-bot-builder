const Events = {
    Join: 'join',
    Leave: 'leave',
    Chat: 'chat',
    Kicked: 'kicked',
    BallKick: 'ball_kick',
    Start: 'start',
    Stop: 'stop',
    Tick: 'tick',
    Pause: 'pause',
    Unpuase: 'unpause',
    Activity: 'activity',
    TeamChange: 'team_change',
    PositionsReset: 'positions_reset',
    TeamVictory: 'team_victory',
    TeamGoal: 'team_goal',
    StadiumChange: 'stadium_change',
    RoomLink:'room_link'
}

class Haxball {
    constructor(roomName, botName, settings={
        maxPlayer: 6,
        roomPublic: true,
        geo: { code: 'TR', lat: 40.9, lon: 29.1 },
        noPlayer: false,

    }){
        if(!roomName || !botName) {
            console.warn('Room Name or Bot Name is undefined')
            return;
        }
        this.roomName = roomName || "UNKOWN"
        this.playerName = botName || "HB BOT"
        

        this.maxPlayer = settings.maxPlayer || 5
        this.roomPublic = settings.roomPublic || false,
        this.geo = settings.geo,
        this.noPlayer = settings.noPlayer || false

        this.room = HBInit({
            roomName: this.roomName,
            maxPlayers: this.maxPlayer,
            public: this.roomPublic,
            playerName: this.playerName,
            geo: this.geo,
            noPlayer: this.noPlayer
        }) 
    }

    on(event, func){
        switch(event){
            case 'join':
                this.room.onPlayerJoin = (player)=> func(player)
                break;
            case 'leave':
                this.room.onPlayerLeave = (player)=> func(player)
                break;
            case 'chat':
                this.room.onPlayerChat  = (player, msg)=> func(player, msg)
                break;
            case 'kicked':
                this.room.onPlayerKicked = (...props)=> func(...props)
                break;
            case 'ball_kick':
                this.room.onPlayerBallKick  = (player)=> func(player)
                break;
            
            // game events
            case 'start':
                this.room.onGameStart = (...props)=> func(...props)
                break;
            case 'stop':
                this.room.onGameStart = (...props)=> func(...props)
                break;
            case 'tick':
                this.room.onGameTick = (...props)=> func(...props)
                break;
            case 'pause':
                this.room.onGamePause = (...props)=> func(...props)
                break;
            case 'unpause':
                this.room.onGameUnpause = (...props)=> func(...props)
                break;
            case 'activity':
                this.room.onPlayerActivity = (...props)=> func(...props)
                break;
            case 'team_change':
                this.room.onPlayerTeamChange = (...props)=> func(...props)
                break;
            case 'positions_reset':
                this.room.onPositionsReset = (...props)=> func(...props)
                break;
            case 'team_victory':
                this.room.onTeamVictory = (scores)=> func(scores)
                break;
            case 'team_goal':
                this.room.onTeamGoal = (team)=> func(team)
                break;
            case 'stadium_change':
                this.room.onStadiumChange = (newStadiumName)=> func(newStadiumName)
                break;
            case 'room_link':
                this.room.onRoomLink = (url)=> func(url)
                break;

            default:
                console.log(1)
        }
    }

    build(){
        document.title = this.roomName
    }
}

class HaxballUtils {
    constructor(room_client){
        if(!room_client){
            console.log('Room Client is undefined')
            return
        }
        this.room = room_client
    }
    Announcement(text, ...props){
        return this.room.sendAnnouncement(text, props)
    }
    Kick(playerId, text, isBan=false){
        return this.room.kickPlayer(playerId, text, isBan)
    }
    PlayerList(){
        return this.room.getPlayerList()
    }
    SetAdmin(playerId, isAdmin){
        return this.room.setPlayerAdmin(playerId, isAdmin)
    }
    StartGame(){
        return this.room.startGame()
    }
    StopGame(){
        return this.room.stopGame()
    }
    Message(text, ...props){
        return this.room.sendChat(text, props)
    }
    ClearBans(){
        return this.room.clearBans()
    }
    SetScoreLimit(limit){
        return this.room.setScoreLimit(limit)
    }
    SetTimeLimit(limit){
        return this.room.setTimeLimit(limit)
    }
    SetCustomStadium(stadium){
        return this.room.setCustomStadium(stadium)
    }
    SetDefaultStadium(stadium){
        return this.room.setDefaultStadium(stadium)
    }
    SetPassword(password){
        return this.room.setPassword(password)
    }
    SetTeamsLock(isLock=false){
        return this.room.setTeamsLock(isLock)
    }
    SetPlayerAvatar(playerId, avatar,...props){
        return this.room.setPlayerAvatar(playerId, avatar, props)
    }
    GetBallPosition(){
        return this.room.getBallPosition()
    }
    GetScores(){
        return this.room.getScores()
    }
    SetTeamColors(...props){
        return this.room.setTeamColors(props)
    }
    StartRecording(){
        return this.room.startRecording()
    }
}
