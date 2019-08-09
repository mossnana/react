* การทำ web app ตัวอย่าง จากการใช้ Go, Gin และ React
    - แปลไทยมาจากเว็บไซต์ freeCodeCamp.org

# เครื่องมือที่ใช้
1. Golang
2. Gin เป็น micro framework ที่ประกอบไปด้วยฟังก์ชั่นที่จำเป็นในการพัฒนา web app
    - ความดีงานของ gin
        - ไม่มีการ Crash ทำให้หน้าแอปยังคงอยู่แม้จะ error
        - ความไว
        - มีการจัดการ routing
        - ทำงานร่วมกับ JSON ได้
        - เก็บ error ไว้ใน log ให้
        - เข้าใจใน JSON, XML และ HTML
3. React

# เราจะใช้ Gin ใน 3 หน้าที่หลัก
1. เป็น Middleware
2. เป็นตัวจัดการเส้นทาน (Routing)
3. จัดกลุ่มเส้นทาง (Routing Group)

# Pre Install
    - ลงก่อน
    ```bash
    go get -u github.com/gin-gonic/gin
    go get -u github.com/gin-gonic/contrib/static
    ```

- เริ่มต้นด้วไฟล์ main.go
```go
package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default() // เรียกใช้ gin โดยตั้งค่า router ตามที่เข้าตั้งมาให้ (Default)

	router.Use(static.Serve("/"), static.LocalFile("./views", true)) // ตั้งเส้นทาง / ให้ไปที่ไฟล์ใน folder views

	// รวม method ใน endpoint -> api
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context){
			c.JSON(http.StatusOK, gin.H {
				"message": "OK"
			})
		})
	}

	router.Run(":3000")
}
```

- จากนั้นไปที่ views/index.html เพื่อไปสร้าง html ให้ main.js ทำการ render
- ลองเข้า http://localhost:3000


- สร้าง API
    index.js
    ```go
    // Please wait for update
    ```

