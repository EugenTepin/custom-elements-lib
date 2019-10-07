export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_COUNT = 'CHANGE_COUNT';

export function changeTheme(theme) {
  return {
    theme,
    type: CHANGE_THEME
  };
}

export function changeCount(count) {
  return {
    count,
    type: CHANGE_COUNT
  };
}
