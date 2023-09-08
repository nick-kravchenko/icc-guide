const content = document.getElementById("content");
const nav = document.getElementById("nav");
      nav.appendChild(generateNav(bosses));

/**
 * 
 * @param {string[]} classList 
 * @param {{[key: string]: string}} attributes 
 */
function generateImage(classList, attributes) {
  const image = document.createElement('img');
  classList.forEach(className => {
    image.classList.add(className);
  });
  for (const attribute in attributes) {
    if (Object.hasOwnProperty.call(attributes, attribute)) {
      const value = attributes[attribute];
      image.setAttribute(attribute, value);
    }
  }
  return image;
}

/**
 * @typedef {Object} ImportantFor
 * @property {boolean} everyone
 * @property {boolean} tank
 * @property {boolean} healer
 * @property {boolean} mdps
 * @property {boolean} rdps
 */
/**
 * @typedef {Object} Ability
 * @property {number} abilityId,
 * @property {string} comment,
 * @property {importantFor} ImportantFor,
 */
/**
 * @typedef {Object} Trash
 * @property {number} npcId,
 * @property {Ability[]} abilities,
 */
/**
 * @typedef {Object} Boss
 * @property {number} id,
 * @property {string} wowhead,
 * @property {string} name,
 * @property {Ability[]} abilities,
 * @property {Trash[]} trash,
 */

/**
 * 
 * @param {Boss[]} bosses 
 */
function generateNav(bosses) {
  const list = document.createElement('ul');
  bosses.forEach(boss => {
    const listEl = document.createElement('li');
    const label = document.createElement("label");
    label.innerText = boss.name;
    label.setAttribute("for", `input-${boss.id}`);
    listEl.appendChild(label);
    list.appendChild(listEl);
  });
  return list;
}

/**
 * @param {Ability[]} abilities 
 */
function generateBossAbilitiesTable(abilities) {
  const table = document.createElement('table');
  abilities.forEach(ability => {
    const row = document.createElement('tr');

    const specCell = document.createElement('td');
    const specIcons = document.createElement('div');
          specIcons.classList.add('spec-icons');
          if (ability.importantFor?.tank) specIcons.appendChild(tankImage.cloneNode(true));
          if (ability.importantFor?.healer) specIcons.appendChild(healerImage.cloneNode(true));
          if (ability.importantFor?.mdps) specIcons.appendChild(mdpsImage.cloneNode(true));
          if (ability.importantFor?.rdps) specIcons.appendChild(rdpsImage.cloneNode(true));
          if (ability.importantFor?.everyone) specIcons.appendChild(exclamationImage.cloneNode(true));
          if (!ability.importantFor) specIcons.appendChild(infoImage.cloneNode(true));
          specCell.appendChild(specIcons);
          row.appendChild(specCell);

    const linkCell = document.createElement('td');
          linkCell.classList.add('w-30');
    const link = document.createElement("a");
          link.setAttribute("href", `https://www.wowhead.com/wotlk/spell=${ability.abilityId}`);
          link.setAttribute("target", "_blank");
          linkCell.appendChild(link);
          row.appendChild(linkCell);

    const commentCell = document.createElement("td");      
    const comment = document.createElement("p");
          comment.innerText = ability.comment;
          commentCell.appendChild(comment);
          row.appendChild(commentCell);

    table.appendChild(row);
  });

  return table;
}

/**
 * 
 * @param {Trash[]} trash
 */
function generateTrashAbilitiesTable(trashList) {
  const block = document.createElement('div');
  trashList.forEach((trash) => {
    const table = document.createElement('table');
    let row = document.createElement("tr");
    const npcRow = document.createElement('tr');
    const npcLinkCell = document.createElement("td");
          npcLinkCell.setAttribute('colspan', '2');
    const npcLink = document.createElement("a");
          npcLink.setAttribute("href", `https://www.wowhead.com/wotlk/npc=${trash.npcId}`);
          npcLinkCell.appendChild(npcLink);
          npcRow.appendChild(npcLinkCell);
          table.appendChild(npcRow);
    
    trash.abilities.forEach((ability) => {

      const abilityLinkCell = document.createElement("td");
            abilityLinkCell.classList.add('w-30');
      const abilityLink = document.createElement("a");
            abilityLink.setAttribute("href", `https://www.wowhead.com/wotlk/spell=${ability.abilityId}`);
            abilityLink.setAttribute("target", "_blank");
            abilityLinkCell.appendChild(abilityLink);
            row.appendChild(abilityLinkCell);

      const commentCell = document.createElement("td");
      const comment = document.createElement("p");
            comment.innerText = ability.comment;
            commentCell.appendChild(comment);
            row.appendChild(commentCell);

      table.appendChild(row);
      row = document.createElement("tr");
    });
    block.appendChild(table);
  });
  return block;
}

function generateTile() {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  return tile;
}

const tankImage = generateImage(['spec-icon'], { src: './images/tank.svg', title: 'Абілка важна для ТАНКІВ' });
const healerImage = generateImage(['spec-icon'], { src: './images/healer.svg', title: 'Абілка важна для ХІЛІВ' });
const mdpsImage = generateImage(['spec-icon'], { src: './images/mdps.svg', title: 'Абілка важна для МІЛІ' });
const rdpsImage = generateImage(['spec-icon'], { src: './images/rdps.svg', title: 'Абілка важна для РДД' });
const exclamationImage = generateImage(['spec-icon'], { src: './images/exclamation.svg', title: 'Абілка важна для ВСІХ' });
const infoImage = generateImage(['spec-icon'], { src: './images/info.svg', title: 'Просто для інфи' });

bosses.forEach((boss, k) => {
  const article = document.createElement("article");

  const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'boss');
        radio.setAttribute('id', `input-${boss.id}`);
        radio.setAttribute('value', `${boss.id}`);
        if (new URLSearchParams(window.location.search).get('boss') === boss.id) radio.setAttribute('checked', 'checked');
        if (!new URLSearchParams(window.location.search).get('boss') && k === 0) radio.setAttribute('checked', 'checked');
        radio.addEventListener('change', () => {
          window.history.replaceState({}, "", window.location.pathname + `?boss=${boss.id}`);
        });
        content.appendChild(radio);

  const abilitiesTile = generateTile();
  const title = document.createElement("h5");
  const link = document.createElement("a");
        link.setAttribute("href", boss.wowhead);
        link.setAttribute("target", "_blank");
        link.innerText = boss.name;
        title.appendChild(link);
        title.innerHTML += ' 🔗';

  abilitiesTile.appendChild(title);
  abilitiesTile.appendChild(generateBossAbilitiesTable(boss.abilities));
  article.appendChild(abilitiesTile);

  if (boss.trash) {
    const trashTile = generateTile();
    const trashTitle = document.createElement('h6');
          trashTitle.innerText = 'Trash:';
    trashTile.appendChild(trashTitle);
    trashTile.appendChild(generateTrashAbilitiesTable(boss.trash));
    article.appendChild(trashTile);
  }

  content.appendChild(article);
});
