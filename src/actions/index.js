export const CHANGE_THEME = 'CHANGE_THEME';

export function changeTheme(theme) {
    return {
        theme,
        type: CHANGE_THEME
    }
}
