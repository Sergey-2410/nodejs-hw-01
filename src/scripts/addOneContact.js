import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const addContact = [...contacts, newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(addContact, null, 2), 'utf8');
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
