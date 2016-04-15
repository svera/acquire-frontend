package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func room(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", 405)
		return
	}

	vars := mux.Vars(r)
	_ = vars["id"]

	t, _ := template.ParseFiles("./public/game.html")
	t.Execute(w, nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("./public/index.html")
	t.Execute(w, nil)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", index)
	r.HandleFunc("/{id:[a-zA-Z]+}", room)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./public/")))
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8000", r))
}
