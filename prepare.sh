read -p "Running this script will remove all git references to ReadyGo and will make this a 'clean' project. Proceed? " answer
case ${answer:0:1} in
    y|Y )
        echo 'Okay. Running commands...'
        echo 'Installing node modules...'
        npm install
        echo 'Removing git references...'
        sudo rm -rf .git
        echo 'Final cleanup: removing last files...'
        rm readme.md
        rm prepare.sh
        echo 'Done.'
    ;;
    * )
        echo 'Alright. Not doing anything...'
    ;;
esac