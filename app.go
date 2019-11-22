package main

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gomarkdown/markdown"
	"github.com/gin-contrib/static"
	"github.com/gomarkdown/markdown/parser"
)

type Post struct {
	Content template.HTML
	Title string
}

func main() {


	r := gin.Default()
	r.Use(gin.Logger())
	r.Delims("{{", "}}")
	
	r.LoadHTMLGlob("./templates/*.html")

	r.Use(static.Serve("/", static.LocalFile("./public", true)))

	r.GET("/", func(ctx *gin.Context) {
        ctx.HTML(
            http.StatusOK,
            "index.html",
            gin.H{
                "title": "evenstensberg",
                "url":   "/",
            },
        )
	})
	
	r.GET("/posts/:postName", func(ctx *gin.Context) {
		postName := ctx.Param("postName")

		mdfile, err := ioutil.ReadFile("./posts/" + postName + ".md")

		if err != nil {
			fmt.Println(err)
			ctx.HTML(http.StatusNotFound, "err.html", nil)
			ctx.Abort()
			return
		}

		extensions := parser.CommonExtensions | parser.AutoHeadingIDs
		parser := parser.NewWithExtensions(extensions)

		output := markdown.ToHTML([]byte(mdfile), parser, nil)
		postHtml := template.HTML(output)
		post := Post{Title: postName, Content: postHtml}

		ctx.HTML(http.StatusOK, "post.html", gin.H{
			"Title": post.Title,
			"Content": post.Content,
		})
	})

	r.Run(":8090")
}
