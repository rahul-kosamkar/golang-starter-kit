package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	Name string `json:"name"`
}

func main() {
	fmt.Println("Go Lang MySQL")

	db, err := sql.Open("mysql", "root:shooter@13895@tcp(127.0.0.1:3306)/testdb")

	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	results, err := db.Query("select name from users")

	if err != nil {
		panic(err.Error())
	}

	for results.Next() {
		var user User

		err = results.Scan(&user.Name)
		if err != nil {
			panic(err.Error())
		}

		fmt.Println(user.Name)
	}

	insert, err := db.Query("insert into users values('Rahul')")

	if err != nil {
		panic(err.Error())
	}

	defer insert.Close()
}
