export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export function updateFavorite({ id, value }) {
  return {
    type: UPDATE_FAVORITE,
    favorite: { id, value },
  };
}
