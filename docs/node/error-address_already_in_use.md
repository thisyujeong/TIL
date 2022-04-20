---
title: Address already in use 에러 해결
meta:
  - name: description
    content: Address already in use 에러 해결
  - property: og:title
    content: Address already in use 에러 해결
  - property: og:url
    content: https://thisyujeong.github.io/TIL/node/error-address_already_in_use.html
tags: ['Node.js']
---

# Address already in use 에러 해결

```
Error: listen EADDRINUSE: address already in use :::5000
```

이 에러는 현재 작업중인 프로젝트 파일이 다른 프로젝트 파일에서 이미 사용중인 특정 포트를 사용하려 할 때 나타나는 에러이다. 즉, address already in use :::5000 이라면 5000번 포트가 현재 다른 프로세스에서 사용중이기 때문에 해당 포트로 프로젝트를 시작할 수 없다는 의미이다.

## 해결방법

5000번 서버를 사용하는 프로세스를 찾아 완전히 종료시킨다.

### 1. 5000번 포트를 사용중인 프로세스 찾기

아래 명령어를 입력하면 프로세스의 PID 값을 확인할 수 있다.

```
sudo lsof -i :5000
```

### 2. 프로세스의 PID 값을 강제종료

`-9`는 kill의 강제 종료 시그널인 9 번을 사용한다는 의미

```
sudo kill -9 (PID)
```

이제 정상적으로 5000번 포트를 사용할 수 있다.

## 내용 추가 22.04.20

작업중 해당 에러가 발생해 이번에도 역시 위와 같은 방법으로 해결을 시도했다.  
`sudo lsof -i:port` 명령어를 입력해도 사용중인 서버가 없다(목록이 뜨지 않음). 구글링 결과 이 [페이지](https://developer.apple.com/forums/thread/682332)를 발견했는데, 해당 에러는 MacOS Monterey 버전에서 발생하는 문제라고 한다. 해결 방법은 간단했다.

Mac 환경설정 → 공유 → **AirPlay** 수신모드를 체크해제한다.

node 를 실행해봤다. 에러가 말끔히 없어진 것을 확인했다.
