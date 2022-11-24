export class Booking{
    id:any;
    playerId:any;
    playerName:any;
    sportsId:any;
    sportsName:any;
    time:any;
    bookingDate:any;
    constructor(id:any,
        playerId:any,
        playerName:any,
        sportsId:any,
        sportsName:any,
        time:any,
        bookingDate:any){
            this.id=id;
            this.playerId=playerId;
            this.playerName= playerName;
            this.sportsId = sportsId;
            this.sportsName=sportsName;
            this.time = time;
            this.bookingDate=bookingDate;
    }
}