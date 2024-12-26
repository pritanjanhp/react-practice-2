console.log("temp");

// git init
// git remote add origin link
// git config user.name pritanjan
// git config user.email email

// ! push
// git add .
// git commit -m 'first commit'
// git push origin new_branch

// ! pull
// git pull origin new_branch

// ! clonec
// git clone (url which we want to clone)

// ? Branches

// ! create new branch
// git checkout -b 'new_branch'
// git branch 'new_branch'

// ! check your current branch
// git branch
// here * represent your current working branch

// ! Push, Pull To Your Branch
// git push origin 'branch_name'
// git pull origin 'branch_name'

// ! merge current branch to master
// git merge

// ! switch branch
// git checkout new_branch

// ! Delete branch
// git branch -d 'branch_name'

// ! Delete branch forcefully without making commits
// git branch -D Testing

// ! use code after adding the file name in .gitignore file
// git rm -r --cached
// git add .
// git commit -m 'msg'

// ! generating SSH key using git commands
// ? Step 1
// ssh-keygen
// click enter

// will show the below:
// The key fingerprint is:SHA256:h2k163F3wffxp/POhb1q+43Qve0S2nR4TQxrvspQ5/M pritanjan baranwal@DESKTOP-F4NJBBJ

// The key's randomart image is:
// +--[ED25519 256]--+
// |                 |
// |              o  |
// |          o    B.|
// |         + o  o O|
// |        S + oooo*|
// |       . o + ==*=|
// |          o .+B=+|
// |           o.o+B*|
// |            ++=BE|
// +----[SHA256]-----+

// ? Step 2
// cat ~/.ssh/id_ed25519.pub

// will show the below
// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBKvKm7nMWuNOXChgNskOnRXfInl6rg23TIQoHdBoXuo pritanjan baranwal@DESKTOP-F4NJBBJ

// ? Step 3
// add this key to the github
// github > setting > SSH & GPG Keys > New SSH Key

// ----------------------------------------------
// 1. ls -la ~/.ssh
// 2. eval "$(ssh-agent -s)"
// 3. ssh-add ~/.ssh/id_ed25519
// 4. cat ~/.ssh/id_ed25519.pub

// it will show the below
// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBKvKm7nMWuNOXChgNskOnRXfInl6rg23TIQoHdBoXuo pritanjan baranwal@DES

// Test
// ssh -T git@github.com
// you have successfully added the task but github doesn't provide teh shell access.
