package main

import (
	"net/http"
	"log"
	"fmt"
	"flag"
	"io/ioutil"
	"time"
	"bytes"
	"github.com/gomarkdown/markdown"
)


func postHandler(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Path[1:]
	if query == "posts/" {
		http.Redirect(w, r, "/", 301)
	}
	data, err := ioutil.ReadFile(query+".md")
	if err != nil {
		fmt.Println(err)
	}

	md_b := []byte(data)
	html := markdown.ToHTML(md_b, nil, nil)

	http.ServeContent(w, r, query, time.Time{}, bytes.NewReader(html))
}

func main() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)
	http.HandleFunc("/posts/", postHandler)

	const DEFAULT_PORT int = 8090
	PORT := flag.Int("port", DEFAULT_PORT, "port running the application")
	flag.Parse()
	PORT_STR := fmt.Sprintf(":%d", *PORT)
	INIT_MSG := fmt.Sprintf("listening on port: %d 🥰", *PORT)
	log.Println(INIT_MSG)
	http.ListenAndServe(PORT_STR, nil)
}