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

- `-global` is global option
- 3 git area
    - Project working tree
    - Buffer area between github and working tree
    - Commit and save staging area
- Don't track empty directories
- No management required file add in `.gitignore`
- `HEAD` is the newest commit in branch
- `origin`is basic remote storage
- git basic `branch` is `master`


### Git Preferences

- `git config —global-list` : Show now option information
- `git config —global user.name <username>` : Register user name
- `git config —global user.email <useremail>` : Register email address
- `git config —global color.ui “auto”` : Express terminal message color


### Basic Command

- `git —version` : Check git version
- `git init` : Create git storage
- `git add “filename”` : Raise Untracked file on staging area
- `git commit -m “commit message”` : Commit staging area(`-v` show difference)
- `git commit -C HEAD -a —amend` : Modify now commit
- `git status` : Check changes
- `git diff` : Compare staging area and working tree
- `git show <commit ID>` : Grasp specific ID revisions
- `git blame <file name>` : Grasp line revisions
- `git mv “filename” “newfilename”` : Move all file to new file with change history
- `git checkout —“filename”` : Cancle file revisions and revert file status
- `git rm -r —cashed <filename>` : Don't commit push file to git and remove


### Branch and Tag

- `git branch` : Check now branch(`-r` check remote branch)
- `git branch <branchname>` : Create new branch name
- `git branch -d <branchname>` : Remove branch
- `git checkout <branchname>` : Change working tree that branch
- `git checkout -b <new branchname>` : Create new branch and change now working tree :
- `git rebase <branchname>` : Apply branch changes
- `git merge <branchname>` : Merge branchs


### Git Log

- `git log` : Check commit log
- `git log <commit name>` : Check commit name's log
- `git revert <commit name>` : Remove previous commit and create nw commit(Don't remove git log)


### Remote Store

- `git clone <url>` : Copy remote storage
- `git fetch` : Update remote storage changes :
- `git pull` : Merge remote storage to now branch
- `git push origin <branchname>` : Pushing origin remote storage
- `git remote add <name> <clone url>` : Add new remote storage
- `git remote -v` : Check add remote storage address
