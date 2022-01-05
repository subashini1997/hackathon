var board = document.createElement("div");
board.style.width = "1000";
board.style.display = "flex";
board.style.flexDirection = "row";
board.style.flexWrap = "wrap";

async function fetchdata() {

    try {
        var response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")

        var dataObj = await response.json();
        console.log(dataObj);

        dataObj.forEach(element => {

            var box = document.createElement("div");
            box.style.width = "500px";
            box.style.height = "600px";
            box.style.display = "flex";
            box.style.flexDirection = "column";
            box.style.border = "8px solid darkred";
            box.style.marginRight = "20px";
            box.style.marginBottom = "20px";
            box.style.marginLeft = "20px";
            box.style.backgroundColor = "mediumspringgreen"

            var bran = document.createElement("div");
            bran.innerText = `BRAND:  ${element.brand}`;
            box.appendChild(bran);

            var nam = document.createElement("div");
            nam.innerText = `NAME :${element.name}`;
            box.appendChild(nam);

            var car = document.createElement("div");
            car.innerText = `PRICE: ${element.price}`;
            box.appendChild(car);

            var img = document.createElement("img")
            img.setAttribute("src", element.image_link)          
            img.style.width = "300px";
            img.style.height = "150px";
            box.appendChild(img);

            var link = document.createElement("div");
            link.innerText = `PRODUCT LINK: ${element.product_link}`;
            box.appendChild(link);

            var des = document.createElement("div");
            des.innerText = `DESCRIPTION:${element.description}`;
            box.appendChild(des);
            board.appendChild(box)

        });
            document.body.appendChild(board)

    }


    catch (error) {
        console.log(error)
    }

}
fetchdata()





