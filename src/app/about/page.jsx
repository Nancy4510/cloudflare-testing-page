import Image from "next/image";

export default function AboutPage() {
    return (
        <main>
            <div className="hero flex flex-col border border-solid border-red-500">
                <h1 className="text-center font-bold text-4xl">About</h1>
                <br></br>
                <div className="justify-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vel libero atque est? Saepe iste, maxime nihil eos tenetur expedita veritatis voluptates eveniet quos distinctio. Aperiam eaque repudiandae minus sequi.</div>
            </div>

            <br></br>

            <div className="flex">
            <h2 className="text-center font-bold text-2xl">Meet the team</h2>

                <br></br>
                
                <div className="border border-solid border-red-500">
                    <Image 
                    className="h-90 object-contain"
                    src="/imgs/jane-smith.jpg"
                    alt="A profile picture of Jane Smith"
                    width={300}
                    height={300}
                    />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum totam suscipit repellat a autem minus voluptatem quaerat incidunt aut. In minima accusantium reiciendis porro laborum delectus. Fugit, vitae repellat.</p>
                </div>

                <br></br>

                <Image 
                className=""
                src="/imgs/diego-hernandez.jpg"
                alt="A profile picture of Diego Hernandez"
                width={300}
                height={300}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem inventore et obcaecati, veniam ipsam optio doloremque quis commodi doloribus saepe architecto odio est illum, dolorem, eaque necessitatibus accusantium iusto.</p>
                <br></br>
                <Image 
                className=""
                src="/imgs/puggster-jones.jpg"
                alt="A profile picture of a dog who is a pug and the mascot."
                width={300}
                height={300}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet sunt nihil explicabo impedit consequatur ducimus qui, deleniti rerum dolor, ratione veniam harum excepturi doloremque non! Laborum tempore labore blanditiis?</p>
            </div>
        <br></br>
            <div className="contact-section text-center ">
                <h1 className="font-bold text-4xl">Contact Us</h1>
                <address>
                    <p>email: corp@emailus.com</p>
                    <p>telephone:212-234-0987</p>
                </address>
            </div>
        </main>
    )
}