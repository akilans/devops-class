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
