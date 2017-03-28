# ReadyGo

This is a simple group of files to be used for starting other projects.

## Instructions

1. Clone the repo. Try `git clone https://github.com/rewdy/readygo.git yourFolderNameHere`.
2. Run the prepare.sh file from the command line. Try `./prepare.sh` from the folder. This will...
    * Run `npm install` to pull in the node modules that are used for the setup
    * Remove the .git folder to unlink the files from this repo
    * Remove the prepare.sh file and this readme file so that you'll have a clean setup
3. Update package.json and Gruntfile.js with your project's info (if you want).
4. You're done. Have fun.

## Power User tip
You can add this bit to your .bash_profile script to make a `readygo` command to use in Terminal.

```
readygo() {
	git clone https://github.com/rewdy/readygo.git $1
	if [ -z ${1+x} ]
	then
		cd readygo
		./prepare.sh
	else
		cd $1
		./prepare.sh
	fi
}
```

After you have added the above function you can use the following syntax to start: `readygo project_folder`

Doing so will clone the readygo project into your project directory, cd into your newly created project, and run the setup scripts.

After adding the above, don't forget to run `source ~/.bash_profile` or create a new terminal session for the function to be found.

## Questions/comments

[Tweet me...](http://twitter.com/rewdy)
