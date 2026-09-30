// Site copy, RO (primary) + EN. Source: brief.yaml / docs/client-brief.yaml.
// Keys are shared across languages; the language toggle swaps them client-side.

export const contact = {
  phone: '+40 741 541 473',
  phoneHref: 'tel:+40741541473',
  phoneDisplay: '0741 541 473',
  email: 'robert_turda88@yahoo.com',
  facebook: 'https://www.facebook.com/robert.turda',
  instagram: 'https://www.instagram.com/robert_turda',
};

const coachingSince = 2015;
export const yearsCoaching = new Date().getFullYear() - coachingSince;

type Dict = Record<string, string>;

const ro: Dict = {
  'meta.title': 'Robert Turda — Antrenor Kickboxing, Box & Personal Trainer | Sighetu Marmației',
  'meta.description':
    'Vicecampion Mondial Kickboxing. Antrenorul care a format Campionul Mondial WKF Daniel Rohnean. Kickboxing, box, TRX și antrenament personal la Academia Robert Turda — Sighetu Marmației și Ocna Șugatag.',

  'nav.stats': 'Palmares',
  'nav.story': 'Povestea',
  'nav.disciplines': 'Discipline',
  'nav.champion': 'Campionul',
  'nav.contact': 'Contact',
  'nav.call': 'Sună',
  'nav.lang': 'Switch to English',
  'skip': 'Sari la conținut',

  'hero.headline': 'Disciplina care face <u>campioni</u>',
  'hero.sub': 'Vicecampion Mondial Kickboxing. Antrenorul Campionului Mondial WKF.',
  'hero.cta': 'Începe antrenamentul',
  'hero.secondary': 'Scrie pe Facebook',

  'stats.title': 'Palmares',
  'stats.1': 'Vicecampion Mondial & European',
  'stats.2': 'Campion Mondial format — Daniel Rohnean, WKF 2021',
  'stats.3': 'Ani de antrenat campioni',

  'story.title': 'Povestea',
  'story.lead':
    'Nu predau nimic ce n-am trăit. Fiecare tehnică din sală am dus-o în ring — de la primul meci de box până la finala de la Cairo.',
  'story.t1.when': '12 ani',
  'story.t1.what': 'Intru prima dată într-o sală de box. Fundamentele de atunci le predau și azi.',
  'story.t2.when': 'Kickboxing',
  'story.t2.what': 'Trec la kickboxing și obțin licența de instructor.',
  'story.t3.when': '2015',
  'story.t3.what': 'Fondez Academia Robert Turda la Ocna Șugatag, apoi o extind la Sighetu Marmației.',
  'story.t4.when': '2019',
  'story.t4.what': 'Vicecampion European WKF la Baia Mare.',
  'story.t5.when': '2021',
  'story.t5.what': 'Vicecampion Mondial WKF la Cairo, 91 kg. În același turneu, elevul meu Daniel Rohnean devine campion mondial.',
  'story.t6.when': 'Azi',
  'story.t6.what': 'Antrenez la Academie și ca antrenor personal la Gym Stronger Every Step.',

  'tape.title': 'Fișa luptătorului',
  'tape.weight.k': 'Categoria',
  'tape.weight.v': '91 kg',
  'tape.style.k': 'Stil',
  'tape.style.v': 'Kickboxing WKF',
  'tape.start.k': 'Primul antrenament',
  'tape.start.v': 'Box, la 12 ani',
  'tape.coach.k': 'Antrenor din',
  'tape.coach.v': '2015',
  'tape.base.k': 'Săli',
  'tape.base.v': 'Sighetu Marmației, Ocna Șugatag',

  'quote.text': 'Motivația dispare în două, trei săptămâni, maxim o lună, însă cu disciplina poți persevera în continuare!',

  'disc.title': 'Discipline',
  'disc.intro':
    'Cursuri pentru copii, juniori și adulți — de la primul antrenament până la performanță internațională.',
  'disc.kick.name': 'Kickboxing',
  'disc.kick.desc':
    'Pentru toate nivelurile — începători, amatori și sportivi de performanță. Tehnici de lovitură, condiție fizică, strategie de luptă. Copii și adulți.',
  'disc.box.name': 'Box',
  'disc.box.desc':
    'Box clasic — fundamentele loviturilor, footwork, apărare și condiție fizică de înalt nivel. O bază solidă și pentru kickboxing sau MMA.',
  'disc.trx.name': 'TRX & Antrenament Personal',
  'disc.trx.desc':
    'La Gym Stronger Every Step — TRX, circuite funcționale, condiție fizică generală. Adaptat obiectivului tău: slăbire, tonifiere sau performanță.',
  'disc.kids.name': 'Copii & Juniori',
  'disc.kids.desc':
    'Disciplină, coordonare, respect și primele tehnici de arte marțiale. Un mediu sigur și structurat, cu rezultate la nivel național și mondial.',
  'disc.comp.name': 'Pregătire Competițională',
  'disc.comp.desc':
    'Pentru sportivii care țintesc competiții regionale, naționale sau internaționale — pregătire pe care o fac pentru Campionatele Europene și Mondiale WKF.',

  'champ.title': 'Un elev. Un campion mondial.',
  'champ.body':
    'Daniel Rohnean a început antrenamentele la Academia Robert Turda în 2018, la vârsta de 10 ani. În octombrie 2021, la 13 ani, a cucerit titlul de Campion Mondial WKF la juniori (categoria 54 kg) la Cairo, Egipt — câștigând finala în fața unui sportiv gazdă.',
  'champ.poster.label': 'Campion Mondial',
  'champ.poster.meta': 'WKF Juniori, 54 kg',
  'champ.poster.place': 'Cairo, 2021',
  'champ.from': '2018 — primul antrenament, 10 ani',
  'champ.to': '2021 — campion mondial, 13 ani',

  'contact.kicker': 'Începe azi',
  'contact.headline': 'Primul pas spre campionat începe acum',
  'contact.sub': 'Kickboxing, box, TRX și antrenament personal în Sighetu Marmației și Ocna Șugatag.',
  'contact.cta': 'Sună acum',
  'contact.fb': 'sau scrie pe Facebook',
  'contact.email': 'Email',

  'footer.rights': 'Toate drepturile rezervate.',
  'footer.places': 'Sighetu Marmației & Ocna Șugatag',
};

const en: Dict = {
  'meta.title': 'Robert Turda — Kickboxing, Boxing & Personal Trainer | Sighetu Marmației',
  'meta.description':
    'Kickboxing World Vice-Champion. The coach who trained WKF World Champion Daniel Rohnean. Kickboxing, boxing, TRX and personal training at Academia Robert Turda — Sighetu Marmației and Ocna Șugatag.',

  'nav.stats': 'Record',
  'nav.story': 'Story',
  'nav.disciplines': 'Disciplines',
  'nav.champion': 'Champion',
  'nav.contact': 'Contact',
  'nav.call': 'Call',
  'nav.lang': 'Treci la română',
  'skip': 'Skip to content',

  'hero.headline': 'The discipline that makes <u>champions</u>',
  'hero.sub': 'Kickboxing World Vice-Champion. Coach of the WKF World Champion.',
  'hero.cta': 'Start training',
  'hero.secondary': 'Message on Facebook',

  'stats.title': 'Record',
  'stats.1': 'World & European Vice-Champion',
  'stats.2': 'World Champion coached — Daniel Rohnean, WKF 2021',
  'stats.3': 'Years coaching champions',

  'story.title': 'The story',
  'story.lead':
    "I don't teach anything I haven't lived. Every technique in the gym I've taken into the ring — from my first boxing bout to the final in Cairo.",
  'story.t1.when': 'Age 12',
  'story.t1.what': 'I walk into a boxing gym for the first time. I still teach those fundamentals today.',
  'story.t2.when': 'Kickboxing',
  'story.t2.what': 'I move to kickboxing and earn my instructor licence.',
  'story.t3.when': '2015',
  'story.t3.what': 'I found Academia Robert Turda in Ocna Șugatag, then expand it to Sighetu Marmației.',
  'story.t4.when': '2019',
  'story.t4.what': 'WKF European Vice-Champion in Baia Mare.',
  'story.t5.when': '2021',
  'story.t5.what': 'WKF World Vice-Champion in Cairo, 91 kg. At the same event, my student Daniel Rohnean becomes world champion.',
  'story.t6.when': 'Today',
  'story.t6.what': 'I coach at the Academy and as a personal trainer at Gym Stronger Every Step.',

  'tape.title': 'Tale of the tape',
  'tape.weight.k': 'Weight class',
  'tape.weight.v': '91 kg',
  'tape.style.k': 'Style',
  'tape.style.v': 'WKF Kickboxing',
  'tape.start.k': 'First session',
  'tape.start.v': 'Boxing, age 12',
  'tape.coach.k': 'Coaching since',
  'tape.coach.v': '2015',
  'tape.base.k': 'Gyms',
  'tape.base.v': 'Sighetu Marmației, Ocna Șugatag',

  'quote.text': 'Motivation fades in two or three weeks, maybe a month — but discipline keeps you going.',

  'disc.title': 'Disciplines',
  'disc.intro': 'Classes for kids, juniors and adults — from the first session to international competition.',
  'disc.kick.name': 'Kickboxing',
  'disc.kick.desc':
    'For every level — beginners, amateurs and competitive athletes. Striking technique, conditioning, fight strategy. Kids and adults welcome.',
  'disc.box.name': 'Boxing',
  'disc.box.desc':
    'Classic boxing — punch fundamentals, footwork, defence and high-level conditioning. Also a solid base for kickboxing or MMA.',
  'disc.trx.name': 'TRX & Personal Training',
  'disc.trx.desc':
    'At Gym Stronger Every Step — TRX, functional circuits, general fitness. Built around your goal: weight loss, toning or athletic performance.',
  'disc.kids.name': 'Kids & Juniors',
  'disc.kids.desc':
    'Discipline, coordination, respect and first martial arts techniques. A safe, structured environment with national and world-level results.',
  'disc.comp.name': 'Competition Prep',
  'disc.comp.desc':
    'For athletes targeting regional, national or international events — the same preparation behind athletes at WKF European and World Championships.',

  'champ.title': 'One student. One world champion.',
  'champ.body':
    'Daniel Rohnean began training at Academia Robert Turda in 2018, aged 10. In October 2021, at 13, he became WKF Junior World Champion (54 kg) in Cairo, Egypt — winning the final against a home-country athlete.',
  'champ.poster.label': 'World Champion',
  'champ.poster.meta': 'WKF Juniors, 54 kg',
  'champ.poster.place': 'Cairo, 2021',
  'champ.from': '2018 — first session, age 10',
  'champ.to': '2021 — world champion, age 13',

  'contact.kicker': 'Start today',
  'contact.headline': 'The first step toward championship starts now',
  'contact.sub': 'Kickboxing, boxing, TRX and personal training in Sighetu Marmației and Ocna Șugatag.',
  'contact.cta': 'Call now',
  'contact.fb': 'or message on Facebook',
  'contact.email': 'Email',

  'footer.rights': 'All rights reserved.',
  'footer.places': 'Sighetu Marmației & Ocna Șugatag',
};

export const dict = { ro, en };
export const t = (key: string) => ro[key] ?? key;
