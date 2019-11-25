const classes = [
  {
    name: 'Aberrant Summoner',
    hit_die: 6,
    sub_class: 'Severance'
  },
  {
    name: 'Abomination',
    hit_die: 10,
    sub_class: 'Lycanthrope'
  },
  {
    name: 'Battle Medic',
    hit_die: 10,
    sub_class: 'Savior'
  },
  {
    name: 'Battlemage',
    hit_die: 10,
    sub_class: 'Destroyer'
  },
  {
    name: 'Beast Hunter',
    hit_die: 10,
    sub_class: "Beast's Embrace"
  },
  {
    name: 'Behemoth',
    hit_die: 10,
    sub_class: 'Savage'
  },
  {
    name: 'Berserker',
    hit_die: 12,
    sub_class: 'Fenrir'
  },
  {
    name: 'Blade Singer',
    hit_die: 10,
    sub_class: 'Flame Song'
  },
  {
    name: 'Blood Caster',
    hit_die: 10,
    sub_class: 'Vampire'
  },
  {
    name: 'Bright Lord',
    hit_die: 12,
    sub_class: 'Power'
  },
  {
    name: 'Chaos Knight',
    hit_die: 12,
    sub_class: 'Harbinger'
  },
  {
    name: 'Classless',
    hit_die: 8,
    sub_class: 'Investigator'
  },
  {
    name: 'Dark Lord',
    hit_die: 10,
    sub_class: 'Sentience'
  },
  {
    name: 'Doctor',
    hit_die: 8,
    sub_class: 'Surgeon'
  },
  {
    name: 'Enchantress',
    hit_die: 8,
    sub_class: 'Siren'
  },
  {
    name: 'Juggernaut',
    hit_die: 8,
    sub_class: 'Ravager'
  },
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
    sub_class: 'Thief',
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