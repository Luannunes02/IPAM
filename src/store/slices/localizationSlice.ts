import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalizationState {
  uf: string;
  city: string;
}

interface UpdateUfAction {
  type: string;
  uf: string;
}

interface UpdateCityAction {
  type: string;
  city: string;
}

type LocalizationActions = UpdateUfAction | UpdateCityAction;

const initialState: LocalizationState = {
  uf: '',
  city: '',
};

const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    updateUf(state: any, action: PayloadAction<string>) {
      state.uf = action.payload;
    },
    updateCity(state: any, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const { updateUf, updateCity } = localizationSlice.actions;
export default localizationSlice.reducer;


