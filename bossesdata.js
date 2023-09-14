window.bosses = [
  {
    id: "LordMarrowgar",
    wowhead: "https://www.wowhead.com/wotlk/npc=36612/lord-marrowgar",
    name: "Lord Marrowgar",
    abilities: [
      {
        abilityId: 69055,
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
        comment: 'Клів перед їбалом. Танки повинні стакнутись і ділити дамаг.\n Мілі, не забігайте перед їбалом босса',
      },
      {
        abilityId: 69146,
        comment: 'Не стояти у вогні. Рдд взяти мінімальний спред',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69057,
        comment: 'Рдд свічаться в рдд спайки. Мілі свічаться в мілі спайки.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: true,
          rdps: true,
        },
      },
      {
        abilityId: 69075,
        comment: 'Не стояти в мілі у крутілки. Під початковий каст прожати сакру.\n Працюють: Боп + гімн. Боп + транквіл.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/JReVprPW9RA", comment: "афлік", },
      { link: "https://youtu.be/g7_o6ISpoLo", comment: "демон", },
      { link: "https://youtu.be/iqdq60lxoXM", comment: "протпал", },
      { link: "https://youtu.be/jRikgDTWGl8", comment: "анхолі дк", },
      { link: "https://youtu.be/euvY1Cs2IHU", comment: "гайд від жорді" },
    ],
  },
  {
    id: "LadyDeathwhisper",
    wowhead: "https://www.wowhead.com/wotlk/npc=36855/lady-deathwhisper",
    name: "Lady Deathwhisper",
    abilities: [
      {
        abilityId: 70842,
        comment: 'Фаза 1. Поки не спалиш всю ману, босс не двигається і не пиздить з руки. Наносиш дамаг - палиш ману',
      },
      {
        abilityId: 71254,
        comment: 'Фаза 1. Кастує шадоуболт в поточний таргет',
      },
      {
        abilityId: 71001,
        comment: 'Фаза 1 + Фаза 2. Тупо D&D, як у дк, тіки зелена. Просто вийти з неї.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71289,
        comment: 'Фаза 1 + Фаза 2. Бере в МК 3 рандомних гравці. Треба по таймеру СТОПАТИ КЛІВ і давати в цих гравців контролі.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: true,
          rdps: true,
        },
      },
      {
        abilityId: 70901,
        comment: 'Фаза 1. Бафає бомжів.',
      },
      {
        abilityId: 71420,
        comment: 'Просто кікать каст.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 71204,
        comment: 'Знижує агргогенерацію танка. Босс не таунтиться, тому треба обережно з трітом на дд.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: true,
        },
      },
    ],
    trash: [
      {
        npcId: 37949,
        abilities: [
          {
            abilityId: 67719,
            comment: 'Просто дебаф, як у дк',
          },
          {
            abilityId: 70901,
            comment: 'Бафається і всі абілки починають бити в АоЕ',
          },
          {
            abilityId: 70594,
            comment: 'Солотаргет шадоуболт',
          },
          {
            abilityId: 70906,
            comment: 'АоЕ плюха в таргет 10 ярдів',
          },
          {
            abilityId: 71237,
            comment: 'Курса, збільшує кд на абілки на 15 сек.',
          },
          {
            abilityId: 70903,
            comment: 'Моб взривається, наносить дамаг в АоЕ і перероджується.',
          },
          {
            abilityId: 71234,
            comment: 'Після відродження моб імунний до магії. Фіз дд повинні його зафокусити.',
          },
        ],
      },
      {
        npcId: 37890,
        abilities: [
          {
            abilityId: 70659,
            comment: 'Вішає на танка абсорб хіла.',
          },
          {
            abilityId: 70674,
            comment: 'Моб бафається, збільшує дамаг. Дає отхіл від дамага.\n Треба здіспелити, в ідеалі СПЕЛСТІЛ ВІД МАГІВ.',
          },
          {
            abilityId: 70900,
            comment: 'Бафає дамаг моба.',
          },
          {
            abilityId: 70670,
            comment: 'Конусне АоЕ перед їбалом (у більшості випадків - ваншот)',
          },
          {
            abilityId: 70903,
            comment: 'Моб взривається, наносить дамаг в АоЕ і перероджується.',
          },
          {
            abilityId: 71235,
            comment: 'Після відродження моб імунний до фіз дамага. Кастери повинні його зафокусити.',
          },
        ],
      },
    ],
    videos: [
      { link: "https://youtu.be/hbs4SiR_cJU?t=7020", comment: "афлік, з таймінгом", },
      { link: "https://youtu.be/_EZl4aew2AU", comment: "фурік", },
      { link: "https://youtu.be/EFPfCcoK9Dg", comment: "гайд від жорді" },
    ],
  },
  {
    id: "DeathbringerSaurfang",
    wowhead: "https://www.wowhead.com/wotlk/npc=37813/deathbringer-saurfang",
    name: "Deathbringer Saurfang",
    abilities: [
      {
        abilityId: 72371,
        comment: 'Саурфанг стакає на собі баф на + дамаг. 1 енергії = 1% дамага.',
      },
      {
        abilityId: 72178,
        comment: 'Саурфанг отримує +1 енергії кожен раз коли він, або моби наносять дамаг абілкою.',
      },
      {
        abilityId: 72293,
        comment: 'Основна механіка для хілів. Як тіки босс набирає 100 енергії він кидає в рандомний таргет марку. Марка не знімається, залишається на гравці до кінця бою. Наносить фіз дамаг. Можна кинути боп, шоб гравець не отримував дамаг.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72737,
        comment: 'На 30% хп босс отримує баф.',
      },
      {
        abilityId: 72385,
        comment: 'Бладбойл, кастується в три рандомних таргета, ніяк не доджиться. Тупо прохілити.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72380,
        comment: 'Кастується в рандомний таргет. Наносить дамаг в АоЕ 12 ярдів. Треба спред.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: true,
        },
      },
      {
        abilityId: 72408,
        comment: 'Основна механіка для танків. Кидається в поточного танка. Другий танк в цей момент повинен забрати босса.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72173,
        comment: 'Босс викликає 5 мобів, яких потрібно таргетно злити. Є штраф на АоЕ по ним. Цим займаються РДД. * Мобів можна сповільнювати, станити, відкидати.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: false,
          rdps: true,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/k7wu5DpxFDI", comment: "афлік", },
      { link: "https://youtu.be/BX1R5jLGVqg", comment: "гайд від жорді" },
    ],
  },
  {
    id: "Festergut",
    wowhead: "https://www.wowhead.com/wotlk/npc=36626/festergut",
    name: "Festergut",
    abilities: [
      {
        abilityId: 69161,
        comment: 'Наповнює кімнату газом і дамажить всіх гравців. Треба просто прохілить.',
      },
      {
        abilityId: 69165,
        comment: 'Стакає баф на боссі. 1 стак = 30% бонус дамаг. Максимум 3 стака.',
      },
      {
        abilityId: 69195,
        comment: 'Наносить дамаг по всьому рейду. Майже гарантований ваншот. Кастується замість кожного четвертого "Gaseous Blight". Скидає стаки бонус дамага з босса.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69279,
        comment: 'Основнап механіка для рейду. Спора, виглядає як спори на лотхібі. Вішається на три рандомних гравці. Наносить відносно малий дамаг в АоЕ, але дає можливість задоджити Pungent Blight. 1 гравець повинен зайти в мілі, 1 в рдд. В цих гравців потрібно стакнутись.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72219,
        comment: 'Основна механіка для танків. Стакає дебаф на танку. Який дає +10% до дамага.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72227,
        comment: 'Якшо на танку настакається 10 стаків дебафа, то його ваншотне, а по рейду пройде ~50к дамага. Це 99% вайп.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72272,
        comment: 'Кидається в рандомний таргет. Дізорієнт + дамаг. Дамажить всіх в АоЕ 8 ярдів. Доджиться спредом.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: true,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/hbs4SiR_cJU?t=15825", comment: "афлік, з таймінгом", },
    ],
  },
  {
    id: "Rotface",
    wowhead: "https://www.wowhead.com/wotlk/npc=36627/rotface",
    name: "Rotface",
    abilities: [
      {
        abilityId: 69789,
        comment: 'Під час бою з боссом кімната буде частково затоплюватись зеленим слизом. Стояти в ньому не можна, він сповільнює і наносить дамаг.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69508,
        comment: 'Вибирає рандомний таргет і кастує в нього конусну АоЕшку. Просто відійдіть від морди.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69674,
        comment: 'Кидає в рандомний таргет дебаф. Наносить ~5к дамага. Знижує хіл на 75%. Через 12 секунд дебаф пропадає і на місці цього гравця спавниться маленький слизнюк. Слинзнюків має забрати оффтанк і кайтити під станками. Якшо в гравця кидається дебаф він повинен винести його між слизнюками які вже є і оффтанком. Шоб стакнути слизнюків.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69774,
        comment: 'Слизнюки плюють в свій таргет зелену соплю. Дамажить в АоЕ і сповільнює.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69750,
        comment: 'Коли маленькі слизнюки стакаються проходить АоЕ дамаг в маленькому радіусі.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69760,
        comment: 'Коли великі слизнюки стакаються проходить АоЕ дамаг в маленькому радіусі.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69558,
        comment: 'Коли великий слизнюк хаває якогось іншого слизнюка стакає на собі баф на +20% дамага.',
      },
      {
        abilityId: 69839,
        comment: 'Коли великий слизнюк набирає 5 стаків бафа він взривається і розлітається на 8 кусків, які нанесуть по ~15к дамага в рандомних гравців і АоЕ в 6 ярдів. Треба спред.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/hbs4SiR_cJU?t=16320", comment: "афлік, з таймінгом", },
    ],
  },
  {
    id: "ProfessorPutricide",
    wowhead: "https://www.wowhead.com/wotlk/npc=36678/professor-putricide",
    name: "Professor Putricide",
    abilities: [
      {
        abilityId: 70346,
        comment: 'Зелена калюжа, дамажить і росте з часом. Треба випивати зомбаком. Регенить зомбаку енергію.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70351,
        comment: 'Проф. спавнить слизнюків. Оранжевих (Gas Cloud)/зелених (Ooze Cloud). Слизнюків треба таргетно убити. Вони не танчаться, обираються рандомний таргет і тупо йдуть до нього. Убити потрібно до того як слизнюк дойде до таргета.',
      },
      {
        abilityId: 70352,
        comment: 'Проф. дебафає рандомного гравця. Цей гравець може бити тіки зелених слизнюків (Ooze Cloud)',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: true,
          rdps: true,
        },
      },
      {
        abilityId: 70353,
        comment: 'Проф. дебафає рандомного гравця. Цей гравець може бити тіки оранжевих слизнюків (Gas Cloud)',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: true,
          rdps: true,
        },
      },
      {
        abilityId: 71255,
        comment: 'Проф позаду себе спавнить дві оранжевих бомби. Танк повинен відвести босса, шоб не вайпнути мілікемп.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 71621,
        comment: 'Перефазовка на 80% і 35% хп босса. Проф іде до свого стола і афк кастить хуйню.',
      },
      {
        abilityId: 71603,
        comment: 'Баф на боссі +50% хаста і +50% дамаг',
      },
      {
        abilityId: 72295,
        comment: 'Босс кидає зелений шар в рандомний таргет і шар пригає. Наносить АоЕ дамаг і дебафає хасту на 200%. Треба відбігти.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: true,
        },
      },
      {
        abilityId: 70405,
        comment: 'Фаза 3. Стакає на танку дебаф. Дебаф дамажить рейд, з кожним стаком все більше. Якшо дебаф спаде з танка/танк помре - босс похілиться.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70672,
        comment: 'Оранжевий слизнюк, коли вибирає собі таргет, вішає на цей таргет 10 стаків дебафа. З кожною секундою 1 стак зникає.',
      },
      {
        abilityId: 70701,
        comment: 'Оранжевий слизнюк, коли доходить до свого таргета наносить рейду дамаг в залежності від кількості стаків дебафа на таргеті.',
      },
      {
        abilityId: 70447,
        comment: 'Зелений слизнюк, рутає свій таргет. Якшо доходить, то наносить ~250к дамага, в АоЕ. Цей дамаг сплітається на всіх хто його отримав',
      },
      {
        abilityId: 70311,
        comment: 'Гравець випиває банку зі столу профа "DRINK ME". І перетворюється на зомбака. Зомбак розвалюється на третій фазі і калюжі пити вже нікому, з часом вони заповнять всю кімнату. (софтенрейдж)',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70360,
        comment: 'Абілка зомбака. Випиває зелену калюжу.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70539,
        comment: 'Абілка зомбака. Дамажить таргет і сповільнює на 50%',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70542,
        comment: 'Абілка зомбака. Дамажить і знижує армор таргета на 4%, 5 стаків. Тупо сандер.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70911,
        comment: 'Чума, вішається на рандомний таргет. Не декурситься, не діспелиться, не лічиться. З кожним тіком дамаг від чуми зростає. Чума перекидається на сусідній таргет',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70953,
        comment: 'Коли гравець скинув чуму, він отримує цей дебаф. Збільшує кількість дамага від чуми на 250%. Цей гравець повинен доджити чуму.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ],
  },
  {
    id: "BloodPrinceConcuil",
    wowhead: "https://www.wowhead.com/wotlk/npc=37970",
    name: "Blood Prince Concuil",
    abilities: [
      {
        abilityId: 73001,
        comment: 'Коли гравець рухається він отримує дамаг і стак дебафа. З кожним стаком дебафа дамаг збільшується, 10 сек на місці - стаки скидаються.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71943,
        comment: 'Келесет. Спавнить шадоу орби, вони дамажать свій таргет по 1000 і стакають дебаф на зниження входящого шадоу дамага.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71405,
        comment: 'Келесет. Шадоуболт в свій таргет ~19к',
      },
      {
        abilityId: 70981,
        comment: 'Келесет. Босс тупо бафається і може кастанути імпрувнутий шб',
      },
      {
        abilityId: 71815,
        comment: 'Келесет. Імпрувнутий шб в свій таргет. ~97к',
      },
      {
        abilityId: 71807,
        comment: 'Талдарам. Конусне АоЕ перед їбалом. Дамажить 8 секунд, сповільнює. Не стояти перед їбалом.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 71718,
        comment: 'Талдарам. Кидає вогняний шар в рандомний таргет і наносить дамаг в АоЕ 15 ярдів. Треба відійти від таргета. Летить повільно.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70982,
        comment: 'Талдарам. Босс тупо бафається і може кастанути імпрувнутий вогняний шар',
      },
      {
        abilityId: 72040,
        comment: 'Талдарам. Кидає імпрувнутий вогняний шар в рандомний таргет і наносить дамаг в АоЕ 15 ярдів. Потрібно стати на шляху вогняного шара, але не біля таргета. Зняти з шара стаки, інакше таргет ваншотне',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72053,
        comment: 'Валанар. Білий шар, повільно спускається до землі. Якшо спуститься до землі кнокає всіх гравців і дамажить. Якшо орбу продамажити - вона знов підніметься вгору. Зазвичай, на них просто відправляють петів і забиваюють хуй.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72037,
        comment: 'Валанар. На землі з\'являється вортекс, який згодом продамажить всіх в радіусі 13 ярдів і відкине. Просто вийти з нього',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70952,
        comment: 'Валанар. Босс тупо бафається і може кастанути імпрувнутий вортекс',
      },
      {
        abilityId: 72039,
        comment: 'Валанар. Вішає на всіх гравців дебаф, який згодом візрветься і відкине сусідніх гравців. потрібно спреднутись /range 12',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/JQvxCcuPhZs?t=90", comment: "афлік, з таймінгом", },
    ],
  },
  {
    id: "Blood-QueenLana'Thel",
    wowhead: "https://www.wowhead.com/wotlk/npc=37955/blood-queen-lanathel",
    name: "Blood-Queen Lana'Thel",
    abilities: [
      {
        abilityId: 70986,
        comment: 'Просто аура яка дамажить, не доджиться, треба прохілювати',
      },
      {
        abilityId: 71623,
        comment: 'Дотка, яка вішається в ОТ',
        importantFor: {
          everyone: false,
          tank: true,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70821,
        comment: 'Дебаф, який вішається в найближчий до МТ таргет (повинен бути ОТ). І наносить 100% від дамага який отримує МТ в ОТ, як шадоудамаг.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71726,
        comment: 'Ланатель кусає рандомний таргет (1 раз за файт) і перетворює його в вампіра',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70867,
        comment: 'Коли Ланатель укусила гравця, на ньому з\'являється дебаф. Який дає +100% дамага. Гравець хілиться від свого дамага і не генерує тріт.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70877,
        comment: 'Дебаф на "вампірі", потрібно вкусити когось в рейді, бо попадеш в МК',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70923,
        comment: 'Якшо гравець не кусає когось за 15 секунд він потрапляє в МК. Скоріше всього, це вайп',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71340,
        comment: 'Зв\'язує рандомних гравцім червоними лучиками, гравці дамажать сусідні таргети. Гравці повинні збігтись і лучики пропадуть.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71265,
        comment: 'Дебаф, спавнить під тобою войдзони. ~джераксус файт. Войдзони потрібно ШВИДКО винести під стіни.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71446,
        comment: 'АоЕ 6 ярдів в рандомний таргет. РДД повинні спреднутись. Мілі поділитись на 2 кемпа',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 71772,
        comment: 'Фаза 2. Ланатель злітає і спамить свої АоЕшки. Рейд повинен спреднутись',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/JQvxCcuPhZs?t=3050", comment: "афлік, з таймінгом", },
    ],
  },
  {
    id: "ValithriaDramwalker",
    wowhead: "https://www.wowhead.com/wotlk/npc=36789/valithria-dreamwalker",
    name: "Valithria Dramwalker",
    abilities: [
      {
        abilityId: 72482,
        comment: 'Під час бою з боссом з\'являються портали. Спочатку це просто зелені кружечки, згодом на їх місці з\'являться портали. Хіли (хпали/шаман) повинні зайти в ці портали',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70873,
        comment: 'В порталах є зелені сфери, коли гравець торкається цих сфер вони взриваються і вішають дебаф на гравців в невеликому АоЕ. Дебаф стакається і дає багато МП5 і +хіл',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
    ],
    trash: [
      {
        npcId: 37868,
        abilities: [
          {
            abilityId: 70759,
            comment: 'АоЕ фростболти, як у Кел\'Тузада',
          },
          {
            abilityId: 71179,
            comment: 'Визиває на рандомному гравці войда, який сосе ману в радіусі 6',
          },
          {
            abilityId: 70702,
            comment: 'Відмічає рандомне місце і дає туда АоЕ на 3 ярда. Дамажить і підкидає',
          },
        ],
      },
      {
        npcId: 36791,
        abilities: [
          {
            abilityId: 69325,
            comment: 'Вішає вогняний щит на себе, наносить дамаг по всім. Моба нада швидко зливати',
          },
          {
            abilityId: 70754,
            comment: 'Тупо фаєрбол',
          },
        ],
      },
      {
        npcId: 37863,
        abilities: [
          {
            abilityId: 70588,
            comment: 'Ченнелінг спел, зменшує хіл таргета на 10%',
          },
        ],
      },
      {
        npcId: 37934,
        abilities: [
          {
            abilityId: 70751,
            comment: 'Стакає -армор автоатаками + дотка',
          },
          {
            abilityId: 70744,
            comment: 'Взривається, наносить дамаг і вішає дотку на 20 секунд. Потрібно відійти перед смертю моба',
          },
        ],
      },
      {
        npcId: 37886,
        abilities: [
          {
            abilityId: 70633,
            comment: 'Конусне АоЕ, наносить дамаг і вішає дотку на 12 секунд. +25% входящого фіз дамага.',
          },
        ],
      },
      {
        npcId: 37907,
        abilities: [
          {
            abilityId: 72963,
            comment: 'Жук спавниться після смерті обома. Автоатаками вішає дотку на 8 секунд.',
          },
        ],
      },
    ]
  },
  {
    id: "Sindragosa",
    wowhead: "https://www.wowhead.com/wotlk/npc=36853/sindragosa",
    name: "Sindragosa",
    abilities: [
      {
        abilityId: 70084,
        comment: 'Phase 1/3: Land. Фростаура, яка просто дамажить весь рейд. Як сапфірон в наксі.',
      },
      {
        abilityId: 19983,
        comment: 'Phase 1/3: Land. Клів перед їбалом. Як любий дракон.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 71077,
        comment: 'Phase 1/3: Land. Пиздить хвостом. Як любий дракон.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 69649,
        comment: 'Phase 1/3: Land. Конусна АоЕшка перед їбалом.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 70107,
        comment: 'Phase 1/3: Land. Ваші фіз атаки стакають на вас дебаф.\n Кожен стак дебафа - 1000 дамага/2 сек.\n Стопнув ДПС - скинув стаки і можна бити далі.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: true,
          rdps: false,
        },
      },
      {
        abilityId: 69762,
        comment: 'Phase 1/3: Land. Дебаф. Поки він на тобі є і ти шось кастуєш. Ти стакаєш дебаф. І получаєш в їбало 2к дамага. Більше кастуєш - більше дамага получаєш. - За кожен каст вішається стак дебафу Instability',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: false,
          rdps: true,
        },
      },
      {
        abilityId: 69766,
        comment: 'Phase 1/3: Land. Після закінченння дебафу Unchained Magic або коли ти перестанеш кастувати, через 5 сек , в залежності від кількості стаків ти взриваєшся в АОЕ, можна подохнути і ваншотнути всіх навколо.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: false,
          rdps: true,
        },
      },
      {
        abilityId: 70117,
        comment: 'Phase 1/3: Land. Стягує весь рейд в центр модельки босса',
      },
      {
        abilityId: 70123,
        comment: 'Phase 1/3: Land. Потрібно просто відбігти, якщо не встигаєш - жмеш імун, бо ваншот.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70126,
        comment: 'Phase 2: Air. Відмічає рандомних гравців, в них згодом кинеться томба',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70157,
        comment: 'Phase 2: Air. Томба, дамажить і заморожує гравця і всіх в радіусі 10. Гравців потрібно прохілити. Томби убити під кінець Air фази, а не одразу.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70521,
        comment: 'Phase 2: Air. Поки Сіндрагоса літає вона плює АоЕшки в рандомне місце на платформі, спочатку це виглядає як синє коло, потім туди прилітає сфера. Доджиться заходом за томбу. Якшо не задоджив і не фул хп = смерть',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70128,
        comment: 'Phase 3: Land. Сіндрагоса дебафає всіх кого бачить на 15% входящого маг. дамага. Кожні 5 сек. Можна доджити за томбою.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70157,
        comment: 'Phase 3: Land. Сіндрагоса кидає в рандомний таргет томбу, гравець повинен вибігти із рейда, щоб нікого не задамажити. І щоб всім було зручно зайти за томбу.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ]
  },
  {
    id: "TheLichKing",
    wowhead: "https://www.wowhead.com/wotlk/npc=36597/the-lich-king",
    name: "The Lich King",
    abilities: [
      {
        abilityId: 70358,
        comment: 'Призиває 3 гулі, ОТ забирає.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70372,
        comment: 'Призиває здорового врайкула, ОТ забирає.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72149,
        comment: 'Конусна АоЕшка врайкула',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72143,
        comment: 'Врайкул бафається на х2 дамаг.',
      },
      {
        abilityId: 73539,
        comment: 'Призиває під рандомним таргетом войдзону, войдзона тамажить через 3 секунди, потрібно вийти. РДД рухаються одним кемпом і потихеньку засирають платформу цими войдзонами.',
      },
      {
        abilityId: 70337,
        comment: 'Болячка, вішається на рандомний таргет. Висить 15 секунд, дамажить кожних 5 секунд по 50к. При діспелі перекидається на інший рандомний таргет. При розвіюванні (діспел, смерть таргета) бафає ліча на 2% дамага. Треба виносити до ОТ, щоб чума  після діспелу переходила на Адів, яких танчить ОТ.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 70541,
        comment: 'Дебаф, вішається на рандомний таргет, продамажує весь рейд при навішуванні і додатково вішає доту на таргет, яка з часом сильніше дамажить, зникає коли прохілити таргет на 90%+ хп.\n ~ як мітка на джераксусі, треба прохілити через дебаф.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69037,
        comment: 'Сумонить валькірію, яка хватає рандомного гравця і виносить з платформи. Валькірію можно сповільнювати, і потрібно вбити.\n * Якшо валькірія взяла варлока, або ханта, то в них є портал/відрив і валькірію можна ігнорувати.',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: true,
          rdps: true,
        },
      },
      {
        abilityId: 69409,
        comment: 'Вйобує в танка 70к дамага і бафає ліча на 100% хаст на 5 секунд.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: true,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72754,
        comment: 'Здорова чорна войдзона. Якшо гравці отримають від неї дамаг - вона росте. Потрібно вибігати МОМЕНТАЛЬНО.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 68981,
        comment: 'Ліч пиздує в центр і начинає АоЕшити в 45 ярдів.\n Підіймається пол на краю платформи.\n Треба с\'їбать на край платформи.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 72262,
        comment: 'Після каста АоЕшки край платформи обсипається.\n Треба с\'їбать з края платформи, пока він не обвалився.',
        importantFor: {
          everyone: true,
          tank: false,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69103,
        comment: 'Призиває льодяні сфери, які летять до рандомного гравця з центру кімнати, їх потрібно вбити (РДД)',
        importantFor: {
          everyone: false,
          tank: false,
          healer: false,
          mdps: false,
          rdps: true,
        },
      },
      {
        abilityId: 72133,
        comment: 'Конусне АоЕ',
      },
      {
        abilityId: 69200,
        comment: 'Дух, який б\'є рандомний таргет, його потрібно вбити. ОТ танчить.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
      {
        abilityId: 69242,
        comment: 'У Raging Spirit є конусне АоЕ з сайленсом. Потрібно відвертати від рейда.',
        importantFor: {
          everyone: false,
          tank: true,
          healer: false,
          mdps: false,
          rdps: false,
        },
      },
    ],
    videos: [
      { link: "https://youtu.be/AHnx7B3wKXo", comment: "відос з піратки, з бафом і загіреним рейдом" }
    ]
  },
];