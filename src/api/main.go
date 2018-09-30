package main
 import (
	"flag"
	"log"
	"net/http"
)
 func main() {
	println("Api is running")
	flag.Parse()
 	fs := http.FileServer(http.Dir("src/api/photos"))
	http.Handle("/", fs)
	log.Fatal(http.ListenAndServe(":5000", nil))
} 