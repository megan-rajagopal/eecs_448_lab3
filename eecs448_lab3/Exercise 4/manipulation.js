window.addEventListener('DOMContentLoaded', (event)=>{

	document.getElementById('validate').addEventListener('click', (clk)=>{
		red_border=document.getElementById('red_value').value
		green_border=document.getElementById('green_value').value
		blue_border=document.getElementById('blue_value').value
		width_border=document.getElementById('width').value+"px"
		red_background=document.getElementById('red_val').value
		green_background=document.getElementById('green_val').value
		blue_background=document.getElementById('blue_val').value
		rgb_background="rgb("+red_background+","+green_background+","+blue_background+")"
		rgb_border="rgb("+red_border+","+green_border+","+blue_border+")"
		console.log(rgb_background)
		console.log(rgb_border)
		if((red_border>=0 && red_border<=255) && (green_border>=0 && green_border<=255) 
		&& (blue_border>=0 && blue_border<=255) && (red_background>=0 && red_background<=255) 
		&& (green_background>=0 && green_background<=255) && (blue_background>=0 && blue_background<=255)){
			document.getElementById('styleme').style.backgroundColor=rgb_background
			document.getElementById('styleme').style.borderStyle="solid"
			document.getElementById('styleme').style.borderWidth=width_border
			document.getElementById('styleme').style.borderColor=rgb_border
		}
		else{
			window.alert("Pick color values in the range 0-255")
		}
	
		

	});

});