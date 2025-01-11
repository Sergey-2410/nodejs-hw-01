import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = [];
    for (let index = 0; index < number; index++) {
      newContacts.push(createFakeContact());
    }
    const updateArrayContacts = [...contacts, ...newContacts];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateArrayContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
