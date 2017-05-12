import {cloneDeep as _cloneDeep} from 'lodash';

export default {
  movie: (state = {
  all: [
    {
      'poster_path': '/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg',
      'adult': false,
      'overview': 'Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.',
      'release_date': '2016-11-15',
      'genre_ids': [
        27,
        53
      ],
      'id': 381288,
      'original_title': 'Split',
      'original_language': 'en',
      'title': 'Split',
      'backdrop_path': '/4G6FNNLSIVrwSRZyFs91hQ3lZtD.jpg',
      'popularity': 19.428332,
      'vote_count': 2359,
      'video': false,
      'vote_average': 6.8
    },
    {
      'poster_path': '/tkt9xR1kNX5R9rCebASKck44si2.jpg',
      'adult': false,
      'overview': 'Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor\'s daughter is kidnapped, Sparrow decides to help the girl\'s love save her. But their seafaring mission is hardly simple.',
      'release_date': '2003-07-09',
      'genre_ids': [
        12,
        14,
        28
      ],
      'id': 22,
      'original_title': 'Pirates of the Caribbean: The Curse of the Black Pearl',
      'original_language': 'en',
      'title': 'Pirates of the Caribbean: The Curse of the Black Pearl',
      'backdrop_path': '/fQZQYW9Hrg8TpYZH4KgbRptkcCN.jpg',
      'popularity': 17.634339,
      'vote_count': 5397,
      'video': false,
      'vote_average': 7.4
    },
    {
      'poster_path': '/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg',
      'adult': false,
      'overview': 'After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.',
      'release_date': '2016-10-25',
      'genre_ids': [
        28,
        12,
        14,
        878
      ],
      'id': 284052,
      'original_title': 'Doctor Strange',
      'original_language': 'en',
      'title': 'Doctor Strange',
      'backdrop_path': '/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg',
      'popularity': 16.603078,
      'vote_count': 3782,
      'video': false,
      'vote_average': 7
    },
    {
      'poster_path': '/qwoGfcg6YUS55nUweKGujHE54Wy.jpg',
      'adult': false,
      'overview': 'Captain Jack Sparrow is pursued by an old rival, Captain Salazar, who along with his crew of ghost pirates has escaped from the Devil\'s Triangle, and is determined to kill every pirate at sea. Jack seeks the Trident of Poseidon, a powerful artifact that grants its possessor total control over the seas, in order to defeat Salazar.',
      'release_date': '2017-05-24',
      'genre_ids': [
        28,
        12,
        14
      ],
      'id': 166426,
      'original_title': 'Pirates of the Caribbean: Dead Men Tell No Tales',
      'original_language': 'en',
      'title': 'Pirates of the Caribbean: Dead Men Tell No Tales',
      'backdrop_path': '/3DVKG54lqYbdh8RNylXeCf4MBPw.jpg',
      'popularity': 15.438268,
      'vote_count': 49,
      'video': false,
      'vote_average': 0
    },
    {
      'poster_path': '/gj282Pniaa78ZJfbaixyLXnXEDI.jpg',
      'adult': false,
      'overview': 'Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.',
      'release_date': '2014-11-18',
      'genre_ids': [
        878,
        12,
        53
      ],
      'id': 131631,
      'original_title': 'The Hunger Games: Mockingjay - Part 1',
      'original_language': 'en',
      'title': 'The Hunger Games: Mockingjay - Part 1',
      'backdrop_path': '/4PwyB0ErucIANzW24Kori71J6gU.jpg',
      'popularity': 14.767754,
      'vote_count': 4507,
      'video': false,
      'vote_average': 6.6
    },
    {
      'poster_path': '/muwaDIv5cLv2Z07CZFWOsL7lYuO.jpg',
      'adult': false,
      'overview': 'A man without attachments or responsibilities suddenly finds himself with an abandoned baby and leaves for London to try and find the mother. Eight years later after he and his daughter become inseparable Gloria\'s mother reappears.',
      'release_date': '2016-12-07',
      'genre_ids': [
        18,
        35
      ],
      'id': 382591,
      'original_title': 'Demain tout commence',
      'original_language': 'fr',
      'title': 'Tomorrow Everything Starts',
      'backdrop_path': '/kiIIOJbV8BCyatCmXqOdJEUXW3u.jpg',
      'popularity': 14.581167,
      'vote_count': 369,
      'video': false,
      'vote_average': 7.6
    },
    {
      'poster_path': '/sXf30F2HFpsFPXlNz7jpOySSV9I.jpg',
      'adult': false,
      'overview': 'When Mahendra, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
      'release_date': '2017-04-27',
      'genre_ids': [
        28,
        12,
        10752
      ],
      'id': 350312,
      'original_title': 'Baahubali 2: The Conclusion',
      'original_language': 'te',
      'title': 'Baahubali 2: The Conclusion',
      'backdrop_path': '/yCRYYGldFGVa4cmZVpTVCRQMfjA.jpg',
      'popularity': 14.141846,
      'vote_count': 61,
      'video': false,
      'vote_average': 6.2
    },
    {
      'poster_path': '/ylXCdC106IKiarftHkcacasaAcb.jpg',
      'adult': false,
      'overview': 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
      'release_date': '2016-11-29',
      'genre_ids': [
        35,
        18,
        10402,
        10749
      ],
      'id': 313369,
      'original_title': 'La La Land',
      'original_language': 'en',
      'title': 'La La Land',
      'backdrop_path': '/fp6X6yhgcxzxCpmM0EVC6V9B8XB.jpg',
      'popularity': 13.682184,
      'vote_count': 2958,
      'video': false,
      'vote_average': 7.8
    },
    {
      'poster_path': '/6w1VjTPTjTaA5oNvsAg0y4H6bou.jpg',
      'adult': false,
      'overview': 'Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart.',
      'release_date': '2015-03-18',
      'genre_ids': [
        12,
        878,
        53
      ],
      'id': 262500,
      'original_title': 'Insurgent',
      'original_language': 'en',
      'title': 'Insurgent',
      'backdrop_path': '/L5QRL1O3fGs2hH1LbtYyVl8Tce.jpg',
      'popularity': 13.630265,
      'vote_count': 3091,
      'video': false,
      'vote_average': 6.2
    },
    {
      'poster_path': '/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg',
      'adult': false,
      'overview': 'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
      'release_date': '2015-12-15',
      'genre_ids': [
        28,
        12,
        878,
        14
      ],
      'id': 140607,
      'original_title': 'Star Wars: The Force Awakens',
      'original_language': 'en',
      'title': 'Star Wars: The Force Awakens',
      'backdrop_path': '/njv65RTipNSTozFLuF85jL0bcQe.jpg',
      'popularity': 13.152344,
      'vote_count': 6613,
      'video': false,
      'vote_average': 7.5
    },
    {
      'poster_path': '/2LXAj56D3NKuJuT2jnD7CpDpJIG.jpg',
      'adult': false,
      'overview': 'Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called \'Fury\' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.',
      'release_date': '2014-10-15',
      'genre_ids': [
        10752,
        18,
        28
      ],
      'id': 228150,
      'original_title': 'Fury',
      'original_language': 'en',
      'title': 'Fury',
      'backdrop_path': '/pKawqrtCBMmxarft7o1LbEynys7.jpg',
      'popularity': 13.066379,
      'vote_count': 3294,
      'video': false,
      'vote_average': 7.4
    },
    {
      'poster_path': '/cGOPbv9wA5gEejkUN892JrveARt.jpg',
      'adult': false,
      'overview': 'Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.',
      'release_date': '2016-03-23',
      'genre_ids': [
        28,
        12,
        14
      ],
      'id': 209112,
      'original_title': 'Batman v Superman: Dawn of Justice',
      'original_language': 'en',
      'title': 'Batman v Superman: Dawn of Justice',
      'backdrop_path': '/vsjBeMPZtyB7yNsYY56XYxifaQZ.jpg',
      'popularity': 12.964215,
      'vote_count': 5594,
      'video': false,
      'vote_average': 5.6
    },
    {
      'poster_path': '/zSouWWrySXshPCT4t3UKCQGayyo.jpg',
      'adult': false,
      'overview': 'After the re-emergence of the world\'s first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.',
      'release_date': '2016-05-18',
      'genre_ids': [
        28,
        12,
        14,
        878
      ],
      'id': 246655,
      'original_title': 'X-Men: Apocalypse',
      'original_language': 'en',
      'title': 'X-Men: Apocalypse',
      'backdrop_path': '/oQWWth5AOtbWG9o8SCAviGcADed.jpg',
      'popularity': 12.878525,
      'vote_count': 3588,
      'video': false,
      'vote_average': 6.3
    },
    {
      'poster_path': '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
      'adult': false,
      'overview': 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      'release_date': '2009-12-10',
      'genre_ids': [
        28,
        12,
        14,
        878
      ],
      'id': 19995,
      'original_title': 'Avatar',
      'original_language': 'en',
      'title': 'Avatar',
      'backdrop_path': '/xSxlmtLz2NYtO07N4WexY1y53pl.jpg',
      'popularity': 12.659938,
      'vote_count': 10007,
      'video': false,
      'vote_average': 7.2
    },
    {
      'poster_path': '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      'adult': false,
      'overview': 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \'inception\', the implantation of another person\'s idea into a target\'s subconscious.',
      'release_date': '2010-07-14',
      'genre_ids': [
        28,
        53,
        878,
        9648,
        12
      ],
      'id': 27205,
      'original_title': 'Inception',
      'original_language': 'en',
      'title': 'Inception',
      'backdrop_path': '/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg',
      'popularity': 12.616996,
      'vote_count': 11660,
      'video': false,
      'vote_average': 8
    },
    {
      'poster_path': '/9zRzFJuaj0CHIOhAkcCcFTvyu2X.jpg',
      'adult': false,
      'overview': 'Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor\'s mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo\'s hands.',
      'release_date': '2014-12-10',
      'genre_ids': [
        28,
        12,
        14
      ],
      'id': 122917,
      'original_title': 'The Hobbit: The Battle of the Five Armies',
      'original_language': 'en',
      'title': 'The Hobbit: The Battle of the Five Armies',
      'backdrop_path': '/9tgt63Gk2C0Pu5Q8fkVO1TZuqW9.jpg',
      'popularity': 12.558191,
      'vote_count': 3939,
      'video': false,
      'vote_average': 7.1
    },
    {
      'poster_path': '/d6AipVF4SDYqxGeivfs3yzsNUs7.jpg',
      'adult': false,
      'overview': 'Kenny Wells, a modern-day prospector, hustler, and dreamer, is desperate for a lucky break. Left with few options, Wells teams up with an equally luckless geologist to execute a grandiose, last-ditch effort: to find gold deep in the uncharted jungle of Indonesia.',
      'release_date': '2016-12-22',
      'genre_ids': [
        12,
        80,
        18
      ],
      'id': 334524,
      'original_title': 'Gold',
      'original_language': 'en',
      'title': 'Gold',
      'backdrop_path': '/ssoXBG2h5afUGD4NwaeAtpSLjCx.jpg',
      'popularity': 12.522738,
      'vote_count': 169,
      'video': false,
      'vote_average': 6.5
    },
    {
      'poster_path': '/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg',
      'adult': false,
      'overview': 'The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John\'s fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.',
      'release_date': '2015-06-23',
      'genre_ids': [
        878,
        28,
        53,
        12
      ],
      'id': 87101,
      'original_title': 'Terminator Genisys',
      'original_language': 'en',
      'title': 'Terminator Genisys',
      'backdrop_path': '/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg',
      'popularity': 12.452108,
      'vote_count': 3136,
      'video': false,
      'vote_average': 5.8
    },
    {
      'poster_path': '/hGRfWcy1HRGbsjK6jF7NILmqmFT.jpg',
      'adult': false,
      'overview': 'The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.',
      'release_date': '2014-10-24',
      'genre_ids': [
        12,
        10751,
        16,
        28,
        35
      ],
      'id': 177572,
      'original_title': 'Big Hero 6',
      'original_language': 'en',
      'title': 'Big Hero 6',
      'backdrop_path': '/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg',
      'popularity': 12.440756,
      'vote_count': 5109,
      'video': false,
      'vote_average': 7.8
    },
    {
      'poster_path': '/mWiqc87iTs1qujxm2Q0NRzGvWSN.jpg',
      'adult': false,
      'overview': 'In the fourth installment of the fighting franchise, Boyka is shooting for the big leagues when an accidental death in the ring makes him question everything he stands for. When he finds out the wife of the man he accidentally killed is in trouble, Boyka offers to fight in a series of impossible battles to free her from a life of servitude',
      'release_date': '2017-04-18',
      'genre_ids': [
        28
      ],
      'id': 348893,
      'original_title': 'Boyka: Undisputed IV',
      'original_language': 'en',
      'title': 'Boyka: Undisputed IV',
      'backdrop_path': '/5dLLiR8IUT7T0r5HVcvRlItNWTn.jpg',
      'popularity': 12.3446,
      'vote_count': 177,
      'video': false,
      'vote_average': 5.5
    }
  ],
    }, action) => {
    switch (action.type) {

      case 'MENU_PIZZAS_SUCCESS':
      {
        let newState = {
          ..._cloneDeep(state),
          ...action.payload.data
        };

        return newState;
      }

      default:
        return state;
    }
  }
};