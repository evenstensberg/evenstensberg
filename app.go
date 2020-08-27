package main

import (
	"fmt"
	"encoding/json"
	"html/template"
	"io/ioutil"
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gomarkdown/markdown"
	"github.com/gin-contrib/static"
	"github.com/gomarkdown/markdown/parser"
	"log"
	"context"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

type Post struct {
	Content template.HTML
	Title string
}

type User struct {
	Name string
	Avg_heartbeat int
	duration int
}

type UserJSON struct {
	Username string `json:"username"`
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

	r.GET("/retrieve-user", func(c *gin.Context) {
		// Use a service account
		ctx := context.Background()
		config := &firebase.Config{
			DatabaseURL: "https://evenstensberg.firebaseio.com",
		  }
		sa := option.WithCredentialsFile("./keys.json")
		app, err := firebase.NewApp(ctx, config, sa)
		if err != nil {
		log.Fatalln(err)
		}

		client, err := app.Database(ctx)
		if err != nil {
		log.Fatal(err)
		}

		exercise := User{
		Name:    "kayaking",
		Avg_heartbeat: 120,
		duration: 360,
		}
		if err := client.NewRef("exercises").Set(ctx, exercise); err != nil {
		log.Fatal(err)
		}
        c.JSON(http.StatusOK, exercise)
	})

	r.POST("/set-user", func(c *gin.Context) {
		var example UserJSON
		buf := make([]byte, 1024)
		num, _ := c.Request.Body.Read(buf)
		err := json.Unmarshal(buf, &example)
	  
		if err != nil {
			log.Fatalln(err)
		}
		c.JSON(http.StatusOK, num)
/* 		var userStruct UserJSON
		
		// Use a service account
		ctx := context.Background()
		config := &firebase.Config{
			DatabaseURL: "https://evenstensberg.firebaseio.com",
		  }
		sa := option.WithCredentialsFile("./keys.json")
		app, err := firebase.NewApp(ctx, config, sa)
		if err != nil {
		log.Fatalln(err)
		}

		client, err := app.Database(ctx)
		if err != nil {
		log.Fatal(err)
		}

		if err := client.NewRef("users").Set(ctx, userStruct); err != nil {
		log.Fatal(err)
		}
        c.JSON(http.StatusOK, userStruct) */
	})


	
	r.GET("/open-source", func(ctx *gin.Context) {
        ctx.HTML(
            http.StatusOK,
            "index.html",
            gin.H{
                "title": "evenstensberg",
                "url":   "/open-source",
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

	r.Run()
}
