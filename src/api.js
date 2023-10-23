
export async function create_user(user_name, password) {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'post',
        body: JSON.stringify({
            'userName': user_name,
            'password': password
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    return response
}

export async function generate_token_user(user_name, password) {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
        method: 'post',
        body: JSON.stringify({
            'userName': user_name,
            'password': password
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    return response
}

export async function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}