const URL = 'https://62c063fdc134cf51cece6b18.mockapi.io/api';

const request = async (url, method = 'GET', body = null) => {
  const res = await fetch(`${URL}${url}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (res.ok) {
    return res.json();
  }
  throw new Error('Sorry / Api error');
};

export async function getContactList() {
  try {
    const data = await request('/contact');

    return data;
  } catch (e) {
    throw new Error('Не могу получить список контактов');
  }
}

export async function getOneСontact(id) {
  try {
    const res = await fetch(`/contact/${id}`);
    return res;
  } catch (e) {
    throw new Error(`Не могу получить contact ${id}`);
  }
}

export async function createContact(contact) {
  try {
    const res = await request('/contact', 'POST', contact);
    return res;
  } catch (e) {
    throw new Error('Не могу создать новый Contact');
  }
}

export async function updateContact(id, contact) {
  try {
    const data = await request(`/contact/${id}`, 'PUT', contact);
    return data;
  } catch (e) {
    throw new Error('Не могу обновить новый туду');
  }
}

export async function deleteContact(id) {
  try {
    const res = await request(`/contact/${id}`, 'DELETE');
    return res;
  } catch (e) {
    throw new Error(`Не могу удалить Contact ${id}`);
  }
}
