import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../services/firebase/firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return {
        user: {
          uid: user.uid,
          email: user.email,
        },
        token: await user.getIdToken(),
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//

//
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      return {
        user: {
          uid: user.uid,
          email: user.email,
        },
        token: await user.getIdToken(),
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        return rejectWithValue('There is no user that is currently logged in');
      }

      const token = await user.getIdToken();
      if (!token) {
        return rejectWithValue('Unable to get user token');
      }

      return {
        uid: user.uid,
        email: user.email,
        token,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
