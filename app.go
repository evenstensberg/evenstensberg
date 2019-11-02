package main

import (
	"net/http"
	"log"
	"fmt"
	"flag"
)

func hello_route(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "hello\n")
}

func main() {
	http.HandleFunc("/hello", hello_route)
	
	const DEFAULT_PORT int = 8090
	PORT := flag.Int("port", DEFAULT_PORT, "port running the application")
	flag.Parse()
	PORT_STR := fmt.Sprintf(":%d", *PORT)
	INIT_MSG := fmt.Sprintf("listening on port: %d 🥰", *PORT)
	log.Println(INIT_MSG)
	http.ListenAndServe(PORT_STR, nil)
}