class WorshipPracticeAttendance {
  constructor(player, instrument) {
    this.player = player;
    this.instrument = instrument;
  }
  
  describe() {
    return ${this.player} plays ${this.instrument}.;
    
  }
}

class WorshipTeam {
  constructor(player) {
    this.player = player;
    this.names = [];
  }
}

addName(name) {
  if (name instanceof Name) {
    this.names.push(name);
  } else {
    throw new Error('You can only add an instance of Name. Argument is not a worship player: ${name}');
  }
  
  describe() {
    return ${this.player} has ${this.names.length} players.;
  }
}

class Menu {
  constructor() {
    this.teams = [];
    this.selectedTeam = null;
  }
  
  start() {
    let selection = this.showMainMenuOptions();
  }
