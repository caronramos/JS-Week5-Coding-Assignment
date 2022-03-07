
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
  constructor(subteam) {
    this.subteam = subteam;
    this.subteams = [];
  }

addName(WorshipPractice) {
  if (WorshipPractice instanceof WorshipPractice) {
    this.players.push(WorshipPractice);
  } else {
    throw new Error(`You can only add an instance of name. Argument is not a worship player; ${WorshipPractice}`);
  }
}

  describe() {
    return `${this.names} has ${this.WorshipPractice.length} players.`;
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
    let subteam = prompt('Enter name for new sub team: ');
    this.subteams.push(new WorshipTeam(subteam));
  }
  
  viewSubTeam() {
    let choice = prompt('Enter the choice of sub team you want to view: ');
    if (choice>-1 && choice<this.subteams.length) {
      this.selectedSubTeam = this.subteams[choice];
      let subTeamName = 'Sub Team Name: ' + this.selectedSubTeam.subteam + '\n';
      
      for (let i=0; i<this.selectedSubTeam.subteams.length; i++) {
        subTeamName += i + ')' + this.selectedSubTeam.subteams[i].subteam
        + '-' + this.selectedSubTeam.subteams[i].instrument + '\n';
    }
      
      let selection = this.showSubTeamMenuOptions(subTeamName);
      switch (selection) {
        case '1':
          this.createPlayer();
          break;
        case '2':
          this.deletePlayer();
      }
    }
  }
  
  deleteSubTeam() {
    let choice = prompt('Enter the choice of sub team that you wan to delete: ');
    if (choice>-1 && choice<this.subteams.length) {
      this.subteams.splice(choice, 1);
    }
  }
  
  displaySubTeam() {
    let subteamString = '';
    for (let i=0; i<this.subteams.length; i++) {
      subteamString += i + ') ' + this.subteams[i].player + '\n';
    }
    alert(subteamString);
  }

    createPlayer() {
      let player = prompt('Enter name for new player: ');
      let instrument = prompt('Enter instrument for new player: ');
      this.selectedSubTeam.subteams.push(new WorshipTeam(player, instrument));
    }

     deletePlayer() {
       let choice = prompt('Enter your choice of player that you want to delete: ');
       if(choice>-1 && choice<this.selectedSubTeam.subteams.length) {
       this.selectedSubTeam.subteams.splice(choice, 1);
    }
  }
}

let menu = new Menu();
menu.start();

