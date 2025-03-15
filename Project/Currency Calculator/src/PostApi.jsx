import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/42bc4ebdef517c47bf31fb64",
});

//we need to create a get request

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
