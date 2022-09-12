import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialState = {
   patients: [],
   patient: {},
   onEdit: false,
};

export const userData = createSlice({
   name: 'userData',
   initialState,
   reducers: {
      onEditChange: (state, action) => {
         state.onEdit = true;
         const patient = state.patients.find(
            (patient) => patient.id === action.payload.id,
         );
         if (patient) {
            const patient = action.payload;
            state.patient = { ...patient };
            state.onEdit = true;
            // state.items = [...state.items, action.payload];
         }
      },
      clearBasket: (state) => {
         state.items = [];
      },
      addToDataBase: (state, action) => {
         const patientEdit = state.patients.find(
            (patient) => patient.id === action.payload.id,
         );
         if (patientEdit) {
            const newPatient = state.patients.map((prevState) =>
               patientEdit ? action.payload : prevState,
            );
         } else {
            action.payload = { ...action.payload, id: uuid() };
            state.patients = [...state.patients, action.payload];
         }
      },
      editPatient: (state, action) => {
         console.log(action.payload);
         // filter will create a new array and it gives you what is different to the current id on payload
         const patientNew = state.patients.filter(
            (patient) => patient.id !== action.payload.id,
         );

         action.payload = { ...action.payload };

         state.patients = [action.payload, ...patientNew];
         state.onEdit = false;
         // state.items = [...state.items, action.payload];
      },
      removeFromDataBase: (state, action) => {
         const patientsNew = state.patients.filter(
            (patient) => patient.id !== action.payload.id,
         );
         state.patients = [...patientsNew];
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   clearBasket,
   addToDataBase,
   removeFromDataBase,
   editPatient,
   onEditChange,
} = userData.actions;
export const onEditFalse = (state) => (state.userData.onEdit = false);
export const selectUserById = (state, id) => {
   state.userData.patients.find((patient) => patient.uuid === id);
};

export default userData.reducer;
