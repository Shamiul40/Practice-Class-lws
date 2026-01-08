import { getContact, getContacts } from "../constact";

export async function getContactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function getContactLoader({params}) {
  const contacts = await getContact(params.contactsId);
  return { contacts };
}