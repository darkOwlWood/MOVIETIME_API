import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        userInfo: {
            isLog: false,
            isPlay: false,
            movieList: [],
        },
        moviesSectionA: [
            {
                "_id": "5fe87b3539f0aa0c5ee5b554",
                "id": 1,
                "title": "Soul",
                "year": 2020,
                "cover": "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg",
                "description": "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
                "duration": 100,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt2948372/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Animation",
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Fantasy",
                    "Music"
                ],
                "created": "2020-12-27T12:16:52.907Z"
            },
            {
                "_id": "5fe87b6a39f0aa0c5ee5b555",
                "id": 2,
                "title": "Doctor Strange",
                "year": 2016,
                "cover": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
                "description": "Marvel's \"Doctor Strange\" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.",
                "duration": 115,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt1211837/?ref_=rvi_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:17:46.571Z"
            },
            {
                "_id": "5fe87b9839f0aa0c5ee5b556",
                "id": 3,
                "title": "Spider-Man",
                "year": 2002,
                "cover": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
                "description": "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is \"miserable\" is an understatement. But one day while on an excursion to a laboratory a runaway radioactive spider bites him... and his life changes in a way no one could have imagined.",
                "duration": 121,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0145487/",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:18:32.900Z"
            },
            {
                "_id": "5fe87bf439f0aa0c5ee5b557",
                "id": 4,
                "title": "Spider-Man 2",
                "year": 2004,
                "cover": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                "description": "Peter Parker is an unhappy man: after two years of fighting crime as Spider-Man, his life has begun to fall apart. The girl he loves is engaged to someone else, his grades are slipping, he cannot keep any of his jobs, and on top of it, the newspaper Daily Bugle is attacking him viciously, claiming that Spider-Man is a criminal.",
                "duration": 127,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0316654/?ref_=tt_sims_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:20:04.250Z"
            },
            {
                "_id": "5fe87c7d39f0aa0c5ee5b558",
                "id": 5,
                "title": "Spider-Man 3",
                "year": 2007,
                "cover": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
                "description": "Peter Parker has finally managed to piece together the once-broken parts of his life, maintaining a balance between his relationship with Mary-Jane and his responsibility as Spider-Man. Peter's old friend Harry Obsourne has set out for revenge against Peter; taking up the mantle of his late father's persona as The New Goblin, and Peter must also capture Uncle Ben's real killer, Flint Marko, who has been transformed into his toughest foe yet, the Sandman.",
                "duration": 139,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0413300/?ref_=tt_sims_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:22:21.512Z"
            },
            {
                "_id": "5fe87c8f39f0aa0c5ee5b559",
                "id": 6,
                "title": "Missing Link",
                "year": 2019,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWFmNWZmZWYtMWM3OC00YTYyLWIxNDMtOTRjNzhiYWQ0MDIwXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_.jpg",
                "description": "The charismatic Sir Lionel Frost (Hugh Jackman) considers himself to be the world's foremost investigator of myths and monsters. The trouble is none of his small-minded high-society peers seems to recognize this. Sir Lionel's last chance for acceptance by the adventuring elite rests on traveling to America's Pacific Northwest to prove the existence of a legendary creature. A living remnant of Man's primitive ancestry. The Missing Link (Zach Galifianakis).",
                "duration": 93,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt6348138/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Animation",
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T12:22:39.220Z"
            },
            {
                "_id": "5fe87ca639f0aa0c5ee5b55a",
                "id": 7,
                "title": "Now You See Me 2",
                "year": 2016,
                "cover": "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
                "description": "One year after outwitting the F.B.I. and winning the public's adulation with their Robin Hood-style magic spectacles, The Four Horsemen resurface for a comeback performance in hopes of exposing the unethical practices of a tech magnate. The man behind their vanishing act is none other than Walter Mabry, a tech prodigy who threatens the Horsemen into pulling off their most impossible heist yet.",
                "duration": 129,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt3110958/?ref_=nv_sr_srsg_3",
                "tags": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Crime",
                    "Mystery",
                    "Thriller"
                ],
                "created": "2020-12-27T12:23:02.122Z"
            },
            {
                "_id": "5fe87cbd39f0aa0c5ee5b55b",
                "id": 8,
                "title": "The Amazing Spider-Man",
                "year": 2012,
                "cover": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
                "description": "Peter Parker (Garfield) is an outcast high schooler who was abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben (Sheen) and Aunt May (Field). Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. Peter is also finding his way with his first high school crush, Gwen Stacy (Stone), and together, they struggle with love, commitment, and secrets.",
                "duration": 136,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0948470/?ref_=hm_tpks_tt_2_pd_tp1",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:23:25.605Z"
            },
            {
                "_id": "5fe87ccc39f0aa0c5ee5b55c",
                "id": 9,
                "title": "Beauty and the Beast",
                "year": 2017,
                "cover": "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
                "description": "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young Prince, imprisoned in the form of a Beast (Dan Stevens), can be freed only by true love. What may be his only opportunity arrives when he meets Belle (Emma Watson), the only human girl to ever visit the castle since it was enchanted.",
                "duration": 129,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt2771200/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Family",
                    "Fantasy",
                    "Musical",
                    "Romance"
                ],
                "created": "2020-12-27T12:23:40.141Z"
            },
            {
                "_id": "5fe87d0039f0aa0c5ee5b55d",
                "id": 10,
                "title": "Hocus Pocus",
                "year": 1993,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                "description": "300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...",
                "duration": 96,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt0107120/?ref_=fn_al_tt_1",
                "tags": [
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T12:24:32.228Z"
            },
            {
                "_id": "5fe8a16ffe38570d2f9c85d3",
                "id": 11,
                "title": "Man in the mirror",
                "year": 1980,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                "description": "300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...",
                "duration": 34,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt0107120/?ref_=fn_al_tt_1",
                "tags": [
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T14:59:59.676Z"
            }
        ],
        moviesSectionB: [
            {
                "_id": "5fe87b3539f0aa0c5ee5b554",
                "id": 1,
                "title": "Soul",
                "year": 2020,
                "cover": "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg",
                "description": "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
                "duration": 100,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt2948372/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Animation",
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Fantasy",
                    "Music"
                ],
                "created": "2020-12-27T12:16:52.907Z"
            },
            {
                "_id": "5fe87b6a39f0aa0c5ee5b555",
                "id": 2,
                "title": "Doctor Strange",
                "year": 2016,
                "cover": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
                "description": "Marvel's \"Doctor Strange\" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.",
                "duration": 115,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt1211837/?ref_=rvi_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:17:46.571Z"
            },
            {
                "_id": "5fe87b9839f0aa0c5ee5b556",
                "id": 3,
                "title": "Spider-Man",
                "year": 2002,
                "cover": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
                "description": "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is \"miserable\" is an understatement. But one day while on an excursion to a laboratory a runaway radioactive spider bites him... and his life changes in a way no one could have imagined.",
                "duration": 121,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0145487/",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:18:32.900Z"
            },
            {
                "_id": "5fe87bf439f0aa0c5ee5b557",
                "id": 4,
                "title": "Spider-Man 2",
                "year": 2004,
                "cover": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                "description": "Peter Parker is an unhappy man: after two years of fighting crime as Spider-Man, his life has begun to fall apart. The girl he loves is engaged to someone else, his grades are slipping, he cannot keep any of his jobs, and on top of it, the newspaper Daily Bugle is attacking him viciously, claiming that Spider-Man is a criminal.",
                "duration": 127,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0316654/?ref_=tt_sims_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:20:04.250Z"
            },
            {
                "_id": "5fe87c7d39f0aa0c5ee5b558",
                "id": 5,
                "title": "Spider-Man 3",
                "year": 2007,
                "cover": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
                "description": "Peter Parker has finally managed to piece together the once-broken parts of his life, maintaining a balance between his relationship with Mary-Jane and his responsibility as Spider-Man. Peter's old friend Harry Obsourne has set out for revenge against Peter; taking up the mantle of his late father's persona as The New Goblin, and Peter must also capture Uncle Ben's real killer, Flint Marko, who has been transformed into his toughest foe yet, the Sandman.",
                "duration": 139,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0413300/?ref_=tt_sims_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:22:21.512Z"
            },
            {
                "_id": "5fe87c8f39f0aa0c5ee5b559",
                "id": 6,
                "title": "Missing Link",
                "year": 2019,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWFmNWZmZWYtMWM3OC00YTYyLWIxNDMtOTRjNzhiYWQ0MDIwXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_.jpg",
                "description": "The charismatic Sir Lionel Frost (Hugh Jackman) considers himself to be the world's foremost investigator of myths and monsters. The trouble is none of his small-minded high-society peers seems to recognize this. Sir Lionel's last chance for acceptance by the adventuring elite rests on traveling to America's Pacific Northwest to prove the existence of a legendary creature. A living remnant of Man's primitive ancestry. The Missing Link (Zach Galifianakis).",
                "duration": 93,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt6348138/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Animation",
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T12:22:39.220Z"
            },
            {
                "_id": "5fe87ca639f0aa0c5ee5b55a",
                "id": 7,
                "title": "Now You See Me 2",
                "year": 2016,
                "cover": "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
                "description": "One year after outwitting the F.B.I. and winning the public's adulation with their Robin Hood-style magic spectacles, The Four Horsemen resurface for a comeback performance in hopes of exposing the unethical practices of a tech magnate. The man behind their vanishing act is none other than Walter Mabry, a tech prodigy who threatens the Horsemen into pulling off their most impossible heist yet.",
                "duration": 129,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt3110958/?ref_=nv_sr_srsg_3",
                "tags": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Crime",
                    "Mystery",
                    "Thriller"
                ],
                "created": "2020-12-27T12:23:02.122Z"
            },
            {
                "_id": "5fe87cbd39f0aa0c5ee5b55b",
                "id": 8,
                "title": "The Amazing Spider-Man",
                "year": 2012,
                "cover": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
                "description": "Peter Parker (Garfield) is an outcast high schooler who was abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben (Sheen) and Aunt May (Field). Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. Peter is also finding his way with his first high school crush, Gwen Stacy (Stone), and together, they struggle with love, commitment, and secrets.",
                "duration": 136,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0948470/?ref_=hm_tpks_tt_2_pd_tp1",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:23:25.605Z"
            },
            {
                "_id": "5fe87ccc39f0aa0c5ee5b55c",
                "id": 9,
                "title": "Beauty and the Beast",
                "year": 2017,
                "cover": "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
                "description": "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young Prince, imprisoned in the form of a Beast (Dan Stevens), can be freed only by true love. What may be his only opportunity arrives when he meets Belle (Emma Watson), the only human girl to ever visit the castle since it was enchanted.",
                "duration": 129,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt2771200/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Family",
                    "Fantasy",
                    "Musical",
                    "Romance"
                ],
                "created": "2020-12-27T12:23:40.141Z"
            },
            {
                "_id": "5fe87d0039f0aa0c5ee5b55d",
                "id": 10,
                "title": "Hocus Pocus",
                "year": 1993,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                "description": "300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...",
                "duration": 96,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt0107120/?ref_=fn_al_tt_1",
                "tags": [
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T12:24:32.228Z"
            },
            {
                "_id": "5fe8a16ffe38570d2f9c85d3",
                "id": 11,
                "title": "Man in the mirror",
                "year": 1980,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                "description": "300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...",
                "duration": 34,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt0107120/?ref_=fn_al_tt_1",
                "tags": [
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T14:59:59.676Z"
            }
        ],
        moviesSectionC: [
            {
                "_id": "5fe87b3539f0aa0c5ee5b554",
                "id": 1,
                "title": "Soul",
                "year": 2020,
                "cover": "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg",
                "description": "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz -- and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
                "duration": 100,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt2948372/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Animation",
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Fantasy",
                    "Music"
                ],
                "created": "2020-12-27T12:16:52.907Z"
            },
            {
                "_id": "5fe87b6a39f0aa0c5ee5b555",
                "id": 2,
                "title": "Doctor Strange",
                "year": 2016,
                "cover": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
                "description": "Marvel's \"Doctor Strange\" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.",
                "duration": 115,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt1211837/?ref_=rvi_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:17:46.571Z"
            },
            {
                "_id": "5fe87b9839f0aa0c5ee5b556",
                "id": 3,
                "title": "Spider-Man",
                "year": 2002,
                "cover": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
                "description": "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is \"miserable\" is an understatement. But one day while on an excursion to a laboratory a runaway radioactive spider bites him... and his life changes in a way no one could have imagined.",
                "duration": 121,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0145487/",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:18:32.900Z"
            },
            {
                "_id": "5fe87bf439f0aa0c5ee5b557",
                "id": 4,
                "title": "Spider-Man 2",
                "year": 2004,
                "cover": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                "description": "Peter Parker is an unhappy man: after two years of fighting crime as Spider-Man, his life has begun to fall apart. The girl he loves is engaged to someone else, his grades are slipping, he cannot keep any of his jobs, and on top of it, the newspaper Daily Bugle is attacking him viciously, claiming that Spider-Man is a criminal.",
                "duration": 127,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0316654/?ref_=tt_sims_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:20:04.250Z"
            },
            {
                "_id": "5fe87c7d39f0aa0c5ee5b558",
                "id": 5,
                "title": "Spider-Man 3",
                "year": 2007,
                "cover": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
                "description": "Peter Parker has finally managed to piece together the once-broken parts of his life, maintaining a balance between his relationship with Mary-Jane and his responsibility as Spider-Man. Peter's old friend Harry Obsourne has set out for revenge against Peter; taking up the mantle of his late father's persona as The New Goblin, and Peter must also capture Uncle Ben's real killer, Flint Marko, who has been transformed into his toughest foe yet, the Sandman.",
                "duration": 139,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0413300/?ref_=tt_sims_tt",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:22:21.512Z"
            },
            {
                "_id": "5fe87c8f39f0aa0c5ee5b559",
                "id": 6,
                "title": "Missing Link",
                "year": 2019,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWFmNWZmZWYtMWM3OC00YTYyLWIxNDMtOTRjNzhiYWQ0MDIwXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_.jpg",
                "description": "The charismatic Sir Lionel Frost (Hugh Jackman) considers himself to be the world's foremost investigator of myths and monsters. The trouble is none of his small-minded high-society peers seems to recognize this. Sir Lionel's last chance for acceptance by the adventuring elite rests on traveling to America's Pacific Northwest to prove the existence of a legendary creature. A living remnant of Man's primitive ancestry. The Missing Link (Zach Galifianakis).",
                "duration": 93,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt6348138/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Animation",
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T12:22:39.220Z"
            },
            {
                "_id": "5fe87ca639f0aa0c5ee5b55a",
                "id": 7,
                "title": "Now You See Me 2",
                "year": 2016,
                "cover": "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
                "description": "One year after outwitting the F.B.I. and winning the public's adulation with their Robin Hood-style magic spectacles, The Four Horsemen resurface for a comeback performance in hopes of exposing the unethical practices of a tech magnate. The man behind their vanishing act is none other than Walter Mabry, a tech prodigy who threatens the Horsemen into pulling off their most impossible heist yet.",
                "duration": 129,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt3110958/?ref_=nv_sr_srsg_3",
                "tags": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Crime",
                    "Mystery",
                    "Thriller"
                ],
                "created": "2020-12-27T12:23:02.122Z"
            },
            {
                "_id": "5fe87cbd39f0aa0c5ee5b55b",
                "id": 8,
                "title": "The Amazing Spider-Man",
                "year": 2012,
                "cover": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
                "description": "Peter Parker (Garfield) is an outcast high schooler who was abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben (Sheen) and Aunt May (Field). Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. Peter is also finding his way with his first high school crush, Gwen Stacy (Stone), and together, they struggle with love, commitment, and secrets.",
                "duration": 136,
                "content_rating": "PG-13",
                "source": "https://www.imdb.com/title/tt0948470/?ref_=hm_tpks_tt_2_pd_tp1",
                "tags": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "created": "2020-12-27T12:23:25.605Z"
            },
            {
                "_id": "5fe87ccc39f0aa0c5ee5b55c",
                "id": 9,
                "title": "Beauty and the Beast",
                "year": 2017,
                "cover": "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
                "description": "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young Prince, imprisoned in the form of a Beast (Dan Stevens), can be freed only by true love. What may be his only opportunity arrives when he meets Belle (Emma Watson), the only human girl to ever visit the castle since it was enchanted.",
                "duration": 129,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt2771200/?ref_=nv_sr_srsg_0",
                "tags": [
                    "Family",
                    "Fantasy",
                    "Musical",
                    "Romance"
                ],
                "created": "2020-12-27T12:23:40.141Z"
            },
            {
                "_id": "5fe87d0039f0aa0c5ee5b55d",
                "id": 10,
                "title": "Hocus Pocus",
                "year": 1993,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                "description": "300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...",
                "duration": 96,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt0107120/?ref_=fn_al_tt_1",
                "tags": [
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T12:24:32.228Z"
            },
            {
                "_id": "5fe8a16ffe38570d2f9c85d3",
                "id": 11,
                "title": "Man in the mirror",
                "year": 1980,
                "cover": "https://m.media-amazon.com/images/M/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
                "description": "300 years have passed since the Sanderson sisters were executed for practicing dark witchcraft. Returning to life thanks to a combination of a spell spoken before their demise and the accidental actions of Max, the new-kid-in-town, the sisters have but one night to secure their continuing existence...",
                "duration": 34,
                "content_rating": "PG",
                "source": "https://www.imdb.com/title/tt0107120/?ref_=fn_al_tt_1",
                "tags": [
                    "Comedy",
                    "Family",
                    "Fantasy"
                ],
                "created": "2020-12-27T14:59:59.676Z"
            }
        ],
    },
    reducers: {
        addUserMovie: (state, action) => {
            state.userInfo.movieList.push(action.payload);
        },

        deleteUserMovie: (state, action) => {
            console.log(action.payload.id);
            console.log(state.userInfo.movieList)
            state.userInfo.movieList = state.userInfo.movieList.filter(movie => movie.id !== action.payload.id);
        }
    }
});

export const { addUserMovie, deleteUserMovie } = moviesSlice.actions;

export const getUserMovieList = state => state.movies.userInfo.movieList;

export const getMoviesSectionA = state => state.movies.moviesSectionA;

export const getMoviesSectionB = state => state.movies.moviesSectionB;

export const getMoviesSectionC = state => state.movies.moviesSectionC;

export default moviesSlice.reducer;