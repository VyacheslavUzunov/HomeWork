

const initState = {
    themeId: 1,
}

type idActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: idActionType): any=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId:action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): idActionType => ({ type: 'SET_THEME_ID', id }) // fix any
