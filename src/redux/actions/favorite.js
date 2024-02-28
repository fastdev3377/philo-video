export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export function updateFavorite(favorite) {
  return {
    type: UPDATE_FAVORITE,
    favorite,
  };
}
