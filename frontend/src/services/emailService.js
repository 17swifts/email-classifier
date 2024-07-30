const API_URL = 'http://localhost:5000';

// Fetch all classified emails
export const fetchEmails = async () => {
  const response = await fetch(`${API_URL}/emails`);
  const data = await response.json();
  return data;
};

// Update the category/ classification of an email based on its ID
export const updateEmailCategory = async (id, newCategory) => {
  const response = await fetch(`${API_URL}/emails/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      newCategory: newCategory
    })
  });
  const data = await response.json();
  return data;
};