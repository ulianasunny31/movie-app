import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../services/firebase/firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const registerUser = createAsyncThunk(
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
        token: user.getIdToken(),
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
