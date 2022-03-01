---
title: Homebrew와 nvm 설치하기
meta:
  - name: description
    content: Homebrew와 nvm 설치하기
  - property: og:title
    content: Homebrew와 nvm 설치하기
  - property: og:url
    content: https://thisyujeong.github.io/TIL/node/homebrew-nvm-install.html
tags: ['Node.js', 'Express']
---

# Homebrew와 nvm 설치하기

> NVM (Node Version Manage)

Node 버전을 쉽게 관리할 수 있는 도구

필자는 macOS 환경에서 사용하기 때문에 macOS에 특화된 brew 를 사용하여 nvm을 설치하기로 했다.

> brew는 패키지 관리자

[Homebrew 바로가기](https://brew.sh/index_ko)

## Homebreww 설치하기

홈페이지에 접속하면 친절하게 설치 스크립트를 제공한다. 그대로 복사해서 터미널에 입력한다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

위 스크립트를 작성하면 암호를 입력하라는 메시지가 나온다. 맥 암호 입력하고 기다리면

> Press RETURN to continue or any other key to abort

위 메시지가 나온다. 엔터 입력 시 다음 단걔로, 다른 키를 누르면 설치가 취소된다.

엔터를 입력하고 설치 완료한다.

### 설치 확인 (버전확인)

아래 명령어로 버전이 확인되면 성공적으로 설치가 완료된 것이다.

```bash
brew -v
```

### Homebrew 명령어 확인하기

아래 명령어 입력시 brew의 명령어 리스트를 확인할 수 있으니 참고하자.

```bash
brew commands
```

- `brew update` : brew를 최신버전으로 업데이트한다.
- `brew list` : 설치된 패키지 목록 확인
- `brew info <패키지명>` : 해당 패키지의 정보 확인
- `brew upgrade <패키지명>` : ‘패키지’ 업그레이드 (brew 업데이트가 아니다.)
- `brew upgrade` : 설치된 모든 ‘패키지’ 업그레이드 (brew 업데이트가 아니다.)

다른 명령어는 커맨드 명령어로 확인 가능

### Homebrew 삭제 / 제거

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

## Homebrew로 nvm 설치

### nvm 설치하기

```bash
$ brew install nvm
```

### 환경변수 설정하기

nvm 디렉토리 생성호 vi 편집기를 ~/.bash_profile 파일 실행한다.

```bash
$ mkdir ~/.nvm
$ vi ~/.bash_profile
```

아래 스크립트를 통해 nvm 환경변수를 설정하고 esc + :wq 명령어로 vi 편집 모드를 저장 후 종료한다.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
```

마지막으로 터미널 profile에 적용하면 nvm 설치는 끝이다.

```bash
$ source ~/.bash_profile
```

### 설치 확인 및 버전확인

아래 명령어로 버전이 확인되면 성공적으로 설치가 완료된 것이다.

```bash
$ nvm -v
```
