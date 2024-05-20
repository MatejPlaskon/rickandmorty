import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type EpisodesState = Pick<RootState, "episodesReducer">;

const initialState = {
  selectedSeason: 1,
  selectedEpisode: 1,
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    setSelectedEpisode(
      state,
      { payload }: PayloadAction<{ season: number; episode: number }>
    ) {
      state.selectedSeason = payload.season;
      state.selectedEpisode = payload.episode;
    },
  },
});

const getSelectedEpisode = (state: EpisodesState) =>
  state.episodesReducer.selectedEpisode;
const getSelectedSeason = (state: EpisodesState) =>
  state.episodesReducer.selectedSeason;

const getSelectedEpisodeAndSeason = createSelector(
  [getSelectedEpisode, getSelectedSeason],
  (selectedEpisode, selectedSeason) => ({
    selectedEpisode,
    selectedSeason,
  })
);

export const episodesSelectors = {
  getSelectedEpisodeAndSeason,
};

const { actions, reducer } = episodesSlice;
export const { setSelectedEpisode } = actions;
export default reducer;
