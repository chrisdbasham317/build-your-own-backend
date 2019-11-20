const classes = [
  {
    name: "Artificer",
	  hit_die: 8,
	  proficiencies: [ "Light armor", "Medium armor", "Shields", "Simple weapons", "Crossbows, hand", "Crossbows, heavy"],
    saving_throws: ['INT', 'CON'],
    sub_class: 'Alchemist'
  },
  {
    name: "Barbarian",
	  hit_die: 12,
	  proficiencies: [ "Light armor", "Medium armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ['STR', 'CON'],
    sub_class: 'Berserker'
  },
  {
    name: "Bard",
    hit_die: 8,
    proficiencies: ["Light armor", "Simple weapons", "Longswords", "Rapiers", "Shortswords", "Crossbows, hand"],
    saving_throws: ["DEX", "CHA"],
    sub_class: 'Lore'
  },
  {
    name: "Blood Hunter",
    hit_die: 10,
    proficiencies: ["Light armor", "Medium armor", "Simple weapons", "Martial weapons"],
    saving_throws: ["WIS", "STR"],
    sub_class: 'Mutant',
  }, 
  {
    name: "Card Caster",
    hit_die: 6,
    proficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Crossbows, light"],
    saving_throws: ["WIS", "INT"],
    sub_class: 'Knight of Swords',
  },
  {
    name: "Cleric",
    hit_die: 8,
    proficiencies: ["Light armor", "Medium armor", "Shields", "Simple weapons"],
    saving_throws: ["WIS", "CHA"],
    sub_class: 'Life',
  },
  {
    name: "Druid",
    hit_die: 8,
    proficiencies: ["Light armor", "Medium armor", "Shields", "Clubs", "Daggers", "Javelins", "Maces", "Quarterstaffs", "Sickles", "Spears", "Darts", "Slings", "Scimitars"],
    saving_throws: ["INT", "WIS"],
    sub_class: 'Land',
  },
  {
    name: "Fighter",
    hit_die: 10,
    proficiencies: ["All armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ["STR", "CON"],
    sub_class: 'Champion'
  },
  {
    name: "Monk",
    hit_die: 8,
    proficiencies: ["Simple weapons", "Shortswords"],
    saving_throws: ["STR", "DEX"],
    sub_class: 'Open Hand',
  },
  {
    name: "Paladin",
    hit_die: 10,
    proficiencies: ["All armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ["WIS", "CHA"],
    sub_class: 'Devotion',
  },
  {
    name: "Ranger",
    hit_die: 10,
    proficiencies: ["Light armor", "Medium armor", "Shields", "Simple weapons", "Martial weapons"],
    saving_throws: ["STR", "DEX"],
    sub_class: 'Hunter'
  },
  {
    name: "Rogue",
    hit_die: 8,
    proficiencies: ["Light armor", "Simple weapons", "Longswords", "Rapiers", "Shortswords", "Crossbows, hand", "Thieves' Tools"],
    saving_throws: ["DEX", "INT"],
    sub_class: 'Theif',
  },
  {
    name: "Sorcerer",
    hit_die: 6,
    proficiencies: ["Daggers", "Quarterstaffs", "Darts", "Slings"],
    saving_throws: ["CON", "CHA"],
    sub_class: 'Draconic',
  },
  {
    name: "Warlock",
    hit_die: 8,
    proficiencies: ["Light armor", "Simple weapons"],
    saving_throws: ["WIS", "CHA"],
    sub_class: 'Fiend',
  },
  {
    name: "Wizard",
    hit_die: 6,
    proficiencies: ["Daggers", "Quarterstaffs", "Darts", "Slings"],
    saving_throws: ["INT", "WIS"],
    sub_class: 'Evocation',
  }
]

module.exports = classes;