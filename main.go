package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func index(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("./public/index.html")
	t.Execute(w, nil)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", index)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./public/")))
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8000", r))
}
