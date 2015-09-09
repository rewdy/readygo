read -p "Running this script will remove all git references to ReadyGo and will make this a 'clean' project. Proceed? " answer
case ${answer:0:1} in
    y|Y )
        echo 'Okay. Running commands. You may have to enter your administrator password in order to remove the .git folder.'
        rm -rf .git
        npm install
    ;;
    * )
        echo 'Alright. Not doing anything...'
    ;;
esac