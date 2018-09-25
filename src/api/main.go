package main
 import (
	"flag"
	"log"
	"net/http"
)
 func main() {
	flag.Parse()
 	fs := http.FileServer(http.Dir("photos"))
	http.Handle("/", fs)
	log.Fatal(http.ListenAndServe(":5000", nil))
} 