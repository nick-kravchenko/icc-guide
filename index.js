const content = document.getElementById("content");
const navList = document.getElementById("navList");
const tankImage = document.createElement('img');
      tankImage.classList.add('spec-icon');
      tankImage.setAttribute('src', './images/tank.svg');
      tankImage.setAttribute('title', 'Абілка важна для ТАНКІВ');

const healerImage = document.createElement('img');
      healerImage.classList.add('spec-icon');
      healerImage.setAttribute('src', './images/healer.svg');
      healerImage.setAttribute('title', 'Абілка важна для ХІЛІВ');

const mdpsImage = document.createElement('img');
      mdpsImage.classList.add('spec-icon');
      mdpsImage.setAttribute('src', './images/mdps.svg');
      mdpsImage.setAttribute('title', 'Абілка важна для МІЛІ');

const rdpsImage = document.createElement('img');
      rdpsImage.classList.add('spec-icon');
      rdpsImage.setAttribute('src', './images/rdps.svg');
      rdpsImage.setAttribute('title', 'Абілка важна для РДД');

const exclamationImage = document.createElement('img');
      exclamationImage.classList.add('spec-icon');
      exclamationImage.setAttribute('src', './images/exclamation.svg');
      exclamationImage.setAttribute('title', 'Абілка важна для ВСІХ');

const infoImage = document.createElement('img');
      infoImage.classList.add('spec-icon');
      infoImage.setAttribute('src', './images/info.svg');
      infoImage.setAttribute('title', 'Просто для інфи');


bosses.forEach((boss, k) => {
  /**
   * Nav
   */
  const listEl = document.createElement("li");
  const listLabel = document.createElement("label");
        listLabel.innerText = boss.name;
        listLabel.setAttribute("for", `input-${boss.id}`);
        listEl.appendChild(listLabel);
        navList.appendChild(listEl);


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

  /**
   * Article Header
   */
  const title = document.createElement("h5");
  const link = document.createElement("a");
        link.setAttribute("href", boss.wowhead);
        link.setAttribute("target", "_blank");
        link.innerText = boss.name;
        title.appendChild(link);
        title.innerHTML += ' 🔗';
        article.appendChild(title);

  /**
   * Boss Abilities
   */
  if (boss.abilities) {
    const bossAbilitiesTable = document.createElement("table");
    boss.abilities.forEach(ability => {
      const bossAbilitiesTableRow = document.createElement("tr");

      const bossAbilitiesTableCell1 = document.createElement("td");
      const specIcons = document.createElement('div');
            specIcons.classList.add('spec-icons');
            if (ability.importantFor?.tank) specIcons.appendChild(tankImage.cloneNode(true));
            if (ability.importantFor?.healer) specIcons.appendChild(healerImage.cloneNode(true));
            if (ability.importantFor?.mdps) specIcons.appendChild(mdpsImage.cloneNode(true));
            if (ability.importantFor?.rdps) specIcons.appendChild(rdpsImage.cloneNode(true));
            if (ability.importantFor?.everyone) specIcons.appendChild(exclamationImage.cloneNode(true));
            if (!ability.importantFor) specIcons.appendChild(infoImage.cloneNode(true));
            bossAbilitiesTableCell1.appendChild(specIcons);
            bossAbilitiesTableRow.appendChild(bossAbilitiesTableCell1);

      const bossAbilitiesTableCell2 = document.createElement("td");
            bossAbilitiesTableCell2.classList.add('w-30');
      const bossAbilitiesListLink = document.createElement("a");
            bossAbilitiesListLink.setAttribute("href", `https://www.wowhead.com/wotlk/spell=${ability.abilityId}`);
            bossAbilitiesListLink.setAttribute("target", "_blank");
            bossAbilitiesTableCell2.appendChild(bossAbilitiesListLink);
            bossAbilitiesTableRow.appendChild(bossAbilitiesTableCell2);

      const bossAbilitiesTableCell3 = document.createElement("td");      
      const bossAbilitiesListComment = document.createElement("span");
            bossAbilitiesListComment.innerText = ability.comment;
            bossAbilitiesTableCell3.appendChild(bossAbilitiesListComment);
            bossAbilitiesTableRow.appendChild(bossAbilitiesTableCell3);

      bossAbilitiesTable.appendChild(bossAbilitiesTableRow);
    });
    article.appendChild(bossAbilitiesTable);
  }

  
  /**
   * Trash Abilities
   */
  if (boss.trash) {
    const trashTitle = document.createElement('h6');
          trashTitle.innerText = 'Trash:';
    article.appendChild(trashTitle);

    const trashAbilitiesTable = document.createElement("table");
    boss.trash.forEach((trash) => {
      let trashAbilitiesTableRow = document.createElement("tr");
      
      trash.abilities.forEach((ability, i) => {
        if (!i) {
          const trashAbilitiesTableCell1 = document.createElement("td");
                trashAbilitiesTableCell1.classList.add('w-30');
                trashAbilitiesTableCell1.setAttribute('rowspan', trash.abilities.length);
  
          const trashAbilitiesNpcLink = document.createElement("a");
                trashAbilitiesNpcLink.setAttribute("href", `https://www.wowhead.com/wotlk/npc=${trash.npcId}`);
  
                trashAbilitiesTableCell1.appendChild(trashAbilitiesNpcLink);
                trashAbilitiesTableRow.appendChild(trashAbilitiesTableCell1);
        }

        const trashAbilitiesTableCell2 = document.createElement("td");
              trashAbilitiesTableCell2.classList.add('w-30');
        const trashAbilitiesTableCell3 = document.createElement("td");
      
        const trashAbilitiesListLink = document.createElement("a");
              trashAbilitiesListLink.setAttribute("href", `https://www.wowhead.com/wotlk/spell=${ability.abilityId}`);
              trashAbilitiesListLink.setAttribute("target", "_blank");

        const trashAbilitiesListComment = document.createElement("span");
              trashAbilitiesListComment.innerText = ability.comment;

        trashAbilitiesTableCell2.appendChild(trashAbilitiesListLink);
        trashAbilitiesTableCell3.appendChild(trashAbilitiesListComment);
      
        trashAbilitiesTableRow.appendChild(trashAbilitiesTableCell2);
        trashAbilitiesTableRow.appendChild(trashAbilitiesTableCell3);
        trashAbilitiesTable.appendChild(trashAbilitiesTableRow);
        trashAbilitiesTableRow = document.createElement("tr");
      });
    });
    article.appendChild(trashAbilitiesTable);
  }

  content.appendChild(article);
});
