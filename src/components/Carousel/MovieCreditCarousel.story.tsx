import type { Meta, StoryObj } from '@storybook/react';

import MovieCreditCarousel from './MovieCreditCarousel';

const meta: Meta<typeof MovieCreditCarousel> = {
  component: MovieCreditCarousel,
};

export default meta;

type Story = StoryObj<typeof MovieCreditCarousel>;

export const Default: Story = {
  args: {
    credits: [
      {
        adult: false,
        backdrop_path: '/vWaZUVCuie6ycRAR6V5n0DYuoH2.jpg',
        genre_ids: [35, 18, 10749],
        id: 21297,
        original_language: 'hi',
        original_title: 'Wake Up Sid',
        overview:
          'Wake Up Sid! is the story of a lazy Mumbai college student who does absolutely nothing, with a turn of events will Sid realize his potential in this world and become a success in the fast-paced life of Mumbai.',
        popularity: 8.069,
        poster_path: '/1UpgW67W6Do0xizTuE26bMQFLdL.jpg',
        release_date: '2009-10-02',
        title: 'Wake Up Sid',
        video: false,
        vote_average: 7.2,
        vote_count: 143,
        character: "Sidharth 'Sid' Mehra",
        credit_id: '52fe4414c3a368484e00e2b5',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/80O0cGj8WoAX9lVhmbkq0JCZyWd.jpg',
        genre_ids: [10749, 35, 28],
        id: 24827,
        original_language: 'hi',
        original_title: 'अजब प्रेम कि ग़ज़ब कहानी',
        overview:
          "When his love interest doesn't show up for a meeting, a man and his friends go to Goa in order to find her, where they discover she loves someone else.",
        popularity: 12.359,
        poster_path: '/vegTWHUWLulmpAz8hGpsrneRvuf.jpg',
        release_date: '2009-11-06',
        title: 'Ajab Prem Ki Ghazab Kahani',
        video: false,
        vote_average: 6.1,
        vote_count: 123,
        character: 'Prem Shankar Sharma',
        credit_id: '52fe44acc3a368484e03050b',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/bQk9Z0cj9OXB56sESStXVQgGKHC.jpg',
        genre_ids: [18, 35, 10749],
        id: 26815,
        original_language: 'hi',
        original_title: 'रॉकेट सिंह',
        overview:
          "Rocket Singh: Salesman of the Year is the sometimes thoughtless, sometimes thoughtful story of a fresh graduate trying to find a balance between the maddening demands of the 'professional' way, and the way of his heart - and stumbling upon a crazy way which turned his world upside down, and his career right side up. Welcome to the world of sales boss!",
        popularity: 8.702,
        poster_path: '/3Z8lLFzPOBfOO4w3CykRaCeh9h.jpg',
        release_date: '2009-12-11',
        title: 'Rocket Singh: Salesman of the Year',
        video: false,
        vote_average: 6.8,
        vote_count: 100,
        character: 'Harpreet Singh Bedi',
        credit_id: '52fe451ac3a368484e048b85',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/uoqDaSsJp5aBsBUOpDVBg3asLKO.jpg',
        genre_ids: [18, 35, 10749],
        id: 15864,
        original_language: 'hi',
        original_title: 'बचना ऐ हसीनो',
        overview:
          'Raj is a heartbreaker. His love stories with Mahi, Radhika and Gayatri finally teach him about love and life in their own sweet, sexy and sassy way.',
        popularity: 9.478,
        poster_path: '/HqUJdDNYJx4UTdMTz7Ezu1bQwA.jpg',
        release_date: '2008-08-15',
        title: 'Bachna Ae Haseeno',
        video: false,
        vote_average: 6.0,
        vote_count: 75,
        character: 'Raj Sharma',
        credit_id: '52fe46869251416c7507b0f7',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/futGEoP7sLJyezCODKveZ5aoQY4.jpg',
        genre_ids: [18, 10402, 10749],
        id: 16283,
        original_language: 'hi',
        original_title: 'सावरिया',
        overview:
          'Two souls arrive in a small town, one on vacation, the other to meet a lover. They spend the most magical dream-like days of their lives in that town... with each other.',
        popularity: 6.244,
        poster_path: '/k5JRtA6Np3n0nTr11QK6Pt9gm4r.jpg',
        release_date: '2007-11-09',
        title: 'Saawariya',
        video: false,
        vote_average: 5.5,
        vote_count: 78,
        character: 'Ranbir Raj',
        credit_id: '52fe46c09251416c75082557',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/auWqW0BMEytyMpwWvLXqQYTz1wn.jpg',
        genre_ids: [18, 10402, 10749],
        id: 79464,
        original_language: 'hi',
        original_title: 'Rockstar',
        overview:
          'College student Janardhan is a simpleton who desperately seeks inspiration for the musician inside him. Although heartbreak helps him reach his goal, it also leads him to self-destruction.',
        popularity: 9.3,
        poster_path: '/ujbsLMrUKtlPdjBdXtGqrjEhD3r.jpg',
        release_date: '2011-11-11',
        title: 'Rockstar',
        video: false,
        vote_average: 7.2,
        vote_count: 176,
        character: 'Janardan Jakhar / Jordan',
        credit_id: '52fe49d4c3a368484e142161',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/lnNEmbGoxcSoO69NeavliNUxT3O.jpg',
        genre_ids: [18, 10749, 35],
        id: 127501,
        original_language: 'hi',
        original_title: 'बर्फी!',
        overview: "Three young people learn that love can neither be defined nor contained by society's definition of normal and abnormal.",
        popularity: 10.623,
        poster_path: '/8lVuWmArvr41CvyvpgI3elD5iB1.jpg',
        release_date: '2012-09-13',
        title: 'Barfi!',
        video: false,
        vote_average: 7.5,
        vote_count: 301,
        character: 'Murphy Johnson "Barfi"',
        credit_id: '52fe4afbc3a368484e17139f',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/Wi9bgiwfJPYKFcJIiUqCNDFNtf.jpg',
        genre_ids: [10749, 35],
        id: 185008,
        original_language: 'hi',
        original_title: 'ये जवानी है दीवानी',
        overview: 'Bunny and Naina meet when they graduate from college and again in their late 20s.',
        popularity: 13.802,
        poster_path: '/em39H81XLCDgXsI7V4IcBZseEO6.jpg',
        release_date: '2013-05-31',
        title: 'Yeh Jawaani Hai Deewani',
        video: false,
        vote_average: 7.2,
        vote_count: 242,
        character: "Kabir 'Bunny' Thapar",
        credit_id: '52fe4cd29251416c75126bb1',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/7G8rizluKUAZtNm5mharE8FiTcC.jpg',
        genre_ids: [35, 28],
        id: 218779,
        original_language: 'hi',
        original_title: 'Besharam',
        overview:
          'Babli is a street smart car mechanic living in a Delhi orphanage. He is charming and lives life to the fullest. He also steals cars to support his orphanage. He has no sense of right or wrong till he unwittingly hurts the love of his life, Tara. Babli realizes that there is no right way of doing the wrong thing. Babli sets out to fix all the wrongs in his life and he continues to be shameless about it.',
        popularity: 6.945,
        poster_path: '/79xt4XA6FBY9c9gBzEKrpKQ5Mz6.jpg',
        release_date: '2013-10-02',
        title: 'Besharam',
        video: false,
        vote_average: 4.5,
        vote_count: 33,
        character: 'Besharam',
        credit_id: '52fe4e55c3a368484e21b011',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/GdV6lVfuDdCdbq1h8HtAdk5zDk.jpg',
        genre_ids: [80, 53],
        id: 316654,
        original_language: 'hi',
        original_title: 'बॉम्बे वेलवेट',
        overview:
          "An ordinary man, who goes against all odds to forge his own destiny and become a star in the glittering sky of 'Bombay,' thriving on jazz and violence.",
        popularity: 6.718,
        poster_path: '/pLd96xMgrwNBNRnBaTa1h0bgeSS.jpg',
        release_date: '2015-05-15',
        title: 'Bombay Velvet',
        video: false,
        vote_average: 5.5,
        vote_count: 40,
        character: 'Johnny Balraj',
        credit_id: '54b02085c3a3680956000110',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/lWD6ONegGtHJyjd4P3PFc1KelJI.jpg',
        genre_ids: [10749, 28, 18],
        id: 316900,
        original_language: 'hi',
        original_title: 'रॉय',
        overview: 'A love triangle revolving around the lives of a filmmaker, a thief and their mutual love interest.',
        popularity: 3.298,
        poster_path: '/8p3zRza5th9RyrpEHqJdZHoRigQ.jpg',
        release_date: '2015-02-11',
        title: 'Roy',
        video: false,
        vote_average: 4.9,
        vote_count: 22,
        character: 'Roy',
        credit_id: '54b16496c3a36809510022e1',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/1um3EJQlJoSiRI34MVIoG610OzR.jpg',
        genre_ids: [10749, 18, 35],
        id: 339274,
        original_language: 'hi',
        original_title: 'तमाशा',
        overview:
          'Meeting while on vacation, Ved and Tara sense a connection but vow to keep their real identities a secret. Years later, their paths cross again.',
        popularity: 10.112,
        poster_path: '/6VEx7aMCg4fhKMCXzSFepJx6BSZ.jpg',
        release_date: '2015-11-27',
        title: 'Tamasha',
        video: false,
        vote_average: 6.7,
        vote_count: 134,
        character: 'Ved Sahni',
        credit_id: '554be97492514103d200213c',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/YmrlTsqhmFsWo50QawaKTHOql7.jpg',
        genre_ids: [10749, 18],
        id: 393445,
        original_language: 'hi',
        original_title: 'ऐ दिल है मुश्किल',
        overview:
          'Ayan falls in love with his soulmate, Alizeh, but she doesn’t reciprocate the feeling. Later, a relationship with Saba helps him realize Alizeh’s value in his life, irrespective of their relationship status.',
        popularity: 12.82,
        poster_path: '/1BDnQBOIUsPFnlLw35gManvHKUs.jpg',
        release_date: '2016-10-27',
        title: 'Ae Dil Hai Mushkil',
        video: false,
        vote_average: 6.4,
        vote_count: 188,
        character: 'Ayan Sanger',
        credit_id: '5714ed7692514146c80003a4',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/zGPLKEasLyKMpeQPOxK6uytjv5G.jpg',
        genre_ids: [12, 35, 9648, 10749],
        id: 401285,
        original_language: 'hi',
        original_title: 'जग्गा जासूस',
        overview: 'A gifted teenage detective searches for his missing father with his ladylove assistant.',
        popularity: 11.168,
        poster_path: '/qXZCEyFkNe5cm7xfkUDvV41Xnfh.jpg',
        release_date: '2017-07-14',
        title: 'Jagga Jasoos',
        video: false,
        vote_average: 6.1,
        vote_count: 87,
        character: 'Jagga',
        credit_id: '57589ee1c3a3683e82000148',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/XeJhxScCrZyoCVRLG3eUWbCyOz.jpg',
        genre_ids: [18, 35],
        id: 496328,
        original_language: 'hi',
        original_title: 'संजू',
        overview:
          'Sanju explores some of the most crucial chapters from movie star Sanjay Dutt’s dramatic and controversial real life. It gives a lowdown on his tryst with drugs and his trials and tribulations in the Arms Acts case and the 1993 Mumbai blasts.',
        popularity: 19.335,
        poster_path: '/q1wkN4VQuBTj1AeyTLLz2w6awMA.jpg',
        release_date: '2018-06-29',
        title: 'Sanju',
        video: false,
        vote_average: 7.2,
        vote_count: 178,
        character: 'Sanjay Dutt',
        credit_id: '5a4e66be925141734800dde2',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/ciikYAXN79YzwfUbCbkZzkQ2pvj.jpg',
        genre_ids: [28, 18, 12],
        id: 539686,
        original_language: 'hi',
        original_title: 'शमशेरा',
        overview:
          'Set in the 1800s, the film is about a "dacoit" tribe who take charge in fight for their rights and independence against the British.',
        popularity: 18.537,
        poster_path: '/rryN6GhaoovO3sM8IEqGyKgCmXf.jpg',
        release_date: '2022-07-22',
        title: 'Shamshera',
        video: true,
        vote_average: 5.6,
        vote_count: 49,
        character: 'Balli/Shamshera',
        credit_id: '5b61b9729251414064014b68',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/i1K9Bmq8oO0mkUJRNW7mXIWkzcn.jpg',
        genre_ids: [14, 28, 12],
        id: 496331,
        original_language: 'hi',
        original_title: 'ब्रह्मास्त्र पहला भाग: शिवा',
        overview:
          'The story of Shiva – a young man on the brink of an epic love, with a girl named Isha. But their world is turned upside down when Shiva learns that he has a mysterious connection to the Brahmāstra... and a great power within him that he doesn’t understand just yet - the power of Fire.',
        popularity: 13.945,
        poster_path: '/x61qdvHIsr9U53FwoLVDQqAGur0.jpg',
        release_date: '2022-09-08',
        title: 'Brahmāstra Part One: Shiva',
        video: false,
        vote_average: 6.5,
        vote_count: 151,
        character: 'Shiva',
        credit_id: '5cfd241ac3a3684e0822040d',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/aVlBErsn8N3vdQPPSBtZFx8Wg05.jpg',
        genre_ids: [35, 10749],
        id: 611359,
        original_language: 'hi',
        original_title: 'तू झूठी मैं मक्कार',
        overview:
          "Madness ensues when a 'player' in the world of romantic relationships finds a girl who's a worthy opponent. A story of love where the battle is of wits.",
        popularity: 12.569,
        poster_path: '/zHLtNP4KP0GMi6p1ACf2QvVnBvI.jpg',
        release_date: '2023-03-08',
        title: 'Tu Jhoothi Main Makkaar',
        video: false,
        vote_average: 6.371,
        vote_count: 85,
        character: "Rohan 'Mickey' Arora",
        credit_id: '5d1318c19251410582bba965',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/pwBtk8ngoMtqn0qv8j1feSFTKUn.jpg',
        genre_ids: [28, 80, 18],
        id: 781732,
        original_language: 'hi',
        original_title: 'Animal',
        overview:
          "The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.",
        popularity: 51.221,
        poster_path: '/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg',
        release_date: '2023-12-01',
        title: 'Animal',
        video: false,
        vote_average: 6.5,
        vote_count: 82,
        character: 'Ranvijay Balbir Singh',
        credit_id: '5feeb53afad8e9003e76e3ce',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/oF51hSd6nGaPvoBzp12PcUWWaNP.jpg',
        genre_ids: [18],
        id: 826285,
        original_language: 'hi',
        original_title: 'Karma',
        overview:
          "A fictional drama piece set in a time when anti-capital punishment revolutions had started. It depicts a father's dilemma when his own son is sentenced to death.",
        popularity: 0.845,
        poster_path: '/ybv7wjf6RpetqdcubZhuJd8l1Ev.jpg',
        release_date: '2004-05-15',
        title: 'Karma',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: 'Aryan',
        credit_id: '60929bec7390c00078285bf7',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [36, 18, 10752],
        id: 656908,
        original_language: 'hi',
        original_title: 'रामायण',
        overview: 'First part of the epic Ramayana trilogy.',
        popularity: 1.144,
        poster_path: null,
        release_date: '',
        title: 'Ramayana: Part One',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: 'Ram',
        credit_id: '637dba3fefe37c0083756eef',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 1122762,
        original_language: 'en',
        original_title: 'A Passion to Love',
        overview: 'A short film directed and acted by Ranbir Kapoor',
        popularity: 0.6,
        poster_path: null,
        release_date: '2002-02-16',
        title: 'A Passion to Love',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: '',
        credit_id: '6455b5012f791500e4a65a2c',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 1213766,
        original_language: 'hi',
        original_title: 'Kishore Kumar Biopic',
        overview: 'A movie on the life of Kishore Kumar',
        popularity: 0.6,
        poster_path: null,
        release_date: '',
        title: 'Kishore Kumar Biopic',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: 'Kishore Kumar',
        credit_id: '656ec0360859b400e29e6e52',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [80, 28, 18],
        id: 1213996,
        original_language: 'hi',
        original_title: 'एनिमल पार्क',
        overview: "Sequel to Sandeep Reddy Vanga's Animal (2023) officially announced.",
        popularity: 0.6,
        poster_path: '/1JmoxvVnVcl3dKmTQ6ft9RtsPlo.jpg',
        release_date: '',
        title: 'Animal Park',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: 'Ranvijay Balbir Singh/Aziz Haque',
        credit_id: '656f4c38568463010f84a1c0',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [10749, 18],
        id: 1235057,
        original_language: 'hi',
        original_title: 'Love & War',
        overview: 'A love story set against the backdrop of a war.',
        popularity: 0.945,
        poster_path: '/iy4O9s3GyUoZqudsfFLuVSXLbgT.jpg',
        release_date: '2025-12-25',
        title: 'Love & War',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: '',
        credit_id: '65af9dee67b61300aff09095',
        order: 0,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/rFWMhQvv7J4ZFd55j0YXxROuJAX.jpg',
        genre_ids: [18, 53],
        id: 37951,
        original_language: 'hi',
        original_title: 'Raajneeti',
        overview:
          'It is the story of a fiercely fought election campaign, where money power and corruption are the accepted norms, and where treachery and manipulation are routinely used weapons. As the personal drama of these conflict-ridden characters unfolds against this gritty backdrop, love and friendship become mere baits, and relationships get sacrificed at the altar of political alignments. The darkness that rises from their souls threatens to envelope all that they hold precious. Until eventually, in the crescendo of increasing violence, the line between good and evil blurs, making it impossible to distinguish heroes from villains. Raajneeti is the story of Indian democracy. And its ugly underside. It is about politics. And beyond.',
        popularity: 7.294,
        poster_path: '/5Y2a3isdO22b0ELsnwz0KoVGJ3h.jpg',
        release_date: '2010-06-04',
        title: 'Raajneeti',
        video: false,
        vote_average: 6.3,
        vote_count: 68,
        character: 'Samar Pratap',
        credit_id: '52fe46829251416c91056b63',
        order: 1,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/kgnBQ9ZLHjJ588JOyRgxtlpFEp.jpg',
        genre_ids: [35, 18, 10749],
        id: 44566,
        original_language: 'hi',
        original_title: 'Anjaana Anjaani',
        overview:
          'Akash and Kiara are trying to find luck in their life after several failed attempts to be successful in their careers and in love. Fed up, they both decide to commit suicide by jumping off a bridge. However, both land up on the same bridge at the same time.',
        popularity: 7.235,
        poster_path: '/me3GHLnVREOlRdJPGmBPqsZBJTT.jpg',
        release_date: '2010-09-24',
        title: 'Anjaana Anjaani',
        video: false,
        vote_average: 6.0,
        vote_count: 74,
        character: 'Akash',
        credit_id: '52fe468fc3a36847f8105a95',
        order: 1,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 1129970,
        original_language: 'hi',
        original_title: 'Family - A Made at Home Short Film',
        overview:
          'Presenting ‘Family’, a made-at-home short film featuring Amitabh Bachchan, Rajnikanth, Ranbir Kapoor, Priyanka Chopra, Alia Bhatt, Chiranjeevi, Mohanlal, Mammootty, Sonalee Kulkarni, Prosenjit Chatterjee, Shiva Rajkumar & Diljit Dosanjh, virtually directed by Prasoon Pandey.',
        popularity: 0.84,
        poster_path: null,
        release_date: '2020-04-06',
        title: 'Family - A Made at Home Short Film',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
        character: '',
        credit_id: '646b4610d18572016192a67a',
        order: 5,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/qbF3CSco0FGQVyj5FovPiTTyxni.jpg',
        genre_ids: [35, 18, 14],
        id: 264085,
        original_language: 'hi',
        original_title: 'भूतनाथ रिटर्न्स',
        overview:
          "Boothnath vows to redeem himself when spirits tease him, and searches for a child to terrify. He befriends Akhrot, a slum kid, and helps him take on the country's most powerful politician.",
        popularity: 5.836,
        poster_path: '/zMC0kbfcBSxVOAsFXxw9Pg1NBJ8.jpg',
        release_date: '2014-04-11',
        title: 'Bhoothnath Returns',
        video: false,
        vote_average: 6.2,
        vote_count: 65,
        character: 'Himself (Cameo Appearance)',
        credit_id: '5b0423dac3a3686c730391f1',
        order: 9,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/2WX8lIDLG2brr7GZfvS3lGdf56W.jpg',
        genre_ids: [18, 35, 10751],
        id: 69891,
        original_language: 'hi',
        original_title: 'Chillar Party',
        overview:
          "A gang of innocent but feisty kids who lead carefree lives in Chandan Nagar colony, take on the big bad world of politics when one of their friend's life is endangered.",
        popularity: 6.19,
        poster_path: '/8YiD2WbKltx1XzpWZ83sNIUttGX.jpg',
        release_date: '2011-07-08',
        title: 'Chillar Party',
        video: false,
        vote_average: 6.9,
        vote_count: 49,
        character: 'Item Number (Tai Tai Phish)',
        credit_id: '5b1bf9720e0a261f9d020490',
        order: 13,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/odmG3Y24tpJCa3wOrnn9luGaBtz.jpg',
        genre_ids: [35, 10749],
        id: 505175,
        original_language: 'hi',
        original_title: 'Love per Square Foot',
        overview:
          "Individually, bank employees Sanjay and Karina don't earn enough to be able to buy a home, so they decide to enter into a marriage of convenience.",
        popularity: 10.126,
        poster_path: '/edKCIS7i4qruQ8B8sbou8scvPLe.jpg',
        release_date: '2018-02-14',
        title: 'Love per Square Foot',
        video: false,
        vote_average: 6.7,
        vote_count: 109,
        character: 'Gattu (Special Appearance)',
        credit_id: '5c5fdd0c9251413389bf9a4e',
        order: 14,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/gj8jEE1zOcyfzxVlxziSHiY1aHV.jpg',
        genre_ids: [35, 14, 27, 10402],
        id: 1035366,
        original_language: 'hi',
        original_title: 'Rocket Gang',
        overview:
          "Five friends take a getaway trip and stay at Wonder Villa. But, the haunted villa's supernatural powers suck them in and their only chance to survive is by dancing.",
        popularity: 1.547,
        poster_path: '/8icRtVuWUDvBITWCeMBmRTL8chu.jpg',
        release_date: '2022-11-11',
        title: 'Rocket Gang',
        video: false,
        vote_average: 4.5,
        vote_count: 2,
        character: 'Cameo',
        credit_id: '639bb967d2b209009422f1f2',
        order: 14,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/colFxzt6jfOqHvStz0uQKY9cgKq.jpg',
        genre_ids: [35, 18, 10749],
        id: 663457,
        original_language: 'hi',
        original_title: 'गोविंदा नाम मेरा',
        overview:
          'An abusive wife, a hot girlfriend and a court case, Govinda Waghmare is just not able to catch a break. The icing on top of that horrible cake - a murder.',
        popularity: 3.588,
        poster_path: '/iXRQOfAJMHaGyKJTZz0jq6ZyJOr.jpg',
        release_date: '2022-12-16',
        title: 'Govinda Naam Mera',
        video: false,
        vote_average: 5.1,
        vote_count: 14,
        character: 'Self',
        credit_id: '639bb99f0752880084d9a53c',
        order: 14,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/gxfvtq5eYiClS2X7hxAAPBNrbWA.jpg',
        genre_ids: [35, 18, 12, 878],
        id: 297222,
        original_language: 'hi',
        original_title: 'पीके',
        overview:
          "A stranger in the city asks questions no one has asked before. Known only by his initials, the man's innocent questions and childlike curiosity take him on a journey of love, laughter and letting go.",
        popularity: 15.874,
        poster_path: '/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg',
        release_date: '2014-12-18',
        title: 'PK',
        video: false,
        vote_average: 7.706,
        vote_count: 932,
        character: 'Alien Scientist (cameo)',
        credit_id: '54d941ed9251410a3f000431',
        order: 21,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/7H1DzmyW35OK2XrfLKjUs5lWfl8.jpg',
        genre_ids: [10749, 18, 35],
        id: 16344,
        original_language: 'hi',
        original_title: 'Luck by Chance',
        overview:
          'Not wanting the same fate as befell her sisters, Sona Mishra re-locates to Mumbai to try to make a living making movies, but she soon finds that the path she has chosen is not an easy one.',
        popularity: 9.486,
        poster_path: '/cIcKapfNtS1TmVoEASuE9OK9gPB.jpg',
        release_date: '2009-01-30',
        title: 'Luck by Chance',
        video: false,
        vote_average: 6.6,
        vote_count: 54,
        character: 'Self (uncredited)',
        credit_id: '52fe46c89251416c7508354f',
        order: 26,
        media_type: 'movie',
      },
      {
        adult: false,
        backdrop_path: '/g9ROWD3h20sztOKcNNt0hzSB5OP.jpg',
        genre_ids: [18, 10749],
        id: 190940,
        original_language: 'hi',
        original_title: 'Bombay Talkies',
        overview: 'One hundred years of Hindi cinema is celebrated in four short stories showcasing the power of film.',
        popularity: 6.561,
        poster_path: '/jToHRUGY86MVkloVFgKVD090j90.jpg',
        release_date: '2013-05-03',
        title: 'Bombay Talkies',
        video: false,
        vote_average: 6.4,
        vote_count: 54,
        character: 'Himself (uncredited)',
        credit_id: '52fe4c739251416c910f544d',
        order: 26,
        media_type: 'movie',
      },
    ],
  },
};
