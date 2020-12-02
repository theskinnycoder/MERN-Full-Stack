import { action, thunk } from 'easy-peasy';

const model = {
  // State
  rants: [],
  rant: {},
  message: '',

  // Thunks
  fetchRants: thunk(async actions => {
    const res = await fetch('/api/rants/');
    const { data } = await res.json();
    actions.setRants(data);
  }),
  fetchRantByID: thunk(async (actions, { rantID }) => {
    const res = await fetch(`/api/rants/${rantID}`);
    const { data } = await res.json();
    actions.setRant(data);
  }),
  deleteRantByID: thunk(async (actions, { rantID }) => {
    const res = await fetch(`/api/rants/${rantID}/`, {
      method: 'DELETE'
    });
    const { message } = await res.json();
    actions.setMessage(message);
  }),
  createRant: thunk(async (actions, { title, body }) => {
    const res = await fetch('/api/rants/', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { message } = await res.json();
    actions.setMessage(message);
  }),
  updateRantByID: thunk(async (actions, { title, body, rantID }) => {
    const res = await fetch(`/api/rants/${rantID}/`, {
      method: 'PATCH',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { message } = await res.json();
    actions.setMessage(message);
  }),

  // Actions
  setRants: action((state, rants) => {
    state.rants = rants;
  }),
  setRant: action((state, rant) => {
    state.rant = rant;
  }),
  setMessage: action((state, message) => {
    state.message = message;
  })
};

export default model;
