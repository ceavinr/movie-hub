import { format } from "date-fns";

export const API_KEY = "api_key=9fee2dfca9fac3b1049c2bca2752291c";
export const BASE_URL = "https://api.themoviedb.org/3";
const current = new Date();
var datetime = format(current, "yyyy-MM-dd");
current.setDate(current.getDate() - 21);
var previousMonth = format(current, "yyyy-MM-dd");

const apiConfig = {
  POPULAR_URL: BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY,
  NOW_SHOWING_URL:
    BASE_URL +
    `/discover/movie?primary_release_date.gte=${previousMonth}&primary_release_date.lte=${datetime}&` +
    API_KEY,
  SEARCH_URL: BASE_URL + "/search/movie?" + API_KEY,
};

export const anjay = {
  adult: false,
  backdrop_path: "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
  belongs_to_collection: null,
  budget: 75000000,
  genres: [
    { id: 28, name: "Action" },
    { id: 878, name: "Science Fiction" },
    { id: 14, name: "Fantasy" },
  ],
  homepage: "https://www.morbius.movie/",
  id: 526896,
  imdb_id: "tt5108870",
  original_language: "en",
  original_title: "Morbius",
  overview:
    "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
  popularity: 7169.532,
  poster_path: "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  production_companies: [
    {
      id: 5,
      logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
      name: "Columbia Pictures",
      origin_country: "US",
    },
    {
      id: 7505,
      logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
      name: "Marvel Entertainment",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2022-03-30",
  revenue: 161000000,
  runtime: 104,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "A new Marvel legend arrives.",
  title: "Morbius",
  video: false,
  vote_average: 6.4,
  vote_count: 1262,
};

export const anjrot = {
  id: 526896,
  cast: [
    {
      adult: false,
      gender: 2,
      id: 7499,
      known_for_department: "Acting",
      name: "Jared Leto",
      original_name: "Jared Leto",
      popularity: 106.669,
      profile_path: "/i6zIpHiKBnaHtacJU6qgeoDjiw1.jpg",
      cast_id: 16,
      character: "Dr. Michael Morbius / Morbius",
      credit_id: "5bf3e2400e0a26265c09c572",
      order: 0,
    },
    {
      adult: false,
      gender: 2,
      id: 136532,
      known_for_department: "Acting",
      name: "Matt Smith",
      original_name: "Matt Smith",
      popularity: 23.365,
      profile_path: "/xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg",
      cast_id: 18,
      character: "Milo / Lucien",
      credit_id: "5c4a972a92514105c1539627",
      order: 1,
    },
    {
      adult: false,
      gender: 1,
      id: 1371297,
      known_for_department: "Acting",
      name: "Adria Arjona",
      original_name: "Adria Arjona",
      popularity: 66.702,
      profile_path: "/2xAwAxrjZrgfyrNYToBIjg1ZeRB.jpg",
      cast_id: 17,
      character: "Martine Bancroft",
      credit_id: "5c14fefe0e0a2603853c741f",
      order: 2,
    },
    {
      adult: false,
      gender: 2,
      id: 15440,
      known_for_department: "Acting",
      name: "Jared Harris",
      original_name: "Jared Harris",
      popularity: 17.955,
      profile_path: "/jAyPWkmge3BqXtgxIG9MfXBzOGj.jpg",
      cast_id: 19,
      character: "Dr. Emil Nicholas",
      credit_id: "5c7df8dc0e0a264310597452",
      order: 3,
    },
    {
      adult: false,
      gender: 2,
      id: 90534,
      known_for_department: "Acting",
      name: "Al Madrigal",
      original_name: "Al Madrigal",
      popularity: 6.976,
      profile_path: "/p4vN80EGGlzLb5J7G8Ss3n9K2pc.jpg",
      cast_id: 21,
      character: "Agent Alberto Rodriguez",
      credit_id: "5cb50d6992514108cbf2f5eb",
      order: 4,
    },
    {
      adult: false,
      gender: 2,
      id: 8169,
      known_for_department: "Acting",
      name: "Tyrese Gibson",
      original_name: "Tyrese Gibson",
      popularity: 11.271,
      profile_path: "/eHhIFk7HOElgFCaD4igtAgn41kA.jpg",
      cast_id: 20,
      character: "Agent Simon Stroud",
      credit_id: "5c7f21900e0a2643015b7da9",
      order: 5,
    },
    {
      adult: false,
      gender: 2,
      id: 2232,
      known_for_department: "Acting",
      name: "Michael Keaton",
      original_name: "Michael Keaton",
      popularity: 27.752,
      profile_path: "/baeHNv3qrVsnApuKbZXiJOhqMnw.jpg",
      cast_id: 24,
      character: "Adrian Toomes / Vulture",
      credit_id: "5e1ce42212b10e0012944d20",
      order: 6,
    },
    {
      adult: false,
      gender: 2,
      id: 1637129,
      known_for_department: "Acting",
      name: "Charlie Shotwell",
      original_name: "Charlie Shotwell",
      popularity: 6.997,
      profile_path: "/lNRwJ9afyDI1hccWGxQcAKZ5RMA.jpg",
      cast_id: 27,
      character: "Young Michael",
      credit_id: "5e6964d9357c0000193e1874",
      order: 7,
    },
    {
      adult: false,
      gender: 2,
      id: 1502439,
      known_for_department: "Acting",
      name: "Bern Collaço",
      original_name: "Bern Collaço",
      popularity: 3.244,
      profile_path: "/ziLGGjo5GWzYDL8H4MUquoFj8r0.jpg",
      cast_id: 28,
      character: "NYPD Police Officer",
      credit_id: "5e6fc9afcabfe40018162a56",
      order: 8,
    },
    {
      adult: false,
      gender: 1,
      id: 2798423,
      known_for_department: "Acting",
      name: "Tina Louise Owens",
      original_name: "Tina Louise Owens",
      popularity: 0.6,
      profile_path: "/hiL38ICpaXPT0bO9V4La8AW8eHY.jpg",
      cast_id: 40,
      character: "Nobel Prize Gown Guest",
      credit_id: "5feadac5d7107e003e25cba4",
      order: 9,
    },
    {
      adult: false,
      gender: 2,
      id: 1808578,
      known_for_department: "Acting",
      name: "Tom Forbes",
      original_name: "Tom Forbes",
      popularity: 3.798,
      profile_path: "/fuMUmFRoiYCDwzGriK1M5PKUfLU.jpg",
      cast_id: 41,
      character: "Finance Bro",
      credit_id: "5feadae8a14e10003e18a529",
      order: 10,
    },
    {
      adult: false,
      gender: 1,
      id: 1124795,
      known_for_department: "Acting",
      name: "Amanda Perez",
      original_name: "Amanda Perez",
      popularity: 1.4,
      profile_path: "/xlfgnM4BQfrmuXGb0B3mDR8dvAb.jpg",
      cast_id: 42,
      character: "Reporter #4",
      credit_id: "5feadb2ba14e10003e18a577",
      order: 11,
    },
    {
      adult: false,
      gender: 2,
      id: 2164506,
      known_for_department: "Acting",
      name: "Archie Renaux",
      original_name: "Archie Renaux",
      popularity: 4.84,
      profile_path: "/yEBtbmGl2JK3UkKUFVrGwLxOk4u.jpg",
      cast_id: 43,
      character: "Bobby",
      credit_id: "5feadc0fa14e10003b19563f",
      order: 12,
    },
    {
      adult: false,
      gender: 2,
      id: 1432064,
      known_for_department: "Acting",
      name: "Abraham Popoola",
      original_name: "Abraham Popoola",
      popularity: 2.449,
      profile_path: "/qOTrfglDJaGLW3EipLL6k65Jpns.jpg",
      cast_id: 45,
      character: "Ryan",
      credit_id: "5feadc588c22c0003d12d07b",
      order: 13,
    },
    {
      adult: false,
      gender: 2,
      id: 17199,
      known_for_department: "Acting",
      name: "Corey Johnson",
      original_name: "Corey Johnson",
      popularity: 3.731,
      profile_path: "/gFPilsTUQlClMiXooO4Q3DSJ5Nr.jpg",
      cast_id: 46,
      character: "Mr. Fox",
      credit_id: "5feadd22bf7744003e2751d2",
      order: 14,
    },
    {
      adult: false,
      gender: 0,
      id: 2251709,
      known_for_department: "Acting",
      name: "Crystal Wingx",
      original_name: "Crystal Wingx",
      popularity: 1.4,
      profile_path: null,
      cast_id: 49,
      character: "Nobel Prize Gown Guest",
      credit_id: "60f27a147b7b4d0020e70cb2",
      order: 15,
    },
    {
      adult: false,
      gender: 1,
      id: 2219124,
      known_for_department: "Acting",
      name: "Ruth Horrocks",
      original_name: "Ruth Horrocks",
      popularity: 2.964,
      profile_path: "/7N859OuilHpKYjb96GS97GNsy98.jpg",
      cast_id: 51,
      character: "Diner Customer",
      credit_id: "6181436784f2490063b3b6d2",
      order: 16,
    },
    {
      adult: false,
      gender: 1,
      id: 2136319,
      known_for_department: "Acting",
      name: "Kadrolsha Ona Carole",
      original_name: "Kadrolsha Ona Carole",
      popularity: 1.798,
      profile_path: "/xRg7Tv3beUyIfuNOcit0hVQg6CE.jpg",
      cast_id: 52,
      character: "Nobel Prize Guest",
      credit_id: "618143760752880044cebba9",
      order: 17,
    },
    {
      adult: false,
      gender: 1,
      id: 1676769,
      known_for_department: "Acting",
      name: "Clara Rosager",
      original_name: "Clara Rosager",
      popularity: 15.096,
      profile_path: "/ynRUaBWGHfOnzF8bp8G7RVs89WS.jpg",
      cast_id: 53,
      character: "Jean",
      credit_id: "6181438c8ed03f008df64dab",
      order: 18,
    },
    {
      adult: false,
      gender: 2,
      id: 1015829,
      known_for_department: "Acting",
      name: "Barry Aird",
      original_name: "Barry Aird",
      popularity: 1.68,
      profile_path: "/sVrVkarYgB6FAHX142dwG3RtoOh.jpg",
      cast_id: 54,
      character: "Newspaper Vendor",
      credit_id: "618143ad3876510044a94f33",
      order: 19,
    },
    {
      adult: false,
      gender: 0,
      id: 2490335,
      known_for_department: "Acting",
      name: "Colin Blyth",
      original_name: "Colin Blyth",
      popularity: 1.094,
      profile_path: null,
      cast_id: 55,
      character: "Nobel Prize Tuxedo Guest",
      credit_id: "618143bdd388ae002cf83759",
      order: 20,
    },
    {
      adult: false,
      gender: 0,
      id: 2178759,
      known_for_department: "Acting",
      name: "Gloria García",
      original_name: "Gloria García",
      popularity: 0.6,
      profile_path: "/9wdZvhUWUYr9OSIufxru6DjEluS.jpg",
      cast_id: 56,
      character: "Martine's Mother",
      credit_id: "618144d83faba0008f5bc670",
      order: 21,
    },
    {
      adult: false,
      gender: 2,
      id: 1504934,
      known_for_department: "Acting",
      name: "Bentley Kalu",
      original_name: "Bentley Kalu",
      popularity: 5.084,
      profile_path: "/5s6s9N3YG6K72bOkdFkHAMfc5gv.jpg",
      cast_id: 57,
      character: "Private Security Professional #2",
      credit_id: "618144ede93e95006258d3f8",
      order: 22,
    },
    {
      adult: false,
      gender: 2,
      id: 1615064,
      known_for_department: "Acting",
      name: "Atul Sharma",
      original_name: "Atul Sharma",
      popularity: 1.96,
      profile_path: "/ArCswhLKzGJW6viP1uiF82wQLiX.jpg",
      cast_id: 58,
      character: "Nobel Prize Tuxedo Guest",
      credit_id: "618144fc3e2ec8008d191deb",
      order: 23,
    },
    {
      adult: false,
      gender: 2,
      id: 1809625,
      known_for_department: "Acting",
      name: "Dave Simon",
      original_name: "Dave Simon",
      popularity: 4.673,
      profile_path: "/pyDp7rqOyDUul5As9qYjx9a1Bot.jpg",
      cast_id: 59,
      character: "Nobel Prize official",
      credit_id: "6181451a4a4bfc002d6f6537",
      order: 24,
    },
    {
      adult: false,
      gender: 0,
      id: 1815691,
      known_for_department: "Acting",
      name: "Kalle Hennie",
      original_name: "Kalle Hennie",
      popularity: 1.4,
      profile_path: "/rxRSJqrnb29MnUeS48EytNd1VOB.jpg",
      cast_id: 60,
      character: "Norwegian Bodyguard",
      credit_id: "618145293e2ec8008d191df8",
      order: 25,
    },
    {
      adult: false,
      gender: 2,
      id: 2424349,
      known_for_department: "Acting",
      name: "Adam El Hagar",
      original_name: "Adam El Hagar",
      popularity: 1.221,
      profile_path: "/3nDGVEL52s5k3gHGrQ6lS1O3HZI.jpg",
      cast_id: 61,
      character: "NYPD Cop #2",
      credit_id: "6181453b0752880044cebddb",
      order: 26,
    },
    {
      adult: false,
      gender: 2,
      id: 1148103,
      known_for_department: "Acting",
      name: "Chris Ryman",
      original_name: "Chris Ryman",
      popularity: 2.744,
      profile_path: null,
      cast_id: 62,
      character: "Officer Dyson",
      credit_id: "61814549f6596f002a1b5063",
      order: 27,
    },
    {
      adult: false,
      gender: 2,
      id: 1945750,
      known_for_department: "Acting",
      name: "Manoj Anand",
      original_name: "Manoj Anand",
      popularity: 0.652,
      profile_path: "/6IHIfnxaIFrGiOYZ3waGtO6EaiJ.jpg",
      cast_id: 63,
      character: "Nobel Prize Tuxedo Guest",
      credit_id: "6181455439a1a60064e711a2",
      order: 28,
    },
    {
      adult: false,
      gender: 0,
      id: 3484581,
      known_for_department: "Acting",
      name: "Nick Owenford",
      original_name: "Nick Owenford",
      popularity: 0.6,
      profile_path: null,
      cast_id: 67,
      character: "Nobel Prize Tuxedo Guest",
      credit_id: "6242d5889451e7004985d08d",
      order: 29,
    },
    {
      adult: false,
      gender: 2,
      id: 3560332,
      known_for_department: "Acting",
      name: "Oliver Truman",
      original_name: "Oliver Truman",
      popularity: 1.62,
      profile_path: "/sp4OwQWMDOl88cIBOkRydZRziV1.jpg",
      cast_id: 87,
      character: "Dr. Michael Morbius/Morbius",
      credit_id: "6291234f209f1812c5680a33",
      order: 30,
    },
  ],
  crew: [
    {
      adult: false,
      gender: 2,
      id: 950,
      known_for_department: "Editing",
      name: "Pietro Scalia",
      original_name: "Pietro Scalia",
      popularity: 1.266,
      profile_path: null,
      credit_id: "6226bd26a314400045029e36",
      department: "Editing",
      job: "Editor",
    },
    {
      adult: false,
      gender: 2,
      id: 7626,
      known_for_department: "Production",
      name: "Avi Arad",
      original_name: "Avi Arad",
      popularity: 9.47,
      profile_path: "/zFNtix6jjAfjKeE687w1VgU4H1T.jpg",
      credit_id: "5b33ea2f0e0a26401a018612",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 11409,
      known_for_department: "Camera",
      name: "Oliver Wood",
      original_name: "Oliver Wood",
      popularity: 1.864,
      profile_path: "/rUXhXZUF818WsqWms7BIIz9YHjN.jpg",
      credit_id: "5bc59fb592514179ba07016b",
      department: "Camera",
      job: "Director of Photography",
    },
    {
      adult: false,
      gender: 2,
      id: 11695,
      known_for_department: "Production",
      name: "Lucas Foster",
      original_name: "Lucas Foster",
      popularity: 0.606,
      profile_path: "/u29VrA7oJKqUdp5gfPSDxTHnfH2.jpg",
      credit_id: "5b33ea710e0a26401601c2ad",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 14765,
      known_for_department: "Sound",
      name: "Per Hallberg",
      original_name: "Per Hallberg",
      popularity: 2.695,
      profile_path: null,
      credit_id: "62463b635c5cc8004e4df837",
      department: "Sound",
      job: "Supervising Sound Editor",
    },
    {
      adult: false,
      gender: 1,
      id: 15733,
      known_for_department: "Art",
      name: "Tina Jones",
      original_name: "Tina Jones",
      popularity: 4.881,
      profile_path: null,
      credit_id: "62463af6126ec300a25be7af",
      department: "Art",
      job: "Set Decoration",
    },
    {
      adult: false,
      gender: 1,
      id: 47294,
      known_for_department: "Costume \u0026 Make-Up",
      name: "Cindy Evans",
      original_name: "Cindy Evans",
      popularity: 1.4,
      profile_path: null,
      credit_id: "6226bd3628d7fe001c3c48c7",
      department: "Costume \u0026 Make-Up",
      job: "Costume Design",
    },
    {
      adult: false,
      gender: 1,
      id: 56327,
      known_for_department: "Production",
      name: "Louise Rosner-Meyer",
      original_name: "Louise Rosner-Meyer",
      popularity: 1.182,
      profile_path: null,
      credit_id: "5f864f54cb5c8e003aceb255",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 113073,
      known_for_department: "Sound",
      name: "Paul Massey",
      original_name: "Paul Massey",
      popularity: 4.045,
      profile_path: null,
      credit_id: "62463b6e62e86f009813edee",
      department: "Sound",
      job: "Sound Re-Recording Mixer",
    },
    {
      adult: false,
      gender: 1,
      id: 60087,
      known_for_department: "Art",
      name: "Stefania Cella",
      original_name: "Stefania Cella",
      popularity: 1.531,
      profile_path: "/x6VIC5hiszcqYtS0fTOKQhEpgjM.jpg",
      credit_id: "5bc5c90e925141620c018040",
      department: "Art",
      job: "Production Design",
    },
    {
      adult: false,
      gender: 2,
      id: 125738,
      known_for_department: "Directing",
      name: "Daniel Espinosa",
      original_name: "Daniel Espinosa",
      popularity: 5.688,
      profile_path: "/rq6TkUBkSXvOrmKEjG5lt8kuhF4.jpg",
      credit_id: "5b33ea1ec3a3685311019786",
      department: "Directing",
      job: "Director",
    },
    {
      adult: false,
      gender: 2,
      id: 141359,
      known_for_department: "Writing",
      name: "Roy Thomas",
      original_name: "Roy Thomas",
      popularity: 3.295,
      profile_path: null,
      credit_id: "5b33ecfe0e0a263ff6018a5d",
      department: "Writing",
      job: "Characters",
    },
    {
      adult: false,
      gender: 2,
      id: 579405,
      known_for_department: "Sound",
      name: "Beau Borders",
      original_name: "Beau Borders",
      popularity: 1.413,
      profile_path: null,
      credit_id: "62463b57001bbd00a49c8da3",
      department: "Sound",
      job: "Sound Re-Recording Mixer",
    },
    {
      adult: false,
      gender: 2,
      id: 977941,
      known_for_department: "Production",
      name: "Matt Tolmach",
      original_name: "Matt Tolmach",
      popularity: 2.851,
      profile_path: "/8mniHJVwoJdVpwxW278yJwz8c1T.jpg",
      credit_id: "5b33ea560e0a26400401af03",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 1050634,
      known_for_department: "Art",
      name: "James Lewis",
      original_name: "James Lewis",
      popularity: 3.614,
      profile_path: null,
      credit_id: "5dda63f212aabc001393585c",
      department: "Art",
      job: "Art Direction",
    },
    {
      adult: false,
      gender: 0,
      id: 1077404,
      known_for_department: "Sound",
      name: "Jon Ekstrand",
      original_name: "Jon Ekstrand",
      popularity: 0.6,
      profile_path: null,
      credit_id: "5f864ef15a46900037f0e53a",
      department: "Sound",
      job: "Original Music Composer",
    },
    {
      adult: false,
      gender: 2,
      id: 1167472,
      known_for_department: "Writing",
      name: "Matt Sazama",
      original_name: "Matt Sazama",
      popularity: 5.746,
      profile_path: "/vfYuk0NTHNQT6KHzdupi6sqS9mi.jpg",
      credit_id: "5f864e0ba8067300373b7b23",
      department: "Writing",
      job: "Screenplay",
    },
    {
      adult: false,
      gender: 2,
      id: 1167472,
      known_for_department: "Writing",
      name: "Matt Sazama",
      original_name: "Matt Sazama",
      popularity: 5.746,
      profile_path: "/vfYuk0NTHNQT6KHzdupi6sqS9mi.jpg",
      credit_id: "5ffd63030fb17f003d427bdd",
      department: "Writing",
      job: "Screenstory",
    },
    {
      adult: false,
      gender: 2,
      id: 1167473,
      known_for_department: "Writing",
      name: "Burk Sharpless",
      original_name: "Burk Sharpless",
      popularity: 2.291,
      profile_path: "/ciQUbLMC6Jdpk9ArWpcpA5Nwl6n.jpg",
      credit_id: "5f864e428258fc0035a4a123",
      department: "Writing",
      job: "Screenplay",
    },
    {
      adult: false,
      gender: 2,
      id: 1167473,
      known_for_department: "Writing",
      name: "Burk Sharpless",
      original_name: "Burk Sharpless",
      popularity: 2.291,
      profile_path: "/ciQUbLMC6Jdpk9ArWpcpA5Nwl6n.jpg",
      credit_id: "5ffd62f7c8a5ac003eb259de",
      department: "Writing",
      job: "Screenstory",
    },
    {
      adult: false,
      gender: 1,
      id: 1277100,
      known_for_department: "Production",
      name: "Emma Ludbrook",
      original_name: "Emma Ludbrook",
      popularity: 0.607,
      profile_path: null,
      credit_id: "5f864f61a1a9ba0037449500",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 1380444,
      known_for_department: "Visual Effects",
      name: "Joseph DiValerio",
      original_name: "Joseph DiValerio",
      popularity: 0.764,
      profile_path: null,
      credit_id: "62463c186f31af004e20de1d",
      department: "Visual Effects",
      job: "VFX Artist",
    },
    {
      adult: false,
      gender: 0,
      id: 1392083,
      known_for_department: "Sound",
      name: "Ann Scibelli",
      original_name: "Ann Scibelli",
      popularity: 0.62,
      profile_path: null,
      credit_id: "62463b7da34911009430d057",
      department: "Sound",
      job: "Sound Designer",
    },
    {
      adult: false,
      gender: 2,
      id: 1398107,
      known_for_department: "Crew",
      name: "Gary Powell",
      original_name: "Gary Powell",
      popularity: 0.6,
      profile_path: "/eUxi90MIr0coNyRK516dzEzElfA.jpg",
      credit_id: "5bd026ed92514172df0288d5",
      department: "Crew",
      job: "Stunt Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 1414518,
      known_for_department: "Visual Effects",
      name: "Travis Baumann",
      original_name: "Travis Baumann",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463bc98ee49c00a12531a9",
      department: "Visual Effects",
      job: "VFX Artist",
    },
    {
      adult: false,
      gender: 0,
      id: 1636661,
      known_for_department: "Art",
      name: "Shamim Seifzadeh",
      original_name: "Shamim Seifzadeh",
      popularity: 1.382,
      profile_path: null,
      credit_id: "62463b485c5cc8004e4df7ec",
      department: "Art",
      job: "Set Designer",
    },
    {
      adult: false,
      gender: 2,
      id: 1705237,
      known_for_department: "Visual Effects",
      name: "Joel Behrens",
      original_name: "Joel Behrens",
      popularity: 1.4,
      profile_path: null,
      credit_id: "62463bd3c4ad59004edad928",
      department: "Visual Effects",
      job: "Visual Effects Supervisor",
    },
    {
      adult: false,
      gender: 0,
      id: 1717345,
      known_for_department: "Sound",
      name: "Randy Torres",
      original_name: "Randy Torres",
      popularity: 0.616,
      profile_path: null,
      credit_id: "62463b8765e0a2004e927c1a",
      department: "Sound",
      job: "Sound Designer",
    },
    {
      adult: false,
      gender: 2,
      id: 1726490,
      known_for_department: "Writing",
      name: "Gil Kane",
      original_name: "Gil Kane",
      popularity: 0.85,
      profile_path: null,
      credit_id: "5b33ed060e0a26400201b7c4",
      department: "Writing",
      job: "Characters",
    },
    {
      adult: false,
      gender: 0,
      id: 1770987,
      known_for_department: "Visual Effects",
      name: "Victoria Keeling",
      original_name: "Victoria Keeling",
      popularity: 0.98,
      profile_path: null,
      credit_id: "62463c770929f6004e958efe",
      department: "Visual Effects",
      job: "Visual Effects Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 1915705,
      known_for_department: "Art",
      name: "Jane Harwood",
      original_name: "Jane Harwood",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463b26126ec3004e176ad5",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 1928604,
      known_for_department: "Visual Effects",
      name: "Eric Kimelton",
      original_name: "Eric Kimelton",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463c826f31af004e20df31",
      department: "Visual Effects",
      job: "Visual Effects Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 2012004,
      known_for_department: "Visual Effects",
      name: "Yoshi DeHerrera",
      original_name: "Yoshi DeHerrera",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463bfca294f000978babaf",
      department: "Visual Effects",
      job: "Visual Effects Supervisor",
    },
    {
      adult: false,
      gender: 0,
      id: 2068111,
      known_for_department: "Visual Effects",
      name: "Jakob Lundbye",
      original_name: "Jakob Lundbye",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463c9e92e55b004e98622d",
      department: "Visual Effects",
      job: "VFX Artist",
    },
    {
      adult: false,
      gender: 0,
      id: 2159064,
      known_for_department: "Art",
      name: "Matt Gendron",
      original_name: "Matt Gendron",
      popularity: 0.6,
      profile_path: null,
      credit_id: "5bd02705c3a368663d02ca39",
      department: "Art",
      job: "Art Direction",
    },
    {
      adult: false,
      gender: 0,
      id: 2772764,
      known_for_department: "Costume \u0026 Make-Up",
      name: "Louise Young",
      original_name: "Louise Young",
      popularity: 0.84,
      profile_path: null,
      credit_id: "62463b033344c6006430ea14",
      department: "Costume \u0026 Make-Up",
      job: "Makeup Artist",
    },
    {
      adult: false,
      gender: 0,
      id: 2873136,
      known_for_department: "Costume \u0026 Make-Up",
      name: "Holly Freeman",
      original_name: "Holly Freeman",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463ba36f31af0095a8f2bd",
      department: "Costume \u0026 Make-Up",
      job: "Costume Supervisor",
    },
    {
      adult: false,
      gender: 0,
      id: 2895114,
      known_for_department: "Art",
      name: "Fred M. Ortiz",
      original_name: "Fred M. Ortiz",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463b3366f2d2004e018cac",
      department: "Art",
      job: "Set Dresser",
    },
    {
      adult: false,
      gender: 0,
      id: 3092600,
      known_for_department: "Visual Effects",
      name: "Louis Mackall",
      original_name: "Louis Mackall",
      popularity: 0.6,
      profile_path: null,
      credit_id: "62463cacc4ad590062b49639",
      department: "Visual Effects",
      job: "Visual Effects Supervisor",
    },
  ],
};
export default apiConfig;
