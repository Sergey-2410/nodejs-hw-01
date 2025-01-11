import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';
export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
