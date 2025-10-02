# ПН-ППК

Ссылка на приложение: https://zayitseviliya.github.io/pn-ppk/

Данное приложение создано для визуальзации двух методов.

# 1. Метод Validator

Метод производит валидацию последовательности открытых и закрытых скобок. Каждая открытая скобка должна соответстовать закрытой скобке. Допустимые значения: [], {}, (). В случае валидности результатом метода будет True, в противном False.

# 2. Метод Finder

Метод находит отсутсвующее число в несортированом массиве. Поддерживается запись как в форме массива: [1,2,3,5], так и через запятую: 1,2,3,5. В случае, если присутствуют все числа в последовательности будет возвращен null. Если же в массиве нехватает больше одного числа - возвращено будет только первое.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
