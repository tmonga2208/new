export async function getCurrentUser() {
    // Replace with your actual API call
    const response = await fetch('/api/currentUser');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export async function updateUser(user) {
    // Replace with your actual API call
    const response = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}