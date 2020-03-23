window.addEventListener('DOMContentLoaded', (event)=>
{
	let images= ["https://thehappypuppysite.com/wp-content/uploads/2018/01/Toy-Poodle-HP-long.jpg",
	"https://24.media.tumblr.com/9cb6d97b5cba3db12cf69966a3813a73/tumblr_mv3cmyuuzJ1r7srkjo1_500.jpg",
	"https://images.pexels.com/photos/601102/pexels-photo-601102.jpeg?cs=srgb&dl=caniche-grey-poodle-poodle-toy-poodle-601102.jpg&fm=jpg",
	"https://i.ytimg.com/vi/GjH2xDW9K18/maxresdefault.jpg",
    "https://t1.ea.ltmcdn.com/en/images/9/3/2/types_of_poodle_sizes_and_mixes_3239_600.jpg",
    "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/fotolia_27676237-768x512.jpg"]
	i=0
	document.getElementById('slide').src=images[i];
    document.getElementById('previous').addEventListener('click', (clk)=>
    {
        if(i-1<0)
        {
			i=images.length-1
			document.getElementById('slide').src=images[i];
		}
        else
        {
			i=i-1
			document.getElementById('slide').src=images[i];
		}
	});
    document.getElementById('next').addEventListener('click', (clk)=>
    {
        if(i+1<images.length)
        {
			i=i+1
			document.getElementById('slide').src=images[i];
		}
        else
        {
			i=0
			document.getElementById('slide').src=images[i];
		}
	});
});








/*let i = 0;
var images = [
    {
        src: "C:\Users\Megan\Downloads\90283527_995469870848620_272992502200401920_n.jpg",
        width: "400",
        height: "400"
    },{
        src:"C:\Users\Megan\Downloads\90878689_204119927512490_1022909326978711552_n.jpg" ,
        width: "400",
        height: "400"
    },{
        src:"C:\Users\Megan\Desktop\IMG_8846.jpg",
        width: "400",
        height:"400"
    }
];
//console.image("C:\Users\Megan\Downloads\90283527_995469870848620_272992502200401920_n.jpg");
/*images[0]='C:\Users\Megan\Downloads\90283527_995469870848620_272992502200401920_n.jpg'
images[1]= 'C:\Users\Megan\Downloads\90878689_204119927512490_1022909326978711552_n.jpg'
images[2]= 'C:\Users\Megan\Desktop\IMG_8846.jpg'
images[3]= 'C:\Users\Megan\Downloads\90720036_163301941403298_8135034393564545024_n.jpg'
images[4]= 'C:\Users\Megan\Downloads\90779266_139242014182727_4076424946069274624_n.jpg'
images[5]= 'C:\Users\Megan\Downloads\90751578_2894417530620467_3308862840860835840_n.jpg'
document.slide.src = images[i];
function next()
{
alert("clicked next");
if(i<images.legnth)
{
    i++;
}
else
{
    i=0;
}
}
function previous()
{
alert("clicked");
}*/