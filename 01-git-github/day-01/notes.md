### Day-01
* git config --global user.name Akilan - It displays name in commit history
* git config --global user.email akil.dove@gmail.com - It displays email in commit history
* git config --global --list - list the global configuration
* git init - initialize empty local git repository
* git add . - Moving all the untracked, modified, deleted files to staging
* git commit -m "commit message" - Add commits to local repository
* git remote -v - displays remote repository details if any
* git remote add origin https://github.com/akilans/devops-class.git - adds remote repository url
* git pull origin master - pulls latest changes from remote repository
* git push -u origin master - push the changes to remote repository [master branch]
* git branch -a - displays all the branches
* git branch $B_NAME - creates new branch in local repository from master
* git branch featute-1 feature-other - creates new branch in local repository from another branch
* git checkout $B_NAME - switching to branch
* git branch -d $B_NAME - delete branch in local repository
* git push origin -d $B_NAME - delete branch in remote repositorys