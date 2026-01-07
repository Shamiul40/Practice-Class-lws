import { createContact } from "../constact";

export async function createContactAction() {
  const contact = await createContact();
  return { contact };
}