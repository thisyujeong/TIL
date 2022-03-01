---
title: nvm 으로 Node 버전 변경하기
meta:
  - name: description
    content: nvm 으로 Node 버전 변경하기
  - property: og:title
    content: nvm 으로 Node 버전 변경하기
  - property: og:url
    content: https://thisyujeong.github.io/TIL/node/node-nvm-version.html
tags: ['Node.js', 'Express']
---

# nvm 으로 Node 버전 변경하기

aws 배포 시도 중 Node.js 17.x버전에서 충돌이 있어 버전을 다운그레이드 해야하는 상황이 있었다.

**n** 으로 s노드 버전을 변경하여 사용하려고 했으나, 이처럼

```bash
$sudo n
	installed: 16.13.2  ~..
		 active: 17.x ~
```

acitve 버전과 installed 버전이 통일되지 않았고 다시 설치해도 바뀌지 않았다. 구글링 결과 symbolic link를 변경해주어야 한다는 글을 확인 했다([참고](https://gahee0416.tistory.com/22)). 이 방법으로도 변경되지 않았다.

결국 nvm으로 버전 변경을 시도했더니 정상적으로 변경되었다.

nvm 설치법에 대해서는 [여기서](https://thisyujeong.github.io/TIL/node/homebrew-nvm-install.html) 확인

## Node.js 설치하기

이제 nvm 을 통해 NodeJS를 설치할 수 있다. 여러 버전을 설치해 원하는 버전을 사용할 수도 있다.

```bash
$ nvm install 14.17.3
```

원하는 버전을 선택해서 설치할 수 있다. 상세 버전을 생력하고 14.x 의 최신 버전 설치도 가능하다.

```bash
$ nvm install 14
```

### 버전 목록 확인

```bash
# 또는 nvm list
$ nvm ls
```

설치한 목록을 확인할 수 있다.

### 버전 변경

```bash
$ nvm use 14.17.3
```

### 기타 명렁어

```bash
node -v             # 사용중인 Noe 버전 확인
nvm list available  # 사용 가능한 버전 목록
nvm install 16.13.2 # 특정 버전 설치
nvm list            # 설치된 버전 확이
nvm use 16.13.2     # 버전 변경 및 사용
```
