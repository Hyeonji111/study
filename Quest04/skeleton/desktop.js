// 요구사항
// - 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정 -
// 1. 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
// 2. 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
// 3. 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
// 4. Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!
// 5. 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
// 6. 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.

class Desktop {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */

	mouse() {
	  let container = document.querySelector(".desktop");
	  let activeItem = null;
  
	  let active = false;
  
	  container.addEventListener("touchstart", dragStart, false);
	  container.addEventListener("touchend", dragEnd, false);
	  container.addEventListener("touchmove", drag, false);
	  container.addEventListener("mousedown", dragStart, false);
	  container.addEventListener("mouseup", dragEnd, false);
	  container.addEventListener("mousemove", drag, false);
  
	  function dragStart(e) {
  
		if (e.target !== e.currentTarget) {
		  active = true;
  
		  // this is the item we are interacting with
		  activeItem = e.target;
  
		  if (activeItem !== null) {
			if (!activeItem.xOffset) {
			  activeItem.xOffset = 0;
			}
  
			if (!activeItem.yOffset) {
			  activeItem.yOffset = 0;
			}
  
			if (e.type === "touchstart") {
			  activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
  
			  activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
			} else {
			  console.log("doing something!");
			  activeItem.initialX = e.clientX - activeItem.xOffset;
			  activeItem.initialY = e.clientY - activeItem.yOffset;
			}
		  }
		}
	  }
  
	  function dragEnd(e) {
		if (activeItem !== null) {
		  activeItem.initialX = activeItem.currentX;
		  activeItem.initialY = activeItem.currentY;
		}
  
		active = false;
		activeItem = null;
	  }
  
	  function drag(e) {
		if (active) {
		  if (e.type === "touchmove") {
			e.preventDefault();
  
			activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
			activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
		  } else {
			activeItem.currentX = e.clientX - activeItem.initialX;
			activeItem.currentY = e.clientY - activeItem.initialY;
		  }
  
		  activeItem.xOffset = activeItem.currentX;
		  activeItem.yOffset = activeItem.currentY;
  
		  setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
		}
	  }
  
	  function setTranslate(xPos, yPos, el) {
		el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
	  }
	}

	dbl(){
		// let div = document.querySelector("div");
		// let openNew = window.open("", "", "width=400, height=200");
		// div.addEventListener("dblclick", openNew);
		
		$(div).dblclick(function(){
				window.open("","");
			
		});
	}

  }//class desktop



let i_num = Number(prompt("아이콘 받을 갯수"));
class Icon {
	constructor (num1,name1){ // DTO
		this.num1 = num1;
		this.name1 = name1;
	};
	ii() {
		let desktop = document.getElementsByClassName("desktop")[0];
		for (let i = 0; i < this.num1; i++) {
			let div = document.createElement("div");
			let br = document.createElement("br");
		  	div.setAttribute("class", "item1");
		  	div.innerHTML = this.name1 + (i + 1);
		  	//<div>innerHTML</div>
		  	desktop.appendChild(div);
		  	desktop.appendChild(br);
		};//for
		// let openNew = window.open("", "", "width=200, height=100");
		// document.getElementsByTagName("div").addEventListener("dblclick", openNew);
	};//ii()
	
};



let f_num = Number(prompt("폴더 받을 갯수"));
class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num2,name2){
		this.num2 = num2;
		this.name2 = name2;
	};
	// Getter
	// get fff(){
	// 	return this.ff // 폴더 생성  
	// 	return this.f // 더블클릭시 폴더 열기
	// }
	// Method
	ff(){
		let desktop2 = document.getElementsByClassName("desktop")[0];
		for(let i=0; i<this.num2; i++){
			let div = document.createElement("div");
			let br = document.createElement("br");
			div.setAttribute("class", "item2")
			div.innerHTML = this.name2 + (i+1);
			desktop2.appendchild(div);
			desktop2.appendchild(br);
		};
	};

};//Folder

class Window extends Desktop {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};



