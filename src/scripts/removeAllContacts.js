import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
