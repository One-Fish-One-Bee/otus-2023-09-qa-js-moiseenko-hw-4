/**
 * Подсчёт суммы баллов
 * @param {key: string, values: number} scores 
 * @example { Anna: 10, Olga: 1, Ivan: 5 } // 16
 * @example { Anna: 20, Olga: 10, Ivan: 50 } // 80
 * @example {} // 80
 * @returns {number}
 */

export const get_score = (scores) => {
  if (typeof scores !== "object"){
    throw new Error("Параметр должен быть объектом");
  }
  if (typeof scores['key'] !== "undefined"){
    throw new Error("В объекте нет пропущенных ключей");
  }
  return Object.values(scores).reduce((a, b) => a + b, 0)
}