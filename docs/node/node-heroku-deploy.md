---
title: Node.js 환경에서 Heroku 헤로쿠 배포하기
meta:
  - name: description
    content: Node.js 환경에서 Heroku 헤로쿠 배포하기
  - property: og:title
    content: Node JS 환경에서 Heroku 헤로쿠 배포하기
  - property: og:url
    content: https://thisyujeong.github.io/TIL/node/node-heroku-deploy.html
tags: ['Node', 'Deploy']
---

# [NodeJS] Heroku 헤로쿠 배포 및 명령어(커맨드)

## Heroku 설치

[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) 에서 환경에 따라 설치한다. 설치가 완료되면 버전 확인을 통해 설치 여부 확인

```
heroku -v
```

## Heroku 로그인

```
heroku login
```

## Heroku 프로젝트 생성

프로젝트 생성 후 로컬과 heroku 저장소가 정상적으로 연결되었는지 확인한다.

```
heroku create 프로젝트이름
git remote -v
```

## 환경변수 확인

```
heroku config
```

## 환경변수 설정

```
heroku config: set NODE_ENV=production
```

## 로그 추적

```
heroku logs --tail --app [앱이름]
```

## 수정 및 배포

```
git add .
git commit -m "first commit"
git push heroku master
```

[참고](https://velog.io/@recordboy/Express-React-%EC%97%B0%EB%8F%99-%EB%B0%8F-Heroku%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0#%EB%B9%8C%EB%93%9C-%EB%B9%9B-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)
