# node-module-template

This is a template for creating a node module.

## Issues

### React dependency 이슈

example 프로젝트 실행시 react 의존성이 겹쳐 에러가 발생한다면

```bash
Below are the steps I followed :
1. In Your Application:
a) cd node_modules/react && npm link
b) cd node_modules/react-dom && npm link

2. In Your Library
a) npm link react
b) npm link react-dom

3)Stop your dev-server and do `npm start` again.
```

출처: https://stackoverflow.com/questions/56021112/react-hooks-in-react-library-giving-invalid-hook-call-error
