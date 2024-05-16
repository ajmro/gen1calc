var pokebstats = [
    ['ABRA', '25', '20', '15', '90', '105'],
    ['AERODACTYL', '80', '105', '65', '130', '60'],
    ['ALAKAZAM', '55', '50', '45', '120', '135'],
    ['ARBOK', '60', '85', '69', '80', '65'],
    ['ARCANINE', '90', '110', '80', '95', '80'],
    ['ARTICUNO', '90', '85', '100', '85', '125'],
    ['BEEDRILL', '65', '80', '40', '75', '45'],
    ['BELLSPROUT', '50', '75', '35', '40', '70'],
    ['BLASTOISE', '79', '83', '100', '78', '85'],
    ['BULBASAUR', '45', '49', '49', '45', '65'],
    ['BUTTERFREE', '60', '45', '50', '70', '80'],
    ['CATERPIE', '45', '30', '35', '45', '20'],
    ['CHANSEY', '250', '5', '5', '50', '105'],
    ['CHARIZARD', '78', '84', '78', '100', '85'],
    ['CHARMANDER', '39', '52', '43', '65', '50'],
    ['CHARMELEON', '58', '64', '58', '80', '65'],
    ['CLEFABLE', '95', '70', '73', '60', '85'],
    ['CLEFAIRY', '70', '45', '48', '35', '60'],
    ['CLOYSTER', '50', '95', '180', '70', '85'],
    ['CUBONE', '50', '50', '95', '35', '40'],
    ['DEWGONG', '90', '70', '80', '70', '95'],
    ['DIGLETT', '10', '55', '25', '95', '45'],
    ['DITTO', '48', '48', '48', '48', '48'],
    ['DODRIO', '60', '110', '70', '100', '60'],
    ['DODUO', '35', '85', '45', '75', '35'],
    ['DRAGONAIR', '61', '84', '65', '70', '70'],
    ['DRAGONITE', '91', '134', '95', '80', '100'],
    ['DRATINI', '41', '64', '45', '50', '50'],
    ['DROWZEE', '60', '48', '45', '42', '90'],
    ['DUGTRIO', '35', '80', '50', '120', '70'],
    ['EEVEE', '55', '55', '50', '55', '65'],
    ['EKANS', '35', '60', '44', '55', '40'],
    ['ELECTABUZZ', '65', '83', '57', '105', '85'],
    ['ELECTRODE', '60', '50', '70', '140', '80'],
    ['EXEGGCUTE', '60', '40', '80', '40', '60'],
    ['EXEGGUTOR', '95', '95', '85', '55', '125'],
    ["FARFETCH'D", '52', '65', '55', '60', '58'],
    ['FEAROW', '65', '90', '65', '100', '61'],
    ['FLAREON', '65', '130', '60', '65', '110'],
    ['GASTLY', '30', '35', '30', '80', '100'],
    ['GENGAR', '60', '65', '60', '110', '130'],
    ['GEODUDE', '40', '80', '100', '20', '30'],
    ['GLOOM', '60', '65', '70', '40', '85'],
    ['GOLBAT', '75', '80', '70', '90', '75'],
    ['GOLDEEN', '45', '67', '60', '63', '50'],
    ['GOLDUCK', '80', '82', '78', '85', '80'],
    ['GOLEM', '80', '110', '130', '45', '55'],
    ['GRAVELER', '55', '95', '115', '35', '45'],
    ['GRIMER', '80', '80', '50', '25', '40'],
    ['GROWLITHE', '55', '70', '45', '60', '50'],
    ['GYARADOS', '95', '125', '79', '81', '100'],
    ['HAUNTER', '45', '50', '45', '95', '115'],
    ['HITMONCHAN', '50', '105', '79', '76', '35'],
    ['HITMONLEE', '50', '120', '53', '87', '35'],
    ['HORSEA', '30', '40', '70', '60', '70'],
    ['HYPNO', '85', '73', '70', '67', '115'],
    ['IVYSAUR', '60', '62', '63', '60', '80'],
    ['JIGGLYPUFF', '115', '45', '20', '20', '25'],
    ['JOLTEON', '65', '65', '60', '130', '110'],
    ['JYNX', '65', '50', '35', '95', '95'],
    ['KABUTO', '30', '80', '90', '55', '45'],
    ['KABUTOPS', '60', '115', '105', '80', '70'],
    ['KADABRA', '40', '35', '30', '105', '120'],
    ['KAKUNA', '45', '25', '50', '35', '25'],
    ['KANGASKHAN', '105', '95', '80', '90', '40'],
    ['KINGLER', '55', '130', '115', '75', '50'],
    ['KOFFING', '40', '65', '95', '35', '60'],
    ['KRABBY', '30', '105', '90', '50', '25'],
    ['LAPRAS', '130', '85', '80', '60', '95'],
    ['LICKITUNG', '90', '55', '75', '30', '60'],
    ['MACHAMP', '90', '130', '80', '55', '65'],
    ['MACHOKE', '80', '100', '70', '45', '50'],
    ['MACHOP', '70', '80', '50', '35', '35'],
    ['MAGIKARP', '20', '10', '55', '80', '20'],
    ['MAGMAR', '65', '95', '57', '93', '85'],
    ['MAGNEMITE', '25', '35', '70', '45', '95'],
    ['MAGNETON', '50', '60', '95', '70', '120'],
    ['MANKEY', '40', '80', '35', '70', '35'],
    ['MAROWAK', '60', '80', '110', '45', '50'],
    ['MEOWTH', '40', '45', '35', '90', '40'],
    ['METAPOD', '50', '20', '55', '30', '25'],
    ['MEW', '100', '100', '100', '100', '100'],
    ['MEWTWO', '106', '110', '90', '130', '154'],
    ['MOLTRES', '90', '100', '90', '90', '125'],
    ['MR. MIME', '40', '45', '65', '90', '100'],
    ['MUK', '105', '105', '75', '50', '65'],
    ['NIDOKING', '81', '92', '77', '85', '75'],
    ['NIDOQUEEN', '90', '82', '87', '76', '75'],
    ['NIDORANF', '55', '47', '52', '41', '40'],
    ['NIDORANM', '46', '57', '40', '50', '40'],
    ['NIDORINA', '70', '62', '67', '56', '55'],
    ['NIDORINO', '61', '72', '57', '65', '55'],
    ['NINETALES', '73', '76', '75', '100', '100'],
    ['ODDISH', '45', '50', '55', '30', '75'],
    ['OMANYTE', '35', '40', '100', '35', '90'],
    ['OMASTAR', '70', '60', '125', '55', '115'],
    ['ONIX', '35', '45', '160', '70', '30'],
    ['PARAS', '35', '70', '55', '25', '55'],
    ['PARASECT', '60', '95', '80', '30', '80'],
    ['PERSIAN', '65', '70', '60', '115', '65'],
    ['PIDGEOT', '83', '80', '75', '91', '70'],
    ['PIDGEOTTO', '63', '60', '55', '71', '50'],
    ['PIDGEY', '40', '45', '40', '56', '35'],
    ['PIKACHU', '35', '55', '30', '90', '50'],
    ['PINSIR', '65', '125', '100', '85', '55'],
    ['POLIWAG', '40', '50', '40', '90', '40'],
    ['POLIWHIRL', '65', '65', '65', '90', '50'],
    ['POLIWRATH', '90', '85', '95', '70', '70'],
    ['PONYTA', '50', '85', '55', '90', '65'],
    ['PORYGON', '65', '60', '70', '40', '75'],
    ['PRIMEAPE', '65', '105', '60', '95', '60'],
    ['PSYDUCK', '50', '52', '48', '55', '50'],
    ['RAICHU', '60', '90', '55', '100', '90'],
    ['RAPIDASH', '65', '100', '70', '105', '80'],
    ['RATICATE', '55', '81', '60', '97', '50'],
    ['RATTATA', '30', '56', '35', '72', '25'],
    ['RHYDON', '105', '130', '120', '40', '45'],
    ['RHYHORN', '80', '85', '95', '25', '30'],
    ['SANDSHREW', '50', '75', '85', '40', '30'],
    ['SANDSLASH', '75', '100', '110', '65', '55'],
    ['SCYTHER', '70', '110', '80', '105', '55'],
    ['SEADRA', '55', '65', '95', '85', '95'],
    ['SEAKING', '80', '92', '65', '68', '80'],
    ['SEEL', '65', '45', '55', '45', '70'],
    ['SHELLDER', '30', '65', '100', '40', '45'],
    ['SLOWBRO', '95', '75', '110', '30', '80'],
    ['SLOWPOKE', '90', '65', '65', '15', '40'],
    ['SNORLAX', '160', '110', '65', '30', '65'],
    ['SPEAROW', '40', '60', '30', '70', '31'],
    ['SQUIRTLE', '44', '48', '65', '43', '50'],
    ['STARMIE', '60', '75', '85', '115', '100'],
    ['STARYU', '30', '45', '55', '85', '70'],
    ['TANGELA', '65', '55', '115', '60', '100'],
    ['TAUROS', '75', '100', '95', '110', '70'],
    ['TENTACOOL', '40', '40', '35', '70', '100'],
    ['TENTACRUEL', '80', '70', '65', '100', '120'],
    ['VAPOREON', '130', '65', '60', '65', '110'],
    ['VENOMOTH', '70', '65', '60', '90', '90'],
    ['VENONAT', '60', '55', '50', '45', '40'],
    ['VENUSAUR', '80', '82', '83', '80', '100'],
    ['VICTREEBEL', '80', '105', '65', '70', '100'],
    ['VILEPLUME', '75', '80', '85', '50', '100'],
    ['VOLTORB', '40', '30', '50', '100', '55'],
    ['VULPIX', '38', '41', '40', '65', '65'],
    ['WARTORTLE', '59', '63', '80', '58', '65'],
    ['WEEDLE', '40', '35', '30', '50', '20'],
    ['WEEPINBELL', '65', '90', '50', '55', '85'],
    ['WEEZING', '65', '90', '120', '60', '85'],
    ['WIGGLYTUFF', '140', '70', '45', '45', '50'],
    ['ZAPDOS', '90', '90', '85', '100', '125'],
    ['ZUBAT', '40', '45', '35', '55', '40']
];

function statcalc(bstat, iv, ev, lvl, hp=false) {
    x = 5
    if (hp == true) {
        x = lvl + 10;
    }
    return Math.floor((((bstat+iv)*2+ev)*lvl)/100)+ x;
}

function submitForm() {

    var poke = document.getElementById('pokemon').value;
    var lvl = parseInt(document.getElementById('lvl').value);
    var iv = parseInt(document.getElementById('iv').value);
    var exp = parseInt(document.getElementById('exp').value);
    ev = Math.floor(Math.sqrt(exp) / 4)

    document.getElementById('name').innerHTML = pokebstats[poke][0];
    document.getElementById('hp').innerHTML = statcalc(parseInt(pokebstats[poke][1]), iv, ev, lvl, true);
    document.getElementById('atk').innerHTML = statcalc(parseInt(pokebstats[poke][2]), iv, ev, lvl);
    document.getElementById('def').innerHTML = statcalc(parseInt(pokebstats[poke][3]), iv, ev, lvl);
    document.getElementById('spd').innerHTML = statcalc(parseInt(pokebstats[poke][4]), iv, ev, lvl);
    document.getElementById('spc').innerHTML = statcalc(parseInt(pokebstats[poke][5]), iv, ev, lvl);
}