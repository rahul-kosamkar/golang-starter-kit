package main

import "fmt"

func Calculate(num int) (result int) {
	result = num + 2
	return result
}

func main() {
	fmt.Println("Go Testing Tutorial")
	result := Calculate(2)
	fmt.Println(result)
}
