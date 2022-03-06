
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
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createSubTeam();
          break;
        case '2':
          this.viewSubTeam();
          break;
        case '3':
          this.deleteSubTeam();
          break;
        case '4':
          this.displaySubTeams();
          break;
        default:
          seletion = 0;
      }
      selection = this.showMainMenuOptions();    
    }
    
    alert('Farewell!');
  }
  
  showMainMenuOptions() {
    return prompt('
                  0) Exit
                  1) Create New Sub Team
                  2) View Sub Team
                  3) Delete Sub Team
                  4) Display All Sub Teams
      );
  }
  
  displaySubTeams() {
    let subteamString = '';
    for (let i=0; i<this.teams.length, i++) {
      subteamString += i + ')' + this.teams[i].player + '\n';
    }
    alert(subteamString);
  }
  
  createSubTeam() {
    let player = prompt('Enter player for new Sub Team: ');
    this.teams.push(new Team(player));
  }
  
  viewSubTeam() {
    
  }
}

