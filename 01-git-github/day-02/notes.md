### Day-02

#### Common Scenarios

* Scenraio 1 - Synch with master branch
    * git branch test - creates new branch from master
    * Added new features in test branch
    * some hot fixes went to master branch
    * git checkout test
    * git merge master

* Scenario 2 - Auto merge and conflict
    * In remote repository some commit made. How auto merge happens?. How to solve conflicts
    * If the changes are in the same file then conflict using git pull command
    * Else auto merge happens using git pull

* Scenario 3 - Undo , Rollback
    * git log - It shows all the commit history
    * git commit --amend -m "NEW COMMIT MSG" - overwrite commit message
    * git reset --soft $HASH - removes the last commit but keep the changes in staging
    * git reset $HASH - removes the commit and staging. Keeps the file in working directory
    * git reset --hard $HASH - removes the commit,staging and working direcoty. Keeps the untracked file