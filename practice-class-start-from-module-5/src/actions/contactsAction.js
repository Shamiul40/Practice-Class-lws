import { createContact } from "../constact";

export async function action() {
  const contact = await createContact();
  return { contact };
}