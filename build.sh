echo "Building acquire-frontend...\n"
go install
echo "Launching acquire-frontend in background...\n"
acquire-frontend&
trap "pkill acquire-frontend" SIGQUIT SIGTERM EXIT
echo "Building JS bundle in watch mode...\n"
./node_modules/.bin/webpack -d --watch

