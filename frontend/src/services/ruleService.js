const API_URL = 'http://localhost:5000';

// Fetch all categories and their rules
export const fetchRules = async () => {
      const response = await fetch(`${API_URL}/rules`);
      const data = await response.json();
    return data;
};

// Add a category
export const addRule = async (rule) => {
    const response = await fetch(`${API_URL}/rules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rule)
    });
    const data = await response.json();
    return data;
};

// Edit an existing categories keywords 
export const editRule = async (rule) => {
    const response = await fetch(`${API_URL}/rules`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rule)
    });
    const data = await response.json();
    return data;
};

// Delete a category
export const deleteRule = async (category) => {
    const response = await fetch(`${API_URL}/rules/${category}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};
