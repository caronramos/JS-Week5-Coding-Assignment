
class WorshipPractice {
  constructor(player, instrument){
    this.player = player;
    this.instrument = instrument;
  }
  
  describe() {
    return `${this.player} plays ${this.instrument}.`;
  }
}

class WorshipTeam {
  constructor(player) {
    this.player = player;
    this.players = [];
  }

addName(WorshipPractice) {
  if (WorshipPractice instanceof WorshipPractice) {
    this.WorshipPractice.push(WorshipPractice);
  } else {
    throw new Error(`You can only add an instance of name. Argument is not a worship player; ${WorshipPractice}`);
  }
}

  describe() {
    return `${this.players} has ${this.WorshipPractice.length} players.`;
  }
}

class Menu {
  constructor() {
    this.subteams = [];
    this.selectedSubTeam = null;
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
          this.displaySubTeam();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();    
    }
    
    alert('Farewell!');
  }
  
  showMainMenuOptions() {
    return prompt(`
                  0) Exit
                  1) Create New Sub Team
                  2) View Sub Team
                  3) Delete Sub Team
                  4) Display All Sub Teams
      `);
  }

  showSubTeamMenuOptions(subteamInfo) {
      return prompt (`
        0) Back
        1) Create Player
        2) Delete Player
        ---------------------
        ${subteamInfo}
     `);  
  }
  
  createSubTeam() {
    let name = prompt('Enter name for new sub team: ');
    this.WorshipTeam.push(new subteam(name));
  }
  
  viewSubTeam() {
    let choice = prompt('Enter the choice of sub team you want to view: ');
    if (choice>-1 && choice < this.WorshipTeams.length) {
      this.selectedSubTeam = this.WorshipTeams[choice];
      let subteamName = 'Sub Team Name: ' + this.selectedSubTeam.name + '\n';
      
      for (let i=0; i<this.selectedSubTeam.name.length; i++) {
        subteamName += i + ')' + this.selectedSubTeam.name[i].player
        + '-' + this.selectedSubTeam.WorshipPractice[i].instrument + '\n';
    }
      
      let option = this.ShowTeamMenuOptions(subteamName);
      switch (selection) {
        case '1':
          this.createPlayer();
          break;
        case '2':
          this.deletePlayer();
          break;
      }
  }
}
  
  displaySubTeam() {
    let subteamString = '';
    for (let i=0; i<this.players.length; i++) {
      subteamString += i + ') ' + this.players[i].name + '\n';
    }
    alert(subteamString);
  }

    createPlayer() {
      let player = prompt('Enter name for new player: ');
      let instrument = prompt('Enter instrument for new player: ');
      this.players.push(new WorshipTeam(player, instrument));
    }

     deletePlayer() {
            let choice = prompt('Enter your choice of playerthat you want to delete:');
            if(choice>-1 && choice< this.selectedSubTeam.names.length) {
                this.selectedSubTeam.names.splice(choice, 1);
            }
        }
    }

let menu = new Menu();
menu.start();

