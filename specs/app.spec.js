// eslint-disable-next-line no-unused-vars
import {get_score} from "../src/app.js";

/**
 * тестовые данные
 */
const one_object_score = {
  Anna: 10,
  Olga: 1,
  Ivan: 5
}

const two_object_score = {
  Anna: 20,
  Olga: 10,
  Ivan: 50
}

const three_object_score = {
}

describe(`Тест функции get_score`, function () {
  test(`Функция импортирована без ошибок`, function () {
    expect(get_score).toBeTruthy()
  })
  test(`Это функция`, function () {
    expect(typeof get_score).toBe("function")
  })
  test(`Выдаёт ошибку если объект пустой`, function () {
    expect(get_score(three_object_score)).toThrow
  })
  test(`Функция принимает значение one_object_score, результат ответа 16`, function () {
    expect(get_score(one_object_score)).toBe(16)
  })
  test(`Функция принимает значение two_object_score, результат ответа 80`, function () {
    expect(get_score(two_object_score)).toBe(80)
  })
})
