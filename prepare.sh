read -p "Running this script will remove all git references to ReadyGo and will make this a 'clean' project. Proceed? " answer
case ${answer:0:1} in
    y|Y )
        echo -e 'Okay. Running commands...\n'
        echo -e '\n-------\nInstalling node modules...'
        npm install
        echo -e '\n-------\nRemoving git references...'
        rm -rf .git
        echo -e '\n-------\nFinal cleanup: removing last files...'
        rm readme.md
        rm prepare.sh
        echo -e '\n-------\nDone.'
    ;;
    * )
        echo 'Alright. Not doing anything...'
    ;;
esac