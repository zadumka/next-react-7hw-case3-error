import axios from 'axios';

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
axios.defaults.headers.common.Authorization = `Bearer ${apiToken}`;

export const getNotes = async (searchText, page, tag) => {
  const response = await axios.get('/notes', {
    params: { search: searchText, page, tag },
  });
  return response.data;
};

export const addNewNote = async (noteData) => {
  const response = await axios.post('/notes', noteData);
  return response.data;
};

export const deleteNoteById = async (id) => {
  const response = await axios.delete(`/notes/${id}`);
  return response.data;
};

export const fetchNote = async (id) => {
  const response = await axios.get(`/notes/${id}`);
  return response.data;
};
