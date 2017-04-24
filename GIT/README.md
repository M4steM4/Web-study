# **GIT**
Git command


## Table of Contents

1. [Git Basic Convention](#Git-Basic-Convention)
1. [Git Preferences](#Git-Preferences)
1. [Basic Command](#Basic-Command)
1. [Branch and Tag](#Branch-and-Tag)
1. [Git Log](#Git-Log)
1. [Remote Store](#Remote-Store)


### Git Basic Convention

- `-global`은 전역설정 옵션
- git3가지 영역
    - 프로젝트 작업트리
    - 저장소와 작업사이 버퍼영역
    - 커밋, 저장되는 스테이징 영역
- 빈 디렉토리 추적 X
- 형상관리 불필요파일은 `.gitignore`에 추가
- `HEAD`는 현 브랜치의 가장 최신커밋
- `origin`는 기본 원격 저장소
- git 기본 `branch`는 `master`


### Git Preferences

- 현재 설정정보 조회 : `git config —global-list`
- 사용자명 등록 : `git config —global user.name <username>`
- 이메일 주소 등록 : `git config —global user.email <useremail>`
- Terminal 메세지 색표시 : `git config —global color.ui “auto”`


### Basic Command

- git 버전 확인 : `git —version`
- git 저장소를 생성 : `git init`
- Untracked file 스테이징 영역올림 : `git add “filename”`
- 스테이징영역 파이를 커밋(-v하면 변경사항 보여줌) : `git commit -m “commit message”`
- 기존 커밋 수정 : `git commit -C HEAD -a —amend`
- 변경 사항 조회 : `git status`
- 스테이징 영역과 작업트리 비교 : `git diff`
- 특정 ID 수정 내역 파악 : `git show <commit ID>`
- 수정 라인 파악 : `git blame <file name>`
- 변경 이력 그대로 기존파일을 새파일에 옮김 : `git mv “filename” “newfilename”`
- 커밋안한파일의 변경내용 취소후 이전 상태로 돌림 : `git checkout —“filename”`
- push된 파일을 깃으로 커밋하지 않으며, 삭제 : `git rm -r —cashed <filename>`


### Branch and Tag

- 현재 브랜치 조회(`-r`로 원격저장소 브랜치 확인) : `git branch`
- 새로운 브랜치명 생성 : `git branch <branchname> <branchname>`
- 새로운 브랜치 생성 : `git branch <branchname>`
- 브랜치 삭제 : `git branch -d <branchname>`
- 해당 브랜치로 작업트리 변경 : `git checkout <branchname>`
- 브랜치 생성후 트리 변경 : `git checkout -b <new branchname>`
- 브랜치 변경사항 적용 : `git rebase <branchname>`
- 브랜치 결합 : `git merge <branchname>`


### Git Log

- 커밋 로그 확인 : `git log`
- 해당 커밋명 로그 확인 : `git log <commit name>`
- 이전 커밋 변경내용 취소후 새 커밋 생성 : `git revert <commit name>`


### Git Basic Convention

- 원격 저장소 복제 : `git clone <url>`
- 원격 저장소의 변경사항 갱신 : `git fetch`
- `git fetch` 원격저장소의 변경사항을 지역 브랜치와 병합 : `git pull`
- origin 저장소 pushing : `git push origin <branchname>`
- 새로운 원격 저장소 추가 : `git remote add <name> <clone url>`
- 추가한 원격 저장소 목록 확인 : `git remote -v`
