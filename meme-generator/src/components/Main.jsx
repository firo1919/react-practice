import { useEffect } from "react";
import { useState } from "react";

function Main() {
	const [memeInfo, setMemeInfo] = useState({
		topText: "Shut Up",
		bottomText: "and take it",
		image: "http://i.imgflip.com/1bij.jpg",
	});

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://corsproxy.io/?url=https://api.imgflip.com/get_memes/")
            .then((response) => response.json())
            .then((data) => {
                setAllMemes(data.data.memes)
                console.log(data.data.memes)
            })
    }, [])
    
	function handleSetMemeInfo(event) {
		const id = event.currentTarget.name;
		const text = event.currentTarget.value;
		if (id == "top") {
			setMemeInfo((prev) => ({
				...prev,
				topText: text,
			}));
		} else {
			setMemeInfo((prev) => ({
				...prev,
				bottomText: text,
			}));
		}
	}

    function handleSetMemeImage(){
        let idx = Math.floor(Math.random() * (100))
        const newImage = allMemes[idx].url
        console.log(newImage)
        setMemeInfo((prev) => ({
            ...prev,
            image:newImage
        }))
    }

	return (
		<div className=" w-3xl mx-auto py-10 grid grid-cols-2 gap-8">
			<div className="flex flex-col gap-2">
				<label htmlFor="top">Top Text</label>
				<input onChange={handleSetMemeInfo} className="border border-gray-500 p-2 rounded-md " placeholder={memeInfo.topText} type="text" id="top" name="top" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="bottom">Bottom Text</label>
				<input onChange={handleSetMemeInfo} className="border border-gray-500 p-2 rounded-md " placeholder={memeInfo.bottomText} type="text" id="bottom" name="bottom" />
			</div>
			<button onClick={handleSetMemeImage} className="col-span-2 bg-linear-to-r from-[#672280] to-[#A626D3] h-10 rounded-md font-bold text-lg text-white">Get a new meme image 🖼️</button>
			<div className="max-h-100 col-span-2 relative">
				<img className="h-full w-full object-cover" src={memeInfo.image} />
				<span className="absolute top-0 w-full text-center font-anton text-5xl uppercase pt-10 text-white">{memeInfo.topText}</span>
				<span className="absolute bottom-0 w-full text-center font-anton text-5xl uppercase pb-10 text-white">{memeInfo.bottomText}</span>
			</div>
		</div>
	);
}
export default Main;
