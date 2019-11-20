const classes = [
  {
    name: "Barbarian",
	  hit_die: 12,
	  proficiencies: [ "Light armor", "Medium armor", "Shields", "Simple weapons", "Martial weapons"],
	  saving_throws: ['STR', 'CON'],
  },
  {
    name: "Bard",
    hit_die: 8,
    proficiencies: ["Light armor", "Simple weapons", "Longswords", "Rapiers", "Shortswords", "Crossbows, hand"],
    saving_throws: ["DEX", "CHA"]
  },
  {
    name: "Cleric",
    hit_die: 8,
    proficiencies: ["Light armor", "Medium armor", "Shields", "Simple weapons"],
    saving_throws: ["WIS", "CHA"],
  },
  {
    name: "Druid",
    hit_die: 8,
    proficiencies: ["Light armor", "Medium armor", "Shields", "Clubs", "Daggers", "Javelins", "Maces", "Quarterstaffs", "Sickles", "Spears", "Darts", "Slings", "Scimitars"],
    saving_throws: ["INT", "WIS"],
  },
  {
    name: "Fighter",
    hit_die: 10,
    proficiencies: ["All armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ["STR", "CON"],
  },
  {
    name: "Monk",
    hit_die: 8,
    proficiencies: ["Simple weapons", "Shortswords"],
    saving_throws: ["STR", "DEX"]
  },
  {
    name: "Paladin",
    hit_die: 10,
    proficiencies: ["All armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ["WIS", "CHA"],
  },
  {
    name: "Ranger",
    hit_die: 10,
    proficiencies: ["Light armor", "Medium armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ["STR", "DEX"],
  },
  {
    name: "Rogue",
    hit_die: 8,
    proficiencies: ["Light armor", "Simple weapons", "Longswords", "Rapiers", "Shortswords", "Crossbows, hand", "Thieves' Tools"],
    saving_throws: ["DEX", "INT"],
  },
  {
    name: "Sorcerer",
    hit_die: 6,
    proficiencies: ["Daggers", "Quarterstaffs", "Darts", "Slings"],
    saving_throws: ["CON", "CHA"],
  },
  {
    name: "Warlock",
    hit_die: 8,
    proficiencies: ["Light armor", "Simple weapons"],
    saving_throws: ["WIS", "CHA"],
  },
  {
    name: "Wizard",
    hit_die: 6,
    proficiencies: ["Daggers", "Quarterstaffs", "Darts", "Slings"],
    saving_throws: ["INT", "WIS"],
  }
]

module.exports = classes;