import { create_user, generate_token_user, getRandomInt } from "../src/api.js";

describe('5 api тестов по домашнему заданию', () => {
    let userID
    test('Создание пользователя c ошибкой, логин уже используется', async () => {
        const response = await create_user('test', '1String$22')
        const data = await response.json()
        const expect_data = {
            "code": "1204",
            "message": 'User exists!'
        }
        expect(response.status).toBe(406)
        expect(data.code).toBe(expect_data.code)
        expect(data.message).toBe(expect_data.message)
    })
    test('Создание пользователя c ошибкой, пароль не подходит', async () => {
        const response = await create_user('test2', '1string')
        const data = await response.json()
        const expect_data = {
            "code": "1300",
            "message": "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
        }
        expect(response.status).toBe(400)
        expect(data.code).toBe(expect_data.code)
        expect(data.message).toBe(expect_data.message)
    })
    test('Создание пользователя успешно', async () => {
        let random_number = await getRandomInt(1000)
        let random_name = `test${random_number}`
        const response = await create_user(random_name, '1String$22!')
        const data = await response.json()
        const expect_data = {
            "username": random_name
        }
        expect(response.status).toBe(201)
        expect(data.username).toBe(expect_data.username)
    })
    test('Генерация токена c ошибкой', async () => {
        const response = await generate_token_user('string', 'string')
        const data = await response.json()
        const expect_data = {
            "token": null,
            "expires": null,
            "status": "Failed",
            "result": "User authorization failed."
        }
        expect(response.status).toBe(200)
        expect(data).toEqual(expect_data)
    })
    test('Генерация токена успешно', async () => {
        const response = await generate_token_user('test5', '1String$22!')
        const data = await response.json()
        const expect_data = {
            "status": "Success",
            "result": "User authorized successfully."
        }
        expect(response.status).toBe(200)
        expect(data.status).toEqual(expect_data.status)
        expect(data.result).toEqual(expect_data.result)
    })
})
