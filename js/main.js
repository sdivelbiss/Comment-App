function todoList() {
	var username = document.getElementById("userInput").value
	var comment = document.getElementById("comment").value



	var usernameText = document.createTextNode("Name: " + username)
	var commentText = document.createTextNode(comment)
	var addDate = document.createTextNode(Date())


	var newItem = document.createElement("li")
	newItem.className = "listGroup animated bounceInDown"
	var newUserName = document.createElement("h3")
	var newDate = document.createElement("p")
	newDate.className = "date"
	var newComment = document.createElement("p")

	newUserName.appendChild(usernameText)
	newComment.appendChild(commentText)
	newDate.appendChild(addDate)

	newItem.appendChild(newUserName)
	newItem.appendChild(newComment)
	newItem.appendChild(newDate)
	document.getElementById("commentList").appendChild(newItem)
	document.getElementById("myForm").reset();	


}

