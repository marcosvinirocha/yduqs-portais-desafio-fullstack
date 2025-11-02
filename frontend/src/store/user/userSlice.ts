import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import api from '../../api/api'; // Seu cliente Axios
import { AxiosError } from 'axios';
import { toast } from 'sonner';

interface UserData {
  email: string;
  birthday: string;
  name: string;
  cpf: string;
  graduationYear: string;
  cellphone: string;
}

interface UserState {
  loading: boolean;
  error: string | null;
  success: boolean;
  data: unknown | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

export const sendUserData = createAsyncThunk<
  unknown,
  UserData,
  { rejectValue: string }
>('user/sendUserData', async (payload: UserData, { rejectWithValue }) => {
  try {
    const response = await api.post('/user', payload);

    toast.success('Cadastro realizado com sucesso!');

    return response.data;
  } catch (error) {
    const message =
      (error as AxiosError<{ message?: string }>)?.response?.data?.message ||
      'Erro desconhecido ao enviar os dados.';

    toast.error(message);

    return rejectWithValue(message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload; // Dados retornados pelo backend
      })
      .addCase(
        sendUserData.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload || 'Ocorreu um erro interno.';
        }
      );
  },
});

export const { resetUserStatus } = userSlice.actions;
export default userSlice.reducer;
