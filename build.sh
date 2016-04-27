echo "Building tbg-frontend...\n"
go install
echo "Launching tbg-frontend in background...\n"
tbg-frontend&
trap "pkill tbg-frontend" SIGQUIT SIGTERM EXIT
echo "Building JS bundle in watch mode...\n"
./node_modules/.bin/webpack -d --watch

