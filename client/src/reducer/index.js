import {   
        GET_ALL_GAMES,
        FILTER_GAMES_BY_GENRE,
        FILTER_CREATED_OR_EXIST,
        SORT_ALPHABETICALLY,
        SORT_BY_RATING,
        GET_GAMES_BY_NAME,
        POST_GAME,
        GET_ALL_GENRES,
        GET_ALL_PLATFORMS,
        GET_GAME_DETAIL
} from "../actions";

const initalState = {
    videogames: [],
    allTheGames: [],
    genres: [],
    platforms: [],
    gameDetail: []
    
}

const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_ALL_GAMES :
            return {
                ...state,
                videogames: action.payload,
                allTheGames: action.payload,
                
            }
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_ALL_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case GET_GAMES_BY_NAME :
            return {
                ...state,
                videogames: action.payload
            }
        case POST_GAME:
            return {
                ...state
            }
        case FILTER_GAMES_BY_GENRE :
            const allGames = state.allTheGames
            const gamesAPI = allGames.filter(el => el.genres.includes(action.payload))
            const gamesDB = allGames.filter((el) => {
                for(let i = 0; i < el.genres.length; i++){
                    if(el.genres[i].name === action.payload){
                        return el
                    }
                }
            })
            const allOfIt = gamesAPI.concat(gamesDB)

            return {
                ...state,
                videogames: allOfIt
            }

        
        case FILTER_CREATED_OR_EXIST :
            const createdOrExistFilter = action.payload === 'created' ? state.allTheGames.filter(el => el.createdAtDb) : state.allTheGames.filter(el => !el.createdAtDb)
            return {
                ...state,
                videogames: createdOrExistFilter
            }
        case SORT_ALPHABETICALLY :
            let sorted = action.payload === 'a-z' ?
            state.videogames.sort(( el1, el2 ) => {
                if(el1.name > el2.name) {
                    return 1;
                }
                if(el1.name < el2.name) {
                    return -1;
                }
                return 0;
            }) :
            state.videogames.sort(( el1, el2 ) => {
                if(el1.name > el2.name) {
                    return -1;
                }
                if(el1.name < el2.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                videogames: sorted
            }
        case SORT_BY_RATING :
            let sorted2 = action.payload === 'asc' ?
            state.videogames.sort(( el1, el2 ) => {
                if(el1.rating > el2.rating) {
                    return 1;
                }
                if(el1.rating < el2.rating) {
                    return -1;
                }
                return 0;
            }) :
            state.videogames.sort(( el1, el2 ) => {
                if(el1.rating > el2.rating) {
                    return -1;
                }
                if(el1.rating < el2.rating) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                videogames: sorted2
            }
        default:
            return state
    }
}



export default rootReducer;